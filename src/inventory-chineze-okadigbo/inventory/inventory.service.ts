import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'; 
import { Repository } from 'typeorm';
import { CreateInventoryDto } from './dto/create-inventory.dto';
import { UpdateInventoryDto } from './dto/update-inventory.dto';
import { Inventory } from './entities/inventory.entity';

@Injectable()
export class InventoryService {
  constructor( @InjectRepository(Inventory)
    private inventoryRepository: Repository<Inventory>
  ){}

   async create(createInventoryDto: CreateInventoryDto) {
    // return 'This action adds a new inventory';
    const newInventory: Inventory = this.inventoryRepository.create(createInventoryDto) 
      return this.inventoryRepository.save(newInventory);
  }

  async findAll() {
    // return `This action returns all inventory`;
    return await this.inventoryRepository.find();
  }

  async findOne(id: number) {
    // return `This action returns a #${id} inventory`;
    return await this.inventoryRepository.findOne(id);
  }

  async update(id: number, updateInventoryDto: UpdateInventoryDto) {
   // return `This action updates a #${id} inventory`;
   return await this.inventoryRepository.update(id, updateInventoryDto);
  }

  async remove(id: number) {
    // return `This action removes a #${id} inventory`;
    return await this.inventoryRepository.delete(id);
  }
}
