import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LikesService {

  private apiUrl = '/api/skills';

constructor(private http: HttpClient) { }

incrementLikes(card: any, id: number ): Observable<any> {
  card.likes += 1;
  const url = `${this.apiUrl}/${card.id}`;
  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  return this.http.post<any>(`${this.apiUrl}/${id}`, {});
}


}
