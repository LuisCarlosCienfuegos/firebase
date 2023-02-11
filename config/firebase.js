// tiene la configuracion general de firebase
import { initializeApp } from "firebase/app";
// import { getDatabase, ref, set } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCdF8w7juMbW8IzoYnSD9gt3SKPd9laXVA",
  authDomain: "sdp-expo-rn.firebaseapp.com",
  projectId: "sdp-expo-rn",
  storageBucket: "sdp-expo-rn.appspot.com",
  messagingSenderId: "647088028380",
  appId: "1:647088028380:web:03bf5d776dc5871acd9219",
  measurementId: "G-597P9HPRVE",
  databaseURL: "https://sdp-expo-rn-default-rtdb.firebaseio.com/",
};
//databaseURL  apunta a la base de datos
// inicia la app con la configuracion de firebase
const app = initializeApp(firebaseConfig);

export { app };
