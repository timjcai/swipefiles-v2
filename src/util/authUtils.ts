import { signInWithPopup } from "firebase/auth";
import { auth, providerGoogle } from "../../firebase-config";
import { GoogleAuthProvider } from "firebase/auth/cordova";

export const GoogleAuthRegistration = () => {
    signInWithPopup(auth, providerGoogle)
    .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential =
            GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        console.log([token, user, credential]);
    })
    .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential =
            GoogleAuthProvider.credentialFromError(error);
        // ...
    });
}