import { Component, EventEmitter, Input, OnChanges,OnInit } from '@angular/core';
import { NgForm }    from '@angular/forms';
import {Observable} from 'rxjs/Rx';
import{RouterModule} from '@angular/router';
import{DishesService} from '../../services/dishes.service';
import {Dish} from '../../model/dishes';
import {EmitterService} from '../../emitter.service';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import {DishesBoxComponent} from '../dishes-box/dishes-box.component';

@Component({
  selector: 'dish-form',
  templateUrl: './dishes-form.component.html',
styleUrls: ['./dishes-form.component.css']
})

export class DishesFormComponent implements OnInit{

  constructor(private dishesService: DishesService,private fb: FormBuilder){}
      // Local properties
    public myForm: FormGroup;
      private model = new Dish(new Date(),'','','',false,false,false,false,false,false,false,0,0);
      private editing = false;
       dishes: Dish[];
      // Input properties
    @Input() dish: Dish;
    @Input() listId: string;
    @Input() editId:string;

    ngOnInit():any {

      this.myForm = this.fb.group(
        {
            menu_item_name: ['', Validators.required],
            menu_item_description: ['', Validators.required],
            menu_item_price: ['', Validators.required],
            disabled: [''],
            special: [''],
            vegetarian: [''],
            vegan: [''],
            kosher: [''],
            halal: [''],
            gluten_free: [''],
            menu_item_calories: ['', Validators.required],
            menu_item_heat_index: ['', Validators.required]

 });


        }

        ngOnChanges(changes:any) {
            // Listen to the 'list'emitted event so as populate the model
            // with the event payload
            // EmitterService.get(this.listId).subscribe((dishes:Dish[]) => { });

        }


//Submit Menus on button click
  submitDish(myForm){
   let menuOperation:Observable<Dish[]>;
   console.log(myForm);
  //  if(!this.editing)
  //  {
   menuOperation = this.dishesService.addDish(myForm);
  //   }
  // else {
  //         menuOperation = this.dishesService.updateDish(this.model)
  //       }
  //       window.location.reload();

  menuOperation.subscribe(
              dishes => {
                                    // Emit list event
              EmitterService.get(this.listId).emit(dishes);
                                    // Empty model
                this.model = new Dish(new Date(),'','','',false,false,false,false,false,false,false,0,0);

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
