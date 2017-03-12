$(document).ready(function(){

// Initialize Firebase
var config = {
apiKey: "AIzaSyD0vDOfHVYjhbzrqlUozZRySnNPKulXiXU",
authDomain: "train-scheduler-db.firebaseapp.com",
databaseURL: "https://train-scheduler-db.firebaseio.com",
storageBucket: "train-scheduler-db.appspot.com",
messagingSenderId: "31849461683"
};
firebase.initializeApp(config);

moment().format();


}); //end documet werapper