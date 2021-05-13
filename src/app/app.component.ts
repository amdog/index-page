import { Component } from '@angular/core';
import { from } from 'rxjs';
import {ViewChild,ElementRef} from "@angular/core"
import {StoreService} from "./service/store.service"
import {
  HttpClient
} from "@angular/common/http"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'homePage';
  @ViewChild("backGround") public eleBack:ElementRef
  public flag:number=0
  public Url:string
  public store:StoreService
  public themeList:any[]
  public newlink:string=''
  public key:string=''
  public http
  public name:string='登录同步标签?'
  public showLogin:boolean=false
  constructor(http: HttpClient,store:StoreService){
    this.http=http
    this.store=store
    if(this.store.getKey("defaultBack")){
        this.Url=this.store.getKey("defaultBack")? this.store.getKey("defaultBack"):this.setDefaultBack()
    } else{
      this.Url=this.setDefaultBack()
  }}
  setDefaultBack(){
    this.store.setKey("defaultBack",'https://api.ww125.cn/v1/random?type=wallpaper')
    return this.store.getKey("defaultBack")
  }
  switchView(flag:number){
    this.flag=flag
  }
  ngAfterViewInit(){
    this.eleBack.nativeElement.style.background=`url('${this.Url}')`
  }
  ngAfterViewChecked(){
    this.eleBack.nativeElement.style.background=`url('${this.store.getKey('defaultBack')}')`
  }
  toShowLogin(){
    this.showLogin=true
  }
  offLogin(e){
    this.showLogin=false
  } 
  next(){
    function reload(){
      return window.location.href
    }
    window.location.href=reload()
  }
}
