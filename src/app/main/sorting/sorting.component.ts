import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.scss'],
})
export class SortingComponent implements OnInit {
  numbers: any;
  sortedNumbers: any = 'Not Sorted';
  constructor() {}

  ngOnInit(): void {}

  sortNumbers() {
    let i, key, j;
    this.numbers = this.numbers.split(' ');
    for (i = 1; i < this.numbers.length; i++) {
      key = +this.numbers[i];
      j = i - 1;
      console.log('Key', key);

      while (j >= 0 && +this.numbers[j] > key) {
        this.numbers[j + 1] = +this.numbers[j];
        j = j - 1;
      }
      this.numbers[j + 1] = key;
    }
  }

  // {
  //   this.numbers = this.numbers.split(' ');
  //   this.sortedNumbers = [];
  //   console.log('Numbers', this.numbers);
  //   // this.numbers.forEach((number: any) => {

  //   // });

  //   for (let i = 0; i < this.numbers.length; i++) {
  //     if (+this.numbers[i] > +this.numbers[i + 1]) {
  //       this.sortedNumbers[i] = this.numbers[i + 1];
  //       this.sortedNumbers[i + 1] = this.numbers[i];
  //     } else {
  //       this.sortedNumbers[i] = this.numbers[i];
  //       // this.sortedNumbers[i + 1] = this.numbers[i + 1];
  //     }
  //   }
  // }
}
