import { Component, OnInit } from '@angular/core';


import { MessageService } from '../messages.service';
import { Villain1} from '../villain1';
import { VillainService } from '../villain.service';



@Component({
  selector: 'app-villain',
  templateUrl: './villain.component.html',
  styleUrls: ['./villain.component.css']
})
export class VillainComponent implements OnInit {

  selectedVillain1?: Villain1;

  villain: Villain1[] = [];

  constructor(private villainService: VillainService, private messageService: MessageService) {}

  ngOnInit() {
    this.getVillain();
  }

  onSelect(villain1: Villain1): void {
    this.selectedVillain1 = villain1;
    this.messageService.add(`VillainComponent: Selected villain1 id=${villain1.id}`);
    console.log(this.messageService);
  }


  sube(villain: Villain1): void {
    villain.aumento = villain.aumento + villain.base ;
   }


   baja(villain: Villain1): void {
    villain.aumento = villain.aumento - villain.base ;
   }


   getVillain(): void {
     this.villainService.getVillain()
         .subscribe(villain => this.villain = villain);
   }
}
