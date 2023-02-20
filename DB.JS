const user={
    name: '',
    email: '',
    password: '',
    id: ''
}
const counter = (() => {
    let count = 0;
    return () => {
      count++;
      return count;
    };
  })();

class DB{
    constructor(){}

    getData(list_name,body){
        var List_Name = JSON.parse(localStorage.getItem(list_name)) ?? [];
        if (List_Name === []) {
            return false;
           // setFormMessage(document.querySelector("#login"), "error", "this user not exits");
        }
        else {
            var jUser = List_Name.find(item => item.id === body.id) ?? null;
            if (jUser === null){
                return false;
               // setFormMessage(document.querySelector("#login"), "error", "this user not exits");
            }
            else{ 
                return jUser;
            }             
        }
    }

    getAllData(list_name){
        var List_Name = JSON.parse(localStorage.getItem(list_name)) ?? [];
        if(List_Name === []){
            return false;
        }
        else{
            return List_Name;
        }
    }

    addData(list_name,body){ //add users data
        var List_Name = JSON.parse(localStorage.getItem(list_name)) ?? [];
        if(List_Name === []){
            const user = {
                name: body.username,
                email: body.email,
                password: body.pass,
                id:counter()
            }
        }
        else{
           if(List_Name.find(item => item.email === body.email) ?? null) {
             const user = {
                name: body.username,
                email: body.email,
                password: body.pass,
                id:counter()
             }
           }
           else{
             return false;            
           }
        }
        window.localStorage.removeItem(list_name);
        List_Name.push(user);
        window.localStorage.setItem(list_name, JSON.stringify(List_Name));  
        return  user;
    }

 
    updateData(list_name,body){//update user
        var List_Name = JSON.parse(localStorage.getItem(list_name)) ?? [];
        if (List_Name === []) {
            return false;
           // setFormMessage(document.querySelector("#login"), "error", "this user not exits");
        }
        else {
            var jUser = List_Name.find(item => item.id === body.id) ?? null;
            if (jUser === null){
                return false;
               // setFormMessage(document.querySelector("#login"), "error", "this user not exits");
            }
            else{
                List_Name = List_Name.filter(item => item.id !== id)
                window.localStorage.removeItem(list_name);
                const user = {
                    name: body.username,
                    email: body.email,
                    password: body.pass,
                    id: body.id
                 }
                List_Name.push(user);
                window.localStorage.setItem(list_name, JSON.stringify(List_Name));
                return user;
            }             
        }

    }

    deleteData(list_name,id){
        var List_Name = JSON.parse(localStorage.getItem(list_name)) ?? [];
        if (List_Name === []) {
            return false;
           // setFormMessage(document.querySelector("#login"), "error", "this user not exits");
        }
        else {
            var jUser = List_Name.find(i => i.id === id) ?? null;
            if (jUser === null){
                return false;
               // setFormMessage(document.querySelector("#login"), "error", "this user not exits");
            }
            else{
                List_Name = List_Name.filter(item => item.id !== id)
                window.localStorage.removeItem(list_name);
                window.localStorage.setItem(list_name, JSON.stringify(List_Name));
                return true;
            }             
        }
    }
    searchData(){}
}