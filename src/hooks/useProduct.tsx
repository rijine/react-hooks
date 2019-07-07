import { useState, useEffect } from 'react';
import Firebase from '../config/firebase';

export const useProduct = (id: string) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    const unsubscribe = Firebase.firestore
      .collection('products')
      .doc(id)
      .onSnapshot(
        doc => {
          setLoading(false);
          setProduct(doc.data());
        },
        err => {
          setError(!!err);
        }
      );
    // returning the unsubscribe function will ensure that
    // we unsubscribe from document changes when our id
    // changes to a different value.
    return () => unsubscribe();
  }, [id]);

  return {
    error,
    loading,
    product
  };
};
