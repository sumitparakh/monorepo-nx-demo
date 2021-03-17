import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'monorepo-nx-demo-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  ngOnInit(): void {
    console.log('OnInit')
  }
}
