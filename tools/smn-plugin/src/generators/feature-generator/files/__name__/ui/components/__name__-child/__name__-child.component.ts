import { Component } from '@angular/core';
import { <%= classify(name) %>Mediator } from '../../services/<%= dasherize(name) %>.mediator';


@Component({
  selector: 'app-<%=dasherize(name)%>-child',
  templateUrl: '<%=dasherize(name)%>-child.component.html',
  styleUrls: ['./<%=dasherize(name)%>-child.component.scss'],
})
export class <%= classify(name) %>ChildComponent {

  constructor(private readonly mediator: <%= classify(name) %>Mediator) { }

  test(): void {
    // this.mediator.test();
  }
}
