import firebase from 'firebase';

const config ={
    apiKey: "AIzaSyA1ZNGtumlbRhtpBIxOkvUs1CbeFT2CHDo",
    authDomain: "myappcrm-94e43.firebaseapp.com",
    databaseURL: "https://myappcrm-94e43.firebaseio.com",
    projectId: "myappcrm-94e43",
    storageBucket: "myappcrm-94e43.appspot.com",
    messagingSenderId: "886829600255"
  };
const fire = firebase.initializeApp(config);
export default fire;
  