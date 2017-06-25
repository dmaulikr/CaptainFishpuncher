#pragma strict


function Start () {


}


function OnTriggerEnter(active:Collider)   {
								
										
if(active.gameObject.layer == LayerMask.NameToLayer("Fish") ){								
	Destroy(active.gameObject);
	}
											}// end function OnTriggerEnter		
function Update () {

}


