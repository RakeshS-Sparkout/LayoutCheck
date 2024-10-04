import { Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-app3',
  standalone: true,
  imports: [],
  templateUrl: './app3.component.html',
  styleUrl: './app3.component.css'
})
export class App3Component implements OnInit {

  ngOnInit(): void {
    initFlowbite();
  }

}
