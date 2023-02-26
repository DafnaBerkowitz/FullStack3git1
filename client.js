
var firstPage=document.getElementById("home_template");
var clon= firstPage.content.cloneNode(true);
document.body.appendChild(clon);
var ifram1=document.getElementById("picture_libary_template");
var clon= newP.content.cloneNode(true);
const iframe = document.querySelector('iframe');
iframe.srcdoc = clon.lastElementChild.innerHTML;


// The main function. Reference to fill page functions.
function change_page(old_page,new_page){
    var oldP=document.getElementById(old_page);
    document.body.removeChild(oldP);
    var newP=document.getElementById(new_page);
    var clon= newP.content.cloneNode(true);
    document.body.appendChild(clon);

    history.replaceState({},old_page,'#'+old_page);
    history.pushState({},new_page,`#${new_page}`);
}

function poppin(ev){
    console.log(location.hash, 'popstate event');
    let hash = location.hash.replace('#' ,'');
    hash=hash.replace('page','template');

    var oldP=document.querySelector('.page');
    document.body.removeChild(oldP);

    var newP= document.getElementById(hash);
    var clon= newP.content.cloneNode(true);
    document.body.appendChild(clon); 
}

function change_iframe(id_new){
    var newP=document.getElementById(id_new);
    var clon= newP.content.cloneNode(true); 
    const iframe = document.querySelector('iframe');
    iframe.srcdoc = clon.lastElementChild.innerHTML;
}
window.addEventListener('popstate', poppin);

function openForm(){
    document.getElementById("myForm").style.display = "block";  
    //document.getElementById('name').innerHTML="Welcome "+currentUser+"!";

}
function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
function logOut(){

//    window.location.href = "sign.html";
}

