import { addDoc, collection, deleteDoc, doc, getFirestore, setDoc } from "firebase/firestore";
import { app } from "./firebase";

export const firestore = getFirestore(app)

//get access to the collection for firestore
export const hotelCollection = collection(firestore, "hotels")