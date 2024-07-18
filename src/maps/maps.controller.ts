import { Controller, Get, Post, Delete, Req, Param, Body } from '@nestjs/common';
import { CreateMapDto } from "./dto/create-map.dto";
import { MapsService } from './maps.service';
import { Map } from './interfaces/map.interface';

@Controller('maps')
export class MapsController {

  constructor(private mapsService: MapsService) {}

  @Post()
  async create(@Body() createMapDto: CreateMapDto): Promise<String> {
    const newMap = await this.mapsService.create(createMapDto);
    return newMap.name;
  }
  
  @Get()
  async findAll(): Promise<Map[]> {
    return this.mapsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Map|Map[]> {
    const query = await this.mapsService.findOne(id);
    console.log(query)
    return query;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} map`;
  }
}