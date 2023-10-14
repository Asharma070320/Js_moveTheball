let ball= document.querySelector(".ball");
// console.log(ball);
let topp= 0;
let left=0;

document.addEventListener("keydown",moveBall);


function moveBall(e){

    let browserHeight = document.documentElement.clientHeight;

     let browserwidth = document.documentElement.clientWidth;

     let elementWidth = ball.offsetWidth;

    //  console.log(elementWidth);

    let key = e.keyCode;
    // console.log(key);

    if(key == 68 || key == 39){
        if(left+elementWidth+10<=browserwidth){
            ball.style.left= left+10+'px';
            left+=10;
        }
    }else if(key == 83 || key == 40){
        if(topp+elementWidth+10<=browserHeight){
            ball.style.top= topp+10+'px';
            topp+=10;
        }
    }else if(key == 87 || key == 38){
        if(topp-10>=0){
            ball.style.top= topp-10+'px';
            topp-=10;
        }
    }else if(key == 65 || key == 37){
        if(left-10>=0){
            ball.style.left= left-10+'px';
            left-=10;
        }
    }
}