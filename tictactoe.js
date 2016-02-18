$(document).ready(function() {
  var turn = 1;
  var number = 3;

  var wins = [['#r1col1', '#r2col2', '#r3col3'], ['#r1col3', '#r2col2', '#r3col1'], ['#r1col1', '#r2col2', '#r3col3'],
  ['#r1col1', '#r2col1', '#r3col1'],['#r1col2', '#r2col2', '#r3col2'],['#r1col3','#r2col3','#r3col3']];

  $('td').one('click', function() {
    if (turn % 2 === 0) {
      $(this).html('O');
    } else {
    $(this).html('X');
  }
    turn++;
    checkWinner();
  });

  function addRow() {
    var table = document.getElementById('table');
    var newRow = table.insertRow();
    newRow.id = "row" + number;
    addCol(newRow);


  }

  function addCol(row) {
    for (var i = 1; i <= number; i++){
      var newCol = document.createElement('td');
      newCol.id = "r" + number + "col" + i;
      row.appendChild(newCol);
    }
  }

  $('button.in').on('click', function() {
    number++;
    addRow();

    // var newDiv = document.createElement('td');
    // var startRow = document.getElementById('row1');
    // var startCol = document.getElementById('row1col3');

    // for(var r = startRow; r <= 10; r++) {
    //  for(var c = startCol; c <= 10; c++) {
    //     newDiv.id = "r" + r + "col" + c;
    //  }
    // }
  });

  //       for (var y =0; y <= 10; i--){
  //     }
  //
  //     $('button .de').on('click', function() {
  //
  //     })



    function checkWinner() {



      for (var i = 0; i < wins.length; i++) {
        var w = wins[i];
        var square1 = $(w[0]);
        var square2 = $(w[1]);
        var square3 = $(w[2]);

        var xWins = square1.text() == "X" && square2.text() == "X" && square3.text() == "X";
        var oWins = square1.text() == "O" && square2.text() == "O" && square3.text() == "O";
        if (xWins) {
          $(".message").text( "X Wins!");
        } else if (oWins) {
            $(".message").text("O Wins!");
        }

      }
    }
});
