#pragma strict

function Start () {

}

function Update () {
    var xcam = GameObject.Find("Main Camera").transform.position.x;
    var xbert = GameObject.Find("bert").transform.position.x; 

    if (xbert >= -5.085 && xbert <= 5.075) {
        GameObject.Find("Main Camera").transform.position = Vector3(xbert, 0, -10);
    }
}