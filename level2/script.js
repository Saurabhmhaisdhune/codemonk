const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const canvasWidth = canvas.width;
const canvasHeight = canvas.height;

canvas.addEventListener('mousemove', drawCircles);

function drawCircles(event) {
  const mouseX = event.clientX - canvas.offsetLeft;
  const mouseY = event.clientY - canvas.offsetTop;

  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  
  // Draw circle in first half
  if (mouseX <= canvasWidth / 2) {
    ctx.beginPath();
    ctx.arc(mouseX, mouseY, 30, 0, Math.PI * 2);
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 2;
    ctx.stroke();
    
    // Draw mirror image circle in second half
    const mirrorX = canvasWidth - mouseX;
    ctx.beginPath();
    ctx.arc(mirrorX, mouseY, 30, 0, Math.PI * 2);
    ctx.strokeStyle = 'blue';
    ctx.lineWidth = 2;
    ctx.stroke();
  }
}
