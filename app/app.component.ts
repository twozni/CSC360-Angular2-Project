import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { TwitchService } from './twitch.service';
import { Control } from 'angular2/common';
import { Observable } from 'rxjs/Observable';
import { DashboardComponent } from './dashboard.component';
import { ChannelComponent } from './channel.component';
import { VideoComponent } from './video.component';
import { StreamerComponent } from './streamer.component';
import { RandomStreamComponent } from './random-stream.component'

@Component({
    selector: 'my-app',
    template: `
    <h1>{{title}}</h1>
    <nav class="routes">
        <img src="http://s.jtvnw.net/jtv_user_pictures/hosted_images/Twitch_BlackLogo.png" height="25">
        <a [routerLink]="['Dashboard']">Dashboard</a>
        <a [routerLink]="['Channels']">Channels</a>
        <a [routerLink]="['Videos']">Videos</a>
        <a [routerLink]="['Streamer']">Streamer</a>
        <a [routerLink]="['Random']">Random Streams</a>
    </nav>
    <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS,
        TwitchService
        ],
    styleUrls: ['app/app.component.css']
})

@RouteConfig([
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: DashboardComponent,
      useAsDefault: true  
    },
    {
      path: '/channels',
      name: 'Channels',
      component: ChannelComponent
    },
    {
      path: '/videos',
      name: 'Videos',
      component: VideoComponent
    },
    {
      path: '/streamer',
      name: 'Streamer',
      component: StreamerComponent  
    },
    {
        path:'/random',
        name: 'Random',
        component: RandomStreamComponent
    }
])


export class AppComponent{
    
    
}