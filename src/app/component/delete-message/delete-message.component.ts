import { Component, OnInit } from '@angular/core';
import { MessageServiceService } from 'src/app/services/message-service.service';

@Component({
  selector: 'app-delete-message',
  templateUrl: './delete-message.component.html',
  styleUrls: ['./delete-message.component.css']
})
export class DeleteMessageComponent implements OnInit {

  password="";

  constructor(private messageService:MessageServiceService) { }

  ngOnInit(): void {
  }





  deleteMessage(){


    if(this.password=="nothing")
this.messageService.deleteMessage().subscribe(res=>{console.log(res)},err=>{console.log(err)})
  }

}
