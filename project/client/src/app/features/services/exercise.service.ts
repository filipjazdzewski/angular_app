import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExerciseFormDto } from '../dto/exercise-form.dto.model';
import { Exercise } from '../dto/exercise.model';

interface HttpOptions {
  headers: HttpHeaders;
}

@Injectable({
  providedIn: 'root',
})
export class ExerciseService {
  private readonly apiUrl: string = 'http://localhost:5000/api/exercises';

  private httpOptions: HttpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  public constructor(private http: HttpClient) {}

  public getExercises(): Observable<Exercise[]> {
    return this.http.get<Exercise[]>(this.apiUrl);
  }

  public getExercise(id: string): Observable<Exercise> {
    return this.http.get<Exercise>(`${this.apiUrl}/${id}`);
  }

  public createExercise(exercise: ExerciseFormDto): Observable<Exercise> {
    return this.http.post<Exercise>(this.apiUrl, exercise, this.httpOptions);
  }

  public updateExercise(
    id: string,
    updatedExercise: ExerciseFormDto,
  ): Observable<Exercise> {
    return this.http.put<Exercise>(
      `${this.apiUrl}/${id}`,
      updatedExercise,
      this.httpOptions,
    );
  }

  public deleteExercise(id: string): Observable<Exercise> {
    return this.http.delete<Exercise>(`${this.apiUrl}/${id}`);
  }
}
