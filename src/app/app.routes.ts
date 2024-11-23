import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadComponent: () => import('@buygiftpresent/home').then(m => m.HomeComponent) },
  { path: 'wishlist', loadComponent: () => import('@buygiftpresent/wishlist').then(m => m.WishlistComponent) },
  ];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
