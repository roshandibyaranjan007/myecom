// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCv0y-aiEEWv_Z2Mtz5340PvanGZpn-vnc",
  authDomain: "myfirstecom-f67ab.firebaseapp.com",
  projectId: "myfirstecom-f67ab",
  storageBucket: "myfirstecom-f67ab.appspot.com",
  messagingSenderId: "1006496333638",
  appId: "1:1006496333638:web:708824f83cd4cc9db1af47"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
export {fireDB,auth } ;