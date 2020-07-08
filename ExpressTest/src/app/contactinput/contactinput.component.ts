import { Component, Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Contact } from '../contact';

import { Observable, throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-contactinput',
  templateUrl: './contactinput.component.html',
  styleUrls: ['./contactinput.component.scss']
})

@Injectable()
export class ContactinputComponent  {
	firstname = new FormControl('');
	lastname = new FormControl('');
	zipcode = new FormControl('');
	city = new FormControl('');
	street = new FormControl('');
	housenumber = new FormControl('');
	phone = new FormControl('');
	email = new FormControl('');
	
	constructor(private http: HttpClient) {
		
	}
	
	addContact (contact: Contact): Observable<Contact> {
		return this.http.post<Contact>('/contactapi', contact);
	}
	
	sendContact() {
		let contact = new Contact(0,
		this.firstname.value,
		this.lastname.value,
		this.zipcode.value,
		this.city.value,
		this.street.value,
		this.housenumber.value,
		this.phone.value,
		this.email.value);
		this.addContact(contact).subscribe(contact => console.log(contact));
	}
}
