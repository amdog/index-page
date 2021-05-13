import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import {HttpClient,HttpHeaders} from "@angular/common/http"
import { callbackify } from 'util';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
//
  public enginesList:any[]=[{
    name:"google",
    host:"http://www.google.com/&wd=",
    src:"../../assets/google.svg"
  },{
    name:"baidu",
    host:"https://www.baidu.com/s?ie=UTF-8&wd=",
    src:"../../assets/baidu.svg"
  },{
    name:"bing",
    host:"https://cn.bing.com/search?q=",
    src:"../../assets/bing.svg"
  },{
    name:"sogou",
    host:"https://www.sogou.com/web?query=",
    src:"../../assets/sogou.svg"
  },{
    name:"360",
    host:"https://www.so.com/s?ie=utf-8&q=",
    src:"../../assets/360.svg"
  }]
  
  public themeList:any[]=[
    {
      src:"https://imdog.gitee.io/indeximg/a.jpg",
      content:""
    },
    {
      src:"https://imdog.gitee.io/indeximg/c.jpg",
      content:""
    },   
    {
      src:"https://imdog.gitee.io/indeximg/d.jpg",
      content:""
    },   
    {
      src:"https://imdog.gitee.io/indeximg/b.jpg",
      content:""
    },
    {
      src:"https://imdog.gitee.io/indeximg/e.jpg",
      content:""
    },
    {
      src:"https://imdog.gitee.io/indeximg/f.jpg",
      content:""
    },
    {
      src:"https://imdog.gitee.io/indeximg/g.jpg",
      content:""
    }
  ]
  public footUrl="http://www.beian.gov.cn/"
  public footContent="©copy right  滇ICP备20005951号"
  public http:HttpClient
  public tipsList:string[]
  constructor(http:HttpClient) {
    this.http=http
  }
  getKey(key:string){
    return localStorage.getItem(key)
  }
  setKey(key:string,value:any){
    localStorage.setItem(key,value)
  }
  getTips(key:string,callback:Function){
     this.http.jsonp(`http://suggestion.baidu.com/su?wd=${key}&p=3`,"cb").subscribe((d:any)=>{
      callback(d.s)
    })
  }
}
