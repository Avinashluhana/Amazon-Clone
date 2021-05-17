import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp =  firebase.initializeApp({
    apiKey: "AIzaSyA9wY45x1X9D4PPnez21zzMkob5Tk4QYKY",
    authDomain: "clone-5e97a.firebaseapp.com",
    projectId: "clone-5e97a",
    storageBucket: "clone-5e97a.appspot.com",
    messagingSenderId: "748991229811",
    appId: "1:748991229811:web:da85f6ee2f8ab767895f06",
    measurementId: "G-LBXBWEKNJ1"
});


const auth = firebase.auth();
export { auth} ;