import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { AngularFireAuth  } from 'angularfire2/auth';
// import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2/auth';

@Injectable()
export class AuthService {

    constructor(private _http: Http, public af: AngularFireAuth ) { }
    
    // login with google
    loginWithGoogle() {
    // return this.af.auth.signInWithPopup()
  }
  logout() {
    // return this.af.auth.logout();
  }

    /**
     * AuthService Class methods
     * 
     */
    public authenticate(data: any) {
        let headers = new Headers();
        this.authenticateHeaders(headers);
        return this._http.post('/api/tokens', data, {headers: headers})
            .map(res => res.json())
            .catch(this.handleError);
    }

    private handleError(error: Response | any) {
        return Observable.throw(error.json() || '');
    }

    private authenticateHeaders(headers: Headers) {
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Basic cG1zLWlkOnBtcy1zZWNyZXQ=');
    }

}

