import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonBadge, IonLabel, IonItem, IonList, IonAvatar } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [IonAvatar, IonList, IonItem, IonLabel, IonBadge, IonHeader, IonToolbar, IonTitle, IonContent,  CommonModule, ExploreContainerComponent],
})
export class Tab3Page {
  players: { name: string; score: number }[] = [
    { name: '1.Tom', score: 10 },
    { name: '2.Anna', score: 5 },
    { name: '3.Tae', score: 7 },
    { name: '4.Taylor', score: 5 },
    { name: '5.Joe', score: 4 },
    { name: '6.Suzy', score: 4 },
  ];
  
  constructor() {}
}
