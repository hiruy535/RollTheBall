#pragma strict

var target : Transform;
var d=-2;

function Update () {
 transform.position = target.position + Vector3(0,70,d);

}