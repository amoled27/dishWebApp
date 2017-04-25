import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {MenuComponent} from './menu/menu.component';
import { AppComponent } from './app.component';
import {MainComponent} from './main/main.component';
import { RouterModule } from '@angular/router';
import { APP_ROUTES, APP_ROUTES_PROVIDER } from './app.routes';
import {DashboardComponent} from './dashboard/dashboard.component';
import {MenuGroupComponent} from './menuGroup/menu-group.component';
import {MenuService} from './services/menu.service';
import {MenuGroupService} from './services/menuGroup.service';
import {EmitterService} from './emitter.service';
import {MenuBoxComponent} from './menu/menu-box/menu-box.component';
import {MenuGroupBoxComponent} from './menuGroup/menuGroup-box/menuGroup-box.component';
import { MaterialModule } from '@angular/material';
import {DishesComponent} from './dishes/dishes.component';
import {DishesBoxComponent} from './dishes/dishes-box/dishes-box.component';
import {DishesService} from './services/dishes.service';
import {DishesFormComponent} from './dishes/dishes-form/dishes-form.component';
import {MenuListComponent} from './menu/menu-list/menu-list.component';
import {DishesListComponent} from './dishes/dishes-list/dishes-list.component';
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MainComponent,
    DashboardComponent,
    MenuGroupComponent,
    MenuBoxComponent,
    MenuGroupBoxComponent,
    DishesComponent,
    DishesBoxComponent,
    DishesFormComponent,
    MenuListComponent,
    DishesListComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
  APP_ROUTES,
  MaterialModule
  ],


  providers: [APP_ROUTES_PROVIDER,MenuService,MenuGroupService,EmitterService,DishesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
