import firebase from "firebase/app";
import "firebase/firebase-firestore";
import "firebase/firebase-auth";

const firebaseConfig = {
  apiKey: "AIzaSyCQFdLsapg3U1aMgMaEgwSe7GS24Nwq5Jo",
  authDomain: "crwn-db-7861f.firebaseapp.com",
  databaseURL: "https://crwn-db-7861f.firebaseio.com",
  projectId: "crwn-db-7861f",
  storageBucket: "crwn-db-7861f.appspot.com",
  messagingSenderId: "682315656785",
  appId: "1:682315656785:web:055f2c7486b4b3d3629270",
  measurementId: "G-18QE3VFM6B",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
