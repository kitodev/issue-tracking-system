import { Issue } from './issue';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IssueService {
  private issues: Issue[] = [];

  constructor() { }

  getPendingIssues(): Issue[] {
    return this.issues.filter(issue => !issue.completed);
  }

}
