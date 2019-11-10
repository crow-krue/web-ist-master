import { Injectable } from "@angular/core";
import { UserModel } from '../models/user.model';

@Injectable({
    providedIn: "root"
})
export class UserStateService {
    private user: UserModel = null;

    constructor() { }

    setUser (user: UserModel) {
        this.user = user;
    }

    isAuth () {
        return this.user !== null;
    }
}
