import { colors } from '../../styles/colors';

export const flightCardStyles = {
  card: {
    backgroundColor: '#f7f7f7',
    borderRadius: '12px',
    overflow: 'hidden',
    width: '220px',
    margin: '1rem',
    color: colors.white,
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.2s',
    cursor: 'pointer',
  },
  cardHover: {
    transform: 'scale(1.05)',
  },
  image: {
    width: '100%',
    height: '130px',
    objectFit: 'cover',
  },
  info: {
    padding: '1rem',
  },
  topInfo: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  destination: {
    fontSize: '1.1rem',
    fontWeight: 'bold',
  },
  price: {
    fontSize: '1.1rem',
    fontWeight: 'bold',
    color: colors.secondary,
  },
  dates: {
    fontSize: '0.9rem',
    color: colors.textSecondary,
    margin: '0.5rem 0',
  },
  duration: {
    fontSize: '0.9rem',
    color: colors.textSecondary,
  },
};
