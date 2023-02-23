var user = {
    userName: "",
    password: "",
    animateScore: [],
    memoryTime: [],
    blocked: 0
};

/* פונקציית התחברות, מקבלת נתנוים מהפורם ועושה בדיקות תקינות לקלט*/

function myFunction() {
    let p1 = document.forms["myForm"]["password1"].value;
    let p2 = document.forms["myForm"]["password2"].value;
    let name = document.forms["myForm"]["fname"].value;

    var _user = JSON.parse(localStorage.getItem(name));
    if (_user === null) {
        if (p1.length >= 6) {
            if (p1 != "" && p2 != "" && p1 === p2) {
                localStorage.setItem("userNow", name);

                localStorage.setItem(name, JSON.stringify(user));
                var u = JSON.parse(localStorage.getItem(name));
                u.userName = name;
                u.password = p1;
                localStorage.setItem(name, JSON.stringify(u));
            }
            else {
                alert("שגיאה באימות סיסמא ");
                return false;
            }
        } else {
            alert("סיסמא צריכה להיות באורך 6 תווים לפחות");
            return false;
        }
    } else {
        alert("שם משתמש כבר קיים. בחר שם אחר");
        return false;
    }
}

function validation_user_FAJAX(p1,p2,name){
    let fxhttp=new FXMLHttpRequest();
    let password1_ = p1;
    let password2_ = p2;
    let name_ = name
    //let email_='';
    const user={
        name: name_,
       // email: email_,
        password1: password1_,
        password2: password2_,
    }
}

function validation(p1,p2,name){
    if(fxhttp.status==404){
            alert("שם משתמש כבר קיים. בחר שם אחר");
            return false;
        }
        else{

        //יעביר לדף הבא, 
        if (p1.length >= 6){
            if(fxhttp.responseText.password1===fxhttp.responseText.password2){
                user.name=name;
                user.password1=p1;
                change_page('joining_page','home_template')
    
                
            }
            else {
                alert("שגיאה באימות סיסמא ");
                return false;
            }
        }else {
            alert("סיסמא צריכה להיות באורך 6 תווים לפחות");
            return false;
        }
        
    }
    
}