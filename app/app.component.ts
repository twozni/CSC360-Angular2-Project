import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { TwitchService } from './twitch.service';
import { Control } from 'angular2/common';
import { Observable } from 'rxjs/Observable';
import { DashboardComponent } from './dashboard.component';
import { ChannelComponent } from './channel.component';
import { VideoComponent } from './video.component';

@Component({
    selector: 'my-app',
    template: `
    <h1>{{title}}</h1>
    <nav class="routes">
        <a [routerLink]="['Dashboard']">Dashboard</a>
        <a [routerLink]="['Channels']">Channels</a>
        <a [routerLink]="['Videos']">Videos</a>
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
    }
])


export class AppComponent{
    
}