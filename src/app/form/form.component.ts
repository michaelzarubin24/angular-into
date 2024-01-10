import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  @Output() postAdded = new EventEmitter<any>();
  showForm = false;
  newPostTitle = '';
  newPostDescription = '';

  onSubmit() {
    // Add logic to handle form submission and emit an event with the new post data
    if (
      this.newPostTitle.trim() !== '' &&
      this.newPostDescription.trim() !== ''
    ) {
      const newPost = {
        title: this.newPostTitle,
        description: this.newPostDescription,
      };
      this.postAdded.emit(newPost);
      this.newPostTitle = '';
      this.newPostDescription = '';
      this.showForm = false; // Hide the form after submission
    }
  }

  toggleForm() {
    this.showForm = !this.showForm;
  }
}
