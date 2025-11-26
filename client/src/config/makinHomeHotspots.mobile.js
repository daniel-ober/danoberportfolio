// src/config/makinHomeHotspots.mobile.js
import { MAKIN_HOME_BUCKETS as BUCKETS } from './makinHomeBuckets';

export const MAKIN_HOME_HOTSPOTS_MOBILE = [
  {
    id: 'dog',
    label: 'Studio dog',
    ariaLabel: 'Learn about Dan and the Ober Artisan story',
    bucketId: BUCKETS.story.id,
    description:
      'The heart of the studio. Click to learn more about Lucy and the gang',
    primaryAction: { type: 'route', to: BUCKETS.story.primaryRoute },
    bounds: { x: 0.30, y: 0.44, w: 0.40, h: 0.36 },
  },
  {
    id: 'drum',
    label: 'Custom snare drum',
    ariaLabel: 'Explore custom drum building and the Ober drum series',
    bucketId: BUCKETS.craft.id,
    description:
      'Hand-built stave snares from Heritage and Feuzon to fully custom SoundLegend builds.',
    primaryAction: { type: 'route', to: BUCKETS.craft.primaryRoute },
    bounds: { x: 0.04, y: 0.64, w: 0.38, h: 0.20 },
  },
  {
    id: 'electric-guitar',
    label: 'Electric guitar',
    ariaLabel: 'See music and session work projects',
    bucketId: BUCKETS.audio.id,
    description:
      'Sessions, writing, and recording work that happens in this room.',
    primaryAction: { type: 'route', to: BUCKETS.audio.primaryRoute },
    bounds: { x: 0.71, y: 0.59, w: 0.20, h: 0.32 },
  },
  {
    id: 'camera-floor',
    label: 'Camera on the floor',
    ariaLabel: 'Explore photography portfolio',
    bucketId: BUCKETS.media.id,
    description:
      'Studio and on-location photography for artists, makers, and brands.',
    primaryAction: { type: 'route', to: BUCKETS.media.primaryRoute },
    bounds: { x: 0.05, y: 0.78, w: 0.22, h: 0.12 },
  },
  {
    id: 'monitor',
    label: 'Computer monitor',
    ariaLabel: 'View web and software projects built in this studio',
    bucketId: BUCKETS.software.id,
    description:
      'Artist portals, configurators, and full-stack web apps powering the Ober ecosystem.',
    primaryAction: { type: 'route', to: BUCKETS.software.primaryRoute },
    bounds: { x: 0.02, y: 0.28, w: 0.38, h: 0.22 },
  },
  {
    id: 'printer',
    label: '3D printer',
    ariaLabel: 'See 3D design and prototyping work',
    bucketId: BUCKETS.craft.id,
    description:
      '3D printing, jigs, fixtures, and prototyping that support the drum builds.',
    primaryAction: { type: 'route', to: BUCKETS.craft.primaryRoute },
    bounds: { x: 0.64, y: 0.32, w: 0.30, h: 0.22 },
  },
  {
    id: 'rubiks-cube',
    label: 'Rubik’s cube in glass case',
    ariaLabel: 'Learn about problem solving and consulting work',
    bucketId: BUCKETS.software.id,
    description:
      'Systems thinking, debugging, and problem-solving that connect all the work together.',
    primaryAction: { type: 'route', to: BUCKETS.software.primaryRoute },
    bounds: { x: 0.62, y: 0.75, w: 0.24, h: 0.13 },
  },
  {
    id: 'black-cat',
    label: 'Black and white cat on the printer',
    ariaLabel: 'See more behind-the-scenes studio life',
    bucketId: BUCKETS.story.id,
    description:
      'A peek into the chaos, pets, and personality that live in the studio.',
    primaryAction: { type: 'route', to: BUCKETS.story.primaryRoute },
    bounds: { x: 0.70, y: 0.18, w: 0.18, h: 0.14 },
  },
  {
    id: 'orange-cat',
    label: 'Orange kitten on the rug',
    ariaLabel: 'More behind-the-scenes studio life',
    bucketId: BUCKETS.story.id,
    description:
      'Small but mighty. Click to see the more human side of the Ober story.',
    primaryAction: { type: 'route', to: BUCKETS.story.primaryRoute },
    bounds: { x: 0.55, y: 0.78, w: 0.16, h: 0.15 },
  },
  {
    id: 'feather-jacket',
    label: 'Feather jacket',
    ariaLabel: 'See performance, festivals, and lifestyle projects',
    bucketId: BUCKETS.media.id,
    description:
      'Festival work, performance photos, and collaborative visual storytelling.',
    primaryAction: { type: 'route', to: BUCKETS.media.primaryRoute },
    bounds: { x: 0.03, y: 0.13, w: 0.32, h: 0.30 },
  },
];