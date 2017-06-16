import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AcountPage} from "../acount/acount";


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
  student:any=[{"name":"xyz ","batch":"2013 ","year":"second"},{"name":"asd ","batch":"2014 ","year":"third"},{"name":"zxc ","batch":"2015 ","year":"final"}]
  student_name: string;
  student_batch:string;
  student_year: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
