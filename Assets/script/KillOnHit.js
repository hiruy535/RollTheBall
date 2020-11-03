#pragma strict
var gameMaster : allsunScript1;

function OnTriggerEnter () {
	if(gameMaster.isRestarting==false){
	 	gameMaster.RestartLevel();
	 	}
}