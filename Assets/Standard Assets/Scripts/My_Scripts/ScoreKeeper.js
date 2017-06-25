#pragma strict
var Text: Text;
var score:int = 0;
var myLevelCounter: GameObject;
function Start () {

myLevelCounter = GameObject.Find("LevelCounter");
}

function Update () {

Text.text ="Score: "+ myLevelCounter.GetComponent(lvl).score + "\nLevel: " + myLevelCounter.GetComponent(lvl).level;

}