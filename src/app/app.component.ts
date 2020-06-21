import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {StoreAuthenticate} from "@Utils/class/store-auth.class";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {ClientType} from "@Resources/types/client.type";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Inbox',
      url: '/folder/Inbox',
      icon: 'mail'
    },
    {
      title: 'Libros',
      url: '/books',
      icon: 'book'
    },
    {
      title: 'Autores',
      url: '/author',
      icon: 'person'
    }
  ];
  // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  public onLogin: Observable<ClientType | null>;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public storeAuthenticate: StoreAuthenticate,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  public logout() {
    this.storeAuthenticate.logout();
    this.router.navigate(['/login']);
  }

  ngOnInit() {
    this.storeAuthenticate.getStoredToken$();
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
    if (!this.storeAuthenticate.getStoredTokens()) {
      this.router.navigate(['/login']);
    }

  }
}
