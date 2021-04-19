import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private linkTheme = document.querySelector('#theme');
  url: any = './assets/css/colors/default-dark.css';
  constructor(


  ) {
    this.url ? this.url = localStorage.getItem('theme') : this.url = this.url;
    this.linkTheme?.setAttribute('href', this.url);

  }

  cambiarTema(theme: string) {

    const url = `./assets/css/colors/${theme}.css `;
    this.linkTheme?.setAttribute('href', url);
    localStorage.setItem('theme', url);
    this.checkCurrentTheme();
  }

  checkCurrentTheme() {

    const links = document.querySelectorAll('.selector');

    links.forEach(elem => {
      elem.classList.remove('working');
      const btnTheme = elem.getAttribute('data-theme');
      const btnThemeUrl = `./assets/css/colors/${btnTheme}.css `;
      const currentTheme = this.linkTheme?.getAttribute('href');
      console.log('themeUrl: ' + btnThemeUrl);
      console.log('currentT: ' + currentTheme);

      if (btnThemeUrl == currentTheme) {
        console.log('hola')
        elem.classList.add('working');

      }
    })
  }


}
