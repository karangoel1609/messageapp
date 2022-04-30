import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteMessageComponent } from './component/delete-message/delete-message.component';
import { DisplayMessageComponent } from './component/display-message/display-message.component';
import { SendMessageComponent } from './component/send-message/send-message.component';

const routes: Routes = [
{path:'',redirectTo:'/displaymessage', pathMatch:'full'},

{path:'displaymessage',component:DisplayMessageComponent},
{path:'sendmessage',component:SendMessageComponent},
{path:'del',component:DeleteMessageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
