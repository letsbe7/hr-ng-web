import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';


export interface Employee {
  employeeId: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  hireDate: string;
  jobId: string;
  salary: number;
  commissionPct: number;
  managerId: number;
  departmentId: number;
}

export interface LoginParam {
  employeeId: number;
}

@Injectable()
export class LoginService {
  private isLoginSource: BehaviorSubject<Employee> = new BehaviorSubject(null);
  isLogin$ = this.isLoginSource.asObservable();
  constructor(private http: HttpClient) {
    this.isLogin$.subscribe(employee => console.log('isLogin: ', employee));
  }

  reqLogin (param: LoginParam): void {
    this.http.post<Employee>('http://127.0.0.1:8080/login', param)
      .subscribe(
        employee => this.isLoginSource.next(employee),
        msg => console.log(msg)
      );
  }

}
