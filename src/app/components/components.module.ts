import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from '../components/home/home.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [HomeComponent, FooterComponent],
  imports: [BrowserModule, HttpClientModule],
  exports: [HomeComponent, FooterComponent],
})
export class ComponentsModule {}
