import { HomeComponent } from './home/home.component';
import { PyramidComponent } from './pyramid/pyramid.component';
import { CitizenIdComponent } from './citizen-id/citizen-id.component';
import { TriangleComponent } from './triangle/triangle.component';
import { PostComponent } from './post/post.component';
import { HeroComponent } from './hero/hero.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'hero', component: HeroComponent },
  { path: 'post', component: PostComponent },
  { path: 'triangle', component: TriangleComponent },
  { path: 'citizen-id', component: CitizenIdComponent },
  { path: 'pyramid', component: PyramidComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
