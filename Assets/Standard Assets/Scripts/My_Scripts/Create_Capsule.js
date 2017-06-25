#pragma strict 
var Time_Marker : float;
var selected_time: float;
var left_or_right: int;
var Random_Range_X: int;
var Random_Range_Y: int;
var Timer: GameObject;
var NewModel: GameObject;
var clone : GameObject;
var Can_spawn: boolean = true;	
function Start() { 
  Timer = GameObject.Find("Timer");
  
  left_or_right = Random.Range(1,3);
  
  if(left_or_right == 1){ // left side
  Random_Range_X = Random.Range(-12000,-11760);
  	    if(NewModel.GetComponent(Capsule_controller).speed < 0){
  	   	    NewModel.GetComponent(Capsule_controller).speed = (NewModel.GetComponent(Capsule_controller).speed * -1);
  	   	    }
  	   }
  if(left_or_right == 2){  //right side
  Random_Range_X = Random.Range(14242,16000);
  	 if(NewModel.GetComponent(Capsule_controller).speed > 0){
  	   	    	NewModel.GetComponent(Capsule_controller).speed = (NewModel.GetComponent(Capsule_controller).speed * -1);
  	   	    }
  	   }
  Random_Range_Y = Random.Range(0,300);
  
  selected_time = Random.Range(35,70);
	}


function CapsuleSpawn(){

 // Debug.Log("Spawn Capsule");
  clone =  Instantiate(NewModel, Vector3(Random_Range_X,Random_Range_Y,1046), transform.rotation);
  clone.gameObject.name=("capsule");
  Can_spawn = false;
  yield WaitForSeconds(15);
  Can_spawn = true;
  Time_Marker = 0;
  left_or_right = Random.Range(1,3);
  
  if(left_or_right == 1){ // left side
  Random_Range_X = Random.Range(-12000,-11760);
  	   	    if(clone.GetComponent(Capsule_controller).speed < 0){
  	   	    clone.GetComponent(Capsule_controller).speed = (clone.GetComponent(Capsule_controller).speed * -1);
  	   	    }
  	   	    }
  if(left_or_right == 2){  //right side
  Random_Range_X = Random.Range(14242,15000);
  	     if(clone.GetComponent(Capsule_controller).speed > 0){
  	   	    	clone.GetComponent(Capsule_controller).speed = (clone.GetComponent(Capsule_controller).speed * -1);
  	   	    }
  	    }
  Random_Range_Y = Random.Range(0,300);
  selected_time = Random.Range(Timer.GetComponent(my_timer).remainingTime,70);
   
				}
	
 function Update(){
 
 if(Time_Marker >= selected_time && Can_spawn == true ){
 
  			CapsuleSpawn();
  			  
  			  }
 Time_Marker += (1*Time.deltaTime);

  				   				  }
