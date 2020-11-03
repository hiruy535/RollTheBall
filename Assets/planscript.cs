using UnityEngine;
using System.Collections;
 
public class planscript : MonoBehaviour {
	public float speed=10f;

	void Start () {
	
	}
	
	void Update () {
		float x = Input.acceleration.x;
		float y = Input.acceleration.y;
		float z = Input.acceleration.z;
		transform.Translate (0, 0, -z * speed * Time.deltaTime);
		transform.Rotate (0, -y* speed*Time.deltaTime, -x * speed);
	}
}
