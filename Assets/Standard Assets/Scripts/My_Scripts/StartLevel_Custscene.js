#pragma strict
import UnityEngine.UI;
var Captain: GameObject;
var Score: GameObject;
var Timer: GameObject;
var Boat: GameObject;
var boat_speed : int = 10;
var captain_start: Vector3;
var target_position: int;
var Is_moving:boolean = true;
var jump_time : boolean = false;
var did_jump : boolean = false;
var controller : CharacterController; 
var moveDirection: Vector3;
var game_start: boolean = false;
var boat_start : Vector3;
var IntroTimer: float = 33.0f;
var intro: GameObject;
var ready: GameObject; 
var flag: GameObject;
var sfx: AudioSource;
var sailing: AudioClip;
var sinking: AudioClip;
var bubbles: GameObject;
function Awake()
{
Time.timeScale = 1;

}

function Start () {
Time.timeScale = 1;
controller = Captain.GetComponent(CharacterController);
target_position = -1000;
captain_start=Vector3(-13500,6972,980);
Captain.GetComponent.<Animation>().Play("Cap_Stand");
Captain.transform.position= captain_start;
boat_start = Vector3(-12406.45,6377.012,915.0167);
Boat.transform.position = boat_start;												
sfx = gameObject.GetComponent(AudioSource);
sfx.clip = sailing;
sfx.PlayOneShot(sailing,1);	
}



function CaptainJumping(){
if(!did_jump){
Captain.GetComponent.<Animation>().Play("Cap_Jump");	
did_jump = true;
flag.GetComponent.<Cloth>().enabled = true;
//Captain.transform.position = new Vector3(-1460,6200,980);
intro.SetActive(false);
ready.SetActive(true);
ready.GetComponent(Text).text=("READY?");
sfx.clip = sinking;
sfx.PlayOneShot(sinking,1);			
			}


}

function Update () {

if(Input.GetKeyDown("space")&& !game_start){
   Time.timeScale = 3;
   boat_speed = 60;

}



if(jump_time ){
	moveDirection= Vector3(0,-900,0);
	controller.Move(moveDirection* Time.deltaTime);


	}
if (Captain.transform.position.x >= target_position && jump_time == false&& Captain.GetComponent(Punch_controller).On_Ground == false){
			Is_moving = false;
			jump_time = true;
			CaptainJumping();
			//Debug.Log("calling jump");
					   		   }
					   		   
if( Captain.GetComponent(Punch_controller).On_Ground == true && game_start == false){//time to start the game!
	game_start = true;
    Time.timeScale = 1;	
	jump_time = false;
	bubbles.SetActive(true);
	intro.SetActive(false);
	ready.SetActive(false);
	gameObject.GetComponent(Input_Controller).enabled = true;
	Captain.GetComponent(Punch_controller).enabled = true;	
	Timer.GetComponent(my_timer).enabled = true;
	Score.GetComponent(ScoreKeeper).enabled = true; 	
		}			   		   					   		   
if(Is_moving){
Boat.transform.position.x = Boat.transform.position.x + boat_speed;
Captain.transform.position.x = Captain.transform.position.x + boat_speed;
						}





				}