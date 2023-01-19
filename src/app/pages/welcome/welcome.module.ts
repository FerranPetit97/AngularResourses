import { NgModule } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { FormsModule } from '@angular/forms';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';

import { DinamicButtonComponent } from '../../components/dinamic-button/dinamic-button.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    WelcomeRoutingModule,
    NzButtonModule,
    FormsModule,
    WelcomeRoutingModule,
    CommonModule,
  ],
  declarations: [WelcomeComponent, DinamicButtonComponent],
  exports: [WelcomeComponent],
})
export class WelcomeModule {}
