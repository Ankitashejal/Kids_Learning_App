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
    { name: 'Tom', score: 10 },
    { name: 'Anna', score: 5 },
    { name: 'Tae', score: 7 },
    { name: 'Taylor', score: 5 },
    { name: 'Joe', score: 4 },
    { name: 'Suzy', score: 4 },
  ];
  constructor() {}
}
