import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FunctionalityComponent } from './functionality/functionality.component';
import { TobestubbedComponent } from './tobestubbed/tobestubbed.component';
import { ComponentStubRoutingModule } from './componentstub-test-routing.module';

@NgModule({
  declarations: [FunctionalityComponent, TobestubbedComponent],
  // we need to add our routing module here
  imports: [CommonModule, ComponentStubRoutingModule]
})
export class ComponentstubTestModule {}
