import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { MenuGroup }  from '../model/menuGroups';
import {Observable} from 'rxjs/Rx';
//import {MenuComponent} from '../menu/menu-box/menu-box.component';
// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class MenuGroupService {
     // Resolve HTTP using the constructor
     constructor (private http: Http) {}
     // private instance variable to hold base url


     private menuGroupsUrl = 'http://localhost:3000/menus/2/menu_groups';
     private menuGroup='http://localhost:3000/menu_groups';
     getMenuGroups() : Observable<MenuGroup[]> {

         // ...using get request
         return this.http.get(this.menuGroupsUrl)
                        // ...and calling .json() on the response to return data
                         .map((res:Response) => res.json())
                         //...errors if any
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

     }
     // Add a new comment
    addMenuGroup (body: Object): Observable<MenuGroup[]> {
        let bodyString = JSON.stringify(body); // Stringify payload
        let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options       = new RequestOptions({ headers: headers }); // Create a request option

        return this.http.post(this.menuGroupsUrl, body, options) // ...using post request
                         .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    }

    // Update a comment
    updateMenuGroup (body: Object): Observable<MenuGroup[]> {
        let bodyString = JSON.stringify(body); // Stringify payload
        let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options       = new RequestOptions({ headers: headers }); // Create a request option

        return this.http.put(`${this.menuGroupsUrl}/${body['id']}`, body, options) // ...using put request
                         .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    }

    // Delete a comment
    removeMenuGroup (id:string): Observable<MenuGroup[]> {
      console.log(id);
        return this.http.delete(`${this.menuGroup}/${id}`) // ...using put request
                         .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    }

}
