$(document).ready(function() {
  var turn = 1;
  var number = 3;

  function addRow(i) {
    var table = document.getElementById('table');
    var newRow = table.insertRow();
    newRow.id = "row" + i;
    addCols(newRow);
  }

  function addCols(row) {
    for (var i = 1; i <= number; i++){
      addTd(i,number,row);
    }
  }

  function addTd(columnnumber,rownumber,row) {
    var newCol = document.createElement('td');
    newCol.id = "r" + rownumber + "col" + columnnumber;
    row.appendChild(newCol);
  }
  //creating one click event for each td
  $('td').one('click', function() {
    if (turn % 2 === 0) {
      $(this).html('O');
    } else {
    $(this).html('X');
  }
    turn++;
    checkWinnerTable();
  });

  $('button.in').on('click', function() {
    destroyBoard();
    number++;

    for (var i = 1; i <= number; i++){
      addRow(i);
    }

    function destroyBoard(){
      $('tr').remove();
    }

  });

    function checkWinnerTable() {
      var col;
      var cross;
      var row;
      var matches;
      var toMatch;

      // Check vertical
      for (col = 1; col <= number; col++) {
        matches = 1;
        toMatch = getValue(1, col);
        if (toMatch == "") continue;
        for (var row = 2; row <= number; row++) {
          if (getValue(row, col) == toMatch) matches++;
        }
        if (matches == number) {
          win(toMatch);
        }
      }

      // Check horizontal
      for (row = 1; row <= number; row++) {
        matches = 1;
        toMatch = getValue(row, 1);
        if (toMatch == "") continue;
        for (col = 2; col <= number; col++) {
          if (getValue(row, col) == toMatch) matches++;
        }
        if (matches == number) {
          win(toMatch);
        }
      }

      // Check cross
      cross = 1;
      matches = 1;
      toMatch = getValue(cross, cross);
      if (toMatch != "") {
        for (cross = 2; cross <= number; cross++) {
          if (getValue(cross, cross) == toMatch) matches++;
        }
        if (matches == number) {
          win(toMatch);
        }
      }

      // Check cross to other way
      cross = 1;
      matches = 1;
      toMatch = getValue(cross, number+1-cross);
      if (toMatch != "") {
        for (cross = 2; cross <= number; cross++) {
          if (getValue(cross, number+1-cross) == toMatch) matches++;
        }
        if (matches == number) {
          win(toMatch);
        }
      }
    }

    function win(which) {
      alert("Congrats! " + which + " won!");
    }

    function getValue(row, col) {
      return document.getElementById("r"+row+"col"+col).innerHTML;
    }
});
