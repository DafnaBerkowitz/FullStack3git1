var count = 0;
let start;
let timeNow;
let stopBlocked;

/* פונקציית כניסה, מקבלת נתונים מהפורם ועושה בדיקות תקינות לקלט*/

function check() {
    let p = document.forms["myForm"]["password"].value;
    let name = document.forms["myForm"]["fname"].value;
    //var user = JSON.parse(localStorage.getItem(name));
    user=validation_user_FAJAX(p,name);

    /* בדיקה אם משתמש חסום ואפשר לשחרר את החסימה*/
    if (user != null) {
        timeNow = new Date();
        stopBlocked = new Date(Date.parse(user.stopBlocked));
        if (user.stopBlocked != null && timeNow > stopBlocked) {
            user.blocked = 0;
            localStorage.setItem(user.userName, JSON.stringify(user));
        }
    }

    if (user == null) {
        alert("שם משתמש לא קיים במערכת. אנא הירשם");
        return false;
    } else {
        if (user.blocked === 1) {
            alert("המשתמש חסום ");
            return false;
        }
        else {
            if (count == 3) {
                user.blocked = 1;
                start = new Date();
                start.setTime(start.getTime() + (30 * 1000));
                console.log("start  " + start);
                user.stopBlocked = start;
                console.log("user.stopBlocked   " + user.stopBlocked);
                localStorage.setItem(user.userName, JSON.stringify(user));
                count = 0;
                alert("סיסמא שגויה אנא המתן 30 שניות");
                return false;
            } else {
                if (p != user.password) {
                    count += 1;
                    alert("סיסמא שגויה. אנא נסה שוב");
                    return false;

                } else {
                    localStorage.setItem("userNow", name);
                }
            }
        }
    }
}

function validation_user_FAJAX(p,name){
    let fxhttp=new FXMLHttpRequest();
    let password_ = p;
    let name_ = name
    let email_='';
    const user={
        name: name_,
        email: email_,
        password: password_,
    }

    fxhttp.open('GET','login_template',true);
    fxhttp.onload(validation);
    fxhttp.send('users',JSON.stringify(user));



}
function validation(){
    if(fxhttp.status==404){
        alert("שם משתמש קיים במערכת, בחר שם אחר");
    }
    else{

        //יעביר לדף הבא, 
        fxhttp.responseText.password===p;
    }
    
}
