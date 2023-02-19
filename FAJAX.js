class FXMLHttpRequest {

    constructor() {
        method="";
        url="";
        async= true;
    }
    open(method,url,async){
        this.method=method;
        this.url=url;
        this.async=async;
    }
     
    send(){//get request
        if(this.async===true){
            this.addEventListener('async',onload);
        }

    }
    //send():function(string){}, post request
    abort:(){}
    onload: (){}
}
  



