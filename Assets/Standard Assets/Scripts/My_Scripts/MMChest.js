#pragma strict
var timer: float = 30;
var rb: Rigidbody;
var myForce: Vector3;
function Start () {
		rb = gameObject.GetComponent.<Rigidbody>();
}

function Update () {


if(timer > 0)
{
timer -= Time.deltaTime;

}


if(timer <= 12 ){
timer = 0;
transform.Rotate(0,-.01f,0);
}

if(timer <= 0 ){
timer = 0;
rb.velocity =  myForce;
transform.Rotate(0,-.05f,0);

}

					}
