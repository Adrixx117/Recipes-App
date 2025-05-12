import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="search-container">
      <input
        type="text"
        [(ngModel)]="searchQuery"
        placeholder="Introduce un ingrediente"
        class="search-input"
      />
      <button (click)="onSearch()" class="search-button">Buscar</button>
    </div>
  `,
  styles: [`
    .search-container {
      display: flex;
      gap: 10px;
      margin: 20px;
    }
    .search-input {
      padding: 10px;
      border: 1px solid #ddd;
      border-radius: 4px;
      width: 300px;
    }
    .search-button {
      padding: 10px 20px;
      background-color: #4CAF50;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }
    .search-button:hover {
      background-color: #45a049;
    }
  `]
})
export class SearchBarComponent {
  searchQuery = '';
  @Output() search = new EventEmitter<string>();

  onSearch() {
    if (this.searchQuery.trim()) {
      this.search.emit(this.searchQuery);
    }
  }
}