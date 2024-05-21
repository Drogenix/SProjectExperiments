import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import {provideRouter, Routes} from "@angular/router";
import {DataComponent} from "./solution-1/data/data.component";
import {provideHttpClient} from "@angular/common/http";
import {provideState, provideStore, StoreModule} from "@ngrx/store";
import {matchEventsReducer} from "./solution-2/reducers/match-events.reducer";
import {importProvidersFrom} from "@angular/core";

const ROUTES:Routes = [
  {
    path:'', component:DataComponent
  }
]

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(ROUTES),
    provideHttpClient(),
    provideStore({ matchEvents: matchEventsReducer })
  ]
})
  .catch((err) => console.error(err));
