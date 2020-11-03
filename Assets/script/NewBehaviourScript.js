#pragma strict

static var curruntsccore : int =0;
var offsetY : float =40;
var y : float =100;
var x : float =40;
function OnGUI () {
       GUI.Box (new Rect (Screen.width/2-x/2,offsetY,x,y),"Score: "+curruntsccore);
       
}