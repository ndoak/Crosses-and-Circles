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
    //loop to check # of rows
    for (var i = 1; i <= number; i++){
      var row = document.getElementById('row' + i);
      //loop to check # of cols
      for (var j = 1; j <= number; j++) {
         var col = document.getElementById('r' + i + 'col' + j);
        checkValue(row);
      }
    }
  }
    function checkValue(row){
      var row_value = row.value;
      if (row_value === "X" && row_value === row) {
        alert("X wins");
      }
      else if (row_value === "O" && row_value === row){
         alert("O wins")
      }
    }
});


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
});
