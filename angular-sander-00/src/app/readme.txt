1. Создание приложения
1.1 Генерим приложение.
@TODO: описать процесс
1.2 Переход в рабочую папку
current dir "angular-sander"
>cd angular-sander-00


2. Переносим контент из главного файла "app.component.spec.*"  в компонент "home.component.*",
настраиваем маршрутизацию, делаем меню.
2.1 Переносим контент "app.component.*" в "HomeComponent"
3.1.1 Генерируем компонент
>ng g c home
2.1.2 Идем в "angular-sander-00/src/app/app.module.ts" и прописываем HomeComponent
import { HomeComponent } from './home/home.component'; // 0. Импорт модуля
@NgModule({
  declarations: [
    ...
    HomeComponent   // 2. Подключаем компонент
  ]
})
2.1.3 Переносим содержимое "angular-sander-00/src/app/app.component.html" в "angular-sander-00/src/app/home/home.component.html"
Просто переносим содержимое из одного файла в другой.
2.1.3 Копируем из "angular-sander-00/src/app/app.component.ts" в "angular-sander-00/src/app/home/home.component.ts"
Переносим из "export class AppComponent" строчку
  title = 'Sander00';
в
  export class HomeComponent implements OnInit {
    title = 'Sander00'; // Вот она
    ...
  }
2.2 Прикручиваем маршрутизацию
2.2.1 Идем в "angular-sander-00/src/app/app.module.ts"
Добавляем:
import {RouterModule, Routes} from "@angular/router";
const routes: Routes = [{
    path: '', // 1. Указываем, что компонент "HomeComponent" должен отображаться если маршрут не найден (компонент по-умолчанию).
    component: HomeComponent  // Например, для "http://localhost:4200"
}, {
   path: 'home', // 2. Указываем, что  компонент "HomeComponent" должен отображаться также для "http://localhost:4200/home"
   component: HomeComponent
}];
@NgModule({
  declarations: [
    ...,
    HomeComponent
  }
  imports: [
    ...
    RouterModule.forRoot(routes)
  ],
  ...
});
2.2.2 Идем в "angular-sander-00/src/app/app.component.html"
Прописываем роутинг, добавив в начало файла:
<router-outlet></router-outlet>
2.3 Проверяем.
Визуально ничего не изменится, но контент будет браться из дочернего компонента.
Кроме того, один и тот же контент будет выводиться по ссылкам
"http://localhost:4200"
"http://localhost:4200/home"

2.3. Создаем меню
2.3.1 Генерация компонента
>ng g c menu
Появится папка "angular-sander-00/src/app/menu" с файлами компонента.
2.3.2 Прописываем компонент в "angular-sander-00/src/app/app.component.html"
Добавим в начало файла <app-menu></app-menu>
Теперь на любой странице в верху страницы будет вверху меню.
На данном шаге  "app.component.html" должен быть таким:
    <app-menu></app-menu>
    <router-outlet></router-outlet>
2.3 Создаем верстку меню
<div>
  <a routerLink="/home">Home</a>
  <a routerLink="/home">Home2</a>
</div>



3. Создаем компонент для тестирования интерполяции
3.1. Генерируем компонент.
>ng g c 00/interpolation
Появятся папки "angular-sander-00/src/app/00/interpolation" и внутри файлы компонента.
3.2. Подключаем "00/interpolation" через routing и меню
3.2.1 "angular-sander-00/src/app/app.module.ts"
const routes: Routes = [
...
, {
    path: '00/interpolation',
    component: InterpolationComponent
}
Этого достаточно чтобы компонент появился при переходе "http://localhost:4200/00/interpolation"
3.2.2  "angular-sander-00/src/app/menu/menu.component.html"
Добавляем к имеющимся пунктам
    <a routerLink="/00/interpolation">00/interpolation</a>
итого
<div>
  <a routerLink="/home">Home</a>
  <a routerLink="/00/interpolation">00/interpolation</a>
</div>
3.3 Наполняем контентом по интерполяции.




