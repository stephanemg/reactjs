import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD3VKbR8SRs7PJyAmDfIBo1Y6oIIk856K0",
  authDomain: "recettes-app-8014b.firebaseapp.com",
  databaseURL: "https://recettes-app-8014b.firebaseio.com"
})

const base = Rebase.createClass(firebaseApp.database())

// This is a named export
export { firebaseApp }

// this is a default export
export default base
