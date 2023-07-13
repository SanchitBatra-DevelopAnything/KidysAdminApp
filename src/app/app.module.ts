import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { ToastrModule } from 'ngx-toastr';
import { SidebarModule } from 'primeng/sidebar';
import { DialogModule } from 'primeng/dialog';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { environment } from 'src/environments/environment';



import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { CategoryItemComponent } from './category-item/category-item.component';
import { AddItemComponent } from './add-item/add-item.component';
import { ManageComponent } from './manage/manage.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { OrdersComponent } from './orders/orders.component';
import { ReportingComponent } from './reporting/reporting.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemComponent } from './item/item.component';

import { SpeedDialModule } from 'primeng/speeddial';
import { EditItemComponent } from './edit-item/edit-item.component';
import { DistributorAreasComponent } from './manage/distributor-areas/distributor-areas.component';
import { DistributorsListComponent } from './manage/distributors-list/distributors-list.component';
import { PriceListsNDiscountsComponent } from './manage/price-lists-n-discounts/price-lists-n-discounts.component';
import { OrderDetailComponent } from './orders/order-detail/order-detail.component';


const appRoutes : Routes = [
  {path: '' , component:LoginComponent , pathMatch:"full"},
  {path: 'categories' , component : CategoriesListComponent},
  {path : 'itemsOf/:categoryKey/:categoryName' , component : ItemListComponent },
  {path:'notifications' , component:NotificationsComponent},
  {path : 'dailyReport' , component : OrdersComponent},
  {path : 'manage' , component : ManageComponent},
  {path : 'manage' , component : ManageComponent , children:[
    {path : 'areas', component : DistributorAreasComponent},
    {path : 'distributors', component : DistributorsListComponent},
    {path:'priceListsAndDiscounts',component:PriceListsNDiscountsComponent}
  ] ,},
  {path : 'reporting' , component : ReportingComponent},
  {path : 'orderBill/:orderArea/:orderedBy/:orderKey' , component : OrderDetailComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    CategoriesListComponent,
    CategoryItemComponent,
    AddItemComponent,
    ManageComponent,
    NotificationsComponent,
    OrdersComponent,
    ReportingComponent,
    ItemListComponent,
    ItemComponent,
    EditItemComponent,
    DistributorsListComponent,
    DistributorAreasComponent,
    OrderDetailComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    SidebarModule,
    SpeedDialModule,
    DialogModule,
    CardModule,
    DropdownModule,
    DynamicDialogModule,
    ToastrModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    MatTableModule , 
    MatPaginatorModule,
    OverlayPanelModule,
    RouterModule.forRoot(appRoutes,{useHash: true}),
  ],
  providers: [DialogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
