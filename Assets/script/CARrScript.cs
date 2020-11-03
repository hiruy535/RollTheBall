using UnityEngine;
using System.Collections;

public class CARrScript : MonoBehaviour {
	
	public float speed=110;
	public int curruntsccore=0;
	public Rigidbody rob;
	public Transform w1;
	public Rigidbody w2;
	public Rigidbody w3;
	public Rigidbody w4;
	void Start ()
	{
		
		rob = GetComponent<Rigidbody>();
	}
	void FixedUpdate ()
	{
		float moveHorizontal = Input.GetAxis ("Horizontal");
		Vector3 mov = new Vector3 (360, 0.0f, 0.0f);
		if (Input.GetKeyDown (KeyCode.RightArrow) ) {
			Vector3 movement = new Vector3 (moveHorizontal, 0.0f, 0.0f);
			rob.AddForce (movement * speed);
		}
		else if(Input.GetKeyDown (KeyCode.Space)){
			speed=0;
		}

	}
	

}