import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { MatIconRegistry } from '@angular/material';

import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { ArticleComponent } from './article/article.component';
import { ArticleService } from './article/article.service';
import { UserService } from './user/user.service';


@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBLKfBG-Nokz3HWAd7uJ8R-h1gixxPZhzM'
    })
  ],
  providers: [
    MatIconRegistry,
    ArticleService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private matIconRegistry: MatIconRegistry) {
    matIconRegistry.registerFontClassAlias('fontawesome', 'fa');
  }
}
