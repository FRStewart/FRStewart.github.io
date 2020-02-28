// toggleFullScreen allows the user to force the app to go fullscreen. On navigating away from the app the screen will exit fullscreen.
function toggleFullScreen() {
    var fullscreenID = document.getElementById("spanFS");
    if (!document.fullscreenElement &&    // alternative standard method
        !document.mozFullScreenElement && !document.webkitFullscreenElement) {  // current working methods
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) {
            document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
            document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
        }
        fullscreenID.innerHTML = "Normalscreen";
    } else {
        if (document.cancelFullScreen) {
            document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
        }
        fullscreenID.innerHTML = "Fullscreen";
    }
}

// Accepts molecular formula as a string and applys proper formatting.
function molecularFormulaFormat(unfForm) {
    //uses regex to format molecular name to include subscripted numbers
    var formula = unfForm.replace(/(\d+)/g, '<sub>$1</sub>');
    return formula;
}