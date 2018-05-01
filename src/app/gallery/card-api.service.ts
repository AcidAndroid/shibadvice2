import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

import 'rxjs/add/operator/map'


@Injectable()
export class CardApiService {

  constructor(private http:HttpClient) { }

  fetchImage(){        
    return this.http.get(`${environment.apiImage}count=1/`)    
    

  }

  fetchPhrase(){
    return this.http.get(`${environment.apiImage}count=1/`)    
  }

}
