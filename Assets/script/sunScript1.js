#pragma strict
static var totscore :int=0 ;
public  var suneffect : Transform;
function OnTriggerEnter (info : Collider) {

	if(info.tag=="Player"){
		totscore= allsunScript1.CurrentSccore +=1;
		var effect = Instantiate(suneffect,transform.position,transform.rotation);
		Destroy(effect.gameObject,3);
		Destroy(gameObject);
	}
}