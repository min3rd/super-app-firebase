import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss'],
})
export class BaseComponent implements OnInit, OnDestroy {
  title: string = '';
  private _activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  constructor() { }

  ngOnInit() {
    this.title = this._activatedRoute.snapshot.title ?? '';
  }

  ngOnDestroy(): void {

  }
}
