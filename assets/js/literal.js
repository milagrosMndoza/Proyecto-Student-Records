
const app ={
   init: function(){
    student= [];
    print= document.getElementById("print");
   },
    
  
    Student:  function(id, studentName, techPoints, lifePoints, status){
        this.id = id;
        this.studentName = studentName;
        this.techPoints = techPoints;
        this.lifePoints = lifePoints;
        this.status = status;
    },
    // elementos a agregar;
    
     addStudent: function() {
        var studentName = document.getElementById("studentName").value;
        var techPoints = document.getElementById("techPoints").value;
        var lifePoints = document.getElementById("lifePoints").value;
        student.push( new app.Student( student.length + 1, studentName, techPoints, lifePoints, "active" ) );
        document.getElementById("studentName").value = "";
        document.getElementById("techPoints").value = "";
        document.getElementById("lifePoints").value = "";
        document.getElementById("print").innerHTML = "";
        app.newStudent(student[student.length - 1]);
        return student;
    },
    
     newStudent: function(el) {
        document.getElementById("print").innerHTML = '<div class="student"><h3>' + el.studentName + '</h3><p><span class="border">Tech Skills:</span> ' + el.techPoints + '%</p><p><span class="border">Life Skills:</span> ' + el.lifePoints + '%</p><p><span class="border">Status:</span> ' + el.status + '</p></div>';
    },
    
     showStudent: function() {
        app.printHTML(" ");
        student.forEach(function(elemento){
        print.innerHTML += '<div class="student"><h3>' + elemento.studentName + '</h3><p><span class="border">Tech Skills:</span> ' + elemento.techPoints + '%</p><p><span class="border">Life Skills:</span> ' + elemento.lifePoints + '%</p><p><span class="border">Status:</span> ' + elemento.status + '</p></div>';
        });
    },
    
     printHTML: function (html) {
        print.innerHTML = '';
        print.innerHTML = html;
    },
    
     update: function(){
        var filtrar = student.filter(function(tPoints){
            console.log((parseInt(tPoints.techPoints)+parseInt(tPoints.lifePoints))/2)
            return (parseInt(tPoints.techPoints)+parseInt(tPoints.lifePoints))/2 >= 70;
                });
                print.innerHTML = '';
                filtrar.forEach(function(elemento){
                    print.innerHTML += '<div class="student"><h3>' + elemento.studentName + '</h3><p><span class="border">Tech Skills:</span> ' + elemento.techPoints + '%</p><p><span class="border">Life Skills:</span> ' + elemento.lifePoints + '%</p><p><span class="border">Status:</span> ' + elemento.status + '</p></div>';
                    });
    }
    
    
}
app.init();

