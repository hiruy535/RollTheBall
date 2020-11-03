using UnityEngine;
using System.Collections;

public class startScript : MonoBehaviour {
	
	
	public	void LoadLevel(string name) {
		Debug.Log ("New Level load: " + name);
		
	}
	public	void QuitRequest() {
		Debug.Log ("Quit requested");
		
	}
}
