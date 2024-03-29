import { ISource } from './source';

export interface IArticle {

    source:ISource;
    author:string;
    title:string;
    description:string;
    url:string;
    urlToImage:string;
    publishedAt:Date;
    content:string;
}