// Copyright ⓒ 2018 Softwing All Rights Reserved
// Edited by Highwater Digital Entertainment

function showSubMenuIntroduce(){
	var elem = document.getElementById("softwing-header-top-submenu-holder-introduce");
  if(elem.style. < 147)
  {
	var height = 0;
	var id = setInterval(frame, 2);
	function frame() {
    	if (height >= 147) {
    		clearInterval(id);
    	} else {
      		height+=3;  
    		elem.setAttribute("style","height:" + height + "px;");
    	}
  	}
  }
}

function hideSubMenuIntroduce(){
  var elem = document.getElementById("softwing-header-top-submenu-holder-introduce");
  var height = 147;
  var id = setInterval(frame, 2);
  function frame() {
      if (height <= 0) {
        clearInterval(id);
      } else {
          height-=3;  
        elem.setAttribute("style","height:" + height + "px;");
      }
    }
}