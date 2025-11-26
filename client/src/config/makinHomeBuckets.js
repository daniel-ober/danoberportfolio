// src/config/makinHomeBuckets.js

export const MAKIN_HOME_BUCKETS = {
  craft: {
    id: 'craft',
    label: 'Craft & Making',
    description:
      'Artisan drum building, 3D prototyping, and hands-on craft work in the Ober studio.',
    primaryRoute: '/drums', // adjust to your existing route
  },
  media: {
    id: 'media',
    label: 'Photo & Video',
    description:
      'Photography, video production, and content creation for artists and brands.',
    primaryRoute: '/media', // adjust
  },
  software: {
    id: 'software',
    label: 'Web & Software',
    description:
      'Custom portals, ecommerce flows, configurators, and interactive experiences.',
    primaryRoute: '/software', // adjust
  },
  audio: {
    id: 'audio',
    label: 'Music & Audio',
    description:
      'Recording, mixing, drum sessions, and sound design work.',
    primaryRoute: '/audio', // adjust
  },
  story: {
    id: 'story',
    label: 'Story & Life',
    description:
      'The humans (and animals) behind Ober Artisan—Chelsea, the pups, the journey.',
    primaryRoute: '/about', // adjust
  },
};