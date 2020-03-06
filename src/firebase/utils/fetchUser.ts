import { firestore } from "..";
import { UserData } from "../../actions";

export const fetchUser = async (email: string) => {
  let user = {};

  let snapshot = await firestore
    .collection("users")
    .where("email", "==", email)
    .get();

  if (!snapshot.empty) {
    for (let doc of snapshot.docs) {
      user = ({ ...doc.data(), ["uid"]: doc.id } as unknown) as UserData;
    }
  }

  return user as UserData;
};

export const fetchUserFromId = async (uid: string) => {
  let snapshot = await firestore
    .collection("users")
    .doc(uid)
    .get();

  return ({ ...snapshot.data(), ["uid"]: snapshot.id } as unknown) as UserData;
};
