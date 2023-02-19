
var firstPage=document.getElementById("home_template");
var clon= firstPage.content.cloneNode(true);
document.body.appendChild(clon);

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

window.addEventListener('popstate', poppin);