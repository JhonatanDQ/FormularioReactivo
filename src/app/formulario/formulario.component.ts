import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators, FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss'
})
export class FormularioComponent {

// constructor(private fm : FormBuilder){

// }

private fm = inject(FormBuilder);


  // nombre = new FormControl("", Validators.required);
  // correo = new FormControl("", [Validators.required , Validators.email]);


  // Formulario = new FormGroup(
  //   {
  //     nombre: new FormControl("", Validators.required),
  //     correo: new FormControl("", [Validators.required , Validators.email]),
  //   }
  //   )


  Formulario = this.fm.group({
      nombre: ["",Validators.required],
      correo: ["",[Validators.required , Validators.email]],
      nuevo: this.fm.group({
          edad: ["", Validators.required]
      })
  })


  get nombre(){
  return this.Formulario.get("nombre") as FormControl
  }

  get correo(){
  return this.Formulario.get("correo") as FormControl
  }

    enviar() {
      console.log(
        this.Formulario.value
      )
    }

}
