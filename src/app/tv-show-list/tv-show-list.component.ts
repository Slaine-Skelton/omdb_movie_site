import { Component, OnInit, EventEmitter } from '@angular/core';
import { OmdbApiService } from  '../omdb-api.service';

@Component({
  selector: 'app-tv-show-list',
  templateUrl: './tv-show-list.component.html',
  styleUrls: ['./tv-show-list.component.css'],
  providers: [OmdbApiService]
})
export class TvShowListComponent implements OnInit {

  private tvShows: ITVShowDetails[];
  private tvShowData: ITVShowDetails;
  private posterHeight = 200;


  constructor(private _omdbService: OmdbApiService) { 
    this.tvShows = new Array();
  }

  getTVShowDetails(tvShowName: string){
    this._omdbService.getTVShowData(tvShowName).subscribe(
      movieData => {this.tvShowData = movieData});
    return false;
  }

  addToFavourites(){
    this.tvShows.push(this.tvShowData);
  }

  cancel(){
    this.tvShowData = null;
  }

  removeFromFavourites(event){
    for(var i = 0; i < this.tvShows.length; i++){
        if(event = this.tvShows[i]){
          this.tvShows.splice(i, 1);
          break; // in case there are duplicate values
        }
    }
  }

  ngOnInit() {
  }

}
