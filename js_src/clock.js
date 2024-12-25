
setInterval(ShowTime, 1000);

function ShowTime() {
  var now = new Date();

  h = now.getHours();
  m = now.getMinutes();
  s = now.getSeconds();
  
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;


  document.getElementById('hrs').innerHTML = h;
  document.getElementById('min').innerHTML = m;
  document.getElementById('sec').innerHTML = s;
}

ShowTime();
