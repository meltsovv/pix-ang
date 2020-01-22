import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  inpFile:any;
  file:any;
  reader:any;
  imgs=[
    [{
      linkImg:'Фото1.jpeg',
      photoTitle:'Socar',
      likeCount:0,
      saveCount:0,
      idPhoto:0,
      tagName:['socar','night'],
    },
    {
      linkImg:'Фото2.jpeg',
      photoTitle:'nightsky',
      likeCount:0,
      saveCount:0,
      idPhoto:1,
      tagName:['stars','night'],
    },
    {
      linkImg:'Фото3.jpeg',
      photoTitle:'forestman',
      likeCount:0,
      saveCount:0,
      idPhoto:2,
      tagName:['forest','natural'],
    },
    {
      linkImg:'Фото4.jpeg',
      photoTitle:'nightgirl',
      likeCount:0,
      saveCount:0,
      idPhoto:3,
      tagName:['forest','natural'],
    },
    {
      linkImg:'Фото5.jpeg',
      photoTitle:'girl-operator',
      likeCount:0,
      saveCount:0,
      idPhoto:4,
      tagName:['forest','natural'],
    },
    {
      linkImg:'Фото6.jpeg',
      photoTitle:'prettygirl',
      likeCount:0,
      saveCount:0,
      idPhoto:5,
      tagName:['forest','natural'],
    },
    {
      linkImg:'Фото7.jpeg',
      photoTitle:'moonchild',
      likeCount:0,
      saveCount:0,
      idPhoto:6,
      tagName:['forest','natural'],
    },
    {
      linkImg:'Фото8.jpeg',
      photoTitle:'street',
      likeCount:0,
      saveCount:0,
      idPhoto:7,
      tagName:['forest','natural'],
    },
    {
      linkImg:'Фото9.jpeg',
      photoTitle:'space',
      likeCount:0,
      saveCount:0,
      idPhoto:8,
      tagName:['forest','natural'],
    },
    {
      linkImg:'Фото10.jpeg',
      photoTitle:'dam',
      likeCount:0,
      saveCount:0,
      idPhoto:9,
      tagName:['forest','natural'],
    },
    {
      linkImg:'Фото11.jpeg',
      photoTitle:'hardzteam',
      likeCount:0,
      saveCount:0,
      idPhoto:10,
      tagName:['forest','natural'],
    },
    {
      linkImg:'Фото12.jpeg',
      photoTitle:'sunnyway',
      likeCount:0,
      saveCount:0,
      idPhoto:11,
      tagName:['forest','natural'],
    },
    {
      linkImg:'Фото13.jpeg',
      photoTitle:'sunnyflowers',
      likeCount:0,
      saveCount:0,
      idPhoto:12,
      tagName:['forest','natural'],
    },
    {
      linkImg:'Фото14.jpeg',
      photoTitle:'castle',
      likeCount:0,
      saveCount:0,
      idPhoto:13,
      tagName:['forest','natural'],
    },
    {
      linkImg:'Фото15.jpeg',
      photoTitle:'girlinsunflowers',
      likeCount:0,
      saveCount:0,
      idPhoto:14,
      tagName:['forest','natural'],
    },
    {
      linkImg:'Фото16.jpeg',
      photoTitle:'girlinglasses',
      likeCount:0,
      saveCount:0,
      idPhoto:15,
      tagName:['forest','natural'],
    },
    {
      linkImg:'Фото17.jpeg',
      photoTitle:'girlsniffingaflower',
      likeCount:0,
      saveCount:0,
      idPhoto:16,
      tagName:['forest','natural'],
    },
    {
      linkImg:'Фото18.jpeg',
      photoTitle:'prisoner',
      likeCount:0,
      saveCount:0,
      idPhoto:17,
      tagName:['forest','natural'],
    },
    {
      linkImg:'Фото19.jpeg',
      photoTitle:'boy',
      likeCount:0,
      saveCount:0,
      idPhoto:18,
      tagName:['forest','natural'],
    },
    {
      linkImg:'Фото20.jpeg',
      photoTitle:'hotel',
      likeCount:0,
      saveCount:0,
      idPhoto:19,
      tagName:['forest','natural'],
    },
    {
      linkImg:'Фото21.jpeg',
      photoTitle:'forum',
      likeCount:0,
      saveCount:0,
      idPhoto:20,
      tagName:['forest','natural'],
    }
    ],
    [
    {
      linkImg:'Фото22.jpeg',
      photoTitle:'boy',
      likeCount:0,
      saveCount:0,
      idPhoto:21,
      tagName:['socar','night'],
    },
    {
      linkImg:'Фото23.jpeg',
      photoTitle:'strong',
      likeCount:0,
      saveCount:0,
      idPhoto:22,
      tagName:['stars','night'],
    },
    {
      linkImg:'Фото24.jpeg',
      photoTitle:'strongman',
      likeCount:0,
      saveCount:0,
      idPhoto:23,
      tagName:['forest','natural'],
    },
    {
      linkImg:'Фото25.jpeg',
      photoTitle:'selfi',
      likeCount:0,
      saveCount:0,
      idPhoto:24,
      tagName:['forest','natural'],
    },
    {
      linkImg:'Фото26.jpeg',
      photoTitle:'sun',
      likeCount:0,
      saveCount:0,
      idPhoto:25,
      tagName:['forest','natural'],
    },
    {
      linkImg:'Фото27.jpeg',
      photoTitle:'undeground',
      likeCount:0,
      saveCount:0,
      idPhoto:26,
      tagName:['forest','natural'],
    },
    {
      linkImg:'Фото28.jpeg',
      photoTitle:'family',
      likeCount:0,
      saveCount:0,
      idPhoto:27,
      tagName:['forest','natural'],
    },
    {
      linkImg:'Фото29.jpeg',
      photoTitle:'meet',
      likeCount:0,
      saveCount:0,
      idPhoto:28,
      tagName:['forest','natural'],
    },
    {
      linkImg:'Фото30.jpeg',
      photoTitle:'cardsplay',
      likeCount:0,
      saveCount:0,
      idPhoto:29,
      tagName:['forest','natural'],
    },
    {
      linkImg:'Фото31.jpeg',
      photoTitle:'father',
      likeCount:0,
      saveCount:0,
      idPhoto:30,
      tagName:['forest','natural'],
    },
    {
      linkImg:'Фото32.jpeg',
      photoTitle:'prettygirl',
      likeCount:0,
      saveCount:0,
      idPhoto:31,
      tagName:['forest','natural'],
    },
    {
      linkImg:'Фото33.jpeg',
      photoTitle:'sweet',
      likeCount:0,
      saveCount:0,
      idPhoto:32,
      tagName:['forest','natural'],
    },
    {
      linkImg:'Фото34.jpeg',
      photoTitle:'racenation',
      likeCount:0,
      saveCount:0,
      idPhoto:33,
      tagName:['forest','natural'],
    },
    {
      linkImg:'Фото35.jpeg',
      photoTitle:'food',
      likeCount:0,
      saveCount:0,
      idPhoto:34,
      tagName:['forest','natural'],
    },
    {
      linkImg:'Фото36.jpeg',
      photoTitle:'sea',
      likeCount:0,
      saveCount:0,
      idPhoto:35,
      tagName:['forest','natural'],
    },
    {
      linkImg:'Фото37.jpeg',
      photoTitle:'familysea',
      likeCount:0,
      saveCount:0,
      idPhoto:36,
      tagName:['forest','natural'],
    },
    {
      linkImg:'Фото38.jpeg',
      photoTitle:'nightstreet',
      likeCount:0,
      saveCount:0,
      idPhoto:37,
      tagName:['forest','natural'],
    },
    {
      linkImg:'Фото39.jpeg',
      photoTitle:'lake',
      likeCount:0,
      saveCount:0,
      idPhoto:38,
      tagName:['forest','natural'],
    },
    {
      linkImg:'Фото40.jpeg',
      photoTitle:'sungirl',
      likeCount:0,
      saveCount:0,
      idPhoto:39,
      tagName:['forest','natural'],
    },
    {
      linkImg:'Фото41.jpeg',
      photoTitle:'mountain',
      likeCount:0,
      saveCount:0,
      idPhoto:40,
      tagName:['forest','natural'],
    },
    {
      linkImg:'Фото42.jpeg',
      photoTitle:'flower',
      likeCount:0,
      saveCount:0,
      idPhoto:41,
      tagName:['forest','natural'],
    }
    ]
  ];
  countPage:number;
  metaData: any;
  slider:boolean = false;
  idP:number;
 

  ngOnInit() {
    this.countPage = 0;
    this.idP = 0;
    this.inpFile = document.getElementById("inpFile");

    
    this.inpFile.addEventListener("change", function(){
      this.file = this.files[0];
    

      if (this.file){
        this.reader = new FileReader(); 

        

        this.reader.addEventListener('load', function(){
          console.log(this.result)
          document.getElementById('text_download').style.display = 'none'
          document.getElementById('add').style.display = 'none'
          document.getElementById("imgPr").style.display = 'block';
          document.getElementById("imgPr").setAttribute("src", this.result);
          document.getElementById("form").style.display = 'block';
          

        });
        this.reader.readAsDataURL(this.file)
      }

    })  
    
  }
  openGalerry(){
    document.getElementById("album1").style.display = 'block';
    document.getElementById("addPhoto").style.display = 'none';
    document.getElementById('btAddPhoto').classList.remove('active')
    document.getElementById('btMyPhoto').classList.add('active')

  }
  openAdd(){
    document.getElementById("album1").style.display = 'none';
    document.getElementById("addPhoto").style.display = 'block';
    document.getElementById('btMyPhoto').classList.remove('active')
    document.getElementById('btAddPhoto').classList.add('active')
  }
  openSlider(i, c){
    this.countPage = c;
    this.idP = i;
    this.slider = !this.slider;
    console.log ("idp"+this.idP)
    console.log ("countPage"+this.countPage)
  };
  closeSlider(){
    this.slider =!this.slider;
  }
  plusSlide(c){
    console.log ("idp"+this.idP)
    console.log ("countPage"+this.countPage)
    if (this.idP == 0 && c == -1){  
      console.log (this.idP)
      this.idP = this.imgs[this.countPage].length-1
    }
    else if (this.idP == this.imgs[this.countPage].length-1 && c == 1){
      this.idP = 0
    }
    else {
      this.idP +=c
    }
  }
  next(count){
    if (this.countPage == 0 && count == -1){
      this.countPage = this.imgs.length-1

    }
    else if (this.countPage == this.imgs.length-1 && count == 1){
      this.countPage = 0
    }
    else{
      this.countPage = this.countPage + count
    }
    
  }
  like(i,c){
    if (c >0){
      i = i - this.imgs[c-1].length
      this.imgs[c][i].likeCount = this.imgs[c][i].likeCount + 1;
    }
    else{
      this.imgs[c][i].likeCount = this.imgs[c][i].likeCount + 1
    }
  }
  save(i,c){
    if (c >0){
      i = i - this.imgs[c-1].length
      this.imgs[c][i].saveCount = this.imgs[c][i].saveCount + 1;
    }
    else{
      this.imgs[c][i].saveCount = this.imgs[c][i].saveCount + 1
    }
  }

  // loaded(e) {
  //   exif.getData(e.target, function() {
  //       console.log(e.target);
  //       var allMetaData = exif.getAllTags(this);
  //       console.log(allMetaData);
  //   });
  // }
   // Should probably create an interface or something.

    // async loaded(e) {
    //     this.metaData = await this.getGpsData(e.target);
    // }

    // getGpsData(image): Promise<any> {
    //     return new Promise((resolve, reject) => {
    //         exif.getData(image, function () {
    //             var allMetaData = exif.getAllTags(this);
    //             console.log(allMetaData);
    //             resolve(allMetaData);
    //         });
    //     });
    // }
  
}
interface imgData{
  countPhoto:number;
  linkImg:string;
  photoTitle:string;
  likeCount:number;
  saveCount:number;
  idPhoto:number;
  tagName:any;
  

}
  

