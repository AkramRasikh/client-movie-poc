import db from "./firebase-service";
import { collection, getDocs } from "firebase/firestore";

export const getMovies = async () => {
  const result = await getDocs(collection(db, "movies"));
  return result.docs.map((one) => one.data().title);
};
