#pragma strict

function Start () {

}


function OnTriggerEnter(col :Collider)   {
								
										

if(col.gameObject.layer == LayerMask.NameToLayer("Fish")){
 	if(col.GetComponent(Fishcontroller).can_hit_anchor == true){
 	GetComponent.<AudioSource>().Play();
	col.GetComponent.<Animation>().Play("Fish_Face");
	col.GetComponent(Fishcontroller).SwimSpeed = 0;
	col.GetComponent(Fishcontroller).CanSwim = false;
	col.GetComponent(Fishcontroller).Sink = true;
	col.transform.rotation = Quaternion.Euler(0, -90, -180);	
										}
										}
															}

				

function Update () {

}