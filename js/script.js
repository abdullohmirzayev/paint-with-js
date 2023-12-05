const canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d"),
  isDrawing = false,
  brushWidth = 5;

window.addEventListener("load", () => {
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
});

const startDrow = () => {
  isDrawing = true;
  ctx.beginPath();
  ctx.lineWidth = brushWidth;
};

const drawing = (e) => {
  if (!isDrawing) return;
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
};

const stopDraw = () => {
  isDrawing = false;
};

canvas.addEventListener("mousedown", startDrow);
canvas.addEventListener("mousemove", drawing);
canvas.addEventListener("mouseup", stopDraw);
