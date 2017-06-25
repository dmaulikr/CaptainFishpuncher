#pragma strict

var fish : GameObject;
var trash : GameObject;
var capsule : GameObject;
var DestroyerR : GameObject;
var capsule_spawnedL: boolean = false;
var Levelcounter : GameObject;
var timerF:float = 8;
var timerT:float = 9;
var timerC:float = 0;

function Awake(){

timerC = Random.Range(40,70);
Levelcounter= GameObject.Find("LevelCounter");

}

function OnTriggerEnter(active: Collider){


										
if(active.gameObject.name == "capsule"||active.gameObject.layer == LayerMask.NameToLayer("Fish")||active.gameObject.layer == LayerMask.NameToLayer("Trash")){

Destroy(active.gameObject);
										}										
																																				
																																								
					}//End OnTriggerEnter()


function Update () {

if(timerF>0)
{

timerF -= Time.deltaTime;
}

if(timerT>0)
{

timerT -= Time.deltaTime;
}


if(timerC>0)
{

timerC -= Time.deltaTime;
}
if(timerF<=0)
{
Instantiate(fish,new Vector3(-14389.89,380,967),Quaternion.Euler(new Vector3(0,90,0)));
timerF = (Random.Range(10.0f,14.0f) - Levelcounter.GetComponent(lvl).level );

}

if(timerT<=0)
{
Instantiate(trash,new Vector3(-14389.89,Random.Range(1137.0f, 3635.0f),967),Quaternion.identity);
//Instantiate(trash,new Vector3(-14389.89,380,967),Quaternion.Euler(new Vector3(0,90,0)));
timerT = (Random.Range(7.0f,15.0f) - Levelcounter.GetComponent(lvl).level);
}

if(timerC<=0)
{
if(!capsule_spawnedL && !DestroyerR.GetComponent(Destroyer_R).capsule_spawnedR ){
capsule_spawnedL = true;
Instantiate(capsule,new Vector3(-14389.89,-260,967),Quaternion.identity);
timerC = 0;
}
else
{
timerC = 0;
}



}
}