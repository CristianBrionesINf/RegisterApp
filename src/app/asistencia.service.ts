import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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
  private apiUrl = 'http://localhost:300/asistencias';

  constructor(private http: HttpClient) {}

  registrarAsistencia(asistencia: Asistencia): Observable<Asistencia> {
    return this.http.post<Asistencia>(this.apiUrl, asistencia);
  }
  obtenerAsistencias(): Observable<Asistencia[]> {
    return this.http.get<Asistencia[]>(this.apiUrl);
  }
  actualizarAsistencia(id: number, asistencia: Asistencia): Observable<Asistencia> {
    return this.http.put<Asistencia>(`${this.apiUrl}/${id}`, asistencia);
  }
  eliminarAsistencia(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
