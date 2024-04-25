// scaling so that the arcs can be visible
const scale = 10;
// it gets the canvas element
const canvas = document.querySelector("#canvas");
const rangeInput = document.querySelector("#rangeInput");
const rangeValueDiv = document.querySelector("#rangeValue");

const ctx = canvas.getContext("2d");

// Recaman sequence
const sequence = [
  0, 1, 3, 6, 2, 7, 13, 20, 12, 21, 11, 22, 10, 23, 9, 24, 8, 25, 43, 62, 42,
  63, 41, 18, 42, 17, 43, 16, 44, 15, 45, 14, 46, 79, 113, 78, 114, 77, 39, 78,
  38, 79, 37, 80, 36, 81, 35, 82, 34, 83, 33, 84, 32, 85, 31, 86, 30, 87, 29,
  88, 28, 89, 27, 90, 26, 91,
];

// this is a function to draw the Recaman sequence up to a certain index
function drawRecamanSequence(index) {
  // it clears the canvas before drawing
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // this draws the center line
  ctx.beginPath();
  ctx.moveTo(0, canvas.height / 2);
  ctx.lineTo(canvas.width, canvas.height / 2);
  ctx.stroke();

  // this draws the arcs
  ctx.beginPath();
  // this will move the drawing cursor to the starting point
  ctx.moveTo(sequence[0] * scale, canvas.height / 2);

  // iterating through the sequence
  for (let i = 1; i <= index; i++) {
    const start = sequence[i - 1] * scale;
    console.log("start: ", start);
    const end = sequence[i] * scale;
    const radius = Math.abs(end - start) / 2;
    // calculating the center of the arc
    const centerX = (start + end) / 2;
    // it determines the direction of the arc based on even/odd index
    const direction = i % 2 === 0 ? false : true;

    // Draw an arc from the previous number to the current number
    ctx.arc(centerX, canvas.height / 2, radius, Math.PI, 0, direction);
  }

  ctx.stroke();
}

// Event listener for the range input slider
rangeInput.addEventListener("input", function () {
  // gets the current value of the range input
  const index = parseInt(this.value);
  // updates the displayed value
  rangeValueDiv.innerText = index;
  // Rit will redraw the sequence up to the selected index
  drawRecamanSequence(index);
});

// it is just the sequence with default value
drawRecamanSequence(65);
