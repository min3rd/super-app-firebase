import { IonHeader, IonContent, IonToolbar, IonButtons, IonButton, IonTitle, IonBackButton } from '@ionic/angular/standalone';
import { Component, inject } from '@angular/core';
import { BaseComponent } from 'src/app/core/components/base/base.component';
import { TranslocoModule } from '@jsverse/transloco';
import { Auth, GoogleAuthProvider, signInWithPopup, user } from '@angular/fire/auth';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],
  imports: [IonHeader, IonContent, IonToolbar, IonButtons, IonButton, IonTitle, IonBackButton, TranslocoModule]
})
export class LogInComponent extends BaseComponent {
  private _auth: Auth = inject(Auth);
  private _provider = new GoogleAuthProvider();
  user$ = user(this._auth);
  override ngOnInit(): void {
    super.ngOnInit();
    this.user$.pipe(takeUntil(this.unsubscribeAll)).subscribe(user => {
      console.log(user);
    });
  }
  logIn() {
    signInWithPopup(this._auth, this._provider).then(result => {
      console.log(result);

      const credential = GoogleAuthProvider.credentialFromResult(result);
      return credential;
    });
  }
}
