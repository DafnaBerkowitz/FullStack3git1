class server{
    constructor(){
        this.method='';
        this.url='';
        this.body='';
        this.api='';
        this.db= new DB();

    }

    getRequestFromNet(request){
        let req= request.split(' ');
        this.method=req[0];
        this.url=req[1];
        this.api=JSON.parse(req[2]);
        if(req.length===5){
            this.body=JSON.parse(req[4]);
        }
        let data='';
        switch(this.method){
            case GET:{
                let part=this.api.split('/');
                if(part.length===2){
                    data= this.db.getData(part[0],part[1]); //users 1
                }
                else{
                    data=this.db.getAllData(part[0]); //users
                }
                break;
            }
            case POST:{//add new data
                data =this.db.addData(api,body);
                break;
            }
            case PUT:{//update data
                let part=this.api.split('/');
                data =this.db.updateData(part[0],part[1],body);
                break;
            }
            case DELETE:{//delete data
                let part=this.api.split('/');
                data =this.db.deleteData(part[0],part[1]);
                break;
            }
        }
        let response='';
        //response- HTTP/1.1 200 OK '\n' body  
        if(data===false){//if false, cod= 404
            response= "HTTP1.1 "+"404 "+"Not Found ";
        }
        else{
            response= "HTTP1.1 "+"200 "+"OK "+'\n'+ JSON.stringify(data);
        }
        return response;
    }  
}