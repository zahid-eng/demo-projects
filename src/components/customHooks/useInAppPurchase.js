import {useEffect, useState} from 'react';
import {Platform} from 'react-native';
import {requestPurchase, useIAP} from 'react-native-iap';
import {
  STORAGE_KEYS,
  storeBooleanData,
  getBooleanData,
} from '../functions/asyncStorage';
const {IS_FULL_APP_PURCHASED} = STORAGE_KEYS;
// Play store item Ids
const itemSKUs = Platform.select({
  android: ['full_app', 'test_4'],
  ios: ['full_app', 'test4'],
});

const useInAppPurchase = () => {
  const [isFullAppPurchased, setIsFullAppPurchased] = useState(false);
  const [connectionErrorMsg, setConnectionErrorMsg] = useState('');

  const {
    connected,
    products,
    getProducts,
    finishTransaction,
    currentPurchase,
    currentPurchaseError,
  } = useIAP();

  useEffect(() => {
    getBooleanData(IS_FULL_APP_PURCHASED).then(data => {
      console.log('isFullAppPurchased: ', data);
      setIsFullAppPurchased(data);
    });
  }, []);

  useEffect(() => {
    if (connected) {
      getProducts(itemSKUs);
      console.log('Getting products...');
    }
    console.log(products);
  }, [connected, getProducts]);

  useEffect(() => {
    const checkCurrentPurchase = async purchase => {
      if (purchase) {
        const receipt = purchase.transactionReceipt;
        console.log('RECEIPT: ', receipt);
        if (receipt) {
          // Give full app access
          setAndStoreFullAppPurchase(true);
          try {
            const ackResult = await finishTransaction(purchase);
            console.log('ackResult: ', ackResult);
          } catch (ackErr) {
            // We would need a backend to validate receipts for purhcases that pended for a while and were then declined. So I'll assume most purchase attempts go through successfully (OK ackResult) & take the hit for the ones that don't (user will still have full app access).
            console.log('ackError: ', ackErr);
          }
        }
      }
    };
    checkCurrentPurchase(currentPurchase);
  }, [currentPurchase, finishTransaction]);
  useEffect(() => {
    if (currentPurchaseError) {
      if (
        currentPurchaseError.code === 'E_ALREADY_OWNED' &&
        !isFullAppPurchased
      ) {
        setAndStoreFullAppPurchase(true);
      }
    }
  }, [currentPurchaseError]);

  const purchaseFullApp = async () => {
    // Reset error msg
    if (connectionErrorMsg !== '') setConnectionErrorMsg('');
    if (!connected) {
      setConnectionErrorMsg('Please check your internet connection');
    }
    // If we are connected & have products, purchase the item. Google will handle if user has no internet here.
    else if (products?.length > 0) {
      requestPurchase(itemSKUs[1]);
      console.log('Purchasing products...');
    }
    // If we are connected but have no products returned, try to get products and purchase.
    else {
      console.log('No products. Now trying to get some...');
      try {
        await getProducts(itemSKUs);
        requestPurchase(itemSKUs[1]);
        console.log('Got products, now purchasing...');
      } catch (error) {
        setConnectionErrorMsg('Please check your internet connection');
        console.log('Everything failed. Error: ', error);
      }
    }
  };

  useEffect(() => {
    getBooleanData(IS_FULL_APP_PURCHASED).then(data => {
      setIsFullAppPurchased(data);
    });
  }, []);
  const setAndStoreFullAppPurchase = boolean => {
    setIsFullAppPurchased(boolean);
    storeBooleanData(IS_FULL_APP_PURCHASED, boolean);
  };

  return {
    isFullAppPurchased,
    connectionErrorMsg,
  };
};
export default useInAppPurchase;
