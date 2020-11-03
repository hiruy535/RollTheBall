#pragma strict
public  var offsetY :int = 40;
public  var x :int =40;
public  var y :int = 100;
function  OnGUI () {


		GUI.Box (new Rect (Screen.width/2-x/2,offsetY,x,y),"Score: "+allsunScript1.CurrentSccore);
			

	
	}