import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  nums = [1,2]
  @ViewChild("FirstInput") FirstInput!: ElementRef;
  @ViewChild("p1") p1!: ElementRef;
  data: any;
  constructor() { }
  qtd:any[] = [];

  ngOnInit(): void {
  }

  submitClicked() {
    // alert("button Works!"+this.p1.nativeElement.value)
    console.log(this.qtd[1])
    alert("works : "+this.qtd[1])
    alert("works : "+this.qtd[2])
  }
}
