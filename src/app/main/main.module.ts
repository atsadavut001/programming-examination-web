import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainRoutingModule } from './main-routing.module';
import { HeroComponent } from './hero/hero.component';
import { PostComponent } from './post/post.component';
import { TriangleComponent } from './triangle/triangle.component';
import { CitizenIdComponent } from './citizen-id/citizen-id.component';
import { PyramidComponent } from './pyramid/pyramid.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    HeroComponent,
    PostComponent,
    TriangleComponent,
    CitizenIdComponent,
    PyramidComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    FormsModule
  ]
})
export class MainModule { }
