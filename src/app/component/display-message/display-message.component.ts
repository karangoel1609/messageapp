import { Component, OnInit } from '@angular/core';
import { MessageServiceService } from 'src/app/services/message-service.service';

@Component({
  selector: 'app-display-message',
  templateUrl: './display-message.component.html',
  styleUrls: ['./display-message.component.css']
})
export class DisplayMessageComponent implements OnInit {


  messages =[ {"id":"","description":""}]


  constructor(private messageService:MessageServiceService) { }

  ngOnInit(): void {this.messageService.getMesaages()
    .subscribe(res=>{this.messages= res},err=>{console.log("error getting messages" + err)});


   



  }
  

 

}
