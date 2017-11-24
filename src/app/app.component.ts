import { Component } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {LoginService} from './services/login.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import './common/rxjs-operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  formModel: FormGroup;
  isLogin: Observable<boolean>;
  constructor (private loginService: LoginService, private fb: FormBuilder) {
    this.isLogin = this.loginService.isLogin$.map(employee => employee !== null);
    this.formModel = this.fb.group({
      employeeId: fb.control('', Validators.required)
    });
  }
  onSubmit (): void {
    if (!this.formModel.valid) {
      alert('미비된 입력이 존재합니다.');
      return;
    }
    const { employeeId } = this.formModel.value;
    this.loginService.reqLogin({ employeeId });
  }
}
