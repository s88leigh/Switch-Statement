function pressed() {
    var text = document.getElementById("Inp").value;

    switch (text) {
        case "red": 
            document.getElementById("square").style.backgroundColor="red";
            break;
        case "blue":
            document.getElementById("square").style.backgroundColor="blue";
            break;
        case "green":
            document.getElementById("square").style.backgroundColor="green";
            break;
        case "yellow":
            document.getElementById("square").style.backgroundColor="yellow";
            break;
        case "purple":
            document.getElementById("square").style.backgroundColor="purple";
            break;
        case "orange":
            document.getElementById("square").style.backgroundColor="orange";
            break;
        default: 
            document.getElementById("square").style.backgroundColor="white";
        break;
        
    }
}