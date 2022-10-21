<script setup>
import { auth, uid, loginPopup } from "@/auth"
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
