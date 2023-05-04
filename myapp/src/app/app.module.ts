import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
//import { ServerComponent } from './server/server.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NamesComponent } from './names/names.component';
import { ClicklogsComponent } from './clicklogs/clicklogs.component';
import { AddproductComponent } from './products/addproduct/addproduct.component';
import { ProductComponent } from './products/product/product.component';
import { LifecycledemoComponent } from './lifecycledemo/lifecycledemo.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success.alert.component';
import { BasicHighLightDirective } from './CustomDirectives/BasicHighlightDirectives';
import { BetterHighlightDirective } from './CustomDirectives/better-highlight.directive';
import { AccountsComponent } from './accounts/accounts.component';
import { NewaccountComponent } from './accounts/newaccount/newaccount.component';
import { AccountComponent } from './accounts/account/account.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { ObervablesdemoComponent } from './obervablesdemo/obervablesdemo.component';
import { TformsComponent } from './tforms/tforms.component';
import { RformsComponent } from './rforms/rforms.component';
import { PipesdemoComponent } from './pipesdemo/pipesdemo.component';
import { ShortenPipe } from './commonpipes/shortenpipes';
import { FilterPipe } from './commonpipes/filter.pipe';
import { ReversePipe } from './commonpipes/reverse.pipe';
import { BlogpostsComponent } from './blogposts/blogposts.component';
import { BlogpostComponent } from './blogposts/blogpost/blogpost.component';
import { FoodbloghomeComponent } from './foodbloghome/foodbloghome.component';
import { FoodblogcreateComponent } from './foodblogcreate/foodblogcreate.component';
import { PostComponent } from './foodbloghome/post/post.component';




const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'warningalert', component: WarningAlertComponent },
  {path: 'success', component: SuccessAlertComponent },
  {path: 'clicklogs', component: ClicklogsComponent},
  {path: 'products', component: ProductComponent },
  {path: 'obervables', component: ObervablesdemoComponent },
  {path: 'tforms', component: TformsComponent },
  {path: 'rforms', component: RformsComponent },
  {path: 'pipes', component: PipesdemoComponent },
  {path: 'blogs', component: BlogpostsComponent },
  {path: 'foodbloghome', component: FoodbloghomeComponent },
  {path: 'foodblogcreate', component: FoodblogcreateComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    // ServerComponent,
    NamesComponent,
    ClicklogsComponent,
    AddproductComponent,
    ProductComponent,
    LifecycledemoComponent,
    BasicHighLightDirective,
    BetterHighlightDirective,
    AccountsComponent,
    NewaccountComponent,
    AccountComponent,
    HomeComponent,
    ObervablesdemoComponent,
    TformsComponent,
    RformsComponent,
    PipesdemoComponent,
    ShortenPipe,
    FilterPipe,
    ReversePipe,
    BlogpostsComponent,
    BlogpostComponent,
    FoodbloghomeComponent,
    FoodblogcreateComponent,
    PostComponent,
   

  ],
  imports: [
    BrowserModule ,
     RouterModule.forRoot(appRoutes), ReactiveFormsModule, FormsModule,
     HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
