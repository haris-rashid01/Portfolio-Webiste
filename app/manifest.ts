import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Haris Rashid - Portfolio',
    short_name: 'Haris Rashid',
    description: 'Associate Software Engineer & Full-Stack Developer portfolio of Haris Rashid.',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#000000',
    icons: [
      {
        src: '/favicon.png',
        sizes: '192x192 512x512',
        type: 'image/png',
      },
    ],
  };
}
