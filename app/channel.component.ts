import { Component } from 'angular2/core';
import { Router } from 'angular2/router';
import { TwitchService } from './twitch.service';
import { Control } from 'angular2/common';
import { Observable } from 'rxjs/Observable';
import { Http } from 'angular2/http';

@Component({
    selector: 'channels',
    templateUrl: 'app/channel.component.html',
    styleUrls: ['app/channel.component.css']
})

export class ChannelComponent{ 
    
    error:any;
    term:string;
    streams: Observable<Array<string>>;
    games: Observable<Array<string>>;
    searchTerm = new Control();
    limit:number = 25;
    
    gameImage:string;
    
    constructor(private _twitchService: TwitchService,
    public http:Http){
        this._twitchService = _twitchService;
        
        this.games = this._twitchService.searchGame(this.searchTerm);
            
        this.term = this.searchTerm.value;
    } 
    
    
   searchChannels(term: string, limit: number){
       this._twitchService.searchChannels(term, limit).subscribe(data => this.streams = data);
       console.log(this.streams);
    }
    
    numFormat(num){
        return this._twitchService.formatNumber(num);
    }
    
    roundFps(num){
        return Math.floor(num);
    }
    
    

}