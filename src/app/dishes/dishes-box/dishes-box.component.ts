import {Component,Input,Output,EventEmitter} from '@angular/core';
import {Dish} from '../../model/dishes';
import {EmitterService} from '../../emitter.service';
import {DishesService} from '../../services/dishes.service';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

@Component({
  selector:'dishes-box',
  template:`
      <div class="w3-card-4">
      <li class="collection-item">
        {{dish.menu_item_name}}
      <a [routerLink]="['/main/']" routerLinkActive="active" (click)="layout.close()"class="secondary-content"><i class="material-icons">mode_edit</i></a>
  <button (click)="deleteDish(this.dish.id)">remove</button>
      </li>
        </div>
          `
})

export class DishesBoxComponent{

  constructor(private dishesService:DishesService){}
  dishes:Dish[];
  @Input() dish:Dish;
  @Input() listId:string;
  @Input() editId:string;

  loadDishes() {
        // Get all comments
        window.location.reload();
         this.dishesService.getDishes()
                           .subscribe(
                               dishes => this.dishes = dishes, //Bind to view
                                err => {
                                    // Log errors if any
                                    console.log(err);
                                });
    }


  deleteDish(id:string){
    console.log(id);
        // Call removeComment() from CommentService to delete comment
        this.dishesService.removeDish(id).subscribe(
                                dishes => {
                                    // Emit list event
                                    EmitterService.get(this.listId).emit(dishes);

                                err => {
                                    // Log errors if any
                                    console.log(err);
                                      }
                                });


  }

  }
