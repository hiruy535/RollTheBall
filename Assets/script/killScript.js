#pragma strict

function OnTriggerEnter () {
	var enemy = transform.GetComponentInParent (enemieScript);
	enemy.Die();
}