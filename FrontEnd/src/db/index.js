import firebase from "firebase/app";
import "@firebase/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyCYbWgOjzo_Q_O-fj4-KoPgJTJWcpfzrcM",
  authDomain: "easyfood-4d7ac.firebaseapp.com",
  projectId: "easyfood-4d7ac",
  storageBucket: "easyfood-4d7ac.appspot.com",
  messagingSenderId: "487510259360",
  appId: "1:487510259360:web:ee8f7673d95435b7eb7bc5",
  measurementId: "G-C66DEFP3R4",
});

export function getFirebase() {
  return app;
}

export function getFirestore() {
  return firebase.firestore(app);
}
