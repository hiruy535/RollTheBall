 #pragma strict

var player : Rigidbody;
public var bounceAmount = 10f;

var deathParticles : Transform;

function Die () {
	player.GetComponent.<Rigidbody>().velocity.y = bounceAmount;
	Instantiate (deathParticles, transform.position, transform.rotation);
	Destroy (gameObject);
	allsunScript1.CurrentSccore +=10;
}