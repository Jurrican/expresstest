import { Component, ViewChild, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContactComponent } from '../contact/contact.component';
import { Contact } from '../contact/contact';
import { ContactinputComponent } from '../contactinput/contactinput.component';

import { Observable, throwError} from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})

@Injectable()
export class ListingComponent {
	title = 'Contactor';
	base = 'Ganz einfach';
	contactdata = [];
	@ViewChild(ContactComponent) contact: ContactComponent;
	
	constructor(private http: HttpClient) {
		
	}
	
	getContact() {
		return this.http.get('/contactapi');
	}
	
	showContact() {
		this.getContact().subscribe((data: [Contact]) => {
			this.contactdata = data;
		});	
	}
}
