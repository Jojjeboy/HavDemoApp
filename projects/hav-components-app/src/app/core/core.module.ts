import { RouterModule } from '@angular/router';
import { SharedModule } from './../shared/shared.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SideMenuComponent } from './side-menu/side-menu.component';

@NgModule({
  declarations: [HeaderComponent, SideMenuComponent],
  imports: [CommonModule, SharedModule, RouterModule],
  exports: [HeaderComponent, SideMenuComponent]
})
export class CoreModule {}
