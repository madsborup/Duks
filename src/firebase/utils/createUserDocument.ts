import { firestore } from "../../firebase";

export const createUserDocument = async (user: firebase.User) => {
    const userRef = firestore.collection("users").doc(`${user.uid}`);
    const snapshot = await userRef.get();

    if (!snapshot.exists) {
        const { displayName, email, photoURL, uid } = user;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                photoURL,
                createdAt,
                uid
            });
        } catch (e) {
            console.log("Error creating user", e.message);
        }
    }
}
