#pragma strict
var timer : int;
var Hook_is_free: boolean = true;
var chest : GameObject;
var hum: AudioClip;

function Start () {

timer = 225;


}					

function OnTriggerEnter( active: Collider){
											
	if(active.gameObject.layer== LayerMask.NameToLayer("Trash")){
 
         if(Hook_is_free == true|| chest.GetComponent(attach_the_chest).chest_attached){
          						
 		   active.GetComponent.<Rigidbody>().velocity= Vector3(0,0,0);
		   active.transform.GetComponent.<Rigidbody>().constraints = (RigidbodyConstraints.FreezePositionX | RigidbodyConstraints.FreezePositionY | RigidbodyConstraints.FreezePositionZ | RigidbodyConstraints.FreezeRotationZ | RigidbodyConstraints.FreezeRotationY | RigidbodyConstraints.FreezeRotationX);
		   Hook_is_free = false;
		   			GetComponent.<AudioSource>().clip = hum;
	GetComponent.<AudioSource>().PlayOneShot(hum,1);
		  Destroy(active.gameObject);
           //active.parent = gameObject.transform;
 
       																	}
  																						}
  											} //end onTriggerEnter	
function Update () {
if(Hook_is_free == false && !chest.GetComponent(attach_the_chest).chest_attached ){

	gameObject.transform.Rotate(Vector3(0,0,5));
	timer -= Time.deltaTime;


			}
			else if(Hook_is_free == false && chest.GetComponent(attach_the_chest).chest_attached)
			{
			timer -= Time.deltaTime;

			}

if(timer <= 0 ){

	timer = 225;
	Hook_is_free = true;
	GetComponent.<AudioSource>().Stop();			
				}

}