import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  model:string;
  lens:string;
  option:string;
  typeImg:string;
  expansion:string;
  date:string;
  linkImg:any;
  count:number;
  
  constructor() { }

  ngOnInit() {
    this.count = 1;
    this.linkImg = "slide_photo1.jpeg";
    this.model = "Canon 600d";
    this.lens = "EF 50mm f/1.8 STM";
    this.option = "50.0mm · ƒ/2.8 · 1/500s · ISO 100";
    this.typeImg = "Тип зображення JPEG";
    this.expansion = "Розширення  5184×3456";
    this.date = "Створений  19 липня 2019 р."
  }
  ifSlide(){
    if (this.count == 1){
      this.count = 1;
      this.linkImg = "slide_photo1.jpeg";
      this.model = "Canon 600d";
      this.lens = "EF 50mm f/1.8 STM";
      this.option = "50.0mm · ƒ/2.8 · 1/500s · ISO 100";
      this.typeImg = "Тип зображення JPEG";
      this.expansion = "Розширення  5184×3456";
      this.date = "Створений  19 липня 2019 р."
    }
    else if (this.count == 2){
      this.count = 2;
      this.linkImg = "slide_photo2.jpeg";
      this.model = "Canon 600d";
      this.lens = "EF 50mm f/1.8 STM";
      this.option = "50.0mm · ƒ/2.8 · 1/125s · ISO 400";
      this.typeImg = "Тип зображення JPEG";
      this.expansion = "Розширення  4913×3275";
      this.date = "Створений  15 вересня 2019 р."
    }
    else {
      this.count = 3;
      this.linkImg = "slide_photo3.jpeg";
      this.model = "Canon 600d";
      this.lens = "EF 50mm f/1.8 STM";
      this.option = "50.0mm · ƒ/18 · 30s · ISO 100  ";
      this.typeImg = "Тип зображення JPEG";
      this.expansion = "Розширення  5184×3456";
      this.date = "Створений  19 липня 2019 р."
    }
  }
  plusslides(counts){
    if (counts == -1 && this.count == 1){
      this.count = 3;
    }
    else if ( counts == +1 && this.count == 3){
      this.count = 1;
    }
    else{
      this.count = counts+this.count
    };
    this.ifSlide()
  }
  
  

}
