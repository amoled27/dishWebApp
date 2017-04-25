import { Component, EventEmitter, Input, OnChanges,OnInit } from '@angular/core';
import { NgForm }    from '@angular/forms';
import {Observable} from 'rxjs/Rx';
import{RouterModule} from '@angular/router';
import {MenuService} from '../../services/menu.service';
import {Menu} from '../../model/menus';
import {EmitterService} from '../../emitter.service';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';


@Component({
  selector:'menu-list',
  template:`
  <div class="container">
  <div class="card card2  red darken-1">
    <div class="card-action">
    <h2>List of Menus</h2>
    <ul class="collection">
      <menu-box [editId]="editId" [listId]="listId" *ngFor="let menu of menus" [menu]="menu"></menu-box>

    </ul>
          </div>
        </div>
</div>
  `
})


export class MenuListComponent{
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
      }
