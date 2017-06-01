import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { NavComponent } from './components/nav/nav.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [],
  exports: [NavComponent],
  declarations: [NavComponent]
})
export class ThemeModule {
  public static COMPONENTS: Component[] = [NavComponent];
}
