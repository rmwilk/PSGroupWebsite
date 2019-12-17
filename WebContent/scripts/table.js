//Declare GLOBAL variable so that row.ID value isn't lost when appendRow() is closed
var i = 0;

function appendRow() {
	var act = document.getElementById("activity").value;
	var des = document.getElementById("description").value;
	var regexAct = /.{1,8}/;
	var regexDes = /[\s\S]{0,12}$/;
	var flagAct = false;
	var flagDes = false;
	var message = "";
	
	if(/*regexAct.test(act) == false*/!(act.length > 0 && act.length < 12 )) {
		message += "Keep an activity a non-empty name that is shorter than 12 characters.\n";
		flagAct = true;
	}
	
	if(/*regexDes.test(des) == false*/!(des.length >= 0 && des.length < 30)) {
		message += "Keep a description that is shorter than 30 characters.";
		flagDes = true;
	}
	
	if(!flagAct && !flagDes){  /* If both flags are false */
		var tableID = document.getElementById('todoTable');
		var row = tableID.insertRow(-1);
		var cell1 = row.insertCell(0);
		var cell2 = row.insertCell(1);
		var cell3 = row.insertCell(2);
		var cell4 = row.insertCell(3);
		var cell5 = row.insertCell(4);
		
		//Declare ID for each row
		row.id = "row1" + i;
		++i; //increment rowID
		
		//Create checkbox
		var checkBox = '<input type="checkbox" class="custom-control-input" id="defaultChecked2" onclick="crossOut(\'' + row.id + '\')" value="no">';
		
		//Create delete
		var deleteButton = '<button class="btn btn-xs btn-custom"  type="button" onclick="deleteRow(this)"><span class="glyphicon glyphicon-trash"></span></button>';
		
		cell1.innerHTML = checkBox;
		cell2.innerHTML = document.getElementById("activity").value;
		cell3.innerHTML = document.getElementById("description").value;
		cell4.innerHTML = document.getElementById("priority").value;
		cell5.innerHTML = deleteButton;
		
		// reset fields
		document.getElementById("activity").value = "";
		document.getElementById("description").value = "";
		document.getElementById("priority").value = "Normal";
	}
	else  {
		alert(message);
		document.getElementById("activity").value = "";
		document.getElementById("description").value = "";
		document.getElementById("priority").value = "Normal";
	}
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