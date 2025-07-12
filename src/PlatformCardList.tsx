import React from 'react';
import PlatformCard from './PlatformCard';
import { Grid } from '@mui/material';
import type { Posts } from './PostContext';

const PLATFORMS = [
  'X',
  'Facebook',
  'Instagram',
  'LinkedIn',
  'Reddit',
  'TikTok',
  'Snapchat',
  'YouTube',
];

const PlatformCardList = () => {
  return (
    <Grid
      container
      display="flex"
      justifyContent="center"
      alignItems="center"
      size="grow"
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {PLATFORMS.map((platform: string, index: number) => (
        <Grid key={`platform:${index}`} size={{ xs: 12, md: 6, lg: 3 }}>
          <PlatformCard platform={platform as keyof Posts} key={platform} />
        </Grid>
      ))}
    </Grid>
  );
};

export default PlatformCardList;
