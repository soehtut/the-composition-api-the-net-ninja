import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBbE4o9VQPMPgaNc3IvLfv6DCqrYx6tce8",
    authDomain: "vuejs-blog-from-the-net-ninjs.firebaseapp.com",
    databaseURL: "https://vuejs-blog-from-the-net-ninjs.firebaseio.com",
    projectId: "vuejs-blog-from-the-net-ninjs",
    storageBucket: "vuejs-blog-from-the-net-ninjs.appspot.com",
    messagingSenderId: "237313558991",
    appId: "1:237313558991:web:ae7e0b03cbf121222aeaba"
  };

  // init firebase
  firebase.initializeApp(firebaseConfig)

  // init firestore service
  const projectFirestore = firebase.firestore()

  export { projectFirestore }