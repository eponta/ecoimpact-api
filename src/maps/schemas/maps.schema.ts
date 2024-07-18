import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, SchemaType } from 'mongoose';
import { Biome } from '../types/biome.type';

export type MapDocument = HydratedDocument<Map>;

@Schema()
export class Map {
  @Prop({required: true, unique: true})
	name: string;

  @Prop({required: true})
	availableBiome: Biome[];
  
  @Prop({required: true})
	baseBiome: Biome;
  
  @Prop({required: true})
	numberOfBiomes: number;
  
  @Prop({required: true})
	width: number;
  
  @Prop({required: true})
	height: number;
}

export const MapSchema = SchemaFactory.createForClass(Map);