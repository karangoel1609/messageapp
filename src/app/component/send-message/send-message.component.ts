import { Component, OnInit } from '@angular/core';
import { MessageServiceService } from 'src/app/services/message-service.service';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.css']
})
export class SendMessageComponent implements OnInit {

  myMessage={'description':""};

   firstNameInput = document.getElementById('exampleFormControlTextarea1');

  constructor(private messageService:MessageServiceService) { }

  ngOnInit(): void {
  }




  sendMessage(){
    console.log(this.myMessage);


    if(this.myMessage!={'description':""}){
      this.messageService.postMessage(this.myMessage).subscribe(res=>{console.log(res)},err=>{console.log("error sending"+err)});


      this.myMessage.description = "";
      

    }


  }

}
