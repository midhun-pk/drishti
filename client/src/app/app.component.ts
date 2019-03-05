import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'client';
  tasks: any[];
  frames: any[];
  selected = [];
  prevSelected: number;
  selectedImage: boolean;
  selectedTask: string;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.getAllTasks().subscribe((response: any[]) => {
      this.tasks = response;
    }, (error) => {
      console.log(error)
    });
  }

  onClick(task: string) {
    this.selectedTask = task;
    this.selectedImage = false;
    this.selected = [];
    this.dataService.getFrames(task).subscribe((response: any[]) => {
      this.frames = response;
      for (let i in this.frames) {
        this.selected.push(false);
      }
    }, (error) => {
      console.log(error)
    })
  }

  onImageClick(index: number) {
    if (this.selectedImage) {
      this.prevSelected = null;
      this.selectedImage = false;
    }
    else {
      if (this.selected[index]) {
        this.selected[index] = false;
      } else {
        this.prevSelected = index;
        this.selected[index] = true;
        this.selectedImage = true;
      }
    }
  }


  onMouseOver(index: number) {
    if (this.selectedImage) {
      if (index > this.prevSelected) {
        for (let i = this.prevSelected; i <= index; i++) {
          this.selected[i] = true;
        }
      }
      if (index < this.prevSelected) {
        for (let i = index; i <= this.prevSelected; i++) {
          this.selected[i] = true;
        }
      }
    }
  }

  onSubmit() {
    let selectedFrames = [];
    for (let i in this.selected) {
      if (this.selected[i]) {
        selectedFrames.push(this.frames[i])
      }
    }
    this.dataService.saveSelected(this.selectedTask, selectedFrames).subscribe((response: any[]) => {
      console.log(response);
    }, (error) => {
      console.log(error)
    });
  }
}
