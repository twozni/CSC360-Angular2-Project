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
    var ChannelComponent;
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
            ChannelComponent = (function () {
                function ChannelComponent(_twitchService, http) {
                    this._twitchService = _twitchService;
                    this.http = http;
                    this.searchTerm = new common_1.Control();
                    this.limit = 25;
                    this._twitchService = _twitchService;
                    this.games = this._twitchService.searchGame(this.searchTerm);
                    this.term = this.searchTerm.value;
                }
                ChannelComponent.prototype.searchChannels = function (term, limit) {
                    var _this = this;
                    this._twitchService.searchChannels(term, limit).subscribe(function (data) { return _this.streams = data; });
                    console.log(this.streams);
                };
                ChannelComponent.prototype.numFormat = function (num) {
                    return this._twitchService.formatNumber(num);
                };
                ChannelComponent.prototype.roundFps = function (num) {
                    return Math.floor(num);
                };
                ChannelComponent = __decorate([
                    core_1.Component({
                        selector: 'channels',
                        templateUrl: 'app/channel.component.html',
                        styleUrls: ['app/channel.component.css']
                    }), 
                    __metadata('design:paramtypes', [twitch_service_1.TwitchService, http_1.Http])
                ], ChannelComponent);
                return ChannelComponent;
            }());
            exports_1("ChannelComponent", ChannelComponent);
        }
    }
});
//# sourceMappingURL=channel.component.js.map