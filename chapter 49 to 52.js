//Task # 01
// function Submission(){
//     var email = document.getElementById("Email").value;
//     var user = document.getElementById("Username").value;
//     var pass = document.getElementById("Password").value;
//     document.write(email+"<br/>");
//     document.write(user+"<br/>");
//     document.write(pass+"<br/>"); 
// }

//Task # 02
// function expandDetails(){
//     var expended_para = "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quia cumque dicta, vitae quo illum quibusdam commodi sint nostrum molestiae quos veritatis laboriosam aspernatur minima nemo fugit non. Hic, impedit.";
//     document.getElementById("details").innerHTML = expended_para;
// }


function edit_row(no)
{
 document.getElementById("edit_button"+no).style.display="none";
 document.getElementById("save_button"+no).style.display="block";
	
 var index=document.getElementById("index_row"+no);
 var name=document.getElementById("name_row"+no);
 var Class=document.getElementById("class_row"+no);
	
 var index_data=index.innerHTML;
 var name_data=name.innerHTML;
 var class_data=Class.innerHTML;
	
 name.innerHTML="<input type='text' id='index_text"+no+"' value='"+index_data+"'>";
 country.innerHTML="<input type='text' id='name_text"+no+"' value='"+name_data+"'>";
 age.innerHTML="<input type='text' id='class_text"+no+"' value='"+class_data+"'>";
}

function save_row(no)
{
 var index_val=document.getElementById("index_text"+no).value;
 var name_val=document.getElementById("name_text"+no).value;
 var class_val=document.getElementById("class_text"+no).value;

 document.getElementById("index_row"+no).innerHTML=index_val;
 document.getElementById("name_row"+no).innerHTML=name_val;
 document.getElementById("class_row"+no).innerHTML=class_val;

 document.getElementById("edit_button"+no).style.display="block";
 document.getElementById("save_button"+no).style.display="none";
}

function delete_row(no)
{
 document.getElementById("row"+no+"").outerHTML="";
}

function add_row()
{
 var new_index=document.getElementById("new_index").value;
 var new_name=document.getElementById("new_name").value;
 var new_class=document.getElementById("new_class").value;
	
 var table=document.getElementById("data_table");
 var table_len=(table.rows.length)-1;
 var row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td id='index_row"+table_len+"'>"+new_index+"</td><td id='name_row"+table_len+"'>"+new_name+"</td><td id='class_row"+table_len+"'>"+new_class+"</td><td><input type='button' id='edit_button"+table_len+"' value='Edit' class='edit' onclick='edit_row("+table_len+")'> <input type='button' id='save_button"+table_len+"' value='Save' class='save' onclick='save_row("+table_len+")'> <input type='button' value='Delete' class='delete' onclick='delete_row("+table_len+")'></td></tr>";

 document.getElementById("new_index").value="";
 document.getElementById("new_name").value="";
 document.getElementById("new_class").value="";
}