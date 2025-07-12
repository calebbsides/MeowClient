import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import React from 'react';
import { usePosts, type Posts } from './PostContext';

type PlatformCardProps = { platform: keyof Posts };

const PlatformCard = ({ platform }: PlatformCardProps) => {
  const { posts } = usePosts();
  const content = (posts[platform] || 'No content generated yet.') as string;

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
          {platform}
        </Typography>
        <Typography variant="body2">{content}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Post</Button>
      </CardActions>
    </Card>
  );
};

export default PlatformCard;
