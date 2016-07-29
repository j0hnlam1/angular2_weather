import {Component} from 'angular2/core';
import {WeatherListComponent} from "./weather/weather-list.component";
import {WeatherSearchComponent} from "./weather/weather-search.component";
import {SidebarComponent} from "./sidebar.component";
@Component({
    selector: 'my-app',
    template: `
        <header>
            <h1>Weather App</h1>
            <h3>Angular 2 | Typescript</h3>
        </header>
        <my-sidebar></my-sidebar>
        <weather-search></weather-search>
        <weather-list></weather-list>
    `,
    directives: [WeatherListComponent, WeatherSearchComponent, SidebarComponent]
})
export class AppComponent {
}