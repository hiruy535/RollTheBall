#pragma strict
public  var offsetY :int = 40;
public  var x :int =40;
public  var y :int = 100;
function reStart () {
	Application.LoadLevel("rollball_level01");
}

function back () {
	Application.LoadLevel("rollball_mainmenu");
}
function  OnGUI () {
		GUI.Box (new Rect (Screen.width/2-x/2,offsetY,x,y),"High Score\n"+level02ballScript.highscore);
		}