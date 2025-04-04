import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { provideRouter } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap/modal';
import { importProvidersFrom } from '@angular/core';
import { CarouselModule } from 'ngx-bootstrap/carousel'

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    importProvidersFrom(ModalModule.forRoot(), CarouselModule.forRoot())
  ]
}).catch(err => console.error(err));
