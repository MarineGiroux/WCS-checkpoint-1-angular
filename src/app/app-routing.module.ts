import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'videos', pathMatch: 'full' },
  { path: 'videos', loadChildren: () =>  import('./modules/videos/video-page.module').then(m  => m.VideoPageModule) },
  { path: '**', loadChildren: () =>  import('./modules/not-found/not-found.module').then(m  => m.NotFoundModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
