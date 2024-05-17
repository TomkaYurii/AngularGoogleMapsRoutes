import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  PlaceAutocompleteComponent,
  PlaceSearchResult,
} from "./components/place-autocomplete/place-autocomplete.component";
import {CommonModule} from "@angular/common";
import {MatToolbar} from "@angular/material/toolbar";
import {PlaceDetailsComponent} from "./components/place-details/place-details.component";
import {MapDisplayComponent} from "./components/map-display/map-display.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    CommonModule,
    MatToolbar,

    PlaceAutocompleteComponent,
    PlaceDetailsComponent,
    MapDisplayComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularExampleRoutes';

  fromValue: PlaceSearchResult = { address: '' };
  toValue: PlaceSearchResult = { address: '' };
}
