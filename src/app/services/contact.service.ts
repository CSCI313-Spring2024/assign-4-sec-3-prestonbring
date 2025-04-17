// Preston Bring

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CONTACTS } from './contacts.mock'; // Create this mock file

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private contactsSubject = new BehaviorSubject<Contact[]>(CONTACTS);
  contacts$ = this.contactsSubject.asObservable();

  getContacts() {
    return this.contactsSubject.value;
  }

  addContact(contact: Contact) {
    this.contactsSubject.next([...this.contactsSubject.value, contact]);
  }

  deleteContact(id: number) {
    const updatedContacts = this.contactsSubject.value.filter(c => c.id !== id);
    this.contactsSubject.next(updatedContacts);
  }

  editContact(updatedContact: Contact) {
    const contacts = this.contactsSubject.value.map(c =>
      c.id === updatedContact.id ? updatedContact : c
    );
    this.contactsSubject.next(contacts);
  }
}