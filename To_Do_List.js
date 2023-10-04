function add() {
    var input = document.getElementById("enter_input").value;
    if (input != "") {
        var contant = document.getElementById("contant");
        var add_div = document.createElement("div");
        add_div.className = "list";
        add_div.style.display = "flex";
        var para = document.createElement("p");
        var append_input = document.createElement("input");
        append_input.type = "checkbox";
        contant.append(add_div);
        add_div.append(append_input);
        para.append(input);
        add_div.append(para);

    }
}

function remove() {
    var input = document.querySelectorAll(".list");
    input.forEach(function (input){
        if(input.firstElementChild.checked){
            input.remove();
        }
    }
    )}