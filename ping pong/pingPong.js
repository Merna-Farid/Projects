    const p1btn=document.querySelector('#p1');
    const p2btn=document.querySelector('#p2');
    const resetbtn=document.querySelector("#reset");
    let winningScore=5;
    let p1display=document.querySelector('#p1display');
    let p2display=document.querySelector('#p2display');
    let p1score=0;
    let p2score=0;
    let gameOver=false;
    let selectScore=document.querySelector('#winningScore')

    p1btn.addEventListener("click",function(){
        if(!gameOver){
            p1score++;
            if(p1score===winningScore){
                gameOver=true;
                p1btn.classList.add("is-success");
                p2btn.classList.add("is-danger");
            }
           p1display.innerText=p1score;
    }})
    p2btn.addEventListener("click",function(){
        if(!gameOver){
            p2score++;
            if(p2score===winningScore){
                gameOver=true;
                p2btn.classList.add("is-success");
                p1btn.classList.add("is-danger");

            }
           p2display.innerText=p2score;
    }})
    function reset(){
        gameOver=false;
        p1score=0;
        p2score=0;
        p2btn.classList.remove('is-success','is-danger');
        p1btn.classList.remove('is-success','is-danger');
    }
resetbtn.addEventListener("click",function(){
    reset();
    p1display.innerText=p1score;
    p2display.innerText=p2score;
})

selectScore.addEventListener("change",function(){
   winningScore=parseInt(selectScore.value);
    reset(); 
    p1display.innerText=p1score;
    p2display.innerText=p2score;
}

)

