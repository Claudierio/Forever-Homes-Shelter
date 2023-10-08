function toggleStyle(element) {
    var selectedRadio = element.id;
    var buttons = document.querySelectorAll('.layout-button, .second-layout-button, .third-layout-button');
    
    buttons.forEach(function(button) {
        button.style.backgroundColor = "";
        button.style.color = "";
    });
    
    switch (selectedRadio) {
        case "pixRadio":
            document.querySelector('.layout-button').style.backgroundColor = "#3F96FC";
            document.querySelector('.layout-button').style.color = "white";
            break;
        case "creditCardRadio":
            document.querySelector('.second-layout-button').style.backgroundColor = "#3F96FC";
            document.querySelector('.second-layout-button').style.color = "white";
            break;
        case "paypalRadio":
            document.querySelector('.third-layout-button').style.backgroundColor = "#3F96FC";
            document.querySelector('.third-layout-button').style.color = "white";
            break;
    }
}
