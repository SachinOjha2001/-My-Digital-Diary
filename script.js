 let inp = document.querySelector("input");
    let btn = document.querySelector("button");
    let ul = document.querySelector("ul");

    btn.addEventListener("click", function () {
      let item = document.createElement("li");
      item.innerText = inp.value;
      let delBtn = document.createElement("button");
      delBtn.innerText = "Delete";
      delBtn.classList.add("delete");

      item.appendChild(delBtn);
      ul.appendChild(item);
      inp.value = "";
      alert("Item added successfully!");
    });

    ul.addEventListener("click", function (e) {
      if (e.target.nodeName === "BUTTON") {
        let liItem = e.target.parentElement;
        liItem.remove();
        alert("Item removed successfully!");
      }
    });