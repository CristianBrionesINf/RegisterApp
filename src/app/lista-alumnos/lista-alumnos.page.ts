import { Component, OnInit } from '@angular/core';
import { AsistenciaService } from '../asistencia.service';
import { Asistencia } from '../asistencia.service';


@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.page.html',
  styleUrls: ['./lista-alumnos.page.scss'],
})
export class ListaAlumnosPage implements OnInit {
  alumnos: Asistencia[] = [];


  constructor(private asistenciaService: AsistenciaService) {}

  ngOnInit() {
    this.cargarAsistencias();
  }

  cargarAsistencias() {
  this.asistenciaService.obtenerAsistencias().subscribe((data: Asistencia[]) => {
    this.alumnos = data.filter(asistencia => asistencia.tipo === 'alumno');
  });
}


  marcarAsistencia(id: number, nombre: string) {
    this.asistenciaService
      .registrarAsistencia({ id, nombre, presente: true, tipo: 'alumno' })
      .subscribe(() => {
        this.cargarAsistencias();
      });
  }
}

