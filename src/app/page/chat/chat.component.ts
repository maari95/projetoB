import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ChatService } from 'src/app/model/chat.service';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  chatMessages: Observable<any[]>;
  newMessage: string = '';
  userName: string = '';

  constructor(private chatService: ChatService) {
    this.chatMessages = this.chatService.getChatMessages();
  }

  sendMessage() {
    if (this.newMessage.trim() !== '') {
      this.chatService.sendMessage({ text: this.newMessage, senderName: this.userName, timestamp: Date.now() });
      this.newMessage = ''; // Limpe a caixa de entrada após o envio
    }
  }
}