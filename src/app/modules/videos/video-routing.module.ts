import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoPageComponent } from './pages/video-page/video-page.component';

const routes: Routes = [
  { path: "", component: VideoPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideoPageRoutingModule { }
