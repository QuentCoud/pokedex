import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'px-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  title = 'my-test';
  title$ = new Observable(observer => {
    setInterval(() => {
      observer.next();
    }, 2000);
  });

  constructor() {
    this.title$.subscribe(this.setTitle);
  }

  private setTitle = () => {
    const timestamp = new Date().getMilliseconds();
    this.title = `Learning Angular (${timestamp})`;
  }

  private changeTitle(callback: Function) {
    setTimeout(() => {
      callback();
    }, 2000);
  }

  private onComplete() {
    return new Promise<void>(resolve => {
      setInterval(() => {
        resolve();
      }, 2000);
    });
  }

}