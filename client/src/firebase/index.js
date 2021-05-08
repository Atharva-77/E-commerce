import firebase from "firebase/app";
import "firebase/storage"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD0g2zSaFS0WlHT3KgcOElyPbh88U4ey70",
    authDomain: "fir-react-learn.firebaseapp.com",
    projectId: "fir-react-learn",
    storageBucket: "fir-react-learn.appspot.com",
    messagingSenderId: "148779471883",
    appId: "1:148779471883:web:46c9edded165408f40230e",
    measurementId: "G-VE9G7T4LFC"
};

// initialize firebase configuration
firebase.initializeApp(firebaseConfig);

// initialize the storage
const storage = firebase.storage();

// exporting storage and frebase as default
export { storage, firebase as default };