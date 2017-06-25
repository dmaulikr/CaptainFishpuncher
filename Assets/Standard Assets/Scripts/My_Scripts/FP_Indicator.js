#pragma strict
var Blip1:Texture2D;
var Blip2:Texture2D;
var fp_camera: Camera;
var In_danger: boolean = false;

function Start () {

}

function OnTriggerStay(active:Collider){
if(active.gameObject.name=="fish_1" || active.gameObject.name=="fish_2" || active.gameObject.name=="fish_3" || active.gameObject.name=="fish_4"){

		if(active.GetComponent(Fishcontroller).CanSwim == true )
		 In_danger= true;	
		 
				                }

										}


function OnTriggerExit(active:Collider){
if(active.gameObject.name=="fish_1" || active.gameObject.name=="fish_2" || active.gameObject.name=="fish_3" || active.gameObject.name=="fish_4"){

		 In_danger= false;
		 	
				                }

										}

function OnGUI(){

 if(fp_camera.enabled == true){
 if(!In_danger){
 GUI.DrawTexture(Rect(Screen.width/2,Screen.height-25,16,16),Blip1);
		}
else{
	GUI.DrawTexture(Rect(Screen.width/2,Screen.height-25,16,16),Blip2);
	}		
				}
				}

function Update () {

}