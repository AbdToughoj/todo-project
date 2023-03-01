let userName=prompt("Please your name ");
function getGender(){
    let genderNew = prompt('please Enter your gender ');
    if(genderNew === 'male'){
        return genderNew ;
    }else if(genderNew === 'female'){
        return genderNew ;
    } else{
        getGender();
    }
}

let gender = getGender();

age=prompt("Please enter your age")

if(age<=0 ){
    alert("the age you entered is wrong")
}

welcome=confirm("do you want to skip the welcoming message?")
if (welcome==false && gender=="male"){
    alert("Welcome Mr " + userName ) 
}else if(welcome==false && gender=="female")  {
    alert("Welcome Ms " + userName ) 

}



