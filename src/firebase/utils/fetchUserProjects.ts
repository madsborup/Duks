import { firestore } from "../../firebase";

export const fetchUserProjects = async (uid: string) => {
    const collectionRef = firestore.collection("projects").where("members", "array-contains", uid)
    const snapshot = await collectionRef.get();
    try {
        snapshot.forEach((doc) => {
            console.log(doc.id, "=>", doc.data);
        })
        console.log("fetch succesful")
    } catch (err) {
        console.log("Error fetching document", err.message);
    }

    return snapshot;
};
