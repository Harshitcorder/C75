import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyBh_KlBd_7bIeAF1rltBibHNJAg3sLwuAM",
  authDomain: "c71-7cc64.firebaseapp.com",
  projectId: "c71-7cc64",
  storageBucket: "c71-7cc64.appspot.com",
  messagingSenderId: "596981113726",
  appId: "1:596981113726:web:3a045f298cf982f2b2892f"
};
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
