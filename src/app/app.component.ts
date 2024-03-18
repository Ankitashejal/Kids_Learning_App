import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet, IonContent, IonTitle, IonToolbar, IonHeader, IonButtons } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonButtons, IonHeader, IonToolbar, IonTitle, IonContent, IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor() {}
}
