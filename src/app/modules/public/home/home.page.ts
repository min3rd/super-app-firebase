import { Component, inject } from '@angular/core';
import { getDatabase, onValue, push, set } from '@angular/fire/database';
import { RouterModule } from '@angular/router';
import { ref } from '@firebase/database';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonButton } from '@ionic/angular/standalone';
import { TranslocoModule } from '@jsverse/transloco';
import { Subject, takeUntil } from 'rxjs';
import { BaseComponent } from 'src/app/core/components/base/base.component';
import { MessageRepository } from 'src/app/repositories/message.repository';
import { RealtimeMessageRepository } from 'src/app/repositories/real-time-message.repository';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonButton, TranslocoModule, RouterModule],
  providers: [MessageRepository, RealtimeMessageRepository],
})
export class HomePage extends BaseComponent {
  private messageRepository: MessageRepository = inject(MessageRepository);
  private realtimeMessageRepository: RealtimeMessageRepository = inject(RealtimeMessageRepository);
  constructor() {
    super();
  }
  override ngOnInit(): void {
    onValue(this.realtimeMessageRepository.findAll(), snapshot => {
      console.log(snapshot.val());

    });
    this.messageRepository.findAll().pipe(takeUntil(this.unsubscribeAll)).subscribe(data => {
      console.log(data);
    });
  }

  addMessage() {
    this.messageRepository.insert({
      content: this.getRandomString(),
    }).subscribe(ref => {
      console.log(ref);
    });
  }

  async addRealtimeMessage() {
    // Create a new post reference with an auto-generated id
    const db = getDatabase();
    const postListRef = ref(db, 'posts');
    const newPostRef = push(postListRef);
    set(newPostRef, {
      content: this.getRandomString(),
    });
  }

  getRandomString(): string {
    return Math.random().toString();
  }
}
