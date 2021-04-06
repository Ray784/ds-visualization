import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InterviewComponent } from './interview/interview.component';
import { CurriculumComponent } from './curriculum/curriculum.component';
import { MobileComponent } from './mobile/mobile.component';
import { BlogComponent } from './blog/blog.component';
import { LoginComponent } from './login/login.component';
import { NewBlogComponent } from './new-blog/new-blog.component';
import { UnavailableComponent } from './unavailable/unavailable.component';
import {AuthGuard} from './auth.guard';


const routes: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{ path: 'home', component: HomeComponent },
	{ path: 'interview', component: InterviewComponent },
	{ path: 'curriculum', component: CurriculumComponent },
	{ path: 'mobile', component: MobileComponent },
	{ path: 'blog', component: BlogComponent },
	{ path: 'add-jFZ2pW6-blog', component: NewBlogComponent, canActivate: [AuthGuard] },
	{ path: 'log-kWZr1n0-in', component: LoginComponent },
	{ path: 'unavailable', component: UnavailableComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
