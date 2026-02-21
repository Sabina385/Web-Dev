import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { ProductListComponent } from './app/components/product-list/product-list';

bootstrapApplication(ProductListComponent, appConfig)
  .catch((err) => console.error(err));
