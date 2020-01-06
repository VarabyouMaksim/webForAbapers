function myFunction() {
    var txt;
    var person = prompt("Please enter your name:", " ");
    if (person == null || person == "") {
      txt = "Empty input";
    } else {
        if(hasNumber(person)){
            txt = reverseString(person) ;
        }else{
            txt = InSaNe(person);
        }
    }
    document.getElementById("output").innerHTML = txt;
  }

  function reverseString(str) {
    var splitString = str.split(""); 
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    return joinArray; 
  }

  function InSaNe(str){
    try{
    var lostr = str.toLowerCase();
    var upstr = str.toUpperCase();
    var newstr = "";
     for(i = 0; i < str.length; i++){
     if(i % 2 == 0){
            newstr += upstr[i];
        }
        else{
            newstr += lostr[i];
        }
     }
    return newstr;
  }catch(err){
    return err.message;
  }
  }

  function hasNumber(myString) {
    return /\d/.test(myString);
  }