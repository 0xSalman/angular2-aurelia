import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {PaginatePipe} from './pagination/paginate-pipe';
import {PagerComponent} from './pagination/pager.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [PaginatePipe, PagerComponent],
  exports: [PaginatePipe, PagerComponent]
})
export class UtilModule {
}