import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";

import { environment } from "src/environments/environment";
import { AuthResponseInterface } from "src/app/auth/types/authResponse.interface";
import { RegisterRequestInterface } from "src/app/auth/types/registerRequest.interface";
import { CurrentUserInterface } from "src/app/shared/types/currentUser.interface";

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) { }
  register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {

    console.log(data)
    const url = environment.apiUrl + "/users";

    return this.http.post<AuthResponseInterface>(url, { user: data }).pipe(map((response: AuthResponseInterface) => {
      return response.user;
    }));
  }
}