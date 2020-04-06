let oR, oG, oB;
oR = 100;
oG = 200;
oB = 100;
function setup (){
	background (0);
	createCanvas (800, 800);
	background(0);
	initOrb = new Orb(400, 400, 50, 0.0, null, oR, oG, oB);
	let ch = [];
	ch[0] = new Orb(490, 400, 50, 0.5, null, oR, oG, oB, initOrb);
	ch[1] = new Orb(400, 490, 50, 0.5, null, oR, oG, oB, initOrb);
	ch[2] = new Orb(310, 400, 50, 0.5, null, oR, oG, oB, initOrb);
	ch[3] = new Orb(400, 310, 50, 0.5, null, oR, oG, oB, initOrb);
	initOrb.children = ch;
	//print(initOrb.r);
}

function draw () {
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
		this.rdir = 1;
		this.gdir = 1;
		this.bdir = 1;
	}

	itCol(){
		if(this.par != null){
			this.r = this.par.r + (this.par.rdir*3);
			this.b = this.par.b + (this.par.bdir*2);
			this.g = this.par.g + (this.par.gdir*5);
		}
		else{

			if(this.r > 240){
				this.rdir = -1;
			}
			if(this.r < 20){
				this.rdir = 1;
			}
			this.r += this.rdir*3;

			if(this.b > 220){
				this.bdir = -1;
			}
			if(this.b < 40){
				this.bdir = 1;
			}
			this.b += this.bdir*2;

			if(this.g > 230){
				this.gdir = -1;
			}
			if(this.g < 20){
				this.gdir = 1;
			}
			this.g += this.gdir*5;
			print(this.r +" " + this.g + " " + this.b + "\n");
		}
	}

	display(){
		fill(color(this.r, this.g, this.b));
		ellipse(this.bx, this.by, this.size, this.size);
		if(this.children){
			var i = 0;
			while(this.children[i]){
				this.children[i].display();
				//print(this.children[i].bx);
				i++;
			}
		}
		this.itCol();
	}
}