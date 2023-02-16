
var firstPage=document.getElementById("HOME");
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

/*
poppin: function(ev){
    //console.log(location.hash, 'popstate event');
    let hash = location.hash.replace('#' ,'');
    var old= document.querySelector('.active').classList.remove('active');
    document.getElementById(hash).classList.add('active');
    console.log(hash)
    //history.pushState({}, currentPage, `#${currentPage}`);
    document.getElementById(hash).dispatchEvent(app.show);
}*/
//window.addEventListener('popstate', app.poppin);