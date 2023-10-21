// fill in javascript code here
const myForm = document.querySelector("form");


myForm.addEventListener("submit", function(e){
    e.preventDefault();

    let name = document.getElementById("name").value;
    let docterID = document.getElementById("docID").value;
    let select = document.getElementById("dept").value;
    let experience = document.getElementById("exp").value;
    let email = document.getElementById("email").value;
    let mobile = document.getElementById("mbl").value;

    let role;
    if(experience > 5){
        role = "Senior";
       }
       else if(experience >= 2 && experience <= 5){
        role = "Junior";
       }
       else {
        role = "Trainee";
       }
    let tbody = document.querySelector("tbody");
    let row = document.createElement("tr");

   let Data = [name, docterID, select, experience, email, mobile, role];

   Data.forEach((ele)=>{

     let td = document.createElement("td");

     td.innerText = ele;

     row.appendChild(td);
   })
   
tbody.append(row);


let deletTd = document.createElement("td");

let deletBtn = document.createElement("button");

deletBtn.innerText = "Delete";

deletBtn.addEventListener("click", function(){
    tbody.removeChild(row)
})


row.appendChild(deletTd);

deletTd.appendChild(deletBtn);

})

