import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AppData } from '../app-data';
import { MessageService } from '../messaging.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  appData: AppData;

  constructor(private msg: MessageService) {
    msg.getMessage().subscribe(msg => {
      this.appData = msg;
    })
  }

  ngOnInit(): void {
  }

  updateObserver(){
    this.msg.sendMessage(this.appData)
  }

  isOpen() {
    return this.appData.addTaskModalOpen
  }

  //function to toggle the modal from open to closed
  toggleModalOpen() {
    this.appData.addTaskModalOpen = !this.appData.addTaskModalOpen
    this.updateObserver()
  }

}
