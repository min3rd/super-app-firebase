import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonButton } from '@ionic/angular/standalone';
import { TranslocoModule } from '@jsverse/transloco';
import { BaseComponent } from 'src/app/core/components/base/base.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonButton, TranslocoModule, RouterModule],
})
export class HomePage extends BaseComponent {
  constructor() {
    super();
  }
}
