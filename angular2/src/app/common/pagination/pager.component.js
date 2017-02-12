import {Component, Input, SimpleChange} from '@angular/core';
import template from './pager.component.html';

/**
 * Component that handles pagination ui controls
 * and determines how much and what data should be displayed
 */

@Component({
  selector: 'pager',
  template: template
})
export class PagerComponent {
  
  @Input() totalItems = 0;
  
  constructor() {
    this.from = 0;
    this.to = 10;
    this.pageSizes = [10, 25, 50, 100];
    this.pageSize = 10;
    this.page = 0;
    this.pages = 0;
    this.useStartEdge = true;
    this.useEndEdge = true;
    this.edges = 2;
    this.displayedPages = 5;
    this.halfDisplayed = Math.ceil(this.displayedPages / 2);
    this.displayablePages = [];
  }
  
  ngOnChanges(changes: SimpleChange) {
    for (const propName in changes) {
      const changedProp: SimpleChange = changes[propName];
      if (propName === 'totalItems' && changedProp.currentValue > 0) {
        this.calculateDisplayablePages();
      }
      console.log(changedProp);
    }
  }
  
  calculateDisplayablePages() {
    
    const pageSize = Number(this.pageSize);
    this.pages = Math.ceil(this.totalItems / pageSize);
    
    this.from = this.page * pageSize;
    if (this.from > this.totalItems) {
      this.page = this.pages - 1;
      this.from = this.page * pageSize;
    }
    
    this.to = this.from + pageSize;
    if (this.to > this.totalItems) {
      this.to = this.totalItems;
    }
    
    this.displayablePages = [];
    
    const interval = this.interval();
    
    if (interval.start > 0 && this.edges > 0) {
      if (this.useStartEdge) {
        const end = Math.min(this.edges, interval.start);
        this.appendPages(0, end);
      }
      
      if (this.edges < interval.start && (interval.start - this.edges != 1)) {
        this.appendPage();
      } else if (interval.start - this.edges == 1) {
        this.appendPage(this.edges);
      }
    }
    
    this.appendPages(interval.start, interval.end);
    
    if (interval.end < this.pages && this.edges > 0) {
      if (this.pages - this.edges > interval.end && (this.pages - this.edges - interval.end != 1)) {
        this.appendPage();
      } else if (this.pages - this.edges - interval.end == 1) {
        this.appendPage(interval.end);
      }
      
      if (this.useEndEdge) {
        const start = Math.max(this.pages - this.edges, interval.end);
        this.appendPages(start, this.pages);
      }
    }
  }
  
  interval() {
    return {
      start: Math.ceil(this.page > this.halfDisplayed ? Math.max(Math.min(this.page - this.halfDisplayed, (this.pages - this.displayedPages)), 0) : 0),
      end: Math.ceil(this.page > this.halfDisplayed ? Math.min(this.page + this.halfDisplayed, this.pages) : Math.min(this.displayedPages, this.pages))
    };
  }
  
  appendPages(start, end) {
    for (let i = start; i < end; i++) {
      this.appendPage(i);
    }
  }
  
  appendPage(index = -1) {
    const disabled = index === -1;
    const obj = {
      page: index,
      active: index === this.page,
      disabled: disabled
    };
    this.displayablePages.push(obj);
  }
  
  nextPage() {
    if (this.page < this.pages) {
      this.page++;
      this.calculateDisplayablePages();
    }
  }
  
  prevPage() {
    if (this.page > 0) {
      this.page--;
      this.calculateDisplayablePages();
    }
  }
  
  goToPage(page) {
    this.page = page;
    this.calculateDisplayablePages();
  }
  
  get nextPageNo() {
    return Math.min(this.pages, this.page + 2);
  }
  
  get prevPageNo() {
    return Math.max(this.page, 1);
  }
  
  get isFirstPage() {
    return this.page === 0;
  }
  
  get isLastPage() {
    return this.page === this.pages - 1 || !this.pages;
  }
}