using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Gamestart : MonoBehaviour {
		public	GameObject lvlCounter; 
	// Use this for initialization
	void Start () {
		
	}
	
	// Update is called once per frame
	void Update () {

				if (Input.GetKey (KeyCode.Escape)) {
						Application.Quit();
				}

				else if (Input.anyKeyDown) {
						DontDestroyOnLoad(lvlCounter.gameObject);
						Application.LoadLevel (1);
				}

	}
}
