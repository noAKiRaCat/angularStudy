import {Component} from '@angular/core';
import {study02SubComponent} from './study02Sub/study02Sub.Component';

@Component({
  selector: 'componentComponent, [component-component]',
  templateUrl: './component.Component.html',
  styleUrl: './component.Component.css',
  imports: [
    study02SubComponent
  ],
  // コンポーネントの使用
})

export class ComponentComponent {
}
