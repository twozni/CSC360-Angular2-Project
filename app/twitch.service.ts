import {Injectable} from 'angular2/core';
import {Http, URLSearchParams, Jsonp} from 'angular2/http';
import { Control } from 'angular2/common';
import 'rxjs/Rx';

@Injectable()
export class TwitchService{
    
    top_game_url:string = "https://api.twitch.tv/kraken/games/top?limit=14";
    
    constructor(public http: Http,
    private jsonp: Jsonp){
        this.http = http;
    }
    
    searchGame(searchTerm: Control){
        return searchTerm.valueChanges.debounceTime(300)
            .distinctUntilChanged()
            .switchMap((searchTerm:string) => this.search(searchTerm));
    }
    
    validateTerm(term: string){
        if (term == null || term == ""){
             return true;
        }
        else{
            return false;
        }
    }
    
    getTopGames(){
        return this.http.get(this.top_game_url).map(res => res.json().top);
    }
    
    search(term: string){
        
        if (this.validateTerm(term)){
             return this.http.get('https://api.twitch.tv/kraken/search/games?q=empty&type=suggest')
            .map((request) => request.json().games);
        }
        else{
            return this.http.get('https://api.twitch.tv/kraken/search/games?q=' + term + '&type=suggest')
            .map((request) => request.json().games);
        }
    }
    
    searchChannels(term: string){
       if (this.validateTerm(term)){
             return this.http.get('https://api.twitch.tv/kraken/streams?game=test')
            .map((request) => request.json().streams);
        }
        else{
            return this.http.get('https://api.twitch.tv/kraken/streams?game=' + term + '&limit=50')
            .map((request) => request.json().streams);
        }
    }
    
    searchVideos(term: string){
        if(this.validateTerm(term)){
            return this.http.get('https://api.twitch.tv/kraken/videos/top?game=test&period=month&limit=1')
            .map((request) => request.json().videos);
        }
        else{
            return this.http.get('https://api.twitch.tv/kraken/videos/top?game=' + term + '&period=month&limit=50')
            .map((request) => request.json().videos);
        }
    }
    
    featuredStreams(){
        return this.http.get('https://api.twitch.tv/kraken/streams/featured?limit=12').map(res  => res.json().featured);
    }
    
    formatNumber(num){
        var number = num;
        return number.toLocaleString();
    }
    
    
}