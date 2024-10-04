import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-app4',
  standalone: true,
  imports: [NgxPaginationModule, CommonModule],
  templateUrl: './app4.component.html',
  styleUrl: './app4.component.css'
})
export class App4Component {

  // Array of objects to represent table data
items: { id: number; name: string; age: number; email: string }[] = [];
p: number = 1; // Current page number

constructor() {
  // Generate dummy data for the table
  for (let i = 1; i <= 50; i++) {
    this.items.push({
      id: i,
      name: `User ${i}`,
      age: 20 + i,
      email: `user${i}@example.com`
    });
  }
}
}
