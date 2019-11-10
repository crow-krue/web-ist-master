import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private http: HttpClient) { }

  register (user) {
    return this.http.post("http://localhost:3000/users", user).toPromise();
  }

  login (user) {
    return this.http.get(`http://localhost:3000/users?email=${user.email}&password=${user.password}`).toPromise();
  }
}