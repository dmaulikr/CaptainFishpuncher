#pragma strict
var CanSwim : boolean = true;
var SwimSpeed : float = 1;
var temp_speed : int = 10;
var punch2_rotator=false;
var can_hit_anchor: boolean = false;
var Captain : GameObject;
var Levelcounter : GameObject;
var Sink : boolean = false;
var Boat: GameObject;
var Chest: GameObject;
var newspeed: float = 0;
var updated: boolean = false;
var warned: boolean = false;
function Start () {
Levelcounter= GameObject.Find("LevelCounter");
Boat = GameObject.Find("BoatController");
}


function warning()
{
if(Chest.GetComponent(attach_the_chest).chest_attached)
SwimSpeed += SwimSpeed *.4;
warned = true;
}
function speedUp()
{
newspeed = (Levelcounter.GetComponent(lvl).level * 2.0f);
Boat = GameObject.Find("BoatController");
Levelcounter= GameObject.Find("LevelCounter");
SwimSpeed = SwimSpeed + newspeed; 
}
									
function Update () {

if(warned == false)
{
warning();

}

if(!updated){
speedUp();
updated = true;
}


if(Boat.GetComponent(Boat_controller).victory==false){
	transform.Translate(0,0,SwimSpeed);
	}

	else if (Boat.GetComponent(Boat_controller).victory==true)
	{

	transform.Translate(0,0,0);

	}
	if(Sink == true){
	
	transform.position.y = transform.position.y - 7;
					}
	

	if(punch2_rotator==true){
	
	if(transform.position.x< Captain.transform.position.x){
	transform.position.x = transform.position.x + SwimSpeed;
	}
	
	if(transform.position.x> Captain.transform.position.x){
	transform.position.x = transform.position.x - SwimSpeed;
	}
	
	
	transform.Rotate(0,5,0);
							}

					}