using UnityEngine;
using System.Collections;

public class ballcode : MonoBehaviour {

	public float moveSpped =5.0f;
	public float dra=0.5f;
	public float termaiRotaionSpeed=25.0f;
	public Vector3 MoveVector{ set; get; }
	public Rigidbody thisRigidboady;
	public codecontrol joystick;
	void Start () {
		//thisRigidboady = gameObject.AddComponent<Rigidbody> ();
		thisRigidboady.maxAngularVelocity = termaiRotaionSpeed;
		thisRigidboady.drag = dra;
	
	}

private	void Update () {
	
		MoveVector = PoolInput ();
		Move();
	}
private	void Move(){
		thisRigidboady.AddForce (MoveVector * moveSpped);
	}
private	Vector3 PoolInput (){
		Vector3 dir = Vector3.zero;
		dir.x = joystick.Horizontal();
		dir.z=joystick.Vertical()*5;
		if (dir.magnitude > 1) 
			dir.Normalize ();
		return dir;
		
	}
}
