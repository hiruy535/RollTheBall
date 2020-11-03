#pragma strict

public var maxfall=-10;
public var gamemaster: allsunScript1;
function Update () {
 if (transform.position.y <= maxfall)
 {
	 if(gamemaster.isRestarting==false)
	     {
	    gamemaster.RestartLevel();
	 	}
	 }

}
