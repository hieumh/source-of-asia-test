import { FC } from 'react';
import CenterBox from '../../../components/center-box/CenterBox.component';
import { useLanguage } from '../../../provider/language-provider/LanguageProvider.component';
import { Box, Button, Divider, Stack, Typography } from '@mui/material';
import BlockCard from '../../../components/block-card/BlockCard.component';
import { COLORS } from '../../../consts';
import { MountainIcon } from '../../../components/icons/MountainIcon.component';
import { FishIcon } from '../../../components/icons/FishIcon.component';
import { CrosshairIcon } from '../../../components/icons/CrosshairIcon.component';

interface ITitleBlockOneProps {}

const TitleBlockTwo: FC<ITitleBlockOneProps> = () => {
  const { translations } = useLanguage();

  return (
    <section
      style={{
        backgroundColor: '#FFF6F4',
        marginTop: '6.25rem',
      }}
    >
      <Box
        sx={{
          background:
            'url(public/images/background-2.png) #d3d3d340 -392.609px -456px / 140.897% 185.598% no-repeat',
          paddingY: '3.75rem',
        }}
      >
        <CenterBox>
          <Divider
            sx={{
              fontSize: '3.25rem',
              color: COLORS[1],
              wordBreak: 'break-word', // Hoặc break-all, tùy ý bạn
              whiteSpace: 'normal',
              textAlign: 'center',
            }}
          >
            {(translations.bloc_2 as Record<string, string>).title}
          </Divider>

          <Stack
            flexDirection="row"
            justifyContent="center"
            gap="1.5rem"
            mt="2.5rem"
            flexWrap="wrap"
          >
            {(
              (
                translations?.bloc_2 as {
                  cases: string[];
                }
              )?.cases || []
            )?.map((ele, idx) => (
              <Button
                key={ele}
                variant="outlined"
                sx={{
                  borderColor: COLORS[1],
                }}
                startIcon={
                  [<MountainIcon />, <FishIcon />, <CrosshairIcon />][idx]
                }
              >
                {ele}
              </Button>
            ))}
          </Stack>

          <img
            src="/public/images/map-big-size.png"
            style={{
              maxWidth: '77.5rem',
              marginTop: '1.5rem',
              marginBottom: '2.5rem',
              width: '100%',
              objectFit: 'cover',
              height: 'min(42.875rem, 100vh)',
              borderRadius: '1.25rem',
            }}
          />
        </CenterBox>
      </Box>
    </section>
  );
};

export default TitleBlockTwo;
