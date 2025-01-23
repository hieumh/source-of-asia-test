import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';
import { FC } from 'react';
import { ArrowUpRightIcon } from '../icons/ArrowUpRightIcon.component';
import { COLORS } from '../../consts';

interface IBlockCardProps {
  src: string;
  title: string;
  subtitle: string;
  description: string;
  actionText: string;
}

const BlockCard: FC<IBlockCardProps> = ({
  src,
  title,
  subtitle,
  description,
  actionText,
}) => {
  return (
    <Card sx={{ maxWidth: '24.8125rem', width: '100%', boxShadow: 'none' }}>
      <img src={src} height={397} width={397} alt="img-card" />

      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}
      >
        <Typography fontSize="1.25rem" color={COLORS[1]}>
          {title}
        </Typography>
        <Typography fontSize="1.75rem" color={COLORS[3]}>
          {subtitle}
        </Typography>
        <Typography
          fontSize="1.125rem"
          sx={{
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 2,
            flexShrink: 0,
            alignSelf: 'stretch',
            display: '-webkit-box',
            overflow: 'hidden',
          }}
        >
          {description}
        </Typography>
      </CardContent>

      <CardActions>
        <Button
          endIcon={<ArrowUpRightIcon color="secondary" />}
          variant="outlined"
          size="small"
        >
          {actionText}
        </Button>
      </CardActions>
    </Card>
  );
};

export default BlockCard;
