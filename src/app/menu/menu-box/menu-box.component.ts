import {Component,Input,Output,EventEmitter,OnChanges} from '@angular/core';
import {Menu} from '../../model/menus';
import {EmitterService} from '../../emitter.service';
import {MenuService} from '../../services/menu.service';


@Component({
  selector:'menu-box',
  template:`
      <div class="w3-card-4">
      <li class="collection-item">
        {{menu.menu_name}}
        <a [routerLink]="['/main/menuGroup']" routerLinkActive="active" (click)="layout.close()"class="secondary-content">
        <i class="material-icons">mode_edit</i></a>
        <a><i class="material-icons">ic_icon</i></a>
        <button (click)="deleteMenu(this.menu.id)">remove</button>
        </li>

        </div>
          `
})

export class MenuBoxComponent {
  constructor(private menuService:MenuService){}
  @Input() menu:Menu;
  @Input() listId:string;
  @Input() editId:string;


  //<menu-group [valueToPass] = "value"></menu-group>
  editMenu(){
       // Emit edit event
       EmitterService.get(this.editId).emit(this.menu);
   }
  deleteMenu(id:string){
  //  console.log(id);
        // Call removeComment() from CommentService to delete comment
        this.menuService.removeMenu(id).subscribe(
                                menus => {
                                    // Emit list event
                                    EmitterService.get(this.listId).emit(menus);
                                },
                                err => {
                                    // Log errors if any
                                    console.log(err);
                                });
    }

}
