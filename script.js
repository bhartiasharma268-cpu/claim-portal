function addClaim(){

var claim=document.getElementById("claim").value;

if(claim==""){
alert("Please enter claim");
return;
}

var list=document.getElementById("claimList");

var li=document.createElement("li");

li.innerHTML = claim + " <button onclick='deleteClaim(this)'>Delete</button>";

list.appendChild(li);

document.getElementById("claim").value="";

}

function deleteClaim(btn){

btn.parentElement.remove();

}

function addClaim(){

var claim=document.getElementById("claim").value;

var list=document.getElementById("claimList");

var li=document.createElement("li");

li.innerHTML=claim+" <button onclick='deleteClaim(this)'>Delete</button>";

list.appendChild(li);

document.getElementById("claim").value="";

}

function deleteClaim(btn){

btn.parentElement.remove();

}

function showPage(page){

document.getElementById("home").style.display="none";
document.getElementById("claims").style.display="none";
document.getElementById("about").style.display="none";

document.getElementById(page).style.display="block";

}
