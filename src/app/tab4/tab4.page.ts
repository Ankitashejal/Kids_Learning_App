import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class Tab4Page implements OnInit {
  userName: string = 'Anki'; 
  userAge: number = 8; // 
  favoriteColor: string = 'Red 🔴'; 
  favoriteAnimalSound: string = 'Woof 🐶'; 
  favoriteShape: string = 'Circle ⭕'; //

  achievements: string[] = [
    'Color Master 🎓', 
    'Number Ninja 🎓', 
    'Shape Explorer 🎓', 
    'Alphabet Champion 🎓'
  ];

  totalTasks = 10; 
  completedTasks = 7; 
  calculateCompletionPercentage(): number {
    return (this.completedTasks / this.totalTasks) * 100;
  }
  constructor() { }

  ngOnInit() {
  }

}
