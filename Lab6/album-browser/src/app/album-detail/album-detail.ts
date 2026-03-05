import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AlbumService } from '../services/album.service';
import { Album } from '../models/album.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './album-detail.html',
  styleUrls: ['./album-detail.css']
})
export class AlbumDetailComponent implements OnInit {
  album: Album | undefined;
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

ngOnInit(): void {
  const id = Number(this.route.snapshot.paramMap.get('id'));
  
  this.albumService.getAlbum(id).subscribe({
    next: (data) => {
      console.log('Detail loaded:', data); 
      this.album = data;
      this.loading = false;
      this.cdr.detectChanges();
    },
    error: (err) => {
      console.error('Error loading detail', err);
      this.loading = false;
      this.cdr.detectChanges(); 
    }
  });
}

  save(): void {
    if (this.album) {
      this.albumService.updateAlbum(this.album).subscribe(() => {
        alert('Album updated!');
      });
    }
  }

  viewPhotos(): void {
    if (this.album) {
      this.router.navigate(['/albums', this.album.id, 'photos']);
    }
  }

  goBack(): void {
    this.router.navigate(['/albums']);
  }
}