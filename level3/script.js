const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const canvasWidth = canvas.width;
const canvasHeight = canvas.height;

canvas.addEventListener("mousemove", drawCircles);

function drawCircles(event) {
  const mouseX = event.clientX - canvas.offsetLeft;
  const mouseY = event.clientY - canvas.offsetTop;

  ctx.clearRect(0, 0, canvasWidth, canvasHeight);

  // Draw circle in current quadrant
  const quadrantX = mouseX <= canvasWidth / 2 ? 0 : canvasWidth / 2;
  const quadrantY = mouseY <= canvasHeight / 2 ? 0 : canvasHeight / 2;

  ctx.beginPath();
  ctx.arc(mouseX, mouseY, 30, 0, Math.PI * 2);
  ctx.strokeStyle = "black";
  ctx.lineWidth = 2;
  ctx.stroke();

  // Draw mirror image circles in other three quadrants
  const mirrorX = canvasWidth - mouseX + quadrantX;
  const mirrorY = canvasHeight - mouseY + quadrantY;

  ctx.beginPath();
  ctx.arc(mirrorX, mouseY, 30, 0, Math.PI * 2);
  ctx.strokeStyle = "black";
  ctx.lineWidth = 2;
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(mouseX, mirrorY, 30, 0, Math.PI * 2);
  ctx.strokeStyle = "black";
  ctx.lineWidth = 2;
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(mirrorX, mirrorY, 30, 0, Math.PI * 2);
  ctx.strokeStyle = "black";
  ctx.lineWidth = 2;
  ctx.stroke();
}
