#pragma strict

var Target: Transform;
public var distance=-10;
public var lift=1.50;
function LateUpdate () {
   	transform.position=Target.position + Vector3(0,lift,distance);
   	}
function Restartleve ( level : String) {
  Application.LoadLevel(level); 
}   	