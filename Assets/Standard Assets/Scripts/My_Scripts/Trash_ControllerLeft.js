#pragma strict

var speed : int;
var boat: GameObject;



function Start () {

speed = speed +( boat.GetComponent(Boat_controller).my_level *10 );
GetComponent.<Rigidbody>().velocity = Vector3(speed,0,0);


					}// End Start()


									




function Update () {



transform.Rotate(2,1,1);


}