import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { CategoryItemComponent } from './category-item/category-item.component';
import { AddItemComponent } from './add-item/add-item.component';


const appRoutes : Routes = [
  {path: '' , component:LoginComponent , pathMatch:"full"},
  {path: 'categories' , component : CategoriesListComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    CategoriesListComponent,
    CategoryItemComponent,
    AddItemComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    DynamicDialogModule,
    RouterModule.forRoot(appRoutes,{useHash: true}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
