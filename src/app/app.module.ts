import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

import { HomeComponent } from './home/home.component';
import { InterviewComponent } from './interview/interview.component';
import { CurriculumComponent } from './curriculum/curriculum.component';
import { MobileComponent } from './mobile/mobile.component';
import { UnavailableComponent } from './unavailable/unavailable.component';
import { BlogComponent } from './blog/blog.component';
import { LoginComponent } from './login/login.component';
import { NewBlogComponent } from './new-blog/new-blog.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {AuthGuard} from './auth.guard';

import {HashLocationStrategy, Location, LocationStrategy} from '@angular/common';

import { LazyLoadImageModule, intersectionObserverPreset  } from 'ng-lazyload-image';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InterviewComponent,
    CurriculumComponent,
    MobileComponent,
    UnavailableComponent,
    BlogComponent,
    LoginComponent,
    NewBlogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatGridListModule,
    MatButtonModule,
    MatExpansionModule,
    MatListModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    LazyLoadImageModule.forRoot({
        preset: intersectionObserverPreset})
  ],
  providers: [AuthGuard, [Location, {provide: LocationStrategy, useClass: HashLocationStrategy}]],
  bootstrap: [AppComponent]
})
export class AppModule { }
