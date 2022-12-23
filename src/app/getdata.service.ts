import { Injectable } from '@angular/core';
import { Http } from '@capacitor-community/http';
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GetdataService {

  constructor() {}

  doGet=() => {
    const options={ 
    url: 'https://newsapi.org/v2/everything?q=ireland&from=2022-12-01&sortBy=publishedAt&apiKey=9f3557dcca5a428da3f905f6f373f594',
    // headers: { 'X-Fake-Header': 'Max was here' },
    // params: { size: 'XL' },
  };

return from(Http.get(options))
};
}
