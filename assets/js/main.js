
var student = [];
var print = document.getElementById("print");

function Student(id, studentName, techPoints, lifePoints, status){
	this.id = id;
	this.studentName = studentName;
	this.techPoints = techPoints;
	this.lifePoints = lifePoints;
	this.status = status;
}
// elementos a agregar;

function addStudent() {
	var studentName = document.getElementById("studentName").value;
	var techPoints = document.getElementById("techPoints").value;
	var lifePoints = document.getElementById("lifePoints").value;
	student.push( new Student( student.length + 1, studentName, techPoints, lifePoints, "active" ) );
	document.getElementById("studentName").value = "";
	document.getElementById("techPoints").value = "";
	document.getElementById("lifePoints").value = "";
	document.getElementById("print").innerHTML = "";
	newStudent(student[student.length - 1]);
	return student;
}

function newStudent(el) {
	document.getElementById("print").innerHTML = '<div class="student"><h3>' + el.studentName + '</h3><p><span class="border">Tech Skills:</span> ' + el.techPoints + '%</p><p><span class="border">Life Skills:</span> ' + el.lifePoints + '%</p><p><span class="border">Status:</span> ' + el.status + '</p></div>';
}

function showStudent() {
	printHTML(" ");
	student.forEach(function(elemento){
	print.innerHTML += '<div class="student"><h3>' + elemento.studentName + '</h3><p><span class="border">Tech Skills:</span> ' + elemento.techPoints + '%</p><p><span class="border">Life Skills:</span> ' + elemento.lifePoints + '%</p><p><span class="border">Status:</span> ' + elemento.status + '</p></div>';
	});
}

function printHTML (html) {
	print.innerHTML = '';
	print.innerHTML = html;
}

function update(){
	var filtrar = student.filter(function(tPoints){
		return tPoints.techPoints >= 70;
			})
	
}

function employed(){

}