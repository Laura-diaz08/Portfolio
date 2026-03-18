import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent implements OnInit {
  personalInfo: any;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getPortfolioData().subscribe(data => {
      this.personalInfo = data.personalInfo;
    });
  }
}