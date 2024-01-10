import { Component } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css',
})
export class PostsComponent {
  posts: any[] = [
    { title: 'Post 1', description: 'This is the description of post 1' },
    { title: 'Post 2', description: 'This is the description of post 2' },
  ];

  onPostAdded(newPost: any) {
    this.posts.push(newPost);
  }
}
