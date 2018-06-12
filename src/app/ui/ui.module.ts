import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './header-navigation/navigation.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { RightSidebarComponent } from './right-sidebar/rightsidebar.component';
import { NgStickyModule, NgStickyDirective } from 'ng-sticky';



const UiComponents = [NavigationComponent, SidebarComponent,BreadcrumbComponent,RightSidebarComponent]
@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations:[NavigationComponent, SidebarComponent,BreadcrumbComponent,RightSidebarComponent , NgStickyDirective],
  exports : [NavigationComponent, SidebarComponent,BreadcrumbComponent,RightSidebarComponent]
})
export class UiModule { }
