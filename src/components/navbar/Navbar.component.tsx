import {
  AppBar,
  Button,
  IconButton,
  Link,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { FC } from 'react';
import { useLanguage } from '../../provider/language-provider/LanguageProvider.component';
import { COLORS } from '../../consts';
import { MountainIcon } from '../icons/MountainIcon.component';
import { CrosshairIcon } from '../icons/CrosshairIcon.component';
import { FishIcon } from '../icons/FishIcon.component';
import { ArrowUpRightIcon } from '../icons/ArrowUpRightIcon.component';
import CenterBox from '../center-box/CenterBox.component';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar: FC = () => {
  const { translations } = useLanguage();
  const theme = useTheme();
  const mobileScreen = useMediaQuery('(max-width:762px)');

  if (mobileScreen) {
    return (
      <AppBar
        sx={{
          alignItems: 'center',
          paddingY: '.75rem',
          backdropFilter: 'blur(7.5px)',
          opacity: 0.7,
          backgroundColor: COLORS[3],
        }}
      >
        <CenterBox
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          gap="1rem"
        >
          <Button
            variant="text"
            sx={{ color: 'white', fontSize: '0.9375rem', fontWeight: '700' }}
          >
            LOGO SAMPLE
          </Button>

          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        </CenterBox>
      </AppBar>
    );
  }

  return (
    <AppBar
      sx={{
        alignItems: 'center',
        paddingY: '.75rem',
        backdropFilter: 'blur(7.5px)',
        backgroundColor: 'rgba(86, 44, 44, 0.7)',
      }}
    >
      <CenterBox
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Stack flexDirection="row" alignItems="center" gap="1rem">
          <Button
            variant="text"
            sx={{ color: 'white', fontSize: '0.9375rem', fontWeight: '700' }}
          >
            LOGO SAMPLE
          </Button>
          {Array.from(
            { length: (translations['head_menu'] as string[])?.length - 1 },
            (_, index) => index + 1
          ).map((idx) => (
            <Typography
              key={idx}
              sx={{
                padding: '0',
              }}
            >
              <Link href="/" sx={{
                color: 'white',
                textDecoration: 'none'
              }}>
                {(translations['head_menu'] as string[])[idx]}
              </Link>
            </Typography>
          ))}
        </Stack>

        <Stack flexDirection="row" alignItems="center" gap="1rem">
          <MountainIcon />
          <CrosshairIcon />
          <FishIcon />

          <Button variant="contained" endIcon={<ArrowUpRightIcon />} />
        </Stack>
      </CenterBox>
    </AppBar>
  );
};

export default Navbar;
