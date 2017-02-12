import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {PaginatePipe} from './pagination/paginate-pipe';
import {PagerComponent} from './pagination/pager.component';
import {SortPipe} from './sorting/sort.pipe';

/**
 * Module that configures commonly used components etc
 * for the whole app
 */

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [PaginatePipe, PagerComponent, SortPipe],
  exports: [PaginatePipe, PagerComponent, SortPipe]
})
export class UtilModule {
}