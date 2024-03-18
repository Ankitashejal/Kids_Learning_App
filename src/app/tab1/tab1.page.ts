import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonFooter, IonIcon, IonCardContent, IonCardHeader, IonCol, IonCard, IonButtons, IonAvatar, IonLabel, IonButton, IonItem, IonInput } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonInput, IonItem, IonButton, IonLabel, IonAvatar, IonButtons, IonCard, IonCol, IonCardHeader, IonCardContent, IonIcon, IonFooter, IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent],
})
export class Tab1Page {
  constructor() {}
}
