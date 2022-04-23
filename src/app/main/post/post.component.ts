import { PostService } from './post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  posts: any = [];
  constructor(private service: PostService) { }

  async ngOnInit() {
   await  this.getPost();
  }

  async getPost() {
    this.posts = await this.service.getPost();
  }
}
