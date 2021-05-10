import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

import { AuthService } from '../../shared/auth.service';
import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [HeaderComponent],
  imports: [RouterModule, CommonModule, MatToolbarModule, MatButtonModule, MatMenuModule],
  providers: [AuthService],
  exports: [HeaderComponent],
})
export class HeaderModule {}
