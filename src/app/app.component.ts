import { Component } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  id: string = uuidv4();
  name: string = 'Anna';

  wygeneruj(): void {
    this.id = uuidv4();
  }
}
