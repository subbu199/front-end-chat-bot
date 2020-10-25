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
