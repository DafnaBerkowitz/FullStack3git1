class network{
    constructor(){
        this.server= new Server();
    }

    sendToNet(request){
        let response= this.server.getRequestFromNet(request);
        return response;
    }

}