#pragma strict
var timer : float = .7;
var start_timer : float = .7;
var ScoreCollector: GameObject;
var GameController: GameObject;
var punchcounter: int = 0;
var punching : boolean = false;
var can_punch: boolean = true;
var capsule: AudioClip;
var swing: AudioClip;
var punch: AudioClip;
var Fish_Death_animation: int;
var anim_max : int;
var controller : CharacterController; 
var On_Ground: boolean = false;
var GOhelp: GameObject;
var Game_Timer: GameObject;
var BGM : GameObject;
var dead: boolean = false;
var dead_timer: float= 4.4;

function Awake(){
Time.timeScale = 1 ;

}

function Start () {
ScoreCollector = GameObject.Find("LevelCounter");
anim_max = 4;
}

function OnControllerColliderHit(active: ControllerColliderHit){
if(active.gameObject.name == "FloorBox" && On_Ground == false){
	On_Ground = true;
	GameController.GetComponent(StartLevel_Custscene).moveDirection= Vector3(0,0,0);
	GetComponent.<Animation>().Play("Cap_Land");
	GetComponent.<Animation>().CrossFadeQueued("Cap_Idle");
	GameController.GetComponent(StartLevel_Custscene).jump_time= false;
//	GameController.GetComponent(AudioSource).clip =GameController.GetComponent(StartLevel_Custscene).bubbles;						
//	GameController.GetComponent(AudioSource).PlayOneShot(GameController.GetComponent(StartLevel_Custscene).bubbles,1);
												}
	if(active.gameObject.layer == LayerMask.NameToLayer("Capsule")){					
		Destroy(active.gameObject);									
	if(Game_Timer.GetComponent(my_timer).remainingTime < Game_Timer.GetComponent(my_timer).totalTime){
		GetComponent(AudioSource).clip = capsule;
		GetComponent(AudioSource).PlayOneShot(capsule,1);
		Game_Timer.GetComponent(my_timer).remainingTime += 80;
		if(Game_Timer.GetComponent(my_timer).remainingTime > Game_Timer.GetComponent(my_timer).totalTime){
		Game_Timer.GetComponent(my_timer).remainingTime = Game_Timer.GetComponent(my_timer).totalTime;
												
																								}

																							}
									}											

																}// endOnControllerColliderHIt
																
																
																
																
function OnTriggerEnter(col : Collider)   {

if((col.gameObject.layer == LayerMask.NameToLayer("Fish")) && dead==false){
if(col.GetComponent(Fishcontroller).CanSwim == true && punching == false && GameController.GetComponent(Input_Controller).Alive == true){ //cap is hit
BGM.GetComponent(AudioSource).enabled = false;
yield WaitForSeconds(.6);
		//Debug.Log("Captain is Dead");
		Game_Timer.GetComponent(my_timer).timing = false;
		Game_Timer.GetComponent(AudioSource).PlayOneShot(Game_Timer.GetComponent(AudioSource).clip,1);
		GetComponent.<Animation>().Play("Cap_KO");
		GameController.GetComponent(Input_Controller).Alive = false;
		dead =true;
		
																
																		} //end cap is hit

if(GameController.GetComponent(Input_Controller).Alive == true && punching == true && col.GetComponent(Fishcontroller).CanSwim == true ){		//fish is hit																				
	col.GetComponent(Fishcontroller).CanSwim = false;														
	ScoreCollector.GetComponent(lvl).score += 100;
	GetComponent.<AudioSource>().clip = punch;
	GetComponent.<AudioSource>().Play();
	Fish_Death_animation = Random.Range(1,anim_max);// Leaves THREE possible outcomes 1,2,3
	
	if(Fish_Death_animation == 1){//////////SPEED UP hit the anchor(if traveling left to right)
	col.GetComponent(Fishcontroller).SwimSpeed = ((col.GetComponent(Fishcontroller).SwimSpeed + col.GetComponent(Fishcontroller).temp_speed) * -1);								
	col.GetComponent(Fishcontroller).can_hit_anchor = true;
	col.GetComponent.<Animation>().Play("Fish_Hit");	
	
					
														}//end death 1			
								
								
	if(Fish_Death_animation ==2){  //////rotate on y axis and travel back
	col.GetComponent(Fishcontroller).SwimSpeed = (col.GetComponent(Fishcontroller).SwimSpeed * -1);
	col.GetComponent(Fishcontroller).punch2_rotator = true;
	col.GetComponent.<Animation>().Play("Fish_Hit");	
								} // end death 2
								
	if(Fish_Death_animation == 3){ ////Sink Down
	col.GetComponent.<Animation>().Play("Fish_Face");
	col.GetComponent(Fishcontroller).SwimSpeed = 0;
	yield WaitForSeconds(.5);
	col.GetComponent(Fishcontroller).Sink = true;
	col.transform.rotation = Quaternion.Euler(0, -90, -180);	
								} // end death 3
	
													}// GameController.GetComponent(Input_Controller).Alive == true && punching == true && col.GetComponent(Fishcontroller).CanSwim == true			
															
								
																}// end col.gameObject.name=="fish_1" || col.gameObject.name=="fish_2" || col.gameObject.name=="fish_3" || col.gameObject.name=="fish_4"								

								}// end	 OnTriggerEnter(active:Collider)											
