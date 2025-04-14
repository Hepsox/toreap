import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { ButtonComponent } from './button/button.component';
import { CardHorizontalComponent } from './card-horizontal/card-horizontal.component';
import { AuthModule } from './auth/auth.module';
import { LoginFormComponent } from './auth/components/login-form/login-form.component';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ButtonComponent,
    CardHorizontalComponent,
    HomeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, AuthModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
