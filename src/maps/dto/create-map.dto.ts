import { Biome } from "../types/biome.type";

export class CreateMapDto {
  name: string;
	availableBiome: Biome[];
	baseBiome: Biome;
	numberOfBiomes: number;
	width: number;
	height: number;
}