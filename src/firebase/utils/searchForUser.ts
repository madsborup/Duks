import { firestore } from "..";

export const searchForUser = async (email: string) => {
  const usersRef = firestore.collection("users");
  const query = await usersRef.where("email", "==", email).get();

  return !query.empty;
};
