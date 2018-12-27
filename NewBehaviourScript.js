#pragma strict

public var maxJumps = 0; // max number of jumps
public var jumpHeight = 0;
public var moveSpeed = parseFloat(0); 
  
private var numJumps = 0; // current number of jumps

function Start () {

}

function Update () {
    var x; 
    var y;
    if (Input.GetKeyDown(KeyCode.Space) && CanJump()) { // "GetKeyDown" (kan niet ingedrukt houden)
        x = GetComponent(Rigidbody2D).velocity.x;
	    GetComponent(Rigidbody2D).velocity = new Vector2(x, jumpHeight);
	    numJumps++; 
	}
    if (Input.GetKey(KeyCode.A)) { // pas op: als X en Y, 0 zouden blijven dan veranderd het elkaar steeds als je springt of loopt.
        y = GetComponent(Rigidbody2D).velocity.y; // (anders zou Y bijv. naar 0 worden gezet als je springt en loopt tegelijk en dat- 
        GetComponent(Rigidbody2D).velocity = new Vector2(-moveSpeed, y); // werkt niet, vandaar dat er een variable is voor Y en X 
    }
    if (Input.GetKey(KeyCode.D)) {
        y = GetComponent(Rigidbody2D).velocity.y;
        GetComponent(Rigidbody2D).velocity = new Vector2(moveSpeed, y);
    }

}	

function OnCollisionEnter2D (coll : Collision2D) {
    if (coll.gameObject.CompareTag("groundcoll")) {
        numJumps = 0;
    }
    else if (coll.gameObject.Find("HONEY")) {
        Destroy(gameObject.Find("HONEY"));
        ScoreCount.gscore += 1;
    }
    else if (coll.gameObject.Find("HONEY1")) {
        Destroy(gameObject.Find("HONEY1"));
        ScoreCount.gscore += 1;
    }
    else if (coll.gameObject.Find("HONEY2")) {
        Destroy(gameObject.Find("HONEY2"));
        ScoreCount.gscore += 1;
    }
}

function CanJump() {
    return numJumps < maxJumps; //returns true or false 
}


