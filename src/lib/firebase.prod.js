import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyD5XMNOTC5yw7a8_tilee8vuHXU37enquk",
  authDomain: "netflix-6eaed.firebaseapp.com",
  projectId: "netflix-6eaed",
  storageBucket: "netflix-6eaed.appspot.com",
  messagingSenderId: "973720970819",
  appId: "1:973720970819:web:71b196402f6ecd0fd356f6",
};

const firebase = Firebase.initializeApp(config);
// seedDatabase(firebase);

export { firebase };
