import { Component } from '@angular/core';
import { TranslateService } from './translate.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {


	languages: any[];

	constructor(private translate: TranslateService) {
		this.languages = this.translate.getSupportLanguages();
		this.translate.loadDefaultLanuage();
	}

	setLanguage(lang: string) {
		this.translate.use(lang);
		this.translate.setDefaultLanguage(lang);
	}
	onLanguageChanged(lang: any) {
		this.setLanguage(lang);
	}
}
