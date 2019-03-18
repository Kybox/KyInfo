import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { INews } from '../interface/json-data';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private APIKEY: string = "133615e9879041b2aa4c078ec2b47462";

  constructor(private http: HttpClient) { }

  getNews(news: string): Observable<INews> {

    return this.http.get<INews>("https://newsapi.org/v2/top-headlines?country=fr&category=" + news + "&apiKey=" + this.APIKEY);
  }
}
