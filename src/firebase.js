// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB1jSWqsBfuvXtxMYHAoXIXjIm84dw1VK8',
  authDomain: 'tesla-clone-cffa9.firebaseapp.com',
  projectId: 'tesla-clone-cffa9',
  storageBucket: 'tesla-clone-cffa9.appspot.com',
  messagingSenderId: '395163001607',
  appId: '1:395163001607:web:187c37f35c23e99a9cdba2',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export default auth
