class DB {
    constructor(){}


    getData(list_name, body) {
        var List_Name = JSON.parse(localStorage.getItem(list_name)) ?? [];
        if (List_Name.length === 0) {
            return false
        }
        else {
            var jUser = List_Name.find(item => item.name === body.name) ?? null;
            if (jUser === null) {
                return false;
            }
            else {
                return jUser;
            }
        }
    }

    getAllData(list_name) {
        var List_Name = JSON.parse(localStorage.getItem(list_name)) ?? [];
        if (List_Name.length === 0) {
            return false;
        }
        else {
            return List_Name;
        }
    }

    addData(list_name, body) { //add users data
        var List_Name = JSON.parse(localStorage.getItem(list_name)) ?? [];
        if (List_Name.length === 0) {
            user = {
                name: body.name,
                password: body.password,
            }
        }
        else {
            var jUser = List_Name.find(item => item.name === body.name) ?? null;
            if (jUser === null) {
                user = {
                    name: body.name,
                    password: body.password,
                }
            }
            else {
                return false;
            }
        }
        window.localStorage.removeItem(list_name);
        List_Name.push(user);
        window.localStorage.setItem(list_name, JSON.stringify(List_Name));
        return user;
    }


    updateData(list_name, body) {//update user
        var List_Name = JSON.parse(localStorage.getItem(list_name)) ?? [];
        if (List_Name.length === 0) {
            return false;
            // setFormMessage(document.querySelector("#login"), "error", "this user not exits");
        }
        else {
            var jUser = List_Name.find(item => item.name === body.name) ?? null;
            if (jUser === null) {
                return false;
                // setFormMessage(document.querySelector("#login"), "error", "this user not exits");
            }
            else {
                List_Name = List_Name.filter(item => item.name === body.name)
                window.localStorage.removeItem(list_name);
                user = {
                    name: body.name,
                    password: body.password,
                }
                List_Name.push(user);
                window.localStorage.setItem(list_name, JSON.stringify(List_Name));
                return user;
            }
        }

    }

    deleteData(name) {
        var List_Name = JSON.parse(localStorage.getItem(list_name)) ?? [];
        if (List_Name.length === 0) {
            return false;
            // setFormMessage(document.querySelector("#login"), "error", "this user not exits");
        }
        else {
            var jUser = List_Name.find(item => item.name === body.name) ?? null;
            if (jUser === null) {
                return false;
                // setFormMessage(document.querySelector("#login"), "error", "this user not exits");
            }
            else {
                List_Name = List_Name.filter(item => item.name !== name)
                window.localStorage.removeItem(list_name);
                window.localStorage.setItem(list_name, JSON.stringify(List_Name));
                return true;
            }
        }
    }
    searchData() { }



}
