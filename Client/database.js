
//delete
function delete_user(duser){
    var users = JSON.parse(localStorage.getItem("users")) ?? [];
    if (users === []) {
       // setFormMessage(document.querySelector("#login"), "error", "this user not exits");
    }
    else {
        var jUser = users.find(i => i.email === duser.email) ?? null;
        if (jUser === null){
           // setFormMessage(document.querySelector("#login"), "error", "this user not exits");
        }
        else{
            users = users.filter(item => item.email !== duser.email)
            window.localStorage.removeItem('users');
            window.localStorage.setItem('users', JSON.stringify(users));
        }
           
    }
}

function add_user(duser){
    var users = JSON.parse(localStorage.getItem("users")) ?? [];
    if(users === [] || (users.find(i => i.email === duser.email) ?? null) ){
        window.localStorage.removeItem('users');
       const user = {
          name: duser.username,
          email: duser.email,
          password: duser.pass
      }
      users.push(user);
      window.localStorage.setItem('users', JSON.stringify(users));
    }
    else{
        alert("this email allready exsis");

    }
}

function search(duser){
    var users = JSON.parse(localStorage.getItem("users")) ?? [];
    if (users === []) {
        alert("this user is not exsis");
       // setFormMessage(document.querySelector("#login"), "error", "this user not exits");
    }
    else {
        var jUser = users.find(i => i.email === duser.email) ?? null;
        if (jUser === null){
            alert("this user is not exsis");
           // setFormMessage(document.querySelector("#login"), "error", "this user not exits");
        }
        else{
            users = users.filter(item => item.email !== duser.email)
            return user;
        }         
    }
    return null;
}

function change(duser, str){
    user=search(duser)
    if(user===null){
        alert("this user is not exsis");
    }
    else{
        var users = JSON.parse(localStorage.getItem("users")) ?? [];
        users = users.filter(item => item.email !== duser.email)
        window.localStorage.removeItem('users');
        users.push(duser);
        window.localStorage.setItem('users', JSON.stringify(users));
    }


}

