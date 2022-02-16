const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

const drawCar = () => {
  ctx.save();

  // the trunk of the car
  ctx.fillRect(20, 30, 20, 20);
  // the body of the car
  ctx.fillRect(40, 10, 50, 40);
  // the window of the car
  ctx.fillStyle = "blue";
  ctx.fillRect(65, 20, 15, 10);
  ctx.fillStyle = "black";
  // the hood of the car
  ctx.fillRect(90, 30, 25, 20);
  // the weels of the car
  ctx.fillStyle = "red";
  ctx.fillRect(35, 45, 15, 15);
  ctx.fillRect(80, 45, 15, 15);

  ctx.restore();
};

drawCar();
