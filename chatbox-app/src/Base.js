import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCej10EuUu-H9PgT10OZfRIMysvWRJEFAQ",
    authDomain: "chatbox-app-d9b66.firebaseapp.com",
    databaseURL: "https://chatbox-app-d9b66.firebaseio.com",
    projectId: "chatbox-app-d9b66",
    storageBucket: "chatbox-app-d9b66.appspot.com",
    messagingSenderId: "187960321270",
    appId: "1:187960321270:web:ff0831d45cee77ebb9f8d7"   
})

const base = Rebase.createClass(firebase.database())

export { firebaseApp }
export default base

