import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBy9MLCT0VfI9nNU5hilUowNgkjphQnxbQ",
    authDomain: "general-services-3ae2a.firebaseapp.com",
    projectId: "general-services-3ae2a",
    storageBucket: "general-services-3ae2a.appspot.com",
    messagingSenderId: "841805696966",
    appId: "1:841805696966:web:a603c6d29087ed9d61acc7"
  };

firebase.initializeApp(firebaseConfig)

export default firebase