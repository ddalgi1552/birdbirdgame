var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

canvas.width= window.innerWidth;
canvas.height= window.innerHeight;


      //타이머입니다
      var currentTime = new Date();//var Date는 설계도. var currentTime은 내가 만든 상자
      var cuTime = currentTime.getTime();
      //cuTime이라는 변수에다가 currentTime(new Date)에서 getTime해줘. getTime=1970년도 1월부터 지금까지의 시간을 가져와

      var myTimer=setInterval(myFunction, 1000);
      //setInterval 첫번째 인자의 함수를 특정시간마다 실행해줘.
      
      //function= 이 내부에는 myFunction이라는게 들어있고 그 내용물은 { }안의 것이야~

      var str2 = document.getElementById("text2");
      function myFunction(){
        var time= new Date();
        var t= (time.getTime() - cuTime)/1000;
        str2.innerHTML=t;
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


