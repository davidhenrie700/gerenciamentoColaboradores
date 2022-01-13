import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Colaborador } from '../model/colaborador.model';
import { API_PATH } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ColaboradorService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) { }

  getColaboradores(): Observable<Colaborador[]> {
    return this.httpClient.get<Colaborador[]>(API_PATH)
      .pipe(
        retry(2),
        catchError(this.handleError))
  };

  getById(id: number): Observable<Colaborador> {
    return this.httpClient.get<Colaborador>(API_PATH + '/' + id).pipe(retry(2));
  }

  postColaborador(colaborador: Colaborador): Observable<Colaborador> {
    return this.httpClient.post<Colaborador>(API_PATH, JSON.stringify(colaborador), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  };

  updateColaborador(colaborador: any): Observable<Colaborador> {
    return this.httpClient.put<Colaborador>(API_PATH + '/', JSON.stringify(colaborador), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  };

  deleteColaborador(id: number): Observable<Colaborador> {
    return this.httpClient.delete<Colaborador>(API_PATH + '/' + id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  };

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    return throwError(errorMessage);
  };

}
