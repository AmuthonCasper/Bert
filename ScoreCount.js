static var gscore : int = 0;
public var style : GUIStyle;

function OnGUI(){
    GUI.Label (Rect (10, 10, 100, 40), ("Score: " + gscore), style);
}