import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-data-view',
  templateUrl: './data-view.component.html',
  styleUrls: ['./data-view.component.css']
})
export class DataViewComponent implements OnInit {

  isLoading = false;
  users: any[] = [];
  pagedUsers: any[] = [];
  currentPage = 1;
  pageSize = 5;

  textValue:string;

  newUser = {
    name: '',
    email: '',
    phone: ''
  };

  constructor(private dataService: DataService) {}

  ngOnInit(): void {

    this.dataService.getData().subscribe(data => {
      this.users = data;
      this.updatePagination();
    });
  }

  addUser() {
    this.isLoading = true;
    this.dataService.downloadPDF(this.textValue).subscribe((response: Blob) => {
      const blob = new Blob([response], { type: 'application/pdf' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'sample.pdf';
      a.click();
      
      window.URL.revokeObjectURL(url);
      this.isLoading = false;
    });
  }

  
  onButtonClick(): void {
    console.log('Tombol telah diklik!');
  }
  updatePagination() {
    const start = (this.currentPage - 1) * this.pageSize;
    this.pagedUsers = this.users.slice(start, start + this.pageSize);
  }

  goToPage(page: number) {
    this.currentPage = page;
    this.updatePagination();
  }

  get totalPages() {
    return Math.ceil(this.users.length / this.pageSize);
  }

  get pages() {
    return Array(this.totalPages).fill(0).map((_, i) => i + 1);
  }

}
