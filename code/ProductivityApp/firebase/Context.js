import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "./FirebaseConfig";

export const getUserData = async (userId) => {
  try {
    const collectionRef = collection(db, "Users");
    const docRef = doc(collectionRef, userId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      return null;
    }
  } catch (error) {
    throw new Error(error.message);
  }
};
