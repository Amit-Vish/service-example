import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Headers, RequestOptions} from '@angular/http';
//Grab everything with import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/catch';

import {UrlConstants} from "../shared/services/url-constants.service";
import {User} from "../shared/models/user";


@Injectable()
export class LoginService {
  
    _baseUrl: string = this.urlConstants.getBaseUrl();

    user: User;
    headers: Headers;
    options: RequestOptions;
    
    
    constructor(private http: Http, private urlConstants: UrlConstants) { }
    
    authenticate(userData: any) : Observable<User> {
        this.headers = new Headers({ 'Content-Type': 'application/json' });
        //var headers = ( !!authToken ) ? { "AUTHORIZATION": "Token " + authToken } : {};
        this.options = new RequestOptions({ headers: this.headers });
        let data = JSON.stringify(userData);

        return this.http.post(this._baseUrl + '/stakeholder/login/', data, this.options)
                    .map((res: Response) => {
                        let userInfo = res.json();
                        let token = userInfo.token;
                        this.headers = new Headers({ 'Content-Type': 'application/json', "AUTHORIZATION": "Token " + token });
                        this.options = new RequestOptions({ headers: headers });
                        //save userId & token in local storage and get more details
                        return this.getStakeholderDetail();
                        
                    })

                    .catch(this.handleError);

    }

    getStakeholderDetail(){
        return this.http.get(this._baseUrl + '/stakeholder/', this.options)
            .map((res: Response) =>{
                this.user = new User(res);
                return this.user;
            });
    }

    
    private handleError(error: any) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}
