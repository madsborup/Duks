import { firestore } from "../../firebase";

export const createUserDocument = async (user: firebase.User) => {
    const userRef = firestore.doc(`users/${user.uid}`);
    const snapshot = await userRef.get();

    if (!snapshot.exists) {
        const { displayName, email, photoURL } = user;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                photoURL,
                createdAt
            });
        } catch (err) {
            console.log("Error creating user", err.message);
        }
    }
    
    return userRef;
}
