import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA_eia9y93s23QSHoieB2H-z1jyOgln4w0",
    authDomain: "devtweets.firebaseapp.com",
    projectId: "devtweets",
    storageBucket: "devtweets.appspot.com",
    messagingSenderId: "767110985823",
    appId: "1:767110985823:web:e31e5efcc636c7f140c3ea"
};

firebase.initializeApp(firebaseConfig)

const mapUserFromFirebaseAuthToUser = (user) => {
    const { email, photoURL, displayName, uid } = user
    return {
        avatar: photoURL,
        username: displayName,
        email,
        uid
    }
}

export const onAuthStateChanged = (onChange) => {
    return firebase.auth().onAuthStateChanged(user => {
        const normalizedUser = user ?
            mapUserFromFirebaseAuthToUser(user) : null
        onChange(normalizedUser)
    })
}

export const loginWithGihub = () => {
    const gitHubProvider = new firebase.auth.GithubAuthProvider();
    return firebase
        .auth()
        .signInWithPopup(gitHubProvider)
}