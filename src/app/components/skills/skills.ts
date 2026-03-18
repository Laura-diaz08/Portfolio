import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class SkillsComponent implements OnInit {
  skills: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getPortfolioData().subscribe(data => {
      this.skills = data.skills;
    });
  }
}
