import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthHtppInterceptorService implements HttpInterceptor {

  constructor() { }
  
  intercept(req: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>> {
    const autdata=sessionStorage.getItem('basicauth');
    if (sessionStorage.getItem('username') && sessionStorage.getItem('basicauth')) {
      req = req.clone({
        setHeaders: {
          Authorization: `${autdata}`
        },
        
        
      })
    }

    return next.handle(req);

  }
}