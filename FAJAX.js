class FXMLHttpRequest {

    constructor() {
        this.method="";
        this.url="";
        this.async= true;
        this.responseText= null; //Returns a string that contains the response to the request as text, or null if the request was unsuccessful or has not yet been sent.
        this.status=''; //Returns the HTTP response status code of the request.
        this.network=new Network();
        this.callBack='';

        this.addEventListener("abort",this.abort);
       // this.addEventListener("load",this.onload);
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
        request=this.method+" /"+ url+"/api/" +api+" HTTP/1.1 "+'\n'+body;
        let response= setTimeout(this.network.sendToServer(request),0);
        responseFormat(response);
        this.callBack();

    }
    abort(ev){//Aborts the request if it has already been sent.

    } 

    onload(callBack){
        this.callBack= callBack;
    }

    //HTTP/1.1 200 OK '\n' body.json
    responseFormat(response){
        let res=response.split('\n');
        this.status=(res[0].split(' '))[1];
        this.responseText=res[1];                   
    }
}







