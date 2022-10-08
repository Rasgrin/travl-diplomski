// FIREBASE - FIRESTORE - AUTHENTICATION - STORAGE
import { getDownloadURL } from "firebase/storage";
import { db, firestore, store } from "./config";

// FIRESTORE MANIPULATION FUNCTIONS
export const findDocumentById = async (collection: string, id: string) => {
  const docRef = firestore.doc(db, collection, id);
  return await firestore.getDoc(docRef);
};

export const findDocument = async (collection: string, arg: any, field: string, fieldV: string) => {
  try {
    const q: any = firestore.query(firestore.collection(db, collection), firestore.where(field, arg, fieldV));
    return await firestore.getDocs(q);
  } catch (err) {}
};

export const findDocumentCompound = async (collection: string, firstArg: any, firstField: string, firstFieldV: string, secondArg: any, secondField: any, secondFieldV: any) => {
  try {
    const q: any = firestore.query(firestore.collection(db, collection), firestore.where(firstField, firstArg, firstFieldV), firestore.where(secondField, secondArg, secondFieldV));
    return await firestore.getDocs(q);
  } catch (err) {}
};

export const findCollection = async (collection: string) => {
  return await firestore.getDocs(firestore.collection(db, collection));
};

export const addDocument = async (collection: string, data: object) => {
  try {
    await firestore.setDoc(firestore.doc(db, collection), data);
  } catch (err) {}
};

export const updateDocument = async (collection: string, id: string, data: object) => {
  try {
    const documentRef = firestore.doc(db, collection, id);
    await firestore.updateDoc(documentRef, data);
  } catch (err) {
    console.log(err);
  }
};

export const deleteDocument = async (collection: string, id: string) => {
  try {
    await firestore.deleteDoc(firestore.doc(db, collection, id));
  } catch (err) {}
};

export const downloadImg = async (path: string) => {
  try {
    const storage = store.getStorage();
    return await getDownloadURL(store.ref(storage, path));
  } catch (err) {}
};
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
