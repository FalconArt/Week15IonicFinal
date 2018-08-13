import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { PhotoApiComponent } from '../photo-api/photo-api';
/**
 * Generated class for the TranslateApiComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 
@Component({
  selector: 'translate-api',
  templateUrl: 'translate-api.html'
})
export class TranslateApiComponent {

  text: string;

  constructor() {
    console.log('Hello TranslateApiComponent Component');
    this.text = 'Hello World';
  }

}
*/

@Component({
  selector: 'translate-api',
  templateUrl: 'translate-api.html'
})
export class TranslateApiComponent{
	loading:Boolean = false;
	apiRoot:string = `https://translate.yandex.net/`;
	translationData:any;
	photos:PhotoApiComponent = new PhotoApiComponent(this.http);
	photoData:any;

	getTranslation(searchString:string){
		this.photoData = [];
		this.loading = true;
		let apiURL = this.apiRoot + `api/v1.5/tr.json/translate?key=trnsl.1.1.20180301T024755Z.ed11e8dfc4dec9f6.4fd6ed65621e24a41c173d7ab030cad1315784e0&text=${searchString}&lang=en`;
		this.http.get(apiURL)
		.toPromise()
		.then(res => {
			this.translationData = res.text[0];
			//this.data = res.json().results;
			this.loading = false;
			//console.log(this.translationData);

			return this.photos.getPhotos(this.translationData);
		})
		.then(photos => {
			this.photoData = photos.results;

			console.log(this.photoData);
		})
		.catch(err => {
			console.log(err);
		})
	}
  constructor(private http:HttpClient) { }

  ngOnInit() {
  }

}