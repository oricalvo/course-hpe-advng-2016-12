import {Component} from '@angular/core';
import {ContactService, Contact} from "./contact.service";

@Component({
  selector: 'my-contact-list',
  moduleId: module.id,
  templateUrl: "contactList.component.html",
})
export class ContactListComponent  {
  contacts: Contact[];

  constructor(contactService: ContactService) {
    contactService.getAll().then(contacts => {
      this.contacts = contacts;
    });
  }
}
