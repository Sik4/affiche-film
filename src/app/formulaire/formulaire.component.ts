import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';



@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {
  model: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.model = this.formBuilder.group({
      titre: ['', [
        Validators.required
      ]],
      appreciation: '',
      url: '',
      acteurs: this.formBuilder.array([])
    });
  }

  addActeur() {
    const acteur = this.formBuilder.group({
      firstname : []
    });
    this.acteurForm.push(acteur);
  }

  get acteurForm() {
    return this.model.get('acteurs') as FormArray;
  }

  get titre() {
    return this.model.get('titre');
  }

  get appreciation() {
    return this.model.get('appreciation');
  }

  get url() {
    return this.model.get('url');
  }

}
