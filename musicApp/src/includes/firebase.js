import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCnEFbdHNdxsbHEPP25u5Y7K3hhsGi7jOc',
  authDomain: 'music-4393f.firebaseapp.com',
  projectId: 'music-4393f',
  storageBucket: 'music-4393f.appspot.com',
  appId: '1:790700838573:web:9e263d0c3bd25807158024'
}

//Initialize Firebase
firebase.initializeApp(firebaseConfig)

const authentication = firebase.auth()
const db = firebase.firestore()

export { authentication, db }
