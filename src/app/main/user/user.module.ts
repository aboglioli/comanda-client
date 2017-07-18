import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';
import { UserComponent } from './user.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [UserComponent]
})
export class UserModule { }
