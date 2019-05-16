import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tv-show',
  templateUrl: './tv-show.component.html',
  styleUrls: ['./tv-show.component.css']
})
export class TvShowComponent implements OnInit {

  @Input() tvShowDetails: ITVShowDetails;
  @Output() removeTVShow: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  removeFromFavourites(){
    this.removeTVShow.emit(this.tvShowDetails);
    // stops page reload
    return false;
  }

  addReview(review: string){
    this.tvShowDetails.MyReview = review;
    return false;
  }
}
