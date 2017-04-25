import { Component, EventEmitter, Input, OnChanges,OnInit } from '@angular/core';
import { NgForm }    from '@angular/forms';
import {Observable} from 'rxjs/Rx';
import{RouterModule} from '@angular/router';
import {MenuService} from '../services/menu.service';
import {Menu} from '../model/menus';
import {EmitterService} from '../emitter.service';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';


@Component({
  selector:'menu',
  templateUrl:'./menu.component.html',
styleUrls: ['./menu.component.scss']
})


export class MenuComponent implements OnChanges{
  constructor(private menuService: MenuService){}
      // Local properties
      private model = new Menu(new Date(), '', '');
      private editing = false;
       menus: Menu[];
      // Input properties
      @Input() menu: Menu;
    @Input() listId: string;
    @Input() editId:string;

    ngOnInit() {
                // Load comments
                this.loadMenus();

        }

        loadMenus() {
            // Get all comments
             this.menuService.getMenus()
                               .subscribe(
                                   menus => this.menus = menus, //Bind to view
                                    err => {
                                        // Log errors if any
                                        console.log(err);
                                    });
        }

        ngOnChanges(changes:any) {
            // Listen to the 'list'emitted event so as populate the model
            // with the event payload
            EmitterService.get(this.listId).subscribe((menus:Menu[]) => { this.loadMenus()});

        }


//Submit Menus on button click
  submitMenu(){
   let menuOperation:Observable<Menu[]>;
   console.log(this.model);
   if(!this.editing)
   {
   menuOperation = this.menuService.addMenu(this.model)
    }
  else {
          menuOperation = this.menuService.updateMenu(this.model)
        }
        window.location.reload();

  menuOperation.subscribe(
                menus => {
                                    // Emit list event
              EmitterService.get(this.listId).emit(menus);
                                    // Empty model
              this.model = new Menu(new Date(), '', '');
                                    // Switch editing status
              if(this.editing) this.editing = !this.editing;
                                },
              err => {
                                    // Log errors if any
                      console.log(err);
                    }
                      );
                    }


                    }
