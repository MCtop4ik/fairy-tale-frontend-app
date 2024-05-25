import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServerService } from './server.service';


@Injectable({
    providedIn: 'root'
})

export class HttpService{
    private baseUrl = 'http://45a85c94-b0ba-42a1-8a24-3c24537de5f8.tunnel4.com';

    constructor(
        private http: HttpClient,
        private server: ServerService
        ){
    }

    getBaseUrl(): string{
        return this.baseUrl;
    }

    // getTalesData(width: number, timestamp: string | undefined): Observable<any> {
    getTalesData(width: number): any {
        // return this.http.get(`${this.baseUrl}/v1/get_tales?timestamp=${timestamp}&width=${width}`, this.getHeader());  
        // return this.http.get(`${this.baseUrl}/get_tales`, this.getHeader());    
        if (width < 600){
            return this.server.server['all_tales']['all_tales_tiny']
        } else if (600 <= width && width <= 900){
            return this.server.server['all_tales']['all_tales_small']
        } else if (900 <= width && width <= 1200){
            return this.server.server['all_tales']['all_tales_medium']
        } else if (width > 1200){
            return this.server.server['all_tales']['all_tales_big']
        }
    }

    // getTaleData(id: string | undefined): Observable<any> {
    getTaleData(): any {
        let resp = this.server.server["tales"];
        return resp;
        // return resp[id];
        // return this.http.get(`${this.baseUrl}/v1/tale?id=${id}`, this.getHeader());     
    }    

    // getGlossaryData(): Observable<any> {
    getGlossaryData(): any {
        let resp = this.server.server["grammar"];
        return resp;
        // return this.http.get(`${this.baseUrl}/v1/glossary`, this.getHeader());     
    }    


    
    getHeader(){
        const http_options = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json'
          })
        }
        return http_options;
    }
}
