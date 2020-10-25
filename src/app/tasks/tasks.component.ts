import { Component, OnInit } from '@angular/core';
import { AppData } from '../app-data';
import { MessageService } from '../messaging.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

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
    if (!this.appData.addTaskModalOpen) {
      this.appData.addTaskModalOpen = !this.appData.addTaskModalOpen
      this.updateObserver()
    }
  }


}
