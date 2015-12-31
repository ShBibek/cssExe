function Counter(){
	this.flag=1;
	this.counterElement = new Array();
	this.totLength;
	this.count = [];
	this.finalNumber = [6587,896,1674,769];
	var that = this;
	this.init = function(){
		/*for(var i=0;i<1;i++){
			var className;
			if(i==0){
				className = "clients-number";
			}
			else if(i==1){
				className = "completed-number";
			}
			else if(i==2){
				className = "likes-number";
			}
			else{
				className = "launched-number";
			}
			that.counterELement =  document.getElementsByClassName("clients-number");
		}*/
		that.counterELement = document.getElementsByClassName("counter-number");
		console.log(that.counterELement);
		console.log(that.counterElement.length);
		that.totLength = that.counterELement.length;
		window.onscroll = function(){
		  for(var i = 0 ; i<4;i++){
			  that.count[i]=0;
		  }
		  that.counterNumbers();
	  }
	  this.counterNumbers = function(){
		  var intervalId;
		  if(window.scrollY > 610 && that.flag!=0){
			  intervalId = setInterval(function(){
				  for (var i = 0; i < that.counterELement.length; i++) {
					  if (that.count[i] <= that.finalNumber[i]) {
						  that.counterELement[i].innerHTML = that.count[i]++;
					  }
				  }
				  if (that.count[0] > that.finalNumber[0] && that.count[1] > that.finalNumber[1] && that.count[2] > that.finalNumber[2] && that.count[3] > that.finalNumber[3]) {
					  that.flag=0;
					  clearInterval(intervalId);
				  }
			  },50);
		  }
	  }
	}
}
var counter = new Counter();
counter.init();