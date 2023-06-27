import { Component, ElementRef, ViewChild, AfterViewInit, OnInit} from '@angular/core';
import { Router } from '@angular/router'; 
import { FormBuilder, FormGroup, Validators} from '@angular/forms'; 
import { NotasService } from 'src/app/servicio/notas.service';

@Component({
  selector: 'app-listar-notas',
  templateUrl: './listar-notas.component.html',
  styleUrls: ['./listar-notas.component.css']
})
export class ListarNotasComponent implements OnInit{
  titulo = 'Administrar mis notas';
  noteForm:FormGroup;
  usuario?: string;
  opcionSeleccionada: string = 'misNotas';

  constructor(
    private fb: FormBuilder,
    private router:Router,
    ){
      this.noteForm = this.fb.group({
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]]
      });
    }

  cambiarOpcion(opcion: string) {
    if(opcion === 'misNotas' ){
      this.titulo = 'Administrar mis notas';
    }else{
      this.titulo = 'Administrar notas de grupo'; 
    }
    this.opcionSeleccionada = opcion;
  }
  
  saveNote(){
    
  }

  logout(){
    localStorage.removeItem('isAuthenticated');
    this.router.navigate(['/']);
  }

  saveData() {
    // Lógica para guardar los datos del formulario
    console.log('Guardar datos');
  }

  ngOnInit(): void {
    this.usuario = localStorage.getItem('email')!;
  }
}
