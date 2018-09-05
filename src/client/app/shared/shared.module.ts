import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ToastComponent } from './toast/toast.component';
import { LoadingComponent } from './loading/loading.component';
import { TopNavigationComponent } from './top-navigation/top-navigation.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    // Shared Modules
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // Shared Components
    ToastComponent,
    LoadingComponent,
    TopNavigationComponent
  ],
  declarations: [
    ToastComponent,
    LoadingComponent,
    TopNavigationComponent
  ],
  providers: [
    ToastComponent,
    TopNavigationComponent
  ]
})
export class SharedModule { }
