using UnityEngine;
using UnityEngine.UI;
using UnityEngine.EventSystems;
using System.Collections;

public class codecontrol : MonoBehaviour,IDragHandler,IPointerUpHandler,IPointerDownHandler {

	private Image a;
	private Image b;
	private Vector3 inputvector;


  private void Start() 
	{
		a = GetComponent<Image>();
		b = transform.GetChild(0).GetComponent<Image>();
	}

	public virtual void OnDrag(PointerEventData ped)
	{
		Vector2 pos;

		if (RectTransformUtility.ScreenPointToLocalPointInRectangle( a.rectTransform,ped.position,ped.pressEventCamera,out pos ))
		    {
				pos.x=(pos.x /a.rectTransform.sizeDelta.x);
				pos.y=(pos.y /a.rectTransform.sizeDelta.y);
			inputvector =new Vector3(pos.x*2+1,0,pos.y*2-1);
		//inputvector=inputvector.magnitude > 1.0f ? inputvector.Normalize:inputvector;

				b.rectTransform.anchoredPosition =new Vector3(inputvector.x * (a.rectTransform.sizeDelta.x)/3
				                                              ,inputvector.z * (a.rectTransform.sizeDelta.y)/3 );



			Debug.Log(inputvector);
		    }
				   
	 }
		
   public virtual void OnPointerDown(PointerEventData ped)
		{
		  OnDrag (ped);
	    }

	public virtual void OnPointerUp(PointerEventData ped)
		{
		inputvector = Vector3.zero;
		b.rectTransform.anchoredPosition = Vector3.zero;
	    }
	public float Horizontal (){
	    if (inputvector.x != 0)
			return inputvector.x;
		else
			return Input.GetAxis ("Horizontal");
	}
	public float Vertical (){
		if (inputvector.z != 0)

			return inputvector.z;
		else
			return Input.GetAxis ("Vertical");

	}
}

