#pragma strict
public var ani : Animation;
function OnTriggerEnter  (box :Collider ) {
 
 if(box.gameObject.CompareTag("hira")){
       box.gameObject.SetActive(true);
 }
    
}

