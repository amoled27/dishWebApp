import {MainComponent} from './main/main.component';
import {MenuComponent} from './menu/menu.component';
//import {RestaurantComponent} from './restaurant-profile/restaurant.component';
import {Routes, RouterModule} from "@angular/router"
import {DashboardComponent} from './dashboard/dashboard.component';
import {MenuGroupComponent} from './menuGroup/menu-group.component';
import {DishesComponent} from './dishes/dishes.component';
import{DishesFormComponent} from './dishes/dishes-form/dishes-form.component';
import {MenuListComponent} from './menu/menu-list/menu-list.component';
import {DishesListComponent} from './dishes/dishes-list/dishes-list.component';
 const routes:Routes=[
   {  path:'main',
      component:MainComponent,
      children:[
        {
          path:'dashboard',
          component:DashboardComponent,
        },
     {
        path:'menu',
        component:MenuComponent,
      },

      {   path:'menuGroup', component:MenuGroupComponent  },

      {path:'dishes',component:DishesComponent},

      {path:'dishform',component:DishesFormComponent},

      {path:'menu-list',component:MenuListComponent},

      {path:'dishes-list',component:DishesListComponent}


    /* {
       path:'/restaurant',
       component:RestaurantComponent
     }*/
   ],
 }
 ];
  export const APP_ROUTES_PROVIDER: any[] = [];

export const APP_ROUTES: any = RouterModule.forRoot(routes);
 

 //export const APP_ROUTES_PROVIDER: any = RouterModule.forRoot(APP_ROUTES);

/* export const APP_ROUTES_PROVIDER=[
   provideRouter(APP_ROUTES)
 ];*/
