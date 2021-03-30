import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { PersistanceService } from "src/app/shared/services/persistence.service";

@Injectable()
export class AuthInterceprot implements HttpInterceptor {
  constructor(private persistanceService: PersistanceService) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.persistanceService.get("accessToken");
    request = request.clone({
      setHeaders: {
        Authorization: token ? `Token ${token}` : ""
      }
    });
    return next.handle(request);
  }
}