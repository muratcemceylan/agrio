import { UserService } from './services/user/user.service';
import { environment } from './../environments/environment';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule  } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsNavbarComponent } from './components/bs-navbar/bs-navbar.component';
import { HomeComponent } from './components/home/home.component';
import { NewStoreComponent } from './components/new-store/new-store.component';
import { StoreListComponent } from './components/store-list/store-list.component';
import { StockCardComponent } from './components/stock-card/stock-card.component';
import { MyStocksComponent } from './components/my-stocks/my-stocks.component';
import { StockSupplyStartComponent } from './components/stock-supply-start/stock-supply-start.component';
import { StockActivityComponent } from './components/stock-activity/stock-activity.component';
import { LoginComponent } from './components/login/login.component';
import { AuthService } from './services/auth/auth.service';
import { AuthGuardService as AuthGuard, AuthGuardService } from './services/auth-guard/auth-guard.service';
import { DepoService } from './services/depo/depo.service';

@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    NewStoreComponent,
    StoreListComponent,
    StockCardComponent,
    MyStocksComponent,
    StockSupplyStartComponent,
    StockActivityComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    NgbModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent },
      {path: 'depo-tanim', component: NewStoreComponent, canActivate:[AuthGuardService] },
      {path: 'depo-liste', component: StoreListComponent, canActivate:[AuthGuardService] },
      {path: 'yeni-stok-karti', component: StockCardComponent, canActivate:[AuthGuardService] },
      {path: 'stoklarim', component: MyStocksComponent, canActivate:[AuthGuardService] },
      {path: 'stok-acilis-bakiyesi-giris', component: StockSupplyStartComponent, canActivate:[AuthGuardService] },
      {path: 'stok-hareketleri', component: StockActivityComponent, canActivate:[AuthGuardService] },
      {path: 'login', component: LoginComponent }
    ])
  ],
  providers: [
    AuthService,
    AuthGuard,
    UserService,
    DepoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
