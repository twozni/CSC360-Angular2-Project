import { Component } from 'angular2/core';
import { Router } from 'angular2/router';
import { TwitchService } from './twitch.service';
import { Control } from 'angular2/common';
import { Observable } from 'rxjs/Observable';
import { Http } from 'angular2/http';

@Component({
    selector: 'videos',
    templateUrl: 'app/video.component.html',
    styleUrls: ['app/channel.component.css']
})

export class VideoComponent{ 
    
    error:any;
    term:string;
    videos: Observable<Array<string>>;
    games: Observable<Array<string>>;
    searchTerm = new Control();
    
    constructor(private _twitchService: TwitchService,
    public http:Http){
        
        this._twitchService = _twitchService;
        
        this.games = this._twitchService.searchGame(this.searchTerm);
            
        this.term = this.searchTerm.value;
    } 
    
    
   searchVideos(term: string){
       this._twitchService.searchVideos(term).subscribe(data => this.videos = data);
       console.log(this.videos);
    }
    
    

}