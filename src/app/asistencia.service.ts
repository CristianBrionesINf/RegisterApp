import { Injectable } from '@angular/core';

interface Asistencia {
  id: number;
  nombre: string;
  presente: boolean;
  tipo: 'alumno' | 'profesor';
}

@Injectable({
  providedIn: 'root'
})
export class AsistenciaService {
  asistencias: Asistencia[] = [];

  constructor() {}

  registrarAsistencia(asistencia: Asistencia) {
    this.asistencias.push(asistencia);
  }

  obtenerAsistencias(tipo: 'alumno' | 'profesor'): Asistencia[] {
    return this.asistencias.filter(a => a.tipo === tipo);
  }
}
