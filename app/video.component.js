System.register(['angular2/core', './twitch.service', 'angular2/common', 'angular2/http'], function(exports_1, context_1) {
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
    var core_1, twitch_service_1, common_1, http_1;
    var VideoComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (twitch_service_1_1) {
                twitch_service_1 = twitch_service_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            VideoComponent = (function () {
                function VideoComponent(_twitchService, http) {
                    this._twitchService = _twitchService;
                    this.http = http;
                    this.searchTerm = new common_1.Control();
                    this._twitchService = _twitchService;
                    this.games = this._twitchService.searchGame(this.searchTerm);
                    this.term = this.searchTerm.value;
                }
                VideoComponent.prototype.searchVideos = function (term) {
                    var _this = this;
                    this._twitchService.searchVideos(term).subscribe(function (data) { return _this.videos = data; });
                    console.log(this.videos);
                };
                VideoComponent.prototype.strAsDate = function (dateStr) {
                    return new Date(dateStr);
                };
                VideoComponent.prototype.secToHours = function (seconds) {
                    return (new Date(seconds * 1000)).toUTCString().match(/(\d\d:\d\d:\d\d)/)[0];
                };
                VideoComponent.prototype.numFormat = function (num) {
                    return this._twitchService.formatNumber(num);
                };
                VideoComponent = __decorate([
                    core_1.Component({
                        selector: 'videos',
                        templateUrl: 'app/video.component.html',
                        styleUrls: ['app/channel.component.css']
                    }), 
                    __metadata('design:paramtypes', [twitch_service_1.TwitchService, http_1.Http])
                ], VideoComponent);
                return VideoComponent;
            }());
            exports_1("VideoComponent", VideoComponent);
        }
    }
});
//# sourceMappingURL=video.component.js.map