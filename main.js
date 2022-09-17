let input = document.querySelector(".input_field");
let wrap = document.querySelector(".list");
let addBtn = document.querySelector(".add_btn");

addBtn.addEventListener("click", () => {

    if(input.value == '')
    {
        alert("Empty Field");
    }
    else
    {
        var div = document.createElement("div");
        var listInput = document.createElement("input");
        listInput.setAttribute("type", "text");
        listInput.setAttribute("value", input.value);
        listInput.setAttribute("readonly", "readonly");

        // Remove button
        var remove = document.createElement("a");
        remove.setAttribute("href", "javascript:void(0);");
        remove.className = "remove";
        remove.innerHTML = '<i class="fa fa-trash"></i>';

        // Edit button
        var edit = document.createElement("a");
        edit.setAttribute("href", "javascript:void(0);");
        edit.setAttribute("value", "edit");
        edit.className = "edit";
        edit.innerHTML = '<i class="fa fa-edit"></i>';

        div.appendChild(remove);
        div.appendChild(edit);
        div.appendChild(listInput);
        wrap.appendChild(div);
        input.value = '';


        // Edit task
        edit.addEventListener("click", () => {
            if(edit.getAttribute("class") == "edit")
            {
                listInput.removeAttribute('readonly', 'readonly');
                edit.innerHTML = '<i class="fa-solid fa-check"></i>';
                edit.classList.remove("edit");
                edit.classList.add("save");
            }
            else
            {
                listInput.setAttribute('readonly', 'readonly');
                edit.innerHTML = '<i class="fa fa-edit"></i>';
                edit.classList.remove("save");
                edit.classList.add("edit");
            }
        });

        // Remove task
        remove.addEventListener("click", () => {
            let conf = confirm("Do you really remove this task?");
            if(conf)
            {
                wrap.removeChild(div);
            }
        });

    }

});