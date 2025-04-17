// Preston Bring

import { Component } from '@angular/core';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
})
export class ContactListComponent {
  contacts = this.contactService.getContacts();

  constructor(private contactService: ContactService) {}

  deleteContact(id: number) {
    this.contactService.deleteContact(id);
  }
}