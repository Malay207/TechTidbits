
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDitU-DCw524zRoXqIadHN1-_2TA2hI5vw",
  authDomain: "my-blog-27a13.firebaseapp.com",
  projectId: "my-blog-27a13",
  storageBucket: "my-blog-27a13.appspot.com",
  messagingSenderId: "910887034369",
  appId: "1:910887034369:web:5b57c6442c223e8b382a00"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
const storage = getStorage(app);
export { fireDB, auth, storage };