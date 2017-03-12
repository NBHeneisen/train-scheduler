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

//create variable to use for the database
var schedule = firebase.database();

//add newTrain empty object to add to
var newTrain ={};

//adds form information to database and displays in table
//on button click of add train
$("form").on("click","#addTrain",function(){

    //prevents default submit & page refresh
    event.preventDefault();

    //adds values to newTrain object
    newTrain.name=$("#trainName").val().trim();
    newTrain.destination=$("#destination").val().trim();
    newTrain.time=$("#firstTime").val().trim();
    newTrain.frequency=$("#frequency").val().trim();
    newTrain.timestamp=firebase.database.ServerValue.TIMESTAMP
    //empty form
    $('#trainForm')[0].reset();

    //console log newTrain object
    console.log(newTrain);

}); //end addTrain onclick function





}); //end document werapper