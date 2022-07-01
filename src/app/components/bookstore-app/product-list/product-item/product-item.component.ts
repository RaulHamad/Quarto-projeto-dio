import { Component, Input, OnInit } from '@angular/core';
import { BooksService } from '../product-list.component.service';
import { Book } from '../model/Book';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input()

  livro : Book | any
  constructor() { }

  ngOnInit(): void {
  }

}
