import { Component, OnInit } from '@angular/core';
import { INews } from './interface/json-data';
import { NewsService } from './service/news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  public path:string;
  public jsonData:INews;

  constructor(private newsService:NewsService, private router:Router) { }

  ngOnInit() {
    this.path = this.router.url.substr(1);
    console.log(this.path);
    this.newsService.getNews(this.path).subscribe(data => {
      this.jsonData = data;
    });
  }
}
