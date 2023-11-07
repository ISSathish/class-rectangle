class Rectangle{
	constructor(width,height){
		this.width=width;
		this.height=height;
	}
	area(){
		console.log("area of rectangle is" + this.width*this.height)
	}
	perimeter(){
		let ans=2*(this.width+this.height)
		console.log("perimeter of rectangle is" + ans)
	}
}
let res=new Rectangle(10,10)
res.area();
res.perimeter();