import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SloganComponent } from './components/slogan/slogan.component';
import { SliderComponent } from './components/slider/slider.component';
import { SubjectComponent } from './components/subject/subject.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { UserComponent } from './components/user/user.component';
import { from } from 'rxjs';
const appRoutes: Routes = [
  {path:"", component: SloganComponent},
  {path:"gallery", component: GalleryComponent},
  {path:"user", component: UserComponent}
  // {path:'user/gallery', component :GalleryComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SloganComponent,
    SliderComponent,
    SubjectComponent,
    GalleryComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
