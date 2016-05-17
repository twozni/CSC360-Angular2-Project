System.register(['angular2/core', 'angular2/http', 'rxjs/Rx'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1;
    var TwitchService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            TwitchService = (function () {
                function TwitchService(http, jsonp) {
                    this.http = http;
                    this.jsonp = jsonp;
                    this.top_game_url = "https://api.twitch.tv/kraken/games/top?limit=14";
                    this.http = http;
                }
                TwitchService.prototype.searchGame = function (searchTerm) {
                    var _this = this;
                    return searchTerm.valueChanges.debounceTime(300)
                        .distinctUntilChanged()
                        .switchMap(function (searchTerm) { return _this.search(searchTerm); });
                };
                TwitchService.prototype.validateTerm = function (term) {
                    if (term == null || term == "") {
                        return true;
                    }
                    else {
                        return false;
                    }
                };
                TwitchService.prototype.getTopGames = function () {
                    return this.http.get(this.top_game_url).map(function (res) { return res.json().top; });
                };
                TwitchService.prototype.search = function (term) {
                    if (this.validateTerm(term)) {
                        return this.http.get('https://api.twitch.tv/kraken/search/games?q=empty&type=suggest')
                            .map(function (request) { return request.json().games; });
                    }
                    else {
                        return this.http.get('https://api.twitch.tv/kraken/search/games?q=' + term + '&type=suggest')
                            .map(function (request) { return request.json().games; });
                    }
                };
                TwitchService.prototype.searchChannels = function (term) {
                    if (this.validateTerm(term)) {
                        return this.http.get('https://api.twitch.tv/kraken/streams?game=test')
                            .map(function (request) { return request.json().streams; });
                    }
                    else {
                        return this.http.get('https://api.twitch.tv/kraken/streams?game=' + term)
                            .map(function (request) { return request.json().streams; });
                    }
                };
                TwitchService.prototype.searchVideos = function (term) {
                    if (this.validateTerm(term)) {
                        return this.http.get('https://api.twitch.tv/kraken/videos/top?game=test&period=month&limit=1')
                            .map(function (request) { return request.json().videos; });
                    }
                    else {
                        return this.http.get('https://api.twitch.tv/kraken/videos/top?game=' + term + '&period=month&limit=50')
                            .map(function (request) { return request.json().videos; });
                    }
                };
                TwitchService.prototype.featuredStreams = function () {
                    return this.http.get('https://api.twitch.tv/kraken/streams/featured?limit=12').map(function (res) { return res.json().featured; });
                };
                TwitchService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http, http_1.Jsonp])
                ], TwitchService);
                return TwitchService;
            }());
            exports_1("TwitchService", TwitchService);
        }
    }
});
//# sourceMappingURL=twitch.service.js.map