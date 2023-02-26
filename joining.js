

/* פונקציית התחברות, מקבלת נתנוים מהפורם ועושה בדיקות תקינות לקלט*/


function validation_user_FAJAX(){
    let p1 = document.forms["myForm"]["password1"].value;
    let p2 = document.forms["myForm"]["password2"].value;
    let name = document.forms["myForm"]["fname"].value;
    let fxhttp=new FXMLHttpRequest();
    const user={
        name: name,
        password: p1,
        
    }
    if (p1.length >= 6){
        if(p1===p2){
            fxhttp.open('POST',"#joining_template",true);
            fxhttp.onload(validation);
            u=JSON.stringify(user)
            fxhttp.send("users",u);
            
        }
        else{
            alert("שגיאה באימות סיסמא ");
            document.forms["myForm"]["password1"].value="";
            document.forms["myForm"]["password2"].value="";
            document.forms["myForm"]["fname"].value="";
                
        }
    }
    else{
        alert("סיסמא צריכה להיות באורך 6 תווים לפחות");
            
    }
    
}

function validation(){
    if(fxhttp.status==404){
            alert("שם משתמש כבר קיים. בחר שם אחר");
            
        }
        else{

        //יעביר לדף הבא, 
        let responseCurrentUesr=fxhttp.responseText;

                change_page('joining_page','libary_templatemplate')
    
                
            }
          
        }
   