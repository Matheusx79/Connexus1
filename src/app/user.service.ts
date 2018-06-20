import {
    Injectable
} from '@angular/core';
import {
    HttpClient
} from '@angular/common/http';
import {
    Router
} from "@angular/router";


@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private http: HttpClient, private router: Router) {}
    users: string[] = ['john', 'jill'];
    user = 'zero';
    teste() {
        return this.user;
    }
    validatePainel() {
        this.http.get('http://localhost/api/checklogin')
            .subscribe(
                (data) => {
                    if (data['data'][0] == true) {

                    } else {
                        this.router.navigate(['/login'])
                    }

                }
            )
    }
    sendLike(){
    }
    validateLogin() {
        this.http.get('http://localhost/api/checklogin')
            .subscribe(
                (data) => {
                    if (data['data'][0] == true) {
                        this.router.navigate(['/painel'])
                    } else {

                    }

                }
            )
    }
    authInit(login, senha) {
        this.http.get('http://localhost/api/login?id=' + login + '&senha=' + senha)
            .subscribe(
                (data) => {
                    if (data['data'][0] == true) {
                        this.router.navigate(['/painel'])
                    } else {
                        this.result = 'error';
                    }

                }
            )

    }

}