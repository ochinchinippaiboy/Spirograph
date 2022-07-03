var c=40, m=23, d=11; 
function setup() {//最初に1回だけ実行
  let canvas = createCanvas(300, 300); background(255);
  canvas.parent('canvas');
  strokeWeight(2); stroke(255,0,0);
}
var t=0;
function zukei() {
  var c = document.getElementById("c").value;
  var m = document.getElementById("d").value;
  var d = document.getElementById("m").value;
    //描画準備
  var maxt=50000, speed=200;//点の数と描画速度
  var w2=width/2, h2=height/2;
  var r=abs(c-m)+abs(d), cyc=360*abs(m);//画像の外接半径と周回数
//描画 radians()は度→ラジアン変換
  for (var i=0; i<speed; i++,t+=cyc/maxt) 
    point(w2*(1+(c-m)*cos(radians(t))/r+d*cos((c-m)/m*radians(t))/r),
			    h2*(1-(c-m)*sin(radians(t))/r+d*sin((c-m)/m*radians(t))/r));
  if(t>=cyc) noLoop();
    }
let button = document.getElementById('form-ckick');
button.onclick = zukei;