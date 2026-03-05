import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumService } from '../services/album.service';
import { Album } from '../models/album.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './albums.html',
  styleUrls: ['./albums.css']
})
export class AlbumsComponent implements OnInit {
  albums: Album[] = [];
  loading = true;

  constructor(private albumService: AlbumService,private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
  this.albumService.getAlbums().subscribe({
    next: (data) => {
      console.log('Albums loaded:', data); 
      this.albums = data;
      this.loading = false;
      this.cdr.detectChanges();
    },
    error: (err) => {
      console.error('Error loading albums', err);
      this.loading = false;
      this.cdr.detectChanges();
    }
  });
}

  deleteAlbum(id: number): void {
    this.albumService.deleteAlbum(id).subscribe(() => {
      this.albums = this.albums.filter(album => album.id !== id);
      this.cdr.detectChanges();
    });
  }
}