import {Component,Input,Output,EventEmitter} from '@angular/core';
import {MenuGroup} from '../../model/menuGroups';
import {EmitterService} from '../../emitter.service';
import {MenuGroupService} from '../../services/menuGroup.service';


@Component({
  selector:'menuGroup-box',
  template:`
      <div class="w3-card-4">
      <li class="collection-item">
        {{menuGroup.menu_group_name}}
      <a [routerLink]="['/main/dishes']" routerLinkActive="active" (click)="layout.close()"class="secondary-content"><i class="material-icons">mode_edit</i></a>
      <button (click)="deleteMenuGroup(this.menuGroup.id)">remove</button>
      </li>
        </div>
          `
})

export class MenuGroupBoxComponent{

  constructor(private menuGroupService:MenuGroupService){}
  @Input() menuGroup:MenuGroup;
  @Input() listId:string;
  @Input() editId:string;

  deleteMenuGroup(id:string){
    console.log(id);
        // Call removeComment() from CommentService to delete comment
        this.menuGroupService.removeMenuGroup(id).subscribe(
                                menuGroups => {
                                    // Emit list event
                                    EmitterService.get(this.listId).emit(menuGroups);
                                },
                                err => {
                                    // Log errors if any
                                    console.log(err);
                                });
                        this.menuGroupService.getMenuGroups();
    }

}
