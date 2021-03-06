import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyCTw-BJzfs-7geuOPmKvITdio_AFk5oAVo",
    authDomain: "murderhobo-21a0c.firebaseapp.com",
    projectId: "murderhobo-21a0c",
    storageBucket: "murderhobo-21a0c.appspot.com",
    messagingSenderId: "214568448267",
    appId: "1:214568448267:web:5f39166919ec2ece8a320e"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;