import { Component, Input, OnChanges, SimpleChange } from '@angular/core';
import { Contact } from '../contact'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

	@Input() contact : Contact;
		
}
