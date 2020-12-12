// define an import for developer or production mode for the application build
// the default value for 'enableProdMode' is false
// this will decide if the build is compressed or not
import { enableProdMode } from '@angular/core';
// platformBrowserDynamic
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// boostratp aka load the AppModule in browser
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err)); // show error is module loading is faild
