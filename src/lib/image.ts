export const optimizedImage = (src: string) =>
  src.endsWith('.png') ? src.replace(/\.png$/, '.webp') : src;
