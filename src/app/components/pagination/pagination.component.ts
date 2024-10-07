import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ProductService } from '../../product.service';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { Observable } from 'rxjs';

interface Product {
  id: number;
  name: string;
  price: number;
}

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatPaginatorModule],
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'price'];
  dataSource = new MatTableDataSource<Product>([]);
  totalItems: number = 0;
  pageSize: number = 5;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.fetchProducts(1, this.pageSize);
  }

  fetchProducts(page: number, size: number): void {
    this.productService.getProducts(page, size).subscribe({
      next: (response) => {
        if (Array.isArray(response)) {
          this.dataSource.data = response; 
          this.totalItems = response.length; 
        } else {
          this.dataSource.data = response.data || []; 
          this.totalItems = response.total || 0; 
        }

        console.log('Data:', this.dataSource.data);
        console.log('Total items:', this.totalItems);

        if (this.paginator) {
          this.paginator.pageIndex = page - 1; 
          this.paginator.length = this.totalItems; 
        }
      },
      error: (error) => {
        console.error('Error fetching products:', error);
      }
    });
  }

  onPageChange(event: any): void {
    const pageIndex = event.pageIndex + 1;
    const pageSize = event.pageSize;
    this.fetchProducts(pageIndex, pageSize);
  }
}
