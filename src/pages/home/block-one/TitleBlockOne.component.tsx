import { FC } from 'react';
import CenterBox from '../../../components/center-box/CenterBox.component';
import { useLanguage } from '../../../provider/language-provider/LanguageProvider.component';
import { Box, Divider, Stack, Typography } from '@mui/material';
import BlockCard from '../../../components/block-card/BlockCard.component';
import { COLORS } from '../../../consts';

interface ITitleBlockOneProps {}

const TitleBlockOne: FC<ITitleBlockOneProps> = () => {
  const { translations } = useLanguage();

  return (
    <section>
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
          {(translations.bloc_1 as Record<string, string>).title}
        </Divider>

        <Typography
          textAlign="center"
          variant="h2"
          fontSize="1.5rem"
          fontWeight={400}
          mt="1rem"
          color={COLORS[3]}
        >
          {(translations.bloc_1 as Record<string, string>).subtitle}
        </Typography>

        <Stack
          flexDirection="row"
          justifyContent="center"
          gap="1.5rem"
          mt="2.5rem"
          flexWrap="wrap"
        >
          {(
            (
              translations?.bloc_1 as {
                cases: {
                  category: string;
                  tagline: string;
                  description: string;
                  cta: string;
                }[];
              }
            )?.cases || []
          )?.map((ele, idx) => (
            <Box mt={idx % 2 !== 0 ? 0 : '2.5rem'} minWidth="21rem">
              <BlockCard
                src={`/public/images/card-bloc-${idx + 1}.png`}
                title={ele.category}
                subtitle={ele.tagline}
                description={ele.description}
                actionText={ele.cta}
              />
            </Box>
          ))}
        </Stack>
      </CenterBox>
    </section>
  );
};

export default TitleBlockOne;
