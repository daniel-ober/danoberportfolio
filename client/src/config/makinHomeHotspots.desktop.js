// src/config/makinHomeHotspots.desktop.js
import { MAKIN_HOME_BUCKETS as BUCKETS } from './makinHomeBuckets';

export const MAKIN_HOME_HOTSPOTS_DESKTOP = [
  {
    id: 'dog',
    label: 'Studio dog',
    ariaLabel: 'Learn about Dan and the Ober Artisan story',
    bucketId: BUCKETS.story.id,
    description:
      'The heart of the studio. Click to learn more about Dan, Chelsea, and the story behind Ober Artisan.',
    primaryAction: { type: 'route', to: BUCKETS.story.primaryRoute },
  },
  {
    id: 'drum',
    label: 'Custom snare drum',
    ariaLabel: 'Explore custom drum building and the Ober drum series',
    bucketId: BUCKETS.craft.id,
    description:
      'Hand-built stave snares, from Heritage and Feuzon to fully custom SoundLegend builds.',
    primaryAction: { type: 'route', to: BUCKETS.craft.primaryRoute },
  },
  {
    id: 'guitar',
    label: 'Electric guitar',
    ariaLabel: 'See music and session work projects',
    bucketId: BUCKETS.audio.id,
    description:
      'Sessions, writing, and recording work that happens in the same room.',
    primaryAction: { type: 'route', to: BUCKETS.audio.primaryRoute },
  },
  {
    id: 'acoustic-guitar',
    label: 'Acoustic guitar',
    ariaLabel: 'See acoustic performance and recording projects',
    bucketId: BUCKETS.audio.id,
    description:
      'Acoustic sessions, songwriting, and performance clips.',
    primaryAction: { type: 'route', to: BUCKETS.audio.primaryRoute },
  },
  {
    id: 'camera-front',
    label: 'Camera on the floor',
    ariaLabel: 'Explore photography portfolio',
    bucketId: BUCKETS.media.id,
    description:
      'Studio and on-location photography for artists, makers, and brands.',
    primaryAction: { type: 'route', to: BUCKETS.media.primaryRoute },
  },
  {
    id: 'camera-desk',
    label: 'Camera on the desk',
    ariaLabel: 'Explore photography and video work',
    bucketId: BUCKETS.media.id,
    description:
      'Behind-the-scenes and product visuals that bring builds and people to life.',
    primaryAction: { type: 'route', to: BUCKETS.media.primaryRoute },
  },
  {
    id: 'monitor',
    label: 'Computer monitor',
    ariaLabel: 'View web and software projects built in this studio',
    bucketId: BUCKETS.software.id,
    description:
      'Artist portals, configurators, and full-stack web apps powering the Ober ecosystem.',
    primaryAction: { type: 'route', to: BUCKETS.software.primaryRoute },
  },
  {
    id: 'printer',
    label: '3D printer',
    ariaLabel: 'See 3D design and prototyping work',
    bucketId: BUCKETS.craft.id,
    description:
      '3D printing, jigs, fixtures, and prototyping that support the drum builds.',
    primaryAction: { type: 'route', to: BUCKETS.craft.primaryRoute },
  },
  {
    id: 'rubiks-cube',
    label: 'Rubik’s cube in glass case',
    ariaLabel: 'Learn about problem solving and consulting work',
    bucketId: BUCKETS.software.id,
    description:
      'Systems thinking, debugging, and problem-solving that connects all the work together.',
    primaryAction: { type: 'route', to: BUCKETS.software.primaryRoute },
  },
  {
    id: 'black-cat',
    label: 'Black and white cat on the printer',
    ariaLabel: 'See more behind-the-scenes studio life',
    bucketId: BUCKETS.story.id,
    description:
      'A peek into the chaos, pets, and personality that live in the studio with the craft.',
    primaryAction: { type: 'route', to: BUCKETS.story.primaryRoute },
  },
  {
    id: 'orange-cat',
    label: 'Orange kitten on the rug',
    ariaLabel: 'More behind-the-scenes studio life',
    bucketId: BUCKETS.story.id,
    description:
      'Small but mighty. Click to see the more human side of the Ober story.',
    primaryAction: { type: 'route', to: BUCKETS.story.primaryRoute },
  },
  {
    id: 'feather-jacket',
    label: 'Feather jacket',
    ariaLabel: 'See performance, festivals, and lifestyle projects',
    bucketId: BUCKETS.media.id,
    description:
      'Festival work, performance photos, and collaborative visual storytelling.',
    primaryAction: { type: 'route', to: BUCKETS.media.primaryRoute },
  },
];