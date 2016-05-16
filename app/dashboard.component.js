System.register(['angular2/core', './twitch.service', 'angular2/common'], function(exports_1, context_1) {
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
    var core_1, twitch_service_1, common_1;
    var DashboardComponent;
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
            }],
        execute: function() {
            DashboardComponent = (function () {
                function DashboardComponent(_twitchService) {
                    var _this = this;
                    this._twitchService = _twitchService;
                    this.top_games = [];
                    this.searchTerm = new common_1.Control();
                    this._twitchService = _twitchService;
                    this.items = this.searchTerm.valueChanges.debounceTime(300)
                        .distinctUntilChanged()
                        .switchMap(function (searchTerm) { return _this._twitchService.search(searchTerm); });
                    this.term = this.searchTerm.value;
                }
                DashboardComponent.prototype.getTopGames = function () {
                    var _this = this;
                    this.error = "";
                    this._twitchService.getTopGames().subscribe(function (data) { return _this.top_games = data.top; });
                };
                DashboardComponent = __decorate([
                    core_1.Component({
                        selector: 'my-dashboard',
                        templateUrl: 'app/dashboard.component.html',
                        styleUrls: ['app/dashboard.component.css']
                    }), 
                    __metadata('design:paramtypes', [twitch_service_1.TwitchService])
                ], DashboardComponent);
                return DashboardComponent;
            }());
            exports_1("DashboardComponent", DashboardComponent);
        }
    }
});
//# sourceMappingURL=dashboard.component.js.map