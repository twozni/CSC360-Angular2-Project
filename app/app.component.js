System.register(['angular2/core', 'angular2/router', './twitch.service', './dashboard.component', './channel.component', './video.component', './streamer.component', './random-stream.component'], function(exports_1, context_1) {
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
    var core_1, router_1, twitch_service_1, dashboard_component_1, channel_component_1, video_component_1, streamer_component_1, random_stream_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (twitch_service_1_1) {
                twitch_service_1 = twitch_service_1_1;
            },
            function (dashboard_component_1_1) {
                dashboard_component_1 = dashboard_component_1_1;
            },
            function (channel_component_1_1) {
                channel_component_1 = channel_component_1_1;
            },
            function (video_component_1_1) {
                video_component_1 = video_component_1_1;
            },
            function (streamer_component_1_1) {
                streamer_component_1 = streamer_component_1_1;
            },
            function (random_stream_component_1_1) {
                random_stream_component_1 = random_stream_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    <h1>{{title}}</h1>\n    <nav class=\"routes\">\n        <img src=\"http://s.jtvnw.net/jtv_user_pictures/hosted_images/Twitch_BlackLogo.png\" height=\"25\">\n        <a [routerLink]=\"['Dashboard']\">Dashboard</a>\n        <a [routerLink]=\"['Channels']\">Channels</a>\n        <a [routerLink]=\"['Videos']\">Videos</a>\n        <a [routerLink]=\"['Streamer']\">Streamer</a>\n        <a [routerLink]=\"['Random']\">Random Streams</a>\n    </nav>\n    <router-outlet></router-outlet>\n    ",
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [
                            router_1.ROUTER_PROVIDERS,
                            twitch_service_1.TwitchService
                        ],
                        styleUrls: ['app/app.component.css']
                    }),
                    router_1.RouteConfig([
                        {
                            path: '/dashboard',
                            name: 'Dashboard',
                            component: dashboard_component_1.DashboardComponent,
                            useAsDefault: true
                        },
                        {
                            path: '/channels',
                            name: 'Channels',
                            component: channel_component_1.ChannelComponent
                        },
                        {
                            path: '/videos',
                            name: 'Videos',
                            component: video_component_1.VideoComponent
                        },
                        {
                            path: '/streamer',
                            name: 'Streamer',
                            component: streamer_component_1.StreamerComponent
                        },
                        {
                            path: '/random',
                            name: 'Random',
                            component: random_stream_component_1.RandomStreamComponent
                        }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map