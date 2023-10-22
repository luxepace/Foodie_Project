import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-backLink',
  templateUrl: './backLink.component.html',
  styleUrls: ['./backLink.component.css']
})
export class BackLinkComponent implements OnInit {

  constructor(private _location: Location) { }

  ngOnInit() {
  }

  backClicked() {
    this._location.back();
  }
}
