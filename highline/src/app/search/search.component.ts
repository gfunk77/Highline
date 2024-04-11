import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { SearchService } from './search.service';
import { BehaviorSubject, Observable, map, switchMap, tap } from 'rxjs';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent implements OnInit {
  searchService: SearchService = inject(SearchService);
  searchText$ = new BehaviorSubject<string>('');
  results$!: Observable<any>;
  term = '';

  ngOnInit(): void {
    this.results$ = this.searchText$.pipe(
      switchMap((term) => this.searchService.searchGiphy(term))
    );
  }

  searchValue(term: string) {
    this.searchText$.next(term);
  }

  clear() {
    this.searchText$.next('');
    this.term = '';
  }
}
