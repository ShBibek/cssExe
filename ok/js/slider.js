var screenHeight = window.innerHeight;
var sliderWrapper = document.getElementsByClassName('slider-wrp')[0];
var sliderLong = document.getElementsByClassName('sliderLong')[0];
var slides = sliderLong.children;
var slider = document.getElementsByClassName('slider');

sliderLong.style.width = (100*slides.length) + '%';
sliderWrapper.style.height = screenHeight+'px';

for(var i=0;i<slides.length;i++){
	slider[i].style.width = (100/slider.length)+'%';
	var widthValue = (100/slider.length) + '%';
}
var screenSize = window.getComputedStyle(slider[0]);
var imgWidth = parseInt(screenSize.getPropertyValue('width'));
var active = 1; //current position
var dirx = 1; //moving to the right
var animator = new Animator(sliderLong);
var navigationBar  = naviBar(active);
var right_arrow = document.getElementsByClassName('right-arrow')[0];
var left_arrow=document.getElementsByClassName('left-arrow')[0];

var checkArrow = function(){
	if(active >= slides.length){
		right_arrow.style.visibility = "hidden";
	}
	else{
		right_arrow.style.visibility = "visible";
	}
	if(active <= 1){
		left_arrow.style.visibility = "hidden";
	}
	else{
		left_arrow.style.visibility = "visible";
	}
}

var slideMover = function(){
	if(active >= slider.length){
		//sliderLong.style.marginLeft = 0+"px";
		dirx = -1;
	}
  	if(active <= 1){
  		dirx = 1;
  		active = 1;
  	}
  	active += dirx;
	var ml = (imgWidth * (active-1) * -1);
  	animator.animate("margin-left", ml, 1000);
  	naviChange(active-1,slider.length);
  	checkArrow();
}
var slideAnimationId = setInterval(slideMover,2000);

right_arrow.onclick = function(){
	if(active<slider.length){
		active++;
		var ml = (imgWidth*(active-1) * -1);
		animator.finishAnimation("margin-left",ml,slideAnimationId);
		slideAnimationId = setInterval(slideMover,2000);
		naviChange(active-1,slider.length);
		checkArrow();
	}
	
};
left_arrow.onclick = function(){
	if(active > 1){
		active--;
		var ml = (imgWidth*(active-1)*-1);
		animator.finishAnimation("margin-left",ml,slideAnimationId);
		slideAnimationId = setInterval(slideMover,2000);
		naviChange(active-1,slider.length);
		checkArrow();
	}
};
function onclicking(i){
	active = i+1;
	var ml = (imgWidth*(active-1)*-1);
	animator.finishAnimation("margin-left",ml,slideAnimationId);
	slideAnimationId = setInterval(slideMover,2000);
	naviChange(active-1,slider.length);
	checkArrow();
}

