// //Task # 01
// //part 1
// var content = document.getElementById("main-content");
// //part 2
// console.log(content.children);
// //part 3
// var classArray = document.getElementsByClassName("render");
// for(var i=0; i<classArray.length; i++){
//     console.log(classArray[i].innerHTML);
// }
// //part 4
// var firstName = document.getElementById("first-name");
// firstName.value = "Hina";
// //part 5
// var lastName = document.getElementById("last-name");
// lastName.value = "Abdullah"
// var email = document.getElementById("email");
// email.value = "hina.abdullah000@gmail.com";

// // Task # 02
// //part 1
// var content = document.getElementById("form-content");
// var nType = content.nodeType;
// document.write("node type of element having id “form-content” is: "+nType);

// //part 2
// var lastName = document.getElementById("lastName");
// var lastNameNode = lastName.nodeType;
// document.write("<br/>Node type of element having id “lastName”: "+lastNameNode+"<br/>");
// var child = lastName.childNodes;
// for(var i=0; i< lastName.childNodes.length; i++){
//         document.write("Node type of it's child nodes: "+child[i].nodeType+"<br/>")
// }

// //part 3
// var item = document.getElementById("lastName").childNodes[0];
// console.log(item.innerHTML);
// var node = document.createElement("p");
// var textNode = document.createTextNode("Middle Name: David");
// node.appendChild(textNode);
// document.getElementById("lastName").appendChild(node);

// //part 4
// var parentNode = document.getElementById("main-content"); 
// var FC = parentNode.firstChild.innerHTML;
// document.write("First Child of of id “main-content”: "+FC);
// var LC = parentNode.lastChild.innerHTML;
// document.write("<br/>Last Child of of id “main-content”: "+LC);

// //part 5
// var Pnode = document.getElementById("lastName");
// var NS = Pnode.nextSibling;
// document.write("<br/>Next sibling of id lastName: "+NS.innerHTML);
// var PS = Pnode.previousSibling;
// document.write("<br/>Previous sibling of id lastName: "+PS.innerHTML);

// //part 6
// var kidNode = document.getElementById("email");
// var pNode = kidNode.parentNode;
// document.write("<br/>Parent node of id email is: "+pNode.innerHTML);
// document.write("<br/>Node type of id email is: "+pNode.nodeType)