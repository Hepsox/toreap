import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { ButtonComponent } from './button/button.component';
import { CardHorizontalComponent } from './card-horizontal/card-horizontal.component';
import { AuthModule } from './auth/auth.module';
import { LoginFormComponent } from './auth/components/login-form/login-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ButtonComponent,
    CardHorizontalComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, AuthModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
