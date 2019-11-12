import { Component, OnInit, Input } from '@angular/core';

export interface TableRow {
  columns: any[];
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.less']
})
export class TableComponent implements OnInit {
  @Input() headerNames: string[] = [];
  @Input() tableRows: TableRow[] = [];

  ngOnInit() {
    if (
      this.tableRows.length > 0 &&
      this.tableRows[0].columns.length !== this.headerNames.length
    ) {
      throw new Error(
        'The number of tableRows must be equal to the number of headerNames.'
      );
    }
  }
}
