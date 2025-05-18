import { Routes } from '@angular/router';
import { IndexComponent } from './src/index/index.Component'
import { LoginComponent } from './src/login/login.Component'
import {ComponentComponent} from './src/study/study02/component.Component';

export const routes: Routes = [
  {
    path: '',                   // 起動画面ルーティング url:http://localhost:4200
    component: IndexComponent
  },
  {
    path: 'login',              // ログイン画面のルーティング url:http://localhost:4200/login
    component : LoginComponent
  },
  {
    path: 'studyComponent',     // コンポーネント構造
    component : ComponentComponent
  }

];
