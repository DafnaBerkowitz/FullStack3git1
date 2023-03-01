class DB {
    static instance = null;
    constructor() {
        if (DB.instance !== null) {
            return DB.instance;
        }

        var List_Name = JSON.parse(localStorage.getItem('users')) ?? [];
        var List_=[];
        if (List_Name.length !== 0) {
            for (const user_ in List_Name) {
                let copyuser = new user(List_Name[user_].name, List_Name[user_].password);
                List_.push(copyuser);
            }
            window.localStorage.setItem('users', JSON.stringify(List_));
        }
        DB.instance = this;
        return DB.instance;
    }

    getData(list_name, body) {
        var List_Name = JSON.parse(localStorage.getItem(list_name)) ?? [];
        if (List_Name.length === 0) {
            return false
        }
        else {
            var jUser = List_Name.find(item => item.name === body) ?? null;
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

    addData(list_name, user_) { //add users data
        var List_Name = JSON.parse(localStorage.getItem(list_name)) ?? [];
        if (List_Name.length === 0) {
            List_Name.push(user_);
            window.localStorage.setItem(list_name, JSON.stringify(List_Name));
        }
        else {
            var jUser = List_Name.find(item => item.name === user_.name) ?? null;
            if (jUser === null) {
                window.localStorage.removeItem(list_name);
                List_Name.push(user_);
                window.localStorage.setItem(list_name, JSON.stringify(List_Name));
            }
            else {
                return false;

            }
        }
        return user_;
    }


    userAddBook(list_name, name, body) {//update user
        var List_Name = JSON.parse(localStorage.getItem(list_name)) ?? [];
        if (List_Name.length === 0) {
            return false;
        }
        else {
            var jUser = List_Name.find(item => item.name === name) ?? null;
            if (jUser === null) {
                return false;
            }
            else {
                if (jUser.book.length < 3) {
                    var Books = JSON.parse(localStorage.getItem('books')) ?? [];
                    var book = Books.find(item => item.name === body) ?? null;
                    var juserBook= jUser.book.find(item=>item.name===body) ?? null;

                    if (book && !juserBook) {
                        jUser.book.push(book);
                        List_Name = List_Name.filter(item => item.name !== name);
                        window.localStorage.removeItem(list_name);
                        List_Name.push(jUser);
                        window.localStorage.setItem(list_name, JSON.stringify(List_Name));
                        return JSON.stringify(jUser);
                    }
                }
                else {
                    return false;
                }
            }

        }
    }




    deleteData(name) {
        var List_Name = JSON.parse(localStorage.getItem(list_name)) ?? [];
        if (List_Name.length === 0) {
            return false;
        }
        else {
            var jUser = List_Name.find(item => item.name === name) ?? null;
            if (jUser === null) {
                return false;

            }
            else {
                List_Name = List_Name.filter(item => item.name !== name)
                window.localStorage.removeItem(list_name);
                window.localStorage.setItem(list_name, JSON.stringify(List_Name));
                return true;
            }
        }
    }


    addBook(list_book, book) {
        var List_book = JSON.parse(localStorage.getItem(list_book)) ?? [];
        if (List_book.length === 0) {
            return false
        }
        else {
            var b = List_book.find(item => item.name === book) ?? null;
            if (b === null) {
                return false;
            }
            else {
                return jUser;

            }
        }

    }
    deleteData(book) {
        var List_book = JSON.parse(localStorage.getItem(list_book)) ?? [];
        if (List_Name.length === 0) {
            return false;
        }
        else {
            var b = List_book.find(item => item.name === book) ?? null;
            if (b === null) {
                return false;

            }
            else {
                List_book = List_book.filter(item => item.name !== book)
                window.localStorage.removeItem(list_book);
                window.localStorage.setItem(list_book, JSON.stringify(List_book));
                return true;
            }
        }
    }



}
