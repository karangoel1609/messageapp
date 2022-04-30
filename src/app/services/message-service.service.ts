import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MessageServiceService {


  private _sendMessageUrl ="http://localhost:3000/api/sendmessage";
  private _displayMessageUrl ="http://localhost:3000/api/displaymessages";
  private _deleteMessageUrl = "http://localhost:3000/api/deleatemessages";

  constructor(private http:HttpClient) { }

  getMesaages(){
    return this.http.get<any>(this._displayMessageUrl);
  }



  postMessage(message:any){
    return this.http.post<any>(this._sendMessageUrl,message);
  }


  deleteMessage(){
    return this.http.delete<any>(this._deleteMessageUrl);
  }
}
