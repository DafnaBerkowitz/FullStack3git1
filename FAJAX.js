class FXMLHttpRequest {

    constructor() {
        this.method="";
        this.url="";
        this.async= true;
        this.responseText= null; //Returns a string that contains the response to the request as text, or null if the request was unsuccessful or has not yet been sent.
        this.status=''; //Returns the HTTP response status code of the request.
        this.network=new Network();
        this.addEventListener("abort",this.abort);
        this.addEventListener("load",this.onload);
    }
    open(method,url,async){
        this.method=method;
        this.url=url;
        this.async=async;
    }

  
     //GET /hello.htm HTTP/1.1     (This is Request-Line sent by the client)
     //HTTP/1.1 200 OK             (This is Status-Line sent by the server)

    send(api,body=""){//get request
        let request="";
        if(this.method==='POST'){
            request=this.method+" /"+ url+"/api/" +api+" HTTP/1.1 "+'\n'+body;
        }
        else{
            request= this.method+" /"+ url+"/api/"+api +" HTTP/1.1";
        }
        this.network.sendToServer(request);           
    }
    abort(ev){//Aborts the request if it has already been sent.

    } 

    //HTTP/1.1 200 OK '\n' body.json
    onload(ev){
        let response=ev; //?????????
        // callback(null, response);
        let req=response.split(' ');
        this.status=req[1];
        this.responseText=req[3].split('\n')[1];                   
       //     callback(new Error('Request failed'), null);

    }
}

/*
function ready_status(stat){
    if(stat===200){
        return true;
    }
    else{
        if(stat===404){
            alert("sorry, the page not found");
            return false;
            //not found
        }
        if(stat===500){
            alert("error cod");
            return false;
            //(Internal Server Error) response code
        }
    }
}
*/




