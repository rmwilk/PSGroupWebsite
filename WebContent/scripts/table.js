//Declare GLOBAL variable so that row.ID value isn't lost when appendRow() is closed
var i = 0;

function appendRow() {
    var tableID = document.getElementById('todoTable');
    var row = tableID.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);

    //Declare ID for each row
    row.id = "row1" + i;
    ++i; //increment rowID

    //Create checkbox
    var checkBox = '<input type="checkbox" id="cBox" onclick="crossOut(\'' + row.id + '\')" value="no">';

    //Create delete
    var deleteButton = '<button type="button" onclick="deleteRow(this)">Delete</button>';

    cell1.innerHTML = checkBox;
    cell2.innerHTML = document.getElementById("activity").value;
    cell3.innerHTML = document.getElementById("description").value;
    cell4.innerHTML = deleteButton;
}

function deleteRow(r) {
    var tableID = document.getElementById('todoTable');
    var i = r.parentNode.parentNode.rowIndex;

    tableID.deleteRow(i);
}

function crossOut(id) {
    var actDesBox = document.getElementById(id);

    if (actDesBox.style.textDecoration === "") {
        actDesBox.style = "text-decoration: line-through";
    } else {
        actDesBox.style = "text-decoration: ''";
    }

}