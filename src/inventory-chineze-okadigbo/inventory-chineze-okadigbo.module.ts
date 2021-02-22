import { Module } from '@nestjs/common';
import { InventoryModule } from './inventory/inventory.module';
import { DisplayModule } from './display/display.module';

@Module({
  imports: [InventoryModule, DisplayModule]
})
export class InventoryChinezeOkadigboModule {}
