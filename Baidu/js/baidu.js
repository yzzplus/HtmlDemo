	window.onload = function(){
		document.getElementById('txt').focus(); 
		var list = document.getElementById("list");
		var aA = list.getElementsByTagName('a');
		var aLi = list.getElementsByTagName('li');

			for(var i=0;i<aA.length;i++){
				aA[i].index = i;
				aA[i].onmouseover = function(){
					for(var j=0;j<aA.length;j++){
						aLi[j].style.backgroundColor = 'white';
						aA[j].style.color = 'black';
					}
					aLi[this.index].style.backgroundColor = '#3385ff';
					this.style.color = 'white';
				}
			}	
	}; 

		

	var timer =null ;

	function show(){
		clearTimeout(timer);
		var list = document.getElementById('list');
		list.style.display = "block";

		var aA = list.getElementsByTagName('a');
		var aLi = list.getElementsByTagName('li');
		for(var j=0;j<aA.length;j++){
			aLi[j].style.backgroundColor = 'white';
			aA[j].style.color = 'black';
		}
	}

	function noshow(){
		list.style.display = "none";
	}

	function onhide(){
		timer=setTimeout(function(){
			list.style.display = "none";
		},200);

	}

	function clearT(){
		clearTimeout(timer);
	}



	function find(){
		var png = document.getElementById('png');
		png.style.display = "block";
	}

	function nofind(){
		var png = document.getElementById('png');
		png.style.display = "none";
	}
	
		
		

    
