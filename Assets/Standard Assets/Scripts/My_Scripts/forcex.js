#pragma strict
var rb: Rigidbody;

var myForce: Vector3;

function Start () {
	rb = gameObject.GetComponent.<Rigidbody>();
	rb.velocity.x =  myForce.x;
}

function Update () {


	rb.velocity.x = myForce.x;
}


