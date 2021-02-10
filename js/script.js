var currentUser = "O";
var numberTurns = 0;
var endGame = "false";
var board = [null, null, null, null, null, null, null, null, null];
Window.board = board;
function performLogic(BID, TID) {
  $(TID).html(currentUser);
  changePlayer();  
}
function changePlayer(){
  if (currentUser == "O"){
    currentUser = "X";
  } else{
    currentUser = "O";
  }
}
function playerWins(tile1, tile2, tile3){
  if (tile1 == currentUser && tile2 == currentUser && tile3 == currentUser){
    return currentUser + "Wins";
  }
}
function verticleTiles(){
  
  playerWins("#tile1, #tile4, #tile7")
  playerWins("#tile2, #tile5, #tile8")
  playerWins("#tile3,#tile6, #tile9")
}
  
function performLogic(tileId) {
  let button = $("#button" + tileId);
  writeSymbol(tileId);
  checkBoard();
  changePlayer();
  
  console.log(board);
}
    
function writeSymbol(tileId) {
  let tile = $("#tile" + tileId);
  tile.html(currentUser);
  board[tileId - 1] = currentUser;
}   
function checkBoard(){
  
}
function getRow(n) {
  return [board[n - 1], board[n], board[n + 1]];
}


$("#button1").click(function() {
  performLogic(1);
  console.log("Hi")
});

$("#button2").click(function() {
  performLogic(2);
});

$("#button3").click(function() {
  performLogic(3);
});

$("#button4").click(function() {
  performLogic(4);
});

$("#button5").click(function() {
  performLogic(5);
});

$("#button6").click(function() {
  performLogic(6);
});

$("#button7").click(function() {
  performLogic(7);
});

$("#button8").click(function() {
  performLogic(8);
});

$("#button9").click(function() {
  performLogic(9);
});
