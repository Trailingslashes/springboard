document.addEventListener("mousemove", function (e) {
  const x = e.clientX;
  const y = e.clientY;

  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  const color = `rgb(${r}, ${g}, ${b})`;
  document.body.style.backgroundColor = color;
});
