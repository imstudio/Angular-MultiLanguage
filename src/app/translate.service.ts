import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cookie } from 'ng2-cookies/ng2-cookies';

@Injectable()
export class TranslateService {

  data: any = {};

  DEFAULT_LANGAGE = 'LANUAGE';


  constructor(private http: HttpClient) { }

  use(lang: string): Promise<{}> {
    return new Promise<{}>((resolve, reject) => {
      const langPath = `assets/i18n/${lang || 'en'}.json`;

      this.http.get<{}>(langPath).subscribe(
        translation => {
          this.data = Object.assign({}, translation || {});
          resolve(this.data);
        },
        error => {
          this.data = {};
          resolve(this.data);
        }
      );
    });
  }
  setDefaultLanguage(lang: any) {
    Cookie.set(this.DEFAULT_LANGAGE, lang);
  }
  getDefaultLanuage() {
    return Cookie.get(this.DEFAULT_LANGAGE);
  }
  loadDefaultLanuage() {
    this.use(this.getDefaultLanuage());
  }
  getSupportLanguages() {
    return [
      {
        name: 'English',
        key: 'en'
      },
      {
        name: 'Tiếng Việt',
        key: 'vi'
      }
    ];
  }
}
