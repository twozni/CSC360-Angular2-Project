import { Component } from 'angular2/core';
import { Router } from 'angular2/router';
import { TwitchService } from './twitch.service';
import { Control } from 'angular2/common';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'my-dashboard',
    templateUrl: 'app/dashboard.component.html',
    styleUrls: ['app/dashboard.component.css']
})

export class DashboardComponent{ 
    
    error:any;
    top_games:any[] = [];
    term:string;
    items: Observable<Array<string>>;
    searchTerm = new Control();
    
    constructor(private _twitchService: TwitchService){
        this._twitchService = _twitchService;
        
        this.items = this.searchTerm.valueChanges.debounceTime(300)
            .distinctUntilChanged()
            .switchMap((searchTerm:string) => this._twitchService.search(searchTerm));
            
        this.term = this.searchTerm.value;
    }
    
    getTopGames(){
        this.error = "";
        this._twitchService.getTopGames().subscribe(data => this.top_games = data.top);
    }
    
    
    


}