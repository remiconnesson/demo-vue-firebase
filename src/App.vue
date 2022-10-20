<script setup>
import { initializeApp } from "firebase/app";

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

</script>

<template>
  <h1>Hello, World!</h1>
</template>
