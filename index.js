var rls= require("readline-sync");
var uname=rls.question("Whats your name? ");
console.log("Welcome "+uname+ " to DO YOU KNOW JESSWIN?");
var score=0;
// function play
function play(q,a){
  var userAns=rls.question(q);
  if(userAns==a){
    console.log("right!");
    score++;
 
  }
  else{
    console.log("wrong!");
    score--;

  }

  console.log("Your Score is "+score);
  console.log("-------------------")
}
// making lists of questions

q1={
  question:"What is Jesswin's Age? ",
  answer:19
}
q2={
  question:"What is Jesswin's fav food? ",
  answer:"Dal Rice"
}
q3={
  question:"What is Jesswin's favourite Game? ",
  answer:"GTA V"
}
var questions=[q1,q2,q3];
for(var i=0;i<questions.length;i++){
  play(questions[i].question,questions[i].answer)
}
