#pragma strict

function Start () {

}

function Update () {

	if (Input.touchCount > 0){
		 if (Input.GetTouch(0).phase == TouchPhase.Began)
		 	Debug.Log("start");
		 	if (Input.GetTouch(0).phase == TouchPhase.Moved)
		 	Debug.Log("movi");
		 	if (Input.GetTouch(0).phase == TouchPhase.Ended)
		 	Debug.Log("canceled");
		}
		
		
	}
//+Input.touchCount