import { Biome } from "../types/biome.type";

export interface Map {
  name: string;
  availableBiome: Biome[];
  baseBiome: Biome;
  numberOfBiomes: number;
  width: number;
  height: number;
}