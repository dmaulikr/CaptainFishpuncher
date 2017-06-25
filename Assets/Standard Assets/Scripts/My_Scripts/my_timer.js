#pragma strict
var GameController: GameObject; 
var Captain : GameObject; 
var timing: boolean = true; 
var totalTime = 100.0;
var remainingTime = 100.0;
var Bar:Texture2D;
var BarWidth:float=100;
var BarHeight:float=20;
 var BGM : GameObject;
 var death: AudioClip;
 var GOhelp: GameObject;
 var dead: boolean = false;
 var dead_timer: float = 3;
function Start(){

//	BGM = GameObject.Find("BGM");
//	GameController = GameObject.Find("GameController");
//	Captain = GameObject.Find("The_Captain_V3");
 				} 
 
function Update() {
   if(timing == true){
    if (remainingTime > 0.0)
       remainingTime -= Time.deltaTime;
    if ( remainingTime <= 0) {
  	  timing = false;
       BGM.GetComponent(AudioSource).enabled = false;
	  GetComponent.<AudioSource>().PlayOneShot(death,1);	
      Captain.GetComponent.<Animation>().Play("Cap_Suffocate");
      GameController.GetComponent(Input_Controller).Alive = false;
      dead = true;

    }
}


if(dead){
dead_timer -= Time.deltaTime;

if(dead_timer <=0){

	dead_timer = 0;
	GOhelp.SetActive(true);

}


 }
 }
function OnGUI(){
    
    GUI.DrawTexture(Rect((Screen.width - BarWidth)*.001,(Screen.height - BarHeight)*0.01, BarWidth* remainingTime/totalTime, BarHeight),Bar);
}