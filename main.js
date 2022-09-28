var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

canvas.width= window.innerWidth;
canvas.height= window.innerHeight;




setInterval(ddd,100);
let score=0;

var t=0;
var str2 = document.getElementById("text2");
function ddd(){
  t++;
  makeBird();
  console.log(t);
  str2.innerHTML=t;
  
}

function makeBird(){

  var feather = document.createElement("img");
  feather.src="feather.png";
  feather.id = "featherImg";
  feather.className = "featherBox";
  feather.style.position="absolute";
  let a= Math.random()*window.innerWidth-50;
  let b= Math.random()*window.innerHeight-50;
  feather.style.left=a + "px";
  feather.style.top=b + "px";

  
  document.body.appendChild(feather);

  feather.onclick=function(){
    this.remove();
    score++; 
    display. innerHTML = score;
    
  }

}



var img2= new Image();
img2.src= 'dino.png';
var dino = {
  x: 10,
  y: 200,
  width: 160,
  height: 160,
  draw(){
    ctx.fillStyle='green';
    // ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.drawImage(img2, this.x, this.y);
  }
}

var img1 = new Image();
img1.src= 'pigeon.png';
//장애물

class Cactus {
  constructor(){
    this.x = 1000;
    this.y = 200;
    this.width = 85;
    this.height = 85;
  }
  draw(){
  ctx.fillStyle='red';
  // ctx.fillRect(this.x, this.y, this.width, this.height);
  ctx.drawImage(img1, this.x, this.y);
  }
}
//애니메이션

var timer = 0;
var cactus여러개= [];
var jumptimer=0;
var animation;
var sc = 0;
function 프레임마다실행할코드(){
  animation = requestAnimationFrame(프레임마다실행할코드);
  timer++;

  ctx.clearRect(0,0, canvas.width, canvas.height);
  

  if(timer % 200 === 0){
    var cactus= new Cactus();
    cactus여러개.push(cactus);
  }
  cactus여러개.forEach((a, i, o)=>{
    //x좌표가 0 미만이면 제거
    if(a.x < 0){
      o.splice(i, 1)
      sc++;
      display2. innerHTML = sc;
    }


    
    crash(dino, a);
    
    a.x--;
    a.draw();
  })

  
  if (Jumping == true){
    dino.y-=3;
    jumptimer++;
  }
  if(Jumping ==false){
    if(dino.y <400){
    dino.y+=3;}
  }
  if(jumptimer > 100){
      Jumping=false;
      jumptimer=0
  }
  dino.draw()
}



프레임마다실행할코드();

//충돌확인

function crash(dino, cactus){
  var x축차이 = cactus.x-(dino.x + dino.width);
  var y축차이 = cactus.y-(dino.y + dino.height);
  if (x축차이 <0 && y축차이 < 0){
    ctx.clearRect(0,0, canvas.width, canvas.height);
    cancelAnimationFrame(animation)
    location.reload();
    alert("아이구! 부딪히셨네요!");
    str2.innerHTML="GAME OVER!";
  }
}




var Jumping = false;
document.addEventListener('keydown',function(e){
    if (e.code === 'Space'){
      Jumping = true;
    }
  })

