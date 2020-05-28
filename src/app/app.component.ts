import { Component, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from './services/api.service';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { Data } from './model/data';
import { takeUntil } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'my-app';
  public unsubscribe$ = new Subject<void>();

  public data$ = new BehaviorSubject<Data>(null);
  public label$ = new BehaviorSubject<string>(null);

  public form: FormGroup;
  constructor(private apiService: ApiService) {
    this.form = new FormGroup({
      title: new FormControl('', [Validators.required]),
      type: new FormControl('donut', [Validators.required]),
    });
  }

  submitForm() {
    if (this.form.valid) {
      const params = {
        Title: this.form.value.title,
        Type: this.form.value.type,
      };
      this.apiService.getData(params.Type).pipe(takeUntil(this.unsubscribe$)).subscribe((res) => {
        this.data$.next(res);
        this.label$.next(params.Title);
      });

    }
  }
}
