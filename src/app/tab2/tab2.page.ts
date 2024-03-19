import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonFooter, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCardSubtitle, IonBackButton, IonButtons, IonImg } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonImg, IonButtons, IonBackButton, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCardContent, IonCard, IonFooter, IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent]
})
export class Tab2Page {

  constructor(private router:Router) {}
  navigateToNumbersPage(){
    this.router.navigate(['/numbers'])
  }

  navigateToAlphabetsPage(){
    this.router.navigate(['/alphabets'])
  }

  navigateToShapesPage(){
    this.router.navigate(['/shapes'])
  }
}
