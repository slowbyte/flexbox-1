createUpDwnBtns();

function createUpDwnBtns() {
    var btnU1 = document.createElement("BUTTON");
    btnU1.style.width = "60px";
    btnU1.style.height = "30px";
    btnU1.innerText = "UP";
    btnU1.id = "btnU1";
    btnU1.addEventListener("click", upclked);
    btnU1.style.marginTop = "10px";
    btnU1.style.marginLeft = "20px";
    x1.appendChild(btnU1);

    var btnU2 = document.createElement("BUTTON");
    btnU2.style.width = "60px";
    btnU2.style.height = "30px";
    btnU2.innerText = "UP";
    btnU2.id = "btnU2";
    btnU2.addEventListener("click", upclked);
    btnU2.style.marginTop = "10px";
    btnU2.style.marginLeft = "20px";
    y1.appendChild(btnU2);

    var btnU3 = document.createElement("BUTTON");
    btnU3.style.width = "60px";
    btnU3.style.height = "30px";
    btnU3.innerText = "UP";
    btnU3.id = "btnU3";
    btnU3.addEventListener("click", upclked);
    btnU3.style.marginTop = "10px";
    btnU3.style.marginLeft = "20px";
    z1.appendChild(btnU3);

    var btnD1 = document.createElement("BUTTON");
    btnD1.style.width = "60px";
    btnD1.style.height = "30px";
    btnD1.innerText = "DWN";
    btnD1.id = "btnD1";
    btnD1.addEventListener("click", dwnclked);
    btnD1.style.marginTop = "20px";
    btnD1.style.marginLeft = "20px";
    x1.appendChild(btnD1);

    var btnD2 = document.createElement("BUTTON");
    btnD2.style.width = "60px";
    btnD2.style.height = "30px";
    btnD2.innerText = "DWN";
    btnD2.id = "btnD2";
    btnD2.addEventListener("click", dwnclked);
    btnD2.style.marginTop = "20px";
    btnD2.style.marginLeft = "20px";
    y1.appendChild(btnD2);

    var btnD3 = document.createElement("BUTTON");
    btnD3.style.width = "60px";
    btnD3.style.height = "30px";
    btnD3.innerText = "DWN";
    btnD3.id = "btnD3";
    btnD3.addEventListener("click", dwnclked);
    btnD3.style.marginTop = "20px";
    btnD3.style.marginLeft = "20px";
    z1.appendChild(btnD3);
}

function upclked() {
    alert("UP CLICKED... id = " + this.id);
}
function dwnclked() {
    alert("DOWN CLICKED... id = " + this.id);
}


//
