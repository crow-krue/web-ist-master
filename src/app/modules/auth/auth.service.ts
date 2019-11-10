import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { UserModel } from '../../models/user.model';

@Injectable({
    providedIn: "root"
})
export class AuthService {
    constructor(private http: HttpClient) { }

    register (user): Observable<UserModel> {
        return this.http.post<UserModel>("http://localhost:3000/users", user);
    }

    getByEmail (email): Observable<UserModel[]> {
        return this.http.get<UserModel[]>(`http://localhost:3000/users?email=${email}`);
    }

    login (user): Observable<UserModel[]> {
        return this.http.get<UserModel[]>(`http://localhost:3000/users?email=${user.email}&password=${user.password}`);
    }
}
