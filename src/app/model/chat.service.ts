import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  userName: any;

  constructor(private db: AngularFireDatabase) { }

  getChatMessages(): Observable<any[]> {
    return this.db.list('chat').valueChanges(); 
  }

  sendMessage(message: any): void {
    if (!message.senderName) {
      // Não envie mensagens sem um nome de remetente definido
      console.error('O nome do remetente não está definido.');
      return;
    }
  
    const id = uuidv4();
    const messageWithId = { ...message, id };
    this.db.list('chat').push(messageWithId);
  }
}
