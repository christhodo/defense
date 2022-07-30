import { Injectable } from '@angular/core';
import { Defense } from '@defense-angular/api-interfaces';
import { HttpClient } from '@angular/common/http';
import { environment } from 'apps/dashboard/src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DefensesService {
  model = 'defenses';

  constructor(private http: HttpClient) {}

  all() {
    return this.http.get<Defense[]>(this.getUrl());
  }

  find(id: string) {
    return this.http.get<Defense>(this.getUrlWithId(id));
  }

  create(defense: Defense) {
    return this.http.post(this.getUrl(), defense);
  }

  update(defense: Defense) {
    return this.http.put(this.getUrlWithId(defense.id), defense);
  }

  delete(defense: Defense) {
    return this.http.delete(this.getUrlWithId(defense.id));
  }

  private getUrl() {
    return `${environment.apiEndpoint}${this.model}`;
  }

  private getUrlWithId(id) {
    return `${this.getUrl()}/${id}`;
  }
}
