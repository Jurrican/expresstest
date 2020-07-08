import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FailureComponent } from './failure/failure.component';
import { ListingComponent } from './listing/listing.component';

const routes: Routes = [
	{ path: '', component: ListingComponent },
	{ path: '**', component: FailureComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
