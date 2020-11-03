#pragma strict
public var jump=10;
public var rspeed=110;
public var rb :Rigidbody;
static var highscore ;
function Update () {
   var rotation : float = Input.GetAxis("Horizontal") * rspeed ;
   rotation *=Time.deltaTime ;
   GetComponent.<Rigidbody>().AddRelativeTorque (Vector3.back * rotation) ;
   if(Input.GetKeyDown(KeyCode.UpArrow)){
      GetComponent.<Rigidbody>().velocity.y =jump;
      }
 }
 function OnTriggerEnter  (box : Collider ) {
 
 if(box.gameObject.CompareTag("score")){
   highscore= allsunScript1.CurrentSccore +=1;
   }
}
