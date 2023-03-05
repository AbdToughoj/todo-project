const userInput = [];
let gender = null;
let userName = null;

getData();
printData();

function getData(){
    getName();
    getGender();
    getAge();
    viewWelcomeMessage();
    getCars();
    getSportCars();
    getMotorbike();
}

function getName(){
    let promptedUserName = prompt("Please enter your name ");
    userName = promptedUserName;
    userInput.push(promptedUserName);
    userInput['name'] = promptedUserName
}

function getGender(){
    let genderNew = prompt('please Enter your gender ');
    if(genderNew === 'male' || genderNew === 'female'){
        gender = genderNew;
        userInput.push(genderNew);
    }else{
        getGender();
    }
}

function getAge(){
    let age = prompt("Please enter your age")

    if(age <= 0 ){
        alert("the age you entered is wrong")
    }
    userInput.push(age);
}

function viewWelcomeMessage(){
    welcome = confirm("do you want to skip the welcoming message?");

    if (welcome == false && gender == "male"){
        alert("Welcome Mr " + userName ) 
    }else if(welcome == false && gender == "female")  {
        alert("Welcome Ms " + userName ) 
    }
}

function getCars(){
    let car_prompt = prompt("do love cars (Yes/No)");
    let cars = car_prompt ? car_prompt : "invalid";
    userInput.push(cars);
}

function getSportCars(){
    let sport_prompt = prompt("do love sport cars (Yes/No)");
    let sportCars = sport_prompt ? sport_prompt : "invalid";
    userInput.push(sportCars); 
}

function getMotorbike(){
    let motorbikes_prompt = prompt("do love motorbikes (Yes/No)");
    let motorbikes = motorbikes_prompt ? motorbikes_prompt : "invalid";
    userInput.push(motorbikes);
}

function printData(){
    for (const input of userInput) {
        console.log(input)
    }
}






















