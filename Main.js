function setup (){
	background (0);
	createCanvas (800, 800);
}
let oR, oG, oB;
oR = 100;
oG = 200;
oB = 100;
function draw () {
	initOrb = new Orb(400, 400, 50, 0.0, null, oR, oG, oB);
	let ch = [];
	ch[0] = new Orb(490, 400, 50, 0.5, null, oR, oG, oB, initOrb);
	ch[1] = new Orb(400, 490, 50, 0.5, null, oR, oG, oB, initOrb);
	ch[2] = new Orb(310, 400, 50, 0.5, null, oR, oG, oB, initOrb);
	ch[3] = new Orb(400, 310, 50, 0.5, null, oR, oG, oB, initOrb);
	initOrb.children = ch;
	//print(initOrb.r);
	initOrb.display();
	initOrb.itCol();
}
class Orb{
	constructor(x, y, iSize, fl, cList, ir, ig, ib, iPar = null){
		this.bx = x;
		this.by = y;
		this.cx = x;
		this.cy = y;
		this.size = iSize;
		this.flex = fl;
		this.par = iPar;
		this.children = cList;
		this.r = ir;
		this.b = ib;
		this.g = ig;
	}

	itCol(){
		if(par){
			r = par.r;
			b = par.b;
			g = par.g;
		}
		else{
			var dir = 1;
			if(r > 240){
				dir = -1;
			}
			if(r < 20){
				dir = 1;
			}
			r += dir*3;

			if(b > 220){
				dir = -1;
			}
			if(b < 40){
				dir = 1;
			}
			b += dir*2;

			if(g > 230){
				dir = -1;
			}
			if(g < 20){
				dir = 1;
			}
			g += dir*5;
		}
	}

	display(){
		fill(color(this.r, this.g, this.b));
		ellipse(this.bx, this.by, this.size, this.size);
		if(this.children){
			var i = 0;
			while(this.children[i]){
				this.children[i].display();
				print(this.children[i].bx);
				i++;
			}
		}
	}
}