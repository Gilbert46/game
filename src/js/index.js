var control = 1;

function surt() {
    contanidor = "<img src='' alt=''>";
    document.getElementById("gameNew").innerHTML=contanidor;
    document.getElementById("gameNew").hidden=true;
}
function enrerre(){
    if (control > 1) control -= 1;
    else control = 12;
    playgame(control);
}
function endavant(){
    if (control < 12) control += 1;
    else control = 1;
    playgame(control);
}
function playgame(game) {
        document.getElementById("gameNew").hidden = false;
        control = game;

        butons = '<div id = "botons"><a id="con1" onclick="enrerre()"><img src="src/img/enrer.png" alt=""/></a><a id="con2" onclick="endavant()"><img src="src/img/endav.png" alt=""/></a><a id="sor" onclick="surt()"><img src="src/img/sortir.png" alt=""/></a></div>';
        window1 = '<div class = "col-md-2"></div><div class = "col-md-8"><div id="game">';
        window2 = '<iframe id="capt" src="';
        window3 = '" width=100% height="680" frameborder="0" style="border:0" allowfullscreen> </iframe></div></div>';
      
        if (game == 1) contanidor  = window1 + butons + window2 + 'https://gilbertvs.github.io/Pacman/' + window3;

        if (game == 2) contanidor = window1 + butons + window2 + 'https://gilbertvs.github.io/Arkanoid/' + window3;

        if (game == 3) contanidor = window1 + butons + window2 + 'https://gilbertvs.github.io/question/' + window3;

        if (game == 4) contanidor = window1 + butons + window2 + 'https://gilbertvs.github.io/Dino/' + window3;

        if (game == 5) contanidor = '<div class = "col-md-2"></div><div class = "col-md-8"><div id="game">'+butons+'<iframe id="capt" src="https://gilbertvs.github.io/obstacle/" width=100% height="820" frameborder="0" style="border:0" allowfullscreen> </iframe></div></div>';

        if (game == 6) contanidor = '<div class = "col-md-1"></div><div class = "col-md-10"><div id="game">'+butons+'<iframe id="capt" src="https://gilbertvs.github.io/pinpon/" width=100% height="780" frameborder="0" style="border:0" allowfullscreen> </iframe></div></div>';

        if (game == 7) contanidor = '<div class = "col-md-1"></div><div class = "col-md-10"><div id="game">'+butons+'<iframe id="capt" src="https://gilbertvs.github.io/Shooter/" width=100% height="690" frameborder="0" style="border:0" allowfullscreen> </iframe></div></div>';

        if (game == 8) contanidor = '<div class = "col-md-1"></div><div class = "col-md-10"><div id="game">'+butons+'<iframe id="capt" src="https://simmer.io/@Equalitzator/labyrinth" width=100% height="820" frameborder="0" style="border:0" allowfullscreen> </iframe></div></div>';

        if (game == 9) contanidor = '<div class = "col-md-1"></div><div class = "col-md-10"><div id="game">'+butons+'<iframe id="capt" src="https://gilbertvs.github.io/Million/" width=100% height="800" frameborder="0" style="border:0" allowfullscreen> </iframe></div></div>';

        if (game == 10) contanidor = window1 + butons + window2 + 'https://gilbertvs.github.io/City/' + window3;

        if (game == 11) contanidor = window1 + butons + window2 + 'https://gilbertvs.github.io/Circuit/' + window3;

        if (game == 12) contanidor = '<div class = "col-md-1"></div><div class = "col-md-10"><div id="game">'+butons+'<iframe id="capt" src="https://simmer.io/@Equalitzator/soldier2" width=100% height="820" frameborder="0" style="border:0" allowfullscreen> </iframe></div></div>';

        document.getElementById("gameNew").innerHTML = contanidor;
}
