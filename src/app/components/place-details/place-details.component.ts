import { Component, Input, OnInit } from '@angular/core';
import {CommonModule} from "@angular/common";
import {MatCardModule} from "@angular/material/card";
import {PlaceSearchResult} from "../place-autocomplete/place-autocomplete.component";

@Component({
  selector: 'app-place-card',
  standalone: true,
  imports: [CommonModule,MatCardModule],
  templateUrl: './place-details.component.html',
  styleUrl: './place-details.component.css'
})
export class PlaceDetailsComponent implements OnInit {
  @Input() data: PlaceSearchResult | undefined;

  constructor() {}

  ngOnInit(): void {}
}
