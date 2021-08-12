let open = document.getElementById("openbtn"); // btn open
let close = document.getElementById("closebtn"); // btn close
let slidebar = document.getElementById("slidebarid"); // slidebar


open.onclick = function(){
    slidebar.style.left = "-20px";
}

close.onclick = function(){
    slidebar.style.left = "-500px";
}

