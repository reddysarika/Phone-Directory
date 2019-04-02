

function save_row(no)
{
 var name_val=document.getElementById("name_text"+no).value;
 var number_val=document.getElementById("number_text"+no).value;
 

 document.getElementById("name_row"+no).innerHTML=name_val;
 document.getElementById("number_row"+no).innerHTML=number_val;
 


 document.getElementById("save_button"+no).style.display="none";
}

function delete_row(no)
{
 document.getElementById("row"+no+"").outerHTML="";
}

function add_row()
{
 var new_name=document.getElementById("new_name").value;
 var new_number=document.getElementById("new_number").value;

	
 var table=document.getElementById("data_table");
 var table_len=(table.rows.length)-1;
 var row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td id='name_row"+table_len+"'>"+new_name+"</td><td id='number_row"+table_len+"'>"+new_number+"</td><td> <input type='button' id='save_button"+table_len+"' value='Save' class='save' onclick='save_row("+table_len+")'> <input type='button' value='Delete' class='delete' onclick='delete_row("+table_len+")'></td></tr>";

 document.getElementById("new_name").value="";
 document.getElementById("new_number").value="";

 document.getElementById("save_button"+no).style.display="block";

}
   