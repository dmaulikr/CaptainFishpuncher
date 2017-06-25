#pragma strict
var speed: int;
var side_camera: Camera;
var fp_camera: Camera;
var chest : GameObject;
var ScoreCollector: GameObject;
var Rope: GameObject;
var Captain: GameObject;
var Fish : GameObject;
var Gear1: GameObject;
var Gear2: GameObject;
var Alive: boolean = true;
var controller: CharacterController; 
var Hook : GameObject;
var Levelcounter : GameObject;
var BoatController: GameObject;
var ropespeed: float;
var update: boolean = false;

function Start () {
speed = 800;
Levelcounter = GameObject.Find("LevelCounter");
ropespeed = 8;
}

function ropeSpeedUpdate()
	{
	Debug.Log(Levelcounter.GetComponent(lvl).level + " x 1.3 = "+ ropespeed);
	ropespeed = 6 - ( 1.3* Levelcounter.GetComponent(lvl).level ); 
	if(ropespeed<= 1.5)
	{

	ropespeed= 1.5;

	}

	}		

function Update() {
if(!update){
ropeSpeedUpdate();
update = true;
}

if(BoatController.GetComponent(Boat_controller).victory==false) {

if(Alive == true){
if(Input.GetKeyUp("c")){
		
     if ( side_camera.enabled == true){ 
      fp_camera.enabled = true;
      side_camera.enabled = false; 
  									 } 
   else if (fp_camera.enabled == true){
      side_camera.enabled = true; 
      fp_camera.enabled = false;
 
 										}
       					 }
       					
						
if(Input.GetKey("a")){
Captain.GetComponent.<Animation>().Play("Cap_Walk");
gameObject.GetComponent(StartLevel_Custscene).moveDirection =Vector3(-speed,0,0);
controller.Move(gameObject.GetComponent(StartLevel_Custscene).moveDirection* Time.deltaTime);
Captain.transform.rotation = Quaternion.Euler(0, 270, 0);		 								 						  
fp_camera.transform.rotation = Quaternion.Euler(0, 270, 0);
										}
							
if(Input.GetKey("d")){				
Captain.GetComponent.<Animation>().Play("Cap_Walk");
gameObject.GetComponent(StartLevel_Custscene).moveDirection =Vector3(speed,0,0);
controller.Move(gameObject.GetComponent(StartLevel_Custscene).moveDirection* Time.deltaTime);
Captain.transform.rotation = Quaternion.Euler(0, 90, 0);								 								 						  
fp_camera.transform.rotation = Quaternion.Euler(0, 90, 0);										
										}
							

if(Input.GetKey("s")){
	if(Hook.GetComponent(Hook_script_to_Pace). Hook_is_free == true  ){
	if(Rope.transform.position.y > 4150 ){			
Rope.transform.Translate(Vector3(0,0,ropespeed));				
Gear1.transform.Rotate(0,0,-1);
Gear2.transform.Rotate(0,0,1);					
							 			
							 			}							 						  
		}		
					}
										
										
if(Input.GetKeyUp("a")||Input.GetKeyUp("d")){

	Captain.GetComponent.<Animation>().CrossFade("Cap_Idle");				
	gameObject.GetComponent(StartLevel_Custscene).moveDirection =Vector3(0,0,0);				 
					  }	
																			
if(Input.GetKey("w")){
if(Hook.GetComponent(Hook_script_to_Pace). Hook_is_free == true ){
	if(Rope.transform.position.y < 9800 ){			
Rope.transform.Translate(Vector3(0,0,-(ropespeed)));	

			if(chest.GetComponent(attach_the_chest).chest_attached	){
			Rope.transform.Translate(Vector3(0,0,-(ropespeed/3)));	


			}		
Gear1.transform.Rotate(0,0,1);
Gear2.transform.Rotate(0,0,-1);
							 			
							 			}							 						  
																}				
					}
					}



					}

					}