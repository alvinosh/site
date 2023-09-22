export type PerlinNoiseValues2D = number[][];

export function generate2DPerlinNoise(
  width: number,
  height: number,
  frequency: number
): PerlinNoiseValues2D {
  // Utility functions for Perlin noise
  function fade(t: number): number {
    return t * t * t * (t * (t * 6 - 15) + 10);
  }

  function lerp(t: number, a: number, b: number): number {
    return a + t * (b - a);
  }

  function grad(hash: number, x: number, y: number): number {
    const h = hash & 7; // Use only first 4 bits for gradient lookup
    const u = h < 4 ? x : y;
    const v = h < 4 ? y : x;
    return (h & 1 ? -u : u) + (h & 2 ? -2 * v : 2 * v);
  }

  // Permutation table for gradient lookup
  const p: number[] = [...Array(512)].map(() =>
    Math.floor(Math.random() * 256)
  );
  p.push(...p); // Duplicate the permutation table to avoid overflow issues

  // Perlin noise function for 2D
  function perlinNoise2D(x: number, y: number): number {
    const X = Math.floor(x) & 255;
    const Y = Math.floor(y) & 255;
    x -= Math.floor(x);
    y -= Math.floor(y);
    const u = fade(x);
    const v = fade(y);

    const a = p[X]! + Y;
    const b = p[X + 1]! + Y;

    return lerp(
      v,
      lerp(u, grad(p[a]!, x, y), grad(p[b]!, x - 1, y)),
      lerp(u, grad(p[a + 1]!, x, y - 1), grad(p[b + 1]!, x - 1, y - 1))
    );
  }

  // Create a 2D array to store the Perlin noise values
  const noiseValues: PerlinNoiseValues2D = [];

  // Generate Perlin noise for each pixel
  for (let y = 0; y < height; y++) {
    const row: number[] = [];
    for (let x = 0; x < width; x++) {
      const noiseValue = perlinNoise2D(x * frequency, y * frequency);
      row.push(noiseValue);
    }
    noiseValues.push(row);
  }

  return noiseValues;
}
