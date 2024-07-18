import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
// import { Map } from './interfaces/map.interface';
import { Map } from './schemas/maps.schema';
import { CreateMapDto } from './dto/create-map.dto';

@Injectable()
export class MapsService {

  constructor(@InjectModel(Map.name) private mapModel: Model<Map>) {}

  async create(createMapDto: CreateMapDto): Promise<Map> {
    const createdMap = new this.mapModel(createMapDto);
    return createdMap.save();
  }

  async findAll(): Promise<Map[]> {
    const queriedMaps = await this.mapModel.find().exec();
    return queriedMaps;
  }

  async findOne(id: string): Promise<Map|Map[]> {
    return this.mapModel.find({name: id}).exec();
  }
}