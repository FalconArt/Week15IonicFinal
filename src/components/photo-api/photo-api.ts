import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslateApiComponent } from '../translate-api/translate-api';/**
 * Generated class for the PhotoApiComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 
@Component({
  selector: 'photo-api',
  templateUrl: 'photo-api.html'
})
export class PhotoApiComponent {

  text: string;

  constructor() {
    console.log('Hello PhotoApiComponent Component');
    this.text = 'Hello World';
  }

}
*/

@Component({
  selector: 'photo-api',
  templateUrl: 'photo-api.html'
})
export class PhotoApiComponent{

	loading:Boolean = false;
	data:any;

	getPhotos(searchString:string){
		this.loading = true;
		let apiURL = `https://api.unsplash.com/search/photos?page=1&query=${searchString}&client_id=80c1a3a5ef22579dc7ede34bd1f929da56ae74268624118f154a2d3418a164c0`
		//console.log(apiURL);
		return this.http.get(apiURL)
		.toPromise()
		// .then(res => {
		// 	this.data = res;
		// 	this.loading = false;
		// 	console.log(this.data);
		// }, err => {
		// 	console.log(err);
		// });
	}
	//const photoURL = `https://api.unsplash.com/search/photos?page=1&query=${newText}&client_id=80c1a3a5ef22579dc7ede34bd1f929da56ae74268624118f154a2d3418a164c0`;
  constructor(private http:HttpClient) { }

  ngOnInit() {
  }

}