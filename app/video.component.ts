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
    limit:number = 25;
    
    constructor(private _twitchService: TwitchService,
    public http:Http){
        
        this._twitchService = _twitchService;
        
        this.games = this._twitchService.searchGame(this.searchTerm);
            
        this.term = this.searchTerm.value;
    } 
    
    
   searchVideos(term: string, limit: number){
       this._twitchService.searchVideos(term, limit).subscribe(data => this.videos = data);
       console.log(this.videos);
    }
    
    strAsDate(dateStr){
        return new Date(dateStr);
    }
    
    secToHours(seconds){
        return (new Date(seconds * 1000)).toUTCString().match(/(\d\d:\d\d:\d\d)/)[0];
    }
    
    numFormat(num){
        return this._twitchService.formatNumber(num);
    }
    
    

}