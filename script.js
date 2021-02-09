function pressed() {
    var text = document.getElementById("Inp").value;

    switch (text) {
        case "red": 
            document.getElementById("square").style.backgroundColor="red";
            break;
        case "blue":
            document.getElementById("square").style.backgroundColor="blue";
            break;
        default: 
            document.getElementById("square").style.backgroundColor="white";
        break;
        
    }
}