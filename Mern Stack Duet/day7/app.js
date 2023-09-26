// alert("hello there!")
function show_Alert(){
    // debugger
document.write("hello world")
}

function show(){
var showMe = document.getElementById("myName").value
alert(showMe)
}

function percentage(){

    var marks = document.getElementById("marks").value
    var totalMarks = document.getElementById("totalMarks").value
    // var per = (marks/totalMarks)*100;
    document.getElementById("percentage").value = getpercentage(marks,totalMarks) ;

}
function getpercentage(marks,total)
{
    var per = ((marks/total)*100).toFixed(2);
    return per;
}

var students=[{
name:"fasi",
email:"fasiha"
},
{
    name:"nami",
    email:"niha"
    }]
    console.log(students)

var names = ['misbii','fasii','namii','sanii']
for(let i=0 ; i<names.length ; i++){
    if(i==1)
    {
        continue
    }
    document.write(names[i]+'<br>')
}    
// function fourpagal(){

//     var duet = document.getElementById("CS").value
// document.write(duet)

// }



// function practice(){
//     alert("Good to see you")


// function notremember(){
//     alert("pagal")



// }



// }