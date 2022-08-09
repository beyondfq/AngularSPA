import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.css']
})
export class CreateMovieComponent implements OnInit {

  addMovieForm:FormGroup;
  submitted:boolean = false;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.addMovieForm = this.fb.group({
      Title: ['', Validators.required],
      Overview: ['', Validators.required],
      Budget: ['', Validators.required],
      Revenue: ['', Validators.required],
      PosterUrl: ['', Validators.required],
      OriginalLanguage: ['', Validators.required],
      ReleaseDate: ['', Validators.required],
      RunTime: ['', Validators.required],
      Price: ['', Validators.required]
    });
  }

  get addMovieFormControl() {
    return this.addMovieForm.controls;
  }

  onSubmit(){
    this.submitted = true;
    if (this.addMovieForm.valid){
      alert('Form Submitted Successfully!! \n Check the values in browser console');
      console.table(this.addMovieForm.value);
    }
  }

}
