import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InventoryChinezeOkadigboModule } from './inventory-chineze-okadigbo/inventory-chineze-okadigbo.module';
import {TypeOrmModule} from '@nestjs/typeorm';
import {config} from './orm.config' // connect to database

@Module({
  imports: [TypeOrmModule.forRoot(config), InventoryChinezeOkadigboModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
