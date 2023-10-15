let rowLetter = document.querySelectorAll(".row-letter");
let row = document.querySelectorAll(".row");
let gameRows= document.querySelector(".game_rows");
let worde=[];
let getTrueWorde = false;
let rowNum=0

function guss(){
if(getTrueWorde===true){

window.addEventListener('keydown', function (e) {
    let newLetter=e.key;
    if(worde.length <5+rowNum && newLetter.length<=1&&rowNum<26){
        worde.push(newLetter);
        a();
    }
    else if(newLetter==='Backspace' && worde.length <=5+rowNum&& worde.length>rowNum){
        
        worde.pop();
        a();
    }
    else if(newLetter==='Enter'&&worde.length===5+rowNum){
        
        let theGuss=[];
        let j=0;
        for(let i =0; i<5;i++){
            j=i+rowNum;
            theGuss[i]=worde[j];
        }
        isTrue(theGuss);
        rowNum+=5;

    }

  }, false);
}
}

function a(){
    for(let i = rowNum; i < rowNum+5 ;i++){
        if(worde[i]===undefined){
            rowLetter[i].innerHTML='';
        }
        else{
            rowLetter[i].innerHTML=worde[i];
        }
    }
}
let wordel='';


let trueWorde = document.getElementById('trueWorde');

trueWorde.addEventListener('keypress', function (eve){
    if(eve.key === 'Enter'&&trueWorde.value.length ===5 ){storTrueWorde();}
});

function storTrueWorde(){
    wordel= trueWorde.value;
    getTrueWorde=true;
    trueWorde.value='';
    console.log(wordel);
    guss();
    trueWorde.classList.toggle("gussing");
}

function isTrue(guss){
    console.log(guss);
let j =0;
    for (let i =0+rowNum; i<5+rowNum; i++){
        if(wordel.includes(guss[j])){

                if(guss[j]===wordel[j]){
                    rowLetter[i].classList.toggle("letter_true");
                }
                else{
                    rowLetter[i].classList.toggle("letter_elsewhere");
                }
            }

        else{
            rowLetter[i].classList.toggle("letter_absent");
        }
        j++;
        }
}
    