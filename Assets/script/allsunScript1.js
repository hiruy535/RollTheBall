#pragma strict
static var isRestarting=false;
static var CurrentSccore :int = 0;
public  var offsetY :int = 40;
public  var x :int =40;
public  var y :int = 100;
var musicprefab : Transform;
public var overaudo : AudioClip;
public  var player : Transform;
function Start () {
	 CurrentSccore =0;
		if (!GameObject.FindGameObjectWithTag("music")) {
		var mManager = Instantiate (musicprefab, transform.position, Quaternion.identity);
		mManager.name = musicprefab.name;
		DontDestroyOnLoad (mManager);
	}
}
function  OnGUI () {
		GUI.Box (new Rect (Screen.width/2-x/2,offsetY,x,y),"Score: "+CurrentSccore);
		}
function RestartLevel(){
	isRestarting=true;
	GetComponent.<AudioSource>().clip=overaudo;
	GetComponent.<AudioSource>().pitch=1;
	GetComponent.<AudioSource>().Play();
	yield WaitForSeconds(GetComponent.<AudioSource>().clip.length);
	player.transform.position = CheckPoint.ReachedPoint;
	isRestarting = false;
}
