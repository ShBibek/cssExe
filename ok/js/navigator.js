function naviBar(activeState){
	var ul = document.createElement('UL');
	ul.style.display = 'inline-table';
	ul.style.marginLeft = 'auto';
	for (var i = 0; i < slides.length; i++) {
		var li = document.createElement('li');
		li.style.float='left';
		li.style.width='10px';
		li.style.height='10px';
		if(i==0){
			li.style.backgroundColor ="#e24d39";	
		}
		else
			li.style.backgroundColor = "#ffffff";
		li.style.display= 'inline';
		li.style.marginLeft = '5px';
		li.style['border-radius'] ='10px';
		li.setAttribute('onclick','onclicking('+i+')');
		ul.appendChild(li);
	}
	var myid = document.getElementById('navDiv');
	myid.appendChild(ul);
	console.log('myid has been appended thank you');
}

function naviChange(position,length){
    var navbar = document.getElementById("navDiv");
    var navUl = navbar.children[0];
    var navli = navUl.children;
    for (var i = 0; i < length; i++) {
		if (i == (position)) {
        	navli[position].style.backgroundColor = "#e24d39";
      	}
      	else{
      		navli[i].style.backgroundColor = "#ffffff";	
      	}
    }
}  

