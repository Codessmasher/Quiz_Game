var questionArray =
    [
        {
            Q: 'Q1) What is the full form of HTML?',
            a: "HYPERTEXT MARKUP LANGUAGE",
            b: "HYPERTEXT MAKEUP LANGUAGE",
            c: "HYPERTEXT MARK LANGUAGE",
            d: "HYPER MARKUP LANGUAGE",
            ans: "q1",
        },
        {
            Q: 'Q2) Which of the following is used to create Web Pages ?',
            a: "C++",
            b: "HYPERTEXT MAKEUP LANGUAGE",
            c: "C",
            d: "JAVA",
            ans: "q2",
        }


    ];

const ques = document.querySelector('.question');
const q1 = document.querySelector('.q1');
const q2 = document.querySelector('.q2');
const q3 = document.querySelector('.q3');
const q4 = document.querySelector('.q4');
const button = document.querySelector('#submit');
const ansSelection = document.querySelectorAll('.q');


let qcount = 0;
let score=0;


function loadq() {
    const qlist = questionArray[qcount];
    ques.innerHTML = qlist.Q;
    q1.innerHTML = qlist.a;
    q2.innerHTML = qlist.b;
    q3.innerHTML = qlist.c;
    q4.innerHTML = qlist.d;

}

loadq();

function getcheckedAns() {
    let ans;
    ansSelection.forEach((currentElem) => {
        
        if (currentElem.checked) {
         ans = currentElem.id;
        }
      
    }
     
    );
return ans; 
};

function deselectq(){
    ansSelection.forEach((currentElem) =>currentElem.checked=false);
}

function showCR(){
    document.querySelector('.showcorrect').innerHTML=("OOPs Answer is WRONG");
}

submit.addEventListener('click', () => {
    const checkedAns = getcheckedAns();
    if(checkedAns==questionArray[qcount].ans){
        document.querySelector('.showcorrect').style.visibility = 'visible';
       document.querySelector('.showcorrect').innerHTML=("You have Answered Correctly");
       setTimeout(()=>{       
        document.querySelector('.showcorrect').style.visibility = 'hidden';
      },3000);
       score++;  
    }
    else{
        
      document.querySelector('.showcorrect').style.visibility = 'visible';
      document.querySelector('.showcorrect').innerHTML=("OOPs Answer is WRONG");
      setTimeout(()=>{       
        document.querySelector('.showcorrect').style.visibility = 'hidden';
      },2000);
        
    };
    qcount++;
    deselectq();
    if(qcount<questionArray.length){
        loadq();
    }
    else{
        if(score>0){startConfetti();}
        
       document.querySelector('.showscore').innerHTML=("You have scored "+score+" Out of "+" "+questionArray.length);
       button.setAttribute('value','Play Again');
       button.style.background="black";
       button.style.color="white";
       button.addEventListener('click',()=>{
        location.reload();
       })
    }
});
