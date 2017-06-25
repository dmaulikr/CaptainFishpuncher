#pragma strict
var rb: Rigidbody;

var myForce: Vector3;

function Start () {
	rb = gameObject.GetComponent.<Rigidbody>();
	rb.velocity =  myForce;
}

function Update () {

   myForce.y=	myForce.y + (9.8f*Time.deltaTime);
	rb.velocity.y = myForce.y;
}
