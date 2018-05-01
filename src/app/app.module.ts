import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClientJsonpModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GalleryComponent } from './gallery/gallery.component';
import { FooterComponent } from './footer/footer.component';
import { CardListComponent } from './gallery/card-list/card-list.component';
import { CardComponent } from './gallery/card-list/card.component';
import { CardApiService } from './gallery/card-api.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GalleryComponent,
    FooterComponent,
    CardListComponent,
    CardComponent
  ],
  imports: [
    BrowserModule
    ,HttpClientModule
    ,HttpClientJsonpModule 
  ],
  providers: [CardApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
