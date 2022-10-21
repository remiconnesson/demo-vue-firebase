<script setup>
import { ref } from "vue"
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const provider = new GoogleAuthProvider();

const firebaseConfig = {
  apiKey: "AIzaSyBlg_1iHV3llX_Ky2qAPYZYVcCuxC9sOD4",
  authDomain: "web-2022-c850d.firebaseapp.com",
  projectId: "web-2022-c850d",
  storageBucket: "web-2022-c850d.appspot.com",
  messagingSenderId: "505208230679",
  appId: "1:505208230679:web:6894ed3628b6c3b28c9d52"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

function loginPopup() {
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log('Log in')
    }).catch((error) => {
      console.log('Error')
    });
}

const uid = ref(null) 
onAuthStateChanged(auth, (user) => {
  if (user) {
    uid.value = user.uid;
    console.log(user)
  } else {
    uid.value = null;
  }
});

</script>

<template>
  <h1>Hello App!</h1>
  <p>{{ uid }}</p>
  <button v-if="uid" @click="auth.signOut">Log Out</button>
  <button v-else @click="loginPopup">Log In</button>
  <ul>
    <li><router-link to="/">Everybody Can See</router-link></li>
    <li><router-link to="/locked">Only Logged In Can See</router-link></li>
  </ul>
  <router-view></router-view>
</template>
