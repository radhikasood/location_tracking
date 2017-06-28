import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AcountPage} from "../acount/acount";
import {DatafetchProvider} from "../../providers/datafetch/datafetch";
import {Headers, RequestOptions, Http} from "@angular/http";
import { Geolocation } from '@ionic-native/geolocation';


/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  username: string;
  password : string;
  addCommment:string;
  comment:any=["xyz","ghj","asd"];
  student:any;
  student_all:any;
  student_name: string;
  student_batch:string;
  student_year: string;
  data:any;
  update:any;
  latitude:any;
  longitude:any;
  languageShow : boolean = false;
  geoUpdate:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public dataFetch :DatafetchProvider, public http :Http,private geolocation: Geolocation) {
    this.getData();
  }
  account(){
    if(this.username == 'radhika' && this.password== '12345') {
      this.navCtrl.push(AcountPage,{"user":this.username});
      this.username = null;
      this.password = null;
    }
  }
  add_comment(){
  this.comment.push(this.addCommment);
  this.addCommment=null
}
  remove(num){
    this.comment.splice(num,1);
  }
  addStudent(){
    this.student.push({"name":this.student_name,"batch":this.student_batch,"year":this.student_year});
    this.student_name=null;
    this.student_batch=null;
    this.student_year=null;
  }
  getData() {
    this.dataFetch.load().then((data) => {
      this.student = data;
      this.student_all = this.student.students;
      console.log(data);
    });
  }
    setData(){
      this.update = {
        name:this.username,
        password:this.password,
      }
      console.log("data sending");
      var headers = new Headers();

      headers.append('content-type','application/json;charset=UTF-8');
      headers.append('Access-Control-Allow-Origin','*');
      let options = new RequestOptions({headers:headers});
      this.http.post('https://radhikasood.herokuapp.com/wel', JSON.stringify(this.update),options)
        .map(res => res.json()).subscribe(data => {
          console.log(data)
        }, err => {
          console.log('Error! : ', err.json);
          }
        );
      }

      getGeolocation(){
        this.geolocation.getCurrentPosition().then((resp) => {
          this.latitude = resp.coords.latitude;
          this.longitude = resp.coords.longitude;
          this.languageShow = true;
          console.log("geolocation sending");
          this.geoUpdate ={
            latitude:this.latitude,
            longitude:this.longitude,
          }
          var headers = new Headers();

          headers.append('content-type','application/json;charset=UTF-8');
          headers.append('Access-Control-Allow-Origin','*');
          let options = new RequestOptions({headers:headers});
          this.http.post('https://radhikasood.herokuapp.com/geo', JSON.stringify(this.geoUpdate),options)
            .map(res => res.json()).subscribe(resp => {
              console.log(resp)
            }, err => {
              console.log('Error! : ', err.json);
            }
          );
        }).catch((error) => {
          console.log('Error getting location', error);
        });
      }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
