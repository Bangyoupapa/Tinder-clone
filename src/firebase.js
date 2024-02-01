import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyCam-s9ausO0GiWZfysvYIIQeCwFRsfMik",
  authDomain: "tinder-clone-8c03a.firebaseapp.com",
  databaseURL: "https://tinder-clone-8c03a-default-rtdb.firebaseio.com",
  projectId: "tinder-clone-8c03a",
  storageBucket: "tinder-clone-8c03a.appspot.com",
  messagingSenderId: "38010480838",
  appId: "1:38010480838:web:1de65c1b5c87dedc600fc7",
  measurementId: "G-JVKQTBVSSE",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

// Get a list of people from your database
export async function getPeople() {
  const people = collection(db, "People");
  const pplSnapshot = await getDocs(people);
  const pplList = pplSnapshot.docs.map((doc) => doc.data());
  return pplList;
}
