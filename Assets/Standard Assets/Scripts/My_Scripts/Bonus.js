#pragma strict

var BoatController: GameObject;
function Start () {
	
}

function Update () {
	GetComponent(Text).text ="You got the Treasure!\nOxygen Score Bonus is: " + BoatController.GetComponent(Boat_controller).oxy+"pts!\nPress E to advance or Press Q to quit"; 
}
