import { app } from "@/initFirebaseApp"

import { ref } from "vue"
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const provider = new GoogleAuthProvider();

const auth = getAuth(app);

const uid = ref(null) 

onAuthStateChanged(auth, (user) => {
  if (user) {
    uid.value = user.uid;
    console.log(user)
  } else {
    uid.value = null;
  }
});

function loginPopup() {
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log('Log in')
    }).catch((error) => {
      console.log('Error')
    });
}

export {
  uid,
  auth,
  loginPopup
}
