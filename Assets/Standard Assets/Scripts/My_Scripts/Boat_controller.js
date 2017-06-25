#pragma strict
var Timer: GameObject;
var Hook: GameObject;
var fanfare: AudioClip;
var Captain: GameObject;
var helper:GameObject ;
var victory: boolean = false;
var win_timer: float = 2.4;
var level: GameObject;
var my_level:int;
var oxy:int;
function Start () {

level = GameObject.Find("LevelCounter");
//Timer = GameObject.Find("Timer");
//Captain	= GameObject.Find("The_Captain_V3");


				    }
				  
function oxygenBonus (){
oxy = Mathf.RoundToInt((Timer.GetComponent(my_timer).remainingTime/2));
}				  		  
				  
				  
function OnTriggerEnter(active: Collider){

	if(active.gameObject.name == "Chest"){
	if(Timer.GetComponent(my_timer).timing == true){
	GetComponent.<AudioSource>().clip = fanfare;
	Captain.GetComponent.<Animation>().Play("Cap_Victory");
	GetComponent.<AudioSource>().Play();
	Timer.GetComponent(my_timer).timing = false;
	level.GetComponent(lvl).score+= 500;
	oxygenBonus ();
	level.GetComponent(lvl).score+= oxy;
	victory = true;
														}
																			
											}
		
										
																																			
					}//End OnTriggerEnter()

function Update () {

if(victory){
	
	Captain.GetComponent.<Animation>().Play("Cap_Victory");
}

my_level = level.GetComponent(lvl).level;

if(victory){

win_timer -= Time.deltaTime;
if(win_timer<=0){
	win_timer = 0;
	helper.SetActive(true);

		if(Input.GetKeyDown("e") && victory ){
		level.GetComponent(lvl).level++;
		Application.LoadLevel(Application.loadedLevel);
											}	

		if(Input.GetKeyDown("q") && victory ){

		Application.LoadLevel(2);


											}

					}

		}
					}
