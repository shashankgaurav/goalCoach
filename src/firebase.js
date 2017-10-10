import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyD7f_dlHhp0jLQk1Cut11ZFMNd-3Znz1ro",
    authDomain: "goalcoach-7373b.firebaseapp.com",
    databaseURL: "https://goalcoach-7373b.firebaseio.com",
    projectId: "goalcoach-7373b",
    storageBucket: "goalcoach-7373b.appspot.com",
    messagingSenderId: "388282932595"
  };
export const firebaseApp = firebase.initializeApp(config);
