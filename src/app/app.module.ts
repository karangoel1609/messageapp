import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SendMessageComponent } from './component/send-message/send-message.component';
import { DisplayMessageComponent } from './component/display-message/display-message.component';
import { FormsModule } from '@angular/forms';
import { MessageServiceService } from './services/message-service.service';
import { DeleteMessageComponent } from './component/delete-message/delete-message.component';

@NgModule({
  declarations: [
    AppComponent,
    SendMessageComponent,
    DisplayMessageComponent,
    DeleteMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [MessageServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
