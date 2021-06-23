import { NgModule } from '@angular/core';
import { NoPreloading, PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './main/home/home.component';
import { ProfileComponent } from './main/profile/profile.component';
import { AboutComponent } from './main/about/about.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'about', component: AboutComponent },
  { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  { path: 'examples', loadChildren: () => import('./examples/examples.module').then(m => m.ExamplesModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
