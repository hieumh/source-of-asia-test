import { Box, Button, Stack } from '@mui/material';
import { FC } from 'react';
import { MountainIcon } from '../../../components/icons/MountainIcon.component';
import { FishIcon } from '../../../components/icons/FishIcon.component';
import { CrosshairIcon } from '../../../components/icons/CrosshairIcon.component';

interface IBannerProps {}

const Banner: FC<IBannerProps> = () => {
  return (
    <section style={{ position: 'relative' }}>
      <img
        height={1080}
        src="/public/images/banner.png"
        alt="banner"
        style={{
          maxWidth: '120rem',
          maxHeight: 'min(67.5rem, 100vh)',
          width: '100%',
          objectFit: 'cover',
        }}
      />

      <Stack
        flexDirection="row"
        sx={{
          position: 'absolute',
          bottom: '10%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '60%',
          maxWidth: '77.5rem',
          '& button': {
            padding: '1rem 2rem',
            flex: '1 1 auto',
            color: 'white',
          },
        }}
      >
        <Button>
          <MountainIcon />
        </Button>
        <Button>
          <FishIcon />
        </Button>
        <Button>
          <CrosshairIcon />
        </Button>
      </Stack>
    </section>
  );
};

export default Banner;