/////////////////////////////////////////////////////////////////////////////////////////////////														}
					
										
function FishPuncher(){

		punchcounter++;
		GetComponent.<AudioSource>().clip = swing;
		GetComponent.<AudioSource>().Play();
		if(punchcounter == 1){
		can_punch = false;
		//FishHit();
		GetComponent.<Animation>().Play("Cap_Punch2");
		timer = start_timer;
		punching = true;
		yield WaitForSeconds(.55);
		if(GetComponent.<Animation>()["Cap_Punch2"].enabled == false){
		//punching = false;
		//can_punch = true;
		GetComponent.<Animation>().CrossFadeQueued("Cap_Idle");			
							}
							}
						
		if(punchcounter == 2){
		//FishHit();
		can_punch = false;
		GetComponent.<Animation>().Play("Cap_Punch1");
		timer = start_timer;
		punching = true;
		yield WaitForSeconds(.55);
		if(GetComponent.<Animation>()["Cap_Punch1"].enabled == false){
		//punching = false;
		//can_punch = true;
		GetComponent.<Animation>().CrossFadeQueued("Cap_Idle");			
							}
							}
						
		if(punchcounter == 3){
		//FishHit();
		can_punch = false;
		GetComponent.<Animation>().Play("Cap_Punch3");
		timer = start_timer;
		punching = true;
		yield WaitForSeconds(.55);
		if(GetComponent.<Animation>()["Cap_Punch3"].enabled == false){
		GetComponent.<Animation>().CrossFadeQueued("Cap_Idle");				
		punchcounter=0;
							}
							}
						}
							

						
					
function Update () {

if(dead){
dead_timer -= Time.deltaTime;

if(dead_timer <=0){
	Time.timeScale = 0;
	dead_timer = 0;
	GOhelp.SetActive(true);

}


}


if(punching == true){

	timer-=Time.deltaTime;				
				
					}
					
if(timer<=0){

				
				
	punching = false;	
	can_punch=true;		
				}

														
		if(Input.GetKeyDown("r")&& dead ){

		Application.LoadLevel(1);
		ScoreCollector.GetComponent(lvl).score = 0;
		}	

		if(Input.GetKeyDown("q")&& dead ){

		Application.LoadLevel(2);
		}				
			
if(GameController.GetComponent(Input_Controller).Alive == true){
if(Input.GetKeyDown("p")|| Input.GetKeyDown("space")){
		if(punching == false){
		FishPuncher();
		
					         				}
					     }
							}									
				}
						
