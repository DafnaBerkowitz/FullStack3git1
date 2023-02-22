class network{
    constructor(){
        this.server= new server();
    }

    sendToServer(request){
        let response= this.server.getRequestFromNet(request);
        return response;
    }

}