import { Component } from '@angular/core';
import { RouterLinkActive, RouterOutlet } from '@angular/router';
import { HomePageComponent } from "./components/home-page/home-page.component";
import { StreamingService } from './services/streaming_service.service';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, RouterLinkActive, HomePageComponent],
    providers: [StreamingService]

})
export class AppComponent {
  title = 'StreamingKnowledge';
}
