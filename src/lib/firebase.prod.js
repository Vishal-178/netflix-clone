import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyACN7MK7IQv84zL7ugnZ1oO5kgTpwcZjaA",
  authDomain: "netflixclone-32b7e.firebaseapp.com",
  projectId: "netflixclone-32b7e",
  storageBucket: "netflixclone-32b7e.appspot.com",
  messagingSenderId: "430342290926",
  appId: "1:430342290926:web:c7ace42eb28bd9d95a22ff",
};

const firebase = Firebase.initializeApp(config);
// seedDatabase(firebase);

export { firebase };
