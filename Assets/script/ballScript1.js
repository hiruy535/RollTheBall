#pragma strict
public var overaudo : AudioClip;
public var rspeed=10;
public var jump=10;
private var isFalling=false;
public var boxer : Transform;
var distoGround :float;
public var Hit01 : AudioClip;
public var Hit02 : AudioClip;
public var Hit03 : AudioClip;
public var  rb:Rigidbody;
function Start(){
	
	distoGround=GetComponent.<Collider>().bounds.extents.y;
	}
function Update () {
   var rotation : float = Input.GetAxis("Horizontal") * rspeed ;
   rotation *=Time.deltaTime ;
   GetComponent.<Rigidbody>().AddRelativeTorque (Vector3.back * rotation) ;
if(Input.GetKeyDown(KeyCode.UpArrow) && IsGrouned()){
		
      GetComponent.<Rigidbody>().velocity.y =jump;
if(Input.touchCount > 0 && IsGrouned()){
      GetComponent.<Rigidbody>().velocity.y =jump;
  if (Input.touchCount > 0){
  			if (Input.GetTouch(0).phase == TouchPhase.Moved){
		 	Debug.Log("movi");
		 	GetComponent.<Rigidbody>().AddRelativeTorque (Vector3.back * rotation) ;
		 	}
		 	if (Input.GetTouch(0).phase == TouchPhase.Ended)
		 	Debug.Log("canceled");
		} 
         
   }
   
}
}
function IsGrouned() : boolean {
	return Physics.Raycast(transform.position, -Vector3.up, distoGround + 0.1);
}

function OnCollisionEnter () {
	var theHit = Random.Range(0, 3);
		if (theHit == 0)
		{
			GetComponent.<AudioSource>().clip = Hit01;
		}
		else if (theHit == 1)
		{
			GetComponent.<AudioSource>().clip = Hit02;
		}
		else {
			GetComponent.<AudioSource>().clip = Hit03;
		}
		GetComponent.<AudioSource>().pitch = Random.Range (0.9,1.1);
		GetComponent.<AudioSource>().Play();
		
}
function OnTriggerEnter  (box : Collider ) {
 
 if(box.gameObject.CompareTag("hira")){
 	GetComponent.<AudioSource>().clip=overaudo;
	GetComponent.<AudioSource>().pitch=1;
	GetComponent.<AudioSource>().Play();
	yield WaitForSeconds(GetComponent.<AudioSource>().clip.length);
       //boxer.gameObject.SetActive(true);
       Application.LoadLevel("rollball_restart"); 
       }
    if(box.gameObject.CompareTag("nextlevel")){
     Application.LoadLevel("rollball_level02");  
 	}
 	if(box.gameObject.CompareTag("die")){
 		GetComponent.<AudioSource>().clip=overaudo;
	GetComponent.<AudioSource>().pitch=1;
	GetComponent.<AudioSource>().Play();
	yield WaitForSeconds(GetComponent.<AudioSource>().clip.length);
       	 Application.LoadLevel("rollball_restart");
 		}
 	}
 
 function Jumpup(){
       if(IsGrouned()){
		rb.velocity = new Vector3 (0,jump, 0);
	} 
 }
function Moverite(){
		rb.velocity = new Vector3 (rspeed, 0);
	}
	function Moveleft(){
		rb.velocity = new Vector3 (-rspeed, 0);
	}
		function Setvelocityzero(){
		rb.velocity = Vector3.zero;
	}
 