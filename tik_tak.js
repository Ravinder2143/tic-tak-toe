 const upper1=document.querySelector('.upper');
const box21=document.querySelectorAll('.a');
const btn=document.querySelector('.btn');
let currentplayer;
let gamegrid;
let array=[[0,1,2],
[3,4,5],
[6,7,8],
[0,4,8],
[2,4,6]
];
function animation(){
    currentplayer="X";
    gamegrid=["","","","","","","","",""]
    /// ui par box ko empty karna 
    box21.forEach((box,index)=>{
        box.innerText="";
        box21[index].style.pointerEvents="all";
    })
    
    

    btn.classList.remove("active");
    upper1.innerText=`currentplayer-${currentplayer}`;  // is sa ui ma show hoga currentplayer ka nam
}

function swap(){
    if(currentplayer==="X"){
        currentplayer="O";
    }
    else{
        currentplayer="X";
    }

    // ui ma update karna 
    upper1.innerText=`currentplayer-${currentplayer}`;
}
function gameover(){
    let answer="";

    array.forEach((position) => {
        // all three boxes should be non empty and same value at every index
        if ((gamegrid[position[0]] !== "" || gamegrid[position[1]] !== "" || gamegrid[position[2]] !== "") &&
            (gamegrid[position[0]] === gamegrid[position[1]]) && (gamegrid[position[1]] === gamegrid[position[2]]))
         {
            // Check winner
            if (gamegrid[position[0]] === "X") 
                answer = "X";
            else 
                answer = "O";
            
            //ab hme winner mil gya ab dubra koi winner na ho isliya pointer  event ko hi remove kar deta ha
           
            box21.forEach((box) => {
                box.style.pointerEvents = "none";
              });
        }
        
        
    });

  
    if (answer!=="") {
        upper1.innerText = `winner player-${answer}`;
        btn.classList.add("active");
        return;
      }
    
    // board is full, game is a tie
    let fillcount=0;
    gamegrid.forEach((box)=>{
        if(box!==""){
            fillcount++;
        }
    });
    if(fillcount===9){
        upper1.innerText="GAME TIE";
        btn.classList.add("active");
    }
}
function handle(index){
    if(gamegrid[index]===""){
        box21[index].innerText=currentplayer;// is sa kya hua ki hmne box ma set kar di current player ki value
        gamegrid[index]=currentplayer;   // is sa hmne jo apna logic bnaya ha vha store kar di current player ki value
        // ab current player ko swap karna pdega
        swap(); 

        // check koi jhet to nhi gya
        gameover();
    }
}

box21.forEach((box,index)=>{
    box.addEventListener("click",() =>{
        handle(index);
    });
});


// 
btn.addEventListener("click",animation);  // is sa kya ho rha ha ki new game btn par click karega to empty ho jyega sara box
animation();



