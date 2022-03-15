const btnAdd = document.querySelector("#addBtn");

btnAdd.addEventListener("click", function () {
   const li = document.createElement("li");
   const inputValue = document.querySelector("#myInput").value;
   const taskText = document.createTextNode(inputValue);
   li.appendChild(taskText);

   if (inputValue.length < 2){
      alert("Mínimo de 2 dígitos.")
   }else{
      document.querySelector("#myUL").appendChild(li)
   }

   document.querySelector("#myInput").value = "";

   const span = document.createElement("span");
   const icon = document.createTextNode("\u00d7");
   span.className = "close";
   span.appendChild(icon);
   li.appendChild(span);

   const close = documet.querySelectorAll(".close");

   for (let i=0; i < close.length; i++){
      close[i].addEventListener("click", function () {
         const li = this.parentElement;
         li.style.display = "none";
      });
   }
});

const list = document.querySelector("ul")

list.addEventListener("click", function (ev) {
   if (ev.target.nodeName === "LI"){
      ev.target.classList.toggle("checked");
   }
})