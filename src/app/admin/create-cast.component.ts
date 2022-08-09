import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, Form } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-cast',
  templateUrl: './create-cast.component.html',
  styleUrls: ['./create-cast.component.css']
})
export class CreateCastComponent implements OnInit {

  addCastForm:FormGroup;
  submitted:boolean = false;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.addCastForm = this.fb.group({
      Name: ['', Validators.required],
      LastProfilePath: ['', Validators.required],
      Character: ['', Validators.required],
      Gender: ['', Validators.required],
    });
  }

  getaddCastFormControl(){
    return this.addCastForm.controls;
  }

  onSubmit(){
    this.submitted = true;
    if (this.addCastForm.valid){
      alert('Form Submitted Successfully!! \n Check the values in browser console');
      console.table(this.addCastForm.value);
    }
  }

}
