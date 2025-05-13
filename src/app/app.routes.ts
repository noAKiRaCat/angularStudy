import { Routes } from '@angular/router';
import { IndexComponent } from './src/index/index.Component'
import { LoginComponent } from './src/login/login.Component'

export const routes: Routes = [
  {
    path: '',                   // 起動画面ルーティング url:http://localhost:4200
    component: IndexComponent
  },
  {
    path: 'login',              // ログイン画面のルーティング url:http://localhost:4200/login
    component : LoginComponent
  }
];
