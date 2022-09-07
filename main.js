/*function come(){
    let hi = document.getElementsByClassName("little-div");
    let mard = document.getElementById("mardane");
    let hideplace = document.getElementById("hide");
    if(mard.addEventListener("mouseover" , show)){
        function show(){
            hideplace.style.overflow = "visible";
            hideplace.style.opacity = "100"
        }else{
            alert("why")
        }
    }
    
}*/

/*const view = document.getElementById("mardane");
const hdie = document.getElementById("hide");

view.addEventListener("click" , send);

if(view = "click"){
    function send(){
        hdie.style.visibility = " visible";
    }
    
}else{
    alert("why");
}
*/

function send (){
    let me = document.getElementById("mardane");
    let hide = document.getElementById("hide");
    hide.style.visibility = "visible";
    
}
function out(){
    let me = document.getElementById("mardane");
    let hide = document.getElementById("hide");
    hide.style.visibility = "hidden";
}

function zan (){
    let zan =document.getElementById("zan");
    let hiden = document.getElementById("hiden");
    hiden.appendChild(document.getElementById("hide"));
    hiden.style.visibility = "visible";
}
function zanout(){
    let zan =document.getElementById("zan");
    let hiden = document.getElementById("hiden");
    hiden.style.visibility = "hidden";
}
function hove(){
    let hov  = document.getElementById("hide");
    hide.style.visibility = "visible";
}
function hv(){
    let hov  = document.getElementById("hiden");
    hiden.style.visibility = "visible";
}
function hoveout(){
    let hov  = document.getElementById("hide");
    hide.style.visibility = "hidden";
}
function hvout(){
    let hov  = document.getElementById("hiden");
    hiden.style.visibility = "hidden";
}
let b = document.getElementById("but");

function bt(){
    let inp = document.getElementById("in").value;
    let sabad = document.getElementById("h1");
    let txt = document.createTextNode(inp);
    sabad.appendChild(txt);
    sabad.value = "this.parentNode.remove();";
    let remove = document.getElementById("in").value ="";
}


function slide (){
    let profile = document.getElementById("pro");
    let slider = document.getElementById("slide");
    profile.appendChild(slider);
    slider.style.visibility = "visible";
    setTimeout("slideout()" , 6000);
    
}
function slideout(){
    let profile = document.getElementById("pro");
    let slider = document.getElementById("slide");
    profile.appendChild(slider);
    slider.style.visibility = "hidden";
}
/*function go (){

    let slide = document.getElementById("slide");
    slide.style.visibility="visible";
}*/

/*function agree (){
    let log =document.getElementById("inpute6").Value;
    let getin=document.getElementById("loged");
    let vrd = document.getElementById("vrd");
    getin.addEventListener("click" , back());

}*/
function back(){
    let vrd = document.getElementById("vrd");
    let log =document.getElementById("inpute6").Value;
    let kod = document.createTextNode(log);
    vrd.appendChild(kod);
}

function giv (){
    let show = document.getElementById("showe");
   let me = document.getElementById("axe");
   me.appendChild(show);
   show.style.visibility = "visible";
   
}
function givout(){
    let show = document.getElementById("showe");
    let me = document.getElementById("axe");
    me.appendChild(show);
    show.style.visibility = "hidden";
}

function give (){
    let show = document.getElementById("showee");
   let me = document.getElementById("axee");
   me.appendChild(show);
   show.style.visibility = "visible";
   
}
function giveout(){
    let show = document.getElementById("showee");
    let me = document.getElementById("axee");
    me.appendChild(show);
    show.style.visibility = "hidden";
}


function givee (){
    let show = document.getElementById("showeee");
   let me = document.getElementById("axeee");
   me.appendChild(show);
   show.style.visibility = "visible";
 
}
function giveeout(){
    let show = document.getElementById("showeee");
    let me = document.getElementById("axeee");
    me.appendChild(show);
    show.style.visibility = "hidden";
}

function giveee(){
    let show = document.getElementById("showeeee");
   let me = document.getElementById("axeeee");
   me.appendChild(show);
   show.style.visibility = "visible";
 
}
function giveeeout(){
    let show = document.getElementById("showeeee");
    let me = document.getElementById("axeeee");
    me.appendChild(show);
    show.style.visibility = "hidden";
}
   

