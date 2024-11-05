import { Component } from '@angular/core';
import { AsistenciaService } from '../asistencia.service';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.page.html',
  styleUrls: ['./lista-alumnos.page.scss'],
})
export class ListaAlumnosPage {
  alumnos = this.asistenciaService.obtenerAsistencias('alumno');

  constructor(private asistenciaService: AsistenciaService) {}

  marcarAsistencia(id: number) {
    this.asistenciaService.registrarAsistencia({ id, nombre: 'Alumno ' + id, presente: true, tipo: 'alumno' });
  }
}

