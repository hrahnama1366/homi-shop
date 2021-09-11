import { Component, OnInit } from '@angular/core';
import {Observable, Observer} from 'rxjs';



@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
// models : object[] = [];
models =[];
isCorrect: boolean = true;
users :object[] = [];


  constructor() { }

  ngOnInit(): void {
    this.models.push({title: '1', description: 'tthtrf'});
    this.models.push({title: '2', description: 'tthtrf'});
    this.models.push({title: '3', description: 'tthtrf'});

    this.users.push({title: '1', description: 'tthtrf'});
    this.users.push({title: '2', description: 'tthtrf'});
    this.users.push({title: '3', description: 'tthtrf'});

    // @ts-ignore
    // @ts-ignore
    const interval$ = new Observable((observer :Observer<number>)=> {
      let count = 0;
   // observer.next(1);
   //    observer.next(2);
   //    observer.next(3);
   //    observer.error(new Error('error in app' ));
      setInterval(() => {
      observer.next(count++);
        if(count === 5){
          // observer.error(new Error('d'));
          observer.complete();
        }
      },10);
    });

    // @ts-ignore
    interval$.subscribe(
      (val) => {console.log(val);},
       // (err) => {console.log(err);},
      () => {console.log('complete');}
    );
  }

}
