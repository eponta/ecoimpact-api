import { Module } from '@nestjs/common'
import { MapsController } from './maps.controller';
import { MapsService } from './maps.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Map, MapSchema } from './schemas/maps.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Map.name, schema: MapSchema }])],
  controllers: [MapsController],
  providers: [MapsService],
})
export class MapsModule {}