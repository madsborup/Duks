import { firestore } from "../../firebase";
import generate from 'nanoid/generate'

const alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

export const addDocToCollection = async <T>(collectionKey: string, doc: T) => {
    const id = generate(alphabet, 10);
    const docRef = firestore.collection(collectionKey).doc(id);
    const createdAt = new Date();

    try {
        await docRef.set({
            ...doc,
            createdAt
        });
        console.log("set succesful")
    } catch (err) {
        console.log("Error creating document", err.message);
    }
};