#pragma strict
var Timer: GameObject;
var cap: GameObject;
var speed : int = 5;
var sfx: AudioSource;
var clip = AudioClip;
function Start () {
Timer = GameObject.Find("Timer");

					}// End Start()


function Update () {

transform.Rotate(0,1,0);
transform.position.x = (transform.position.x + speed);
 



}