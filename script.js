const frm = document.querySelector('.frm')

var selectedRow = null;

frm.addEventListener("submit" , function(e){
    e.preventDefault();
    console.log('clixkc')
    var formData = readFormData();
    if(selectedRow === null){
        insertData(formData)
    } else{
        updateRecord(formData)
    }
    resetForm()
})


//retrieve the data

function readFormData(){
    var formData = {};
    formData["Level"] = document.getElementById("level").value
    formData["ExamDegree"] = document.getElementById('exam').value
    formData["SchoolCollege"] = document.getElementById('school').value
    formData["University"] = document.getElementById('university').value
    formData["yearOfPassing"] = document.getElementById('pass').value
    formData["MaximumMarks"] = document.getElementById('maxmarks').value
    formData["MarksObtained"] = document.getElementById('obtmarks').value
    formData["Percentage"] = document.getElementById('percentage').value
    formData["Division"] = document.getElementById('division').value
    formData["Achivement"] = document.getElementById('achivement').value
    return formData;

}

//Insert record

function insertData(data){
    var table = document.getElementById('data').getElementsByTagName('tbody')[0]
    console.log(table)
    var newRow = table.insertRow(table.length)
    var cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.Level
    var cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.ExamDegree
    var cell3 = newRow.insertCell(2);
        cell3.innerText = data.SchoolCollege
    var cell4 = newRow.insertCell(3);
        cell4.innerHTML = data.University
    var cell5 = newRow.insertCell(4);
        cell5.innerHTML = data.yearOfPassing
    var cell6 = newRow.insertCell(5);
        cell6.innerHTML = data.MaximumMarks
    var cell7 = newRow.insertCell(6);
        cell7.innerHTML = data.MarksObtained
    var cell8 = newRow.insertCell(7);
        cell8.innerHTML = data.Percentage
    var cell9 = newRow.insertCell(8);
        cell9.innerHTML = data.Division
    var cell10 = newRow.insertCell(9);
        cell10.innerHTML = data.Achivement
    var cell11 = newRow.insertCell(10);
        cell11.innerHTML = `<button onClick = "onEdit(this)">Edit</button> <button onClick = 'onDelete(this)'>Delete</button>`
}

//Edit

    function onEdit(td){
        selectedRow = td.parentElement.parentElement;
        document.getElementById("level").value = selectedRow.cells[0].innerHTML 
        document.getElementById('exam').value = selectedRow.cells[1].innerHTML 
        document.getElementById('school').value = selectedRow.cells[2].innerHTML 
        document.getElementById('university').value = selectedRow.cells[3].innerHTML 
        document.getElementById('pass').value = selectedRow.cells[4].innerHTML 
        document.getElementById('maxmarks').value = selectedRow.cells[5].innerHTML 
        document.getElementById('obtmarks').value = selectedRow.cells[6].innerHTML 
        document.getElementById('percentage').value = selectedRow.cells[7].innerHTML 
        document.getElementById('division').value = selectedRow.cells[8].innerHTML 
        document.getElementById('achivement').value = selectedRow.cells[9].innerHTML 
    }



function updateRecord(formData){
selectedRow.cells[0].innerHTML = formData.Level
selectedRow.cells[1].innerHTML = formData.ExamDegree
selectedRow.cells[2].innerHTML = formData.SchoolCollege
selectedRow.cells[3].innerHTML = formData.University
selectedRow.cells[4].innerHTML = formData.yearOfPassing
selectedRow.cells[5].innerHTML = formData.MaximumMarks
selectedRow.cells[6].innerHTML = formData.MarksObtained
selectedRow.cells[7].innerHTML = formData.Percentage
selectedRow.cells[8].innerHTML = formData.Division
selectedRow.cells[9].innerHTML = formData.Achivement
}

//Delete a Record

function onDelete(td){
    if(confirm('Do You Want To Delete This Record?')){
        row = td.parentElement.parentElement;
        document.getElementById('data').deleteRow(row.rowIndex)
    }
    resetForm()
}

//reset form

function resetForm(){
    document.getElementById("level").value = '' 
    document.getElementById('exam').value = ''  
    document.getElementById('school').value = '' 
    document.getElementById('university').value = ''  
    document.getElementById('pass').value =  ''
    document.getElementById('maxmarks').value = ''  
    document.getElementById('obtmarks').value =  ''
    document.getElementById('percentage').value = '' 
    document.getElementById('division').value = '' 
    document.getElementById('achivement').value = ''
}