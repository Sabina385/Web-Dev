import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Album } from '../models/album.model';
import { Photo } from '../models/photo.model';
import { of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  private baseUrl = 'https://jsonplaceholder.typicode.com';
  private albumsCache: Album[] | null = null; 

  constructor(private http: HttpClient) {}

  getAlbums(): Observable<Album[]> {
     if (this.albumsCache) {
    return of(this.albumsCache);
  }
  return this.http.get<Album[]>(`${this.baseUrl}/albums`).pipe(
    tap(data => this.albumsCache = data) 
  );
    //return this.http.get<Album[]>(`${this.baseUrl}/albums`);
  }

  getAlbum(id: number): Observable<Album> {
    if (this.albumsCache) {
    const album = this.albumsCache.find(a => a.id === id);
    if (album) return of(album); 
  }
   return this.http.get<Album>(`${this.baseUrl}/albums/${id}`);
  }

  getAlbumPhotos(id: number): Observable<Photo[]> {
    return this.http.get<Photo[]>(`${this.baseUrl}/albums/${id}/photos`);
  }

  updateAlbum(album: Album): Observable<Album> {
    return this.http.put<Album>(`${this.baseUrl}/albums/${album.id}`, album);
  }

  deleteAlbum(id: number): Observable<void> {
      if (this.albumsCache) {
    this.albumsCache = this.albumsCache.filter(a => a.id !== id); 
  }
    return this.http.delete<void>(`${this.baseUrl}/albums/${id}`);
  }
}