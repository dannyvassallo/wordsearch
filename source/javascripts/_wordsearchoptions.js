
    $(document).ready( function () {      var words = "earth,mars,mercury,neptune,pluto,saturn,jupiter,one,two,"+
            "three,four,five,six,seven,eight,mozart,bach,meyer,rose,mahler";
      
      //attach the game to a div
      $("#theGrid").wordsearchwidget({"wordlist" : words,"gridsize" : 15});

    });
