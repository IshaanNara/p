p1=localStorage.getItem("player1");
p2=localStorage.getItem("player2");
p1_score=0;
p2_score=0;
document.getElementById("p1_name").innerHTML=p1+": ";
document.getElementById("p2_name").innerHTML=p2+": ";
document.getElementById("p1_score").innerHTML=p1_score;
document.getElementById("p2_score").innerHTML=p2_score;
document.getElementById("question_turn").innerHTML="question turn :"+p1;
document.getElementById("answer_turn").innerHTML="answer turn :"+p2;
function send(){
n1=document.getElementById("n1").value;
n2=document.getElementById("n2").value;
word=parseInt(n1)*parseInt(n2);


    
question_word = "<h4>" + n1 + " X "+ n2 +"</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_word + input_box + check_button ;
    document.getElementById("output").innerHTML = row;
    document.getElementById("n1").value = "";
    document.getElementById("n2").value = "";
}
question="p1";
answer="p2";
function check(){
 ans=document.getElementById("input_check_box").value ;
 
 if(ans==word){
     if(answer=='p1'){
         p1_score=p1_score+1;
         document.getElementById("p1_score").innerHTML=p1_score;

     } else{
        p2_score=p2_score+1;
        document.getElementById("p2_score").innerHTML=p2_score;
     }
 }
 if(question=="p1"){
     question="p2";
     document.getElementById("question_turn").innerHTML="question turn :"+p2;
 } else{
    question="p1";
    document.getElementById("question_turn").innerHTML="question turn :"+p1;
 }
 if(answer=="p1"){
    answer="p2";
    document.getElementById("answer_turn").innerHTML="answer turn :"+p2;
} else{
   answer="p1";
   document.getElementById("answer_turn").innerHTML="answer turn :"+p1;
}
document.getElementById("output").innerHTML ="";
}