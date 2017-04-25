import { Component, EventEmitter, Input, OnChanges,OnInit } from '@angular/core';
import { NgForm }    from '@angular/forms';
import {Observable} from 'rxjs/Rx';
import{RouterModule} from '@angular/router';
import {MenuGroupService} from '../services/menuGroup.service';
import {MenuGroup} from '../model/menuGroups';
import {EmitterService} from '../emitter.service';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';


@Component({
  selector:'menu-group',
  templateUrl:'./menu-group.component.html',
  styleUrls: ['./menu-group.component.scss']
})
export class MenuGroupComponent{

  constructor(private menuGroupService: MenuGroupService){}
      // Local properties
      private model = new MenuGroup(new Date(), '');
      private editing = false;
       menuGroups: MenuGroup[];
      // Input properties
       @Input() valueToPass:number;
      @Input() menuGroup: MenuGroup;
    @Input() listId: string;
    @Input() editId:string;



    ngOnInit() {
                // Load comments
                this.loadMenuGroups();
                console.log(this.valueToPass);
        }

        loadMenuGroups() {
            // Get all comments
             this.menuGroupService.getMenuGroups()
                               .subscribe(
                                   menuGroups => this.menuGroups = menuGroups, //Bind to view
                                    err => {
                                        // Log errors if any
                                        console.log(err);
                                    });
        }

        ngOnChanges(changes:any) {
            // Listen to the 'list'emitted event so as populate the model
            // with the event payload
            EmitterService.get(this.listId).subscribe((menuGroups:MenuGroup[]) => { this.loadMenuGroups()});
        }


  //Submit Menus on button click
  submitMenuGroup(){
   let menuOperation:Observable<MenuGroup[]>;
   console.log(this.model);
   if(!this.editing)
   {
   menuOperation = this.menuGroupService.addMenuGroup(this.model)
    }
  else {
          menuOperation = this.menuGroupService.updateMenuGroup(this.model)
        }
        window.location.reload();

  menuOperation.subscribe(
                menuGroups => {
                                    // Emit list event
              EmitterService.get(this.listId).emit(menuGroups);
                                    // Empty model
              this.model = new MenuGroup(new Date(), '');
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
