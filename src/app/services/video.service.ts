import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Video } from '../models/classes/video.class';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  private videos: Video[] = [];
  private http = inject(HttpClient);

  constructor() { }

  getVideoList(): Observable<Video[]>{
    return this.http.get<Video[]>("/data.json");
  }

  getVideoById(id: string): Observable<Video>{
    return this.http.get<Video[]>("/data.json").pipe(
      map(videos => videos.find(video => video.url === id)),
      map(video =>{
        if (!video) throw new Error('Video not found');
        return video;
      })
    )
  }

  filteredVideoList(): Video[]{
    this.getVideoList().subscribe(videos => this.videos = videos);
    return this.videos;
  };

}
