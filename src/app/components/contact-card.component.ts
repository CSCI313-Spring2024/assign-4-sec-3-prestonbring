// Preston Bring

import { Component, Input } from '@angular/core';
import { Contact } from '../models/contact.model';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
})
export class ContactCardComponent {
  @Input() contact: Contact;
}