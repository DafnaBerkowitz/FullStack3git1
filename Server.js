class server{
    constructor(){
        this.method='';
        this.url='';
        this.body='';
        this.api='';
        this.db= new DB();

    }

    getRequestFromNet(request){
        let req=request.split('\n');
        let head= req[0].split(' ');
        let body= req[1];//.split(' ');

        this.method=head[0];
        this.url=head[1];
        this.api=head[2];
    
        let data='';
        switch(this.method){
            case 'GET':{ //get user data
                let part=this.api.split('/');
                if(part.length===2){
                    data= this.db.getData(part[0],JSON.parse(part[1])); //users 1
                }
                else{
                    data=this.db.getAllData(part[0]); //users
                }
                break;
            }
            case 'POST':{//add new user
                data =this.db.addData( this.api,JSON.parse(body));
                break;
            }
            case 'PUT':{//update user book list
                let part=this.api.split('/');
                data =this.db.userAddBook(part[0],head[3],JSON.parse(body));
                break;
            }
            case 'DELETE':{//delete data
                let part=this.api.split('/');
                data =this.db.deleteData(part[0],JSON.parse(part[1]));
                break;
            }
            default: {
                alert("ERROR");
            }
        }
        let response='';
        //response- HTTP/1.1 200 OK '\n' body  
        if(data===false){//if false, cod= 404
            response= "HTTP1.1 "+"404 "+"Not Found ";
        }
        else{
            response= "HTTP1.1 "+"200 "+"OK "+'\n'+ data;
        }
        return response;
    }  
}