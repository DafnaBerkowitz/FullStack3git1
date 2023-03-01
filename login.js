

/* פונקציית כניסה, מקבלת נתונים מהפורם ועושה בדיקות תקינות לקלט*/


function validationLogin_user_FAJAX() {
    let p = document.forms["myForm"]["password"].value;
    let name = document.forms["myForm"]["fname"].value;
    let fxhttp = new FXMLHttpRequest();
    let user_ = new user(name, p);
    if (p.length >= 6) {
        fxhttp.open('GET', "#login_template", true);
        fxhttp.onload(login_validation);
        u = JSON.stringify(user_.name)
        fxhttp.send("users/"+u);
    }
    else {
        alert("סיסמא צריכה להיות באורך 6 תווים לפחות");
        document.forms["myForm"]["password"].value = "";
        document.forms["myForm"]["fname"].value = "";
    }

    function login_validation() {
        if (fxhttp.status == '404') {
            alert("שם משתמש לא קיים במערכת");
            document.forms["myForm"]["password"].value = "";
            document.forms["myForm"]["fname"].value = "";
        }
        else {
         
            document.cookies="currenUser= "+name;
            change_page('login_page', 'libary_template');
        }

    }
}

