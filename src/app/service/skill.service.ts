import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Skill } from '../model/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  URL=environment.URL + 'skill/';
  constructor(private httpclient : HttpClient) {
  }

  public lista(): Observable<Skill[]>{
    return this.httpclient.get<Skill[]>(this.URL + 'lista');
  }

  public detail(id:number):Observable<Skill>{
    return this.httpclient.get<Skill>(this.URL + `detail/${id}`);
  }
  
  public save(skill:Skill):Observable<any>{
    return this.httpclient.post<any>(this.URL + 'create', skill);
  }

  public update(id:number, skill:Skill):Observable<any>{
    return this.httpclient.put<any>(this.URL + `update/${id}`, skill);
  }
  
  public delete(id:number):Observable<any>{
    return this.httpclient.delete(this.URL + `delete/${id}`);
  }
  
}
