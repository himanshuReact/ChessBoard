import "./styles.css";

// document.getElementById("app").innerHTML = `
// <h1>Hello Vanilla!</h1>
// <div>
//   We use Parcel to bundle this sandbox, you can find more info about Parcel
//   <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
// </div>
// `;

let chessBoardContainer = document.getElementById("chessBoardContainer");
let boardSize = 8;
let buttonIncrease = document.createElement("button");
buttonIncrease.innerHTML = "IncreaseSize";
chessBoardContainer.appendChild(buttonIncrease);
buttonIncrease.className = "buttonIncrease";
buttonIncrease.addEventListener("click", () => {
  alert("change size");
  // chessBoard.remove();
  boardSize = boardSize + 4;
  renderChessBoard();
});

let buttonDecrease = document.createElement("button");
buttonDecrease.innerHTML = "DecreaseSize";
chessBoardContainer.appendChild(buttonDecrease);
buttonDecrease.className = "buttonDecrease";
buttonDecrease.addEventListener("click", () => {
  alert("change size");
  // chessBoard.remove();
  boardSize = boardSize - 4;
  renderChessBoard();
});

let chessBoard = document.getElementById("chessBoard");
chessBoard.addEventListener("mouseover", (event) => {
  console.log("I am  mouse over");
  // alert("change size");
  // chessBoard.remove();
  console.log(event.target);
  event.target.classList.add("hoverBox");

  // event.target.style.color = "blue";
  // // reset the color after a short delay
  // setTimeout(function () {
  //   event.target.style.color = "";
  // }, 500);
});

const renderChessBoard = () => {
  chessBoard.className = "chessBoard";
  for (let i = 0; i < boardSize; i++) {
    let chessRow = document.createElement("div");
    chessRow.classList.add("chessRow");

    for (let j = 0; j < boardSize; j++) {
      if ((i + j) % 2 == 0) {
        let chessBox = document.createElement("div");
        chessBox.style.color = "white";
        chessBox.classList.add("chessBox");
        chessBox.classList.add("whiteBox");
        chessRow.appendChild(chessBox);
      } else {
        let chessBox = document.createElement("div");
        chessBox.style.color = "black";
        chessBox.classList.add("chessBox");
        chessBox.classList.add("blackBox");
        chessRow.appendChild(chessBox);
      }
    }
    chessBoard.appendChild(chessRow);
  }
};

if (boardSize > 0) {
  renderChessBoard();
}

// chessBoard.style.backgroundColor = "black";
