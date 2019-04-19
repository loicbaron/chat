import { Component, OnInit } from '@angular/core';
import { ChatService } from './services/chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'chat';
  message: string;
  received = [];

  constructor(private chat: ChatService){ }

  ngOnInit() {
    this.chat.messages.subscribe(msg => {
      console.log(msg);
      this.received.push(msg.text);
    })
  }

  onKey(event: any) { // without type info
    this.message = event.target.value;
  }

  sendMessage() {
    this.chat.sendMsg(this.message);
  }

}
