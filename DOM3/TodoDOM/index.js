const myForm = document.querySelector("form");
const inp = document.getElementById("task");
const prio = document.getElementById("priority");
const tbody = document.querySelector("tbody");



myForm.addEventListener("submit", function(e){

e.preventDefault();

let AllData = [];

let Data = {
    input : inp.value,

    priority : prio.value,
}

AllData.push(Data);

// tbody.innerHTML = "";

AllData.map((ele)=>{
    const tr = document.createElement("tr");

    const td1 = document.createElement("td");

    const td2 = document.createElement("td");

    td1.innerText = ele.input;

    td2.innerText = ele.priority;

    tr.append(td1,td2);

    tbody.append(tr);
})



})