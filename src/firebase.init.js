// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLVptYW7WVGZDF-ys3Uc7m4Xg71FKOt1s",
  authDomain: "sports-photographer.firebaseapp.com",
  projectId: "sports-photographer",
  storageBucket: "sports-photographer.appspot.com",
  messagingSenderId: "408843074993",
  appId: "1:408843074993:web:12ae54a14b2179bc8a5190"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;