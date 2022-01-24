import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";


const firebaseInisitilize = () => {
    return initializeApp(firebaseConfig)
}

export default firebaseInisitilize;