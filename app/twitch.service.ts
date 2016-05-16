import {Injectable} from 'angular2/core';
import {Http, URLSearchParams, Jsonp} from 'angular2/http';
import 'rxjs/Rx';

@Injectable()
export class TwitchService{
    
    top_game_url:string = "https://api.twitch.tv/kraken/games/top";
    
    constructor(public http: Http,
    private jsonp: Jsonp){
        this.http = http;
    }
    
    getTopGames(){
        return this.http.get(this.top_game_url).map(res => res.json());
    }
    
    search(term: string){
        
        if (term == null || term == ""){
             return this.http.get('https://api.twitch.tv/kraken/search/games?q=empty&type=suggest')
            .map((request) => request.json().games);
        }
        else{
            return this.http.get('https://api.twitch.tv/kraken/search/games?q=' + term + '&type=suggest')
            .map((request) => request.json().games);
        }
    }
    
    searchChannels(term: string){
       if (term == null || term == ""){
             return this.http.get('https://api.twitch.tv/kraken/streams?game=test')
            .map((request) => request.json());
        }
        else{
            return this.http.get('https://api.twitch.tv/kraken/streams?game=' + term)
            .map((request) => request.json());
        }
    }
    
    
}