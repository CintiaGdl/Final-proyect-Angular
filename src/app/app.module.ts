import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ByletterComponent } from './pages/byletter/byletter.component';
import { DetailComponent } from './pages/detail/detail.component';
import { ByNameComponent } from './pages/by-name/by-name.component';
import { RandomComponent } from './pages/random/random.component';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ByletterComponent,
    DetailComponent,
    ByNameComponent,
    RandomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
