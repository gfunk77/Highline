import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { SearchService } from './search.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent implements OnInit {
  searchService: SearchService = inject(SearchService);

  ngOnInit(): void {
    this.searchService
      .searchGiphy('cheeseburgers')
      .subscribe((res) => console.log(res['data']));
  }
}
