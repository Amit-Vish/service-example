import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/Rx';

import { ApiService } from '../shared/services/api.service';

import  {UrlConstants } from '../shared/services/url-constants.service';
import {User} from '../shared/models/user';


@Injectable()
export class LoginService {
  
    _baseUrl: string = this.urlConstants.getBaseUrl();

    user: User;
    customer: any;
    contract: any;
    
    constructor(private apiService: ApiService, private urlConstants: UrlConstants) { }
    
    authenticate(userData: any): Observable<any> {
        return this.apiService.post(this._baseUrl + '/stakeholder/login/', userData)
            .map((res: Response) => {
                let userInfo = res.json();
                let token = userInfo.token;
                localStorage.setItem('authToken', token);
                this.apiService.setAuthHeader();                
            });



    }

    getStakeholderDetail(): Observable<User>{
        return this.apiService.get(this._baseUrl + '/stakeholder/')
            .map((res: Response) =>{
                this.user = new User(res.json());
                return this.user;
            });
    }

    
    private handleError(error: any) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}
