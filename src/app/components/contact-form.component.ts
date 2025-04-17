// Preston Bring

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Contact } from '../models/contact.model';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
})
export class ContactFormComponent {
  @Input() contact: Contact | null = null;
  @Output() save = new EventEmitter<Contact>();

  onSubmit() {
    this.save.emit(this.contact);
  }
}