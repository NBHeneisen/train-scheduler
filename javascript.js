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

//empties table body
$("tbody").empty();

//
schedule.ref().on("child_added", function(childSnapshot){
	addTrain(childSnapshot.val());
});

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
	schedule.ref().push(newTrain);
    //empty form
    $('#trainForm')[0].reset();

    //console log newTrain object
    console.log(schedule);

}); //end onclick function

//function to add Train to schedule
function addTrain(train) {
    var first = moment(train.time, "HH:mm").subtract(1,"years");
    console.log(first);
    var current = moment();
    console.log(moment().format("HH:mm"));
    var difference = current.diff(first, "minutes");
    console.log("diff " + difference);
    var remainder = difference % JSON.parse(train.frequency);
    console.log(remainder);
    var minutesToNext = JSON.parse(train.frequency) - remainder;
    var nextArrival = current.add(minutesToNext, "minutes").format("HH:mm");
    $("tbody").append("<tr><td>" + 
        train.name + "</td><td>" +
        train.destination + "</td><td>" + 
        train.frequency + "</td><td>" + 
        nextArrival + "</td><td>" +
        minutesToNext + "</td></tr>"
    );
}; //End addTrain




}); //end document werapper