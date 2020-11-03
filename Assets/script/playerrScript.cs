using UnityEngine;
using System.Collections;

public class playerrScript : MonoBehaviour {

	public float speed;
	public int curruntsccore=0;
	public Rigidbody rb;
	
	void Start ()
	{

		rb = GetComponent<Rigidbody>();
	}
	void FixedUpdate ()
	{
		float moveHorizontal = Input.GetAxis ("Horizontal");

		
		Vector3 movement = new Vector3 (moveHorizontal, 0.0f, 0.0f);

		rb.AddForce (movement * speed);

	}

}