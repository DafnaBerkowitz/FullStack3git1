
var firstPage = document.getElementById("home_template");
var clon = firstPage.content.cloneNode(true);
document.body.appendChild(clon);



async function picLink(nameBook,id,id2) {
  books1();
  let book = document.getElementById("book_hidden");
   if (book.ariaHidden = true) {
    book.ariaHidden = "false";
    document.getElementById(id).innerHTML = "הספר בהשאלה";
    document.getElementById(id2).className = "return_book";
    document.getElementsByClassName(id2).innerHTML ="החזרת ספר";
    id.style="background-color: rgb(100, 95, 95);"
    

    let name = document.cookies;
    name = name.split(/[=,]/);

    let fxhttp = new FXMLHttpRequest();
    fxhttp.open('PUT', '#libary_catalog_template', true);
    fxhttp.onload(validate_book);
    u = JSON.stringify(nameBook)
    name=`${name[1]}`
    fxhttp.send("users/"+name, u);
    

    function validate_book() {
      if (fxhttp.status == '404') {
        alert("אין אפשרות להשאיל את הספר, מצטערים");
      }
      else {
        let response=JSON.parse( fxhttp.responseText);
        let boo1=  response.book[0].name ? response.book[0].name : ' ';
        let boo2=  (response.book[1] ? response.book[1].name : ' ');
        let boo3=  (response.book[2] ? response.book[2].name : ' ');
        document.cookies = "currenUser=" + name + ",book1="+boo1+",book2="+boo2+",book3="+boo3;
      }
    
    }
  }
  else {
    alert("הספר בהשאלה ,אנא בחר ספר אחר");
  }

  
  
  

}

async function picLink2(nameBook,id,id2) {
  //books1();
  
    document.getElementById(id).innerHTML = "הוספה";
    document.getElementById(id2).className = "hide";
    let name = document.cookies;
    name = name.split(/[=,]/);

    let fxhttp = new FXMLHttpRequest();
    fxhttp.open('DELETE', '#libary_catalog_template', true);
    fxhttp.onload(validate_book);
    u = JSON.stringify(nameBook)
    name=`${name[1]}`
    fxhttp.send("users/"+name, u);
    

    function validate_book() {
      if (fxhttp.status == '404') {
        alert("אין אפשרות להשאיל את הספר, מצטערים");
      }
      else {
        let response=JSON.parse( fxhttp.responseText);
        let boo1=  response.book[0].name ? response.book[0].name : ' ';
        let boo2=  (response.book[1] ? response.book[1].name : ' ');
        let boo3=  (response.book[2] ? response.book[2].name : ' ');
        document.cookies = "currenUser=" + name + ",book1="+boo1+",book2="+boo2+",book3="+boo3;
      }
    
    }
  }
 

  
  
  









//----SPA TEMPLATE-----

// The main function. Reference to fill page functions.
function change_page(old_page, new_page) {
  var oldP = document.getElementById(old_page);
  document.body.removeChild(oldP);
  var newP = document.getElementById(new_page);
  var clon = newP.content.cloneNode(true);
  document.body.appendChild(clon);

  history.replaceState({}, old_page, '#' + old_page);
  history.pushState({}, new_page, `#${new_page}`);
}

function poppin(ev) {
  console.log(location.hash, 'popstate event');
  let hash = location.hash.replace('#', '');
  hash = hash.replace('page', 'template');

  var oldP = document.querySelector('.page');
  document.body.removeChild(oldP);

  var newP = document.getElementById(hash);
  var clon = newP.content.cloneNode(true);
  document.body.appendChild(clon);
}


window.addEventListener('popstate', poppin);

//---popup form--------
function openForm() {
  document.getElementById("myForm").style.display = "block";
  let name = document.cookies;
  name = name.split(/[=,]/);
  document.getElementById('name').innerHTML = "Welcome " + name[1] + "!";
  document.getElementById('username').innerHTML = "Name: "+ name[1] +'\n';
  document.getElementById('book1').innerHTML = "Book1: "+ name[3] ;
  document.getElementById('book2').innerHTML = "Book2: "+ name[5] ;
  document.getElementById('book3').innerHTML = "Book3: "+ name[7] ;




}
function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

/*
function serch_book() {
    // Declare variables
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');
  
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }
*/



function books1(){
    let book1=new book("גם לנו יהיו פרחים", " פאם גנוף", "image\catalog\גם לנו יהיו פרחים.png");
    let book2=new book("האחות החסרה", " לןסינדה ריילי", "image\catalog\האחות החסרה.png");
    let book3=new book("האריות מסיציליה", "סטפני אאוצי", "image\catalog\האריות מסיציליה.png");
    let book4=new book("החורף של האריות", "סטפני אאוצי", "image\catalog\החורף של האריות.png");
    let book5=new book("השיבה מהולנד", "פול ואלרי", "image\catalog\השיבה מהולנד.png");
    let book6=new book("טבעם של הדברים השבירים", "סוזן מייסנר", "image\catalog\טבעם של הדברים השבירים.png");
    let book7=new book("כסף טוב", "שאול אמסטרמסדקי", "image\catalog\כסף טוב.png");
    let book8=new book("לפני שראתי אותך", "המילי הוטון", "image\catalog\לפני שראיתי אותך.png");
    let book9=new book("סודות בית השמפניה", "קריסטין הרמל", "image\catalog\סודות בית השמפניה.png");
    let book10=new book("עסקת הדוכסית", "טסה דר", "image\catalog\עסקת הדוכסית.png" );
    let book11=new book("שדרת עצי התפוחים", "סוזן ויגס", "image\catalog\שדרת עצי התפוחים.png");
    let book12=new book("שיעורים בכימיה", "בוני גרמוס", "image\catalog\שיעורים בכימיה.png");
    let book13=new book("ספר השמות האבודים", "קריסטין הרמל", "image\catalog\ספר השמות האבודים.png");
    let books=[book1,book2,book3,book4,book5,book6,book7,book8,book9,book10,book11,book12,book13];
    window.localStorage.setItem("books",JSON.stringify(books));
}





