createUpDwnBtns();

function createUpDwnBtns() {
    var btnU1 = document.createElement("BUTTON");
    btnU1.style.width = "60px";
    btnU1.style.height = "30px";
    btnU1.innerText = "UP";
    btnU1.id = "btnU1+x2-GroupSize";
    btnU1.addEventListener("click", upclked);
    btnU1.style.marginTop = "10px";
    btnU1.style.marginLeft = "20px";    
    x1.appendChild(btnU1);

    var btnU2 = document.createElement("BUTTON");
    btnU2.style.width = "60px";
    btnU2.style.height = "30px";
    btnU2.innerText = "UP";
    btnU2.id = "btnU2+y2-Available";
    btnU2.addEventListener("click", upclked);
    btnU2.style.marginTop = "10px";
    btnU2.style.marginLeft = "20px";    
    y1.appendChild(btnU2);

    var btnU3 = document.createElement("BUTTON");
    btnU3.style.width = "60px";
    btnU3.style.height = "30px";
    btnU3.innerText = "UP";
    btnU3.id = "btnU3+z2-GroupStyle";
    btnU3.addEventListener("click", upclked);
    btnU3.style.marginTop = "10px";
    btnU3.style.marginLeft = "20px";
    z1.appendChild(btnU3);

    var btnD1 = document.createElement("BUTTON");
    btnD1.style.width = "60px";
    btnD1.style.height = "30px";
    btnD1.innerText = "DWN";
    btnD1.id = "btnD1+x2-GroupSize";
    btnD1.addEventListener("click", dwnclked);
    btnD1.style.marginTop = "20px";
    btnD1.style.marginLeft = "20px";
    x1.appendChild(btnD1);

    var btnD2 = document.createElement("BUTTON");
    btnD2.style.width = "60px";
    btnD2.style.height = "30px";
    btnD2.innerText = "DWN";
    btnD2.id = "btnD2+y2-Available";
    btnD2.addEventListener("click", dwnclked);
    btnD2.style.marginTop = "20px";
    btnD2.style.marginLeft = "20px";
    y1.appendChild(btnD2);

    var btnD3 = document.createElement("BUTTON");
    btnD3.style.width = "60px";
    btnD3.style.height = "30px";
    btnD3.innerText = "DWN";
    btnD3.id = "btnD3+z2-GameStyle";
    btnD3.addEventListener("click", dwnclked);
    btnD3.style.marginTop = "20px";
    btnD3.style.marginLeft = "20px";
    z1.appendChild(btnD3);
}

function upclked() {
    //alert("UP CLICKED... id = " + this.id);   
    //elementName = this.id.substring(this.id.indexOf("-", 0) + 1);
    //presentPosition = this.id.substring(this.id.indexOf("+", 0) + 1); 
    //alert(this.id.substring(this.id.indexOf("-", 0) + 1));
    nowPosition = presentPositon(this.id)
    alert(nowPosition);
}
 function dwnclked() {
    nowPosition = presentPositon(this.id)
    alert(nowPosition);
    //alert("DOWN CLICKED... id = " + this.id);
    //positionID = this.id.substring(this.id.indexOf("-", 0) + 1);
    
}
function presentPositon(thisID)
{
    positionStart = thisID.indexOf("+", 0) + 1;
    positionEnd = thisID.indexOf("-", 0);
    positionID = thisID.substring(positionStart, positionEnd);
    //alert(positionID);    
    pp = document.getElementById(positionID).innerHTML;
    //alert("pp = " + pp);
    return pp;
}


//
