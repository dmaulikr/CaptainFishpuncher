#pragma strict
var rb: Rigidbody;
var timer:float  = 4;
var myForce: Vector3;
var rot: GameObject;
function Start () {

}

function Update () {


if(timer > 0)
{
timer -= Time.deltaTime;

}


if(timer <= 0)
{
timer = 0;
rot.gameObject.transform.Rotate(-15,0,0);
transform.Translate(new Vector3(-1,-7,28));
}


}


