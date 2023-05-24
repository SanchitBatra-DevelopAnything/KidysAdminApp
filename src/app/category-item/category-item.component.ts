import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.scss']
})
export class CategoryItemComponent implements OnInit {

  @Input()
  category : any;

  @Input()
  categoryKeyInDb:any;

  constructor() { }

  ngOnInit(): void {
  }

  getCategoryName()
  {
    return this.category.categoryName;
  }

  onAddItem()
  {
    
  }

}
