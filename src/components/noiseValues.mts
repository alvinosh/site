import { width, height, frequency } from "./BackgroundWinter.astro.1.mts";

export const noiseValues: PerlinNoiseValues2D = generate2DPerlinNoise(
  width,
  height,
  frequency
);
