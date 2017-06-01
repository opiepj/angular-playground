import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeModule } from '@core/modules/theme/theme.module';
import { DataFetchingService } from '@core/services/data-fetching.service';
import { StoreService } from '@core/services/store.service';

@NgModule({
  imports: [
    CommonModule,
    ThemeModule
  ],
  providers: [
    DataFetchingService,
    StoreService
  ],
  exports: [ThemeModule.COMPONENTS]
})
export class CoreModule {
}
