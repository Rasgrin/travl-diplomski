// FIREBASE - FIRESTORE - AUTHENTICATION - STORAGE
import { getDownloadURL } from "firebase/storage";
import { db, firestore, store } from "./config";

// FIRESTORE MANIPULATION FUNCTIONS
export const findDocument = async (collection: string, arg: any, field: string, fieldV: string) => {
  try {
    const q: any = firestore.query(firestore.collection(db, collection), firestore.where(field, arg, fieldV));
    return await firestore.getDocs(q);
  } catch (err) {}
};

export const addDocument = async (collection: string, data: object) => {
  try {
    await firestore.setDoc(firestore.doc(db, collection), data);
  } catch (err) {
    throw err;
  }
};

export const updateDocument = async (collection: string, id: string, data: object) => {
  try {
    const washingtonRef = firestore.doc(db, collection, id);
    await firestore.updateDoc(washingtonRef, data);
  } catch (err) {
    throw err;
  }
};

export const deleteDocument = async (collection: string, id: string) => {
  try {
    await firestore.deleteDoc(firestore.doc(db, collection, id));
  } catch (err) {
    // Errors
  }
};

export const downloadImg = async (path: string) => {
  try {
    const storage = store.getStorage();
    return await getDownloadURL(store.ref(storage, path));
  } catch (err) {
    // Errors
  }
};
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
