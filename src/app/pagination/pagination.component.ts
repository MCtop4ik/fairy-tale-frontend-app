import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PaginationService } from '../services/pagination.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input() totalItems: number = 0;
  @Input() itemsPerPage: number = 0;
  @Output() pageChange = new EventEmitter<number>();

  pages: number[] = [];
  currentPage: number = 1;
  range: number = 2;

  constructor(private paginationService: PaginationService) { }

  ngOnInit(): void {
    this.pages = this.paginationService.generatePages(this.totalItems, this.itemsPerPage);
  }

  get visiblePages(): number[] {
    const range = 2;
    const start = Math.max(1, this.currentPage - range);
    const end = Math.min(this.pages.length, this.currentPage + range);
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  }

  goToPage(page: number): void {
    this.currentPage = page;
    this.pageChange.emit(page);
  }
}
