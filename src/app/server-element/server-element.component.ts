import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-server-element",
  templateUrl: "./server-element.component.html",
  styleUrls: ["./server-element.component.css"],
})
export class ServerElementComponent implements OnInit {
  // assigning a type to element, which javascript object
  @Input("srvElement") element: { type: string; name: string; content: string };
  constructor() {}
  // @Output("bpCreated") blueprintCreated = new EventEmitter<{
  //   blueprintName: string;
  //   blueprintContent: string;
  // }>();
  ngOnInit(): void {}
}
