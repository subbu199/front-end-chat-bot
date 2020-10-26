function updateresult(a) {
	document.getElementById('result').value += a;
}
function resultvalue() {
	var dd = document.getElementById('result').value;
	var cc = eval(dd)

	document.getElementById('result').value = cc;
}
function clearvalue() {
	document.getElementById('result').value = ""
}
function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('txt').innerHTML =
  h + ":" + m + ":" + s;
  var t = setTimeout(startTime, 500);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}
