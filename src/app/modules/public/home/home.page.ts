import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonButton } from '@ionic/angular/standalone';
import { TranslocoModule } from '@jsverse/transloco';
import { BaseComponent } from 'src/app/core/components/base/base.component';
import { MessageRepository } from 'src/app/repositories/message.repository';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonButton, TranslocoModule, RouterModule],
  providers: [MessageRepository],
})
export class HomePage extends BaseComponent {
  private messageRepository: MessageRepository = inject(MessageRepository);
  constructor() {
    super();
  }

  addMessage() {
    this.messageRepository.insert({
      content: this.getRandomString().toString(),
    }).subscribe(ref => {
      console.log(ref);
    });
  }

  getRandomString() {
    return Math.random();
  }
}
