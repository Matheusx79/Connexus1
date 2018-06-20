import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { GeanComponent } from './gean/gean.component';
import { LoginComponent } from './login/login.component';
import { UserService } from './user.service';
import { PainelComponent } from './painel/painel.component'

@NgModule({
  declarations: [
    AppComponent,
    GeanComponent,
    LoginComponent,
    PainelComponent
  ],
  imports: [
    BrowserModule,
     HttpClientModule,
    AppRoutingModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
