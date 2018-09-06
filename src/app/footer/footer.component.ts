import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  currentYear() {
    return (new Date()).getFullYear();
  }

  contactModal() {
    // TODO: Show contact form modal
  }
}
