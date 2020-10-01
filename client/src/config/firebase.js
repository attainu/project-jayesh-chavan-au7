import firebase from 'firebase/app'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyCKGgwgivx87c9PSe_l6HpL0h76FoFfo9M",
    authDomain: "blood-line-845fb.firebaseapp.com",
    databaseURL: "https://blood-line-845fb.firebaseio.com",
    projectId: "blood-line-845fb",
    storageBucket: "blood-line-845fb.appspot.com",
    messagingSenderId: "58663438540",
    appId: "1:58663438540:web:340bb9f4e381cf8fc05a69",
    measurementId: "G-6GYG4XXNHF"
}

firebase.initializeApp(config)
export default firebase