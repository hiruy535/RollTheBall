using UnityEngine;
using System.Collections;

public class scoreScript1 : MonoBehaviour {
	public  float offsetY=40;
	public float y=100;
	public float x=40;
	public int currentsccore = 0;

	void  OnGUI () {


		GUI.Box (new Rect (Screen.width/2-x/2,offsetY,x,y),"Score: \n"+currentsccore);
			

	
	}
}
