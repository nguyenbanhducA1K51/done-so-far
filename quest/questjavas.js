const quiz =[
    { question: ' Best kamenrider ever ' ,
     a:'fourze',
     b:'gaim',
     c:'kiva',
     d:'decade',
     correct:'d'
 },
 { question: ' Best tennis player ever ' ,
     a:'sampras',
     b:'djokovic',
     c:'nadal',
     d:'federer',
     correct:'b'
 },
 { question: ' Best footballer ever ' ,
     a:'messi',
     b:'ronaldo',
     c:'torres',
     d:'maldini',
     correct:'a'
 },
 
 
 ];
 const quizhead=document.getElementsByClassName('quizhead'); 
 const question =document.getElementById('question');
 const a_text =document.getElementById('a_text' );
 const b_text =document.getElementById('b_text');
 const c_text =document.getElementById('c_text');
 const d_text =document.getElementById('d_text');
 const submitbutton=document.getElementById('submit')
 var currentquestion=0;
 
 var scoretag= document.getElementById('score');
 var score=0;
 loadquiz();
 
 submitbutton.addEventListener("click",()=>
 {
     const answer= getselected() 
     
     if (answer )
    {
        
     if (currentquestion<quiz.length&&answer===quiz[currentquestion].correct){
         score++
     scoretag.innerHTML=score
     currentquestion ++;
     
     }
       
     if(currentquestion<quiz.length)
     { 
 
         console.log(currentquestion)
         //currentquestion ++;
         
         loadquiz();
         const radio= document.querySelectorAll(".answer");
 
        radio.forEach((radiobutton)=>{ 
          radiobutton.checked=false
          
        })
     }
     else{
         document.getElementById('final').style.visibility= 'visible'
         document.getElementById('final').innerHTML= `you have finish ${score}/${quiz.length}`
         /* document.getElementsByClassName('quizhead').innerHTML= `you have finish ${score}/${quiz.length}` */
     }
     
      
      } 
      
 }
    
     
    );
 function getselected()
 {
     
     let answer1=undefined;
     const answer_selected= document.querySelectorAll(".answer");
    
     answer_selected.forEach((answerE)=>{
         
         if (answerE.checked)
         {
             answer1= answerE.id;
             
         }
 
     });
     return answer1;
 }
 function loadquiz(){
     const currentquiz= quiz[currentquestion];
     question.innerText=currentquiz.question;
     a_text.innerText=currentquiz.a;
     b_text.innerText=currentquiz.b;
     c_text.innerText=currentquiz.c;
     d_text.innerText=currentquiz.d;
     
    
 }
 
 
 