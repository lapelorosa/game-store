import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Login', url: '/login', icon: 'home' },
    { title: 'Contact', url: '/contact', icon: 'person' },
    { title: 'Productos', url: '/productos', icon: 'game-controller' },
    { title: 'Misc', url: '/misc', icon: 'albums' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  public Logname = "GameStoreThita";
  public Logmail = "CorreoStore@usuario.com";

  constructor() {}
}

export class Globaless{

  public Logname = "GameStoreThita";
  public Logmail = "CorreoStore@usuario.com";

} 
