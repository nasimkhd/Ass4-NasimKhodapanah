/*********************************************************************************
* WEB422 – Assignment 04 * I declare that this assignment is my own work in
accordance with Seneca Academic Policy. No part of this * assignment has been
copied manually or electronically from any other source (including web sites) or
* distributed to other students. * * Name: Nasim Khodapanah Student ID:
131929200 Date: 3/03/22 *
********************************************************************************/
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewReleasesComponent } from './new-releases/new-releases.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AlbumComponent } from './album/album.component';
import { ArtistDiscographyComponent } from './artist-discography/artist-discography.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: 'new-releases', component: NewReleasesComponent },
  { path: 'artist', component: ArtistDiscographyComponent },
  { path: 'album', component: AlbumComponent },
  { path: 'about', component: AboutComponent },
  {
    path: '',
    redirectTo: './new-releases',
    pathMatch: 'full',
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
