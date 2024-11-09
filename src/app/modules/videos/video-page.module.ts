import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoPageRoutingModule } from './video-routing.module';
import { VideoPageComponent } from './pages/video-page/video-page.component';
import { VideoSearchComponent } from './pages/video-search/video-search.component';
import { VideoListComponent } from './pages/video-list/video-list.component';


@NgModule({
  declarations: [
    VideoPageComponent,
    VideoSearchComponent,
    VideoListComponent
  ],
  imports: [
    CommonModule,
    VideoPageRoutingModule
  ]
})
export class VideoPageModule { }
