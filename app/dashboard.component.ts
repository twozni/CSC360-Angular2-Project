import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { TwitchService } from './twitch.service';
import { Control } from 'angular2/common';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'my-dashboard',
    templateUrl: 'app/dashboard.component.html',
    styleUrls: ['app/dashboard.component.css']
})

export class DashboardComponent implements OnInit{ 
    
    error:any;
    top_games:any[] = [];
    featured_streams:any[] = [];
    term:string;
    items: Observable<Array<string>>;
    searchTerm = new Control();
    
    constructor(private _twitchService: TwitchService){
        this._twitchService = _twitchService;
        
        this.items = this._twitchService.searchGame(this.searchTerm);
            
        this.term = this.searchTerm.value;
    }
    
    ngOnInit(){
        this.getTopGames();
        this.getFeaturedStreams();
    }
    
    getTopGames(){
        this.error = "";
        this._twitchService.getTopGames().subscribe(data => this.top_games = data);
    }
    
    getFeaturedStreams(){
        this._twitchService.featuredStreams().subscribe(data => this.featured_streams = data);
        console.log(this.featured_streams);
    }
    
    numFormat(num){
        return this._twitchService.formatNumber(num);
    }
    
    
    


}