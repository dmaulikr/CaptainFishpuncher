#pragma strict
var chest_attached : boolean = false;
var bell: AudioClip;
var buzzer: AudioClip;

function Start () {

	chest_attached = false;

					}

    			
    			
    			
  function OnTriggerEnter(active : Collider){
  			
  		   if(active.gameObject.name=="hook"){
           if(active.GetComponent(Hook_script_to_Pace).Hook_is_free == true){
           Debug.Log("grabbed the treasure- hop on ");
           GetComponent.<AudioSource>().clip = bell;
           GetComponent.<AudioSource>().Play();
           transform.parent = active.transform;
 		   //active.GetComponent(Hook_script_to_Pace).Hook_is_free = false;
 		   chest_attached = true;
 		   																																		}
 		  														
 
       												}
  							}  			
    		 	
function Update () {




}