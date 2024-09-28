import { colors } from 'styles/colors';

export const headerStyles = {
  header: {
    backgroundColor: colors.primary,
  },
  headerContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logoImage: {
    height: '100px',
    width: 'auto',
  },
  navLinks: {
    display: 'flex',
    listStyleType: 'none',
    '@media (max-width: 768px)': {
      display: 'none',
    },
  },
  navLinkItem: {
    marginLeft: '2rem',
  },
  navButton: {
    borderRadius: '20px',
    color: '#fff',
    borderColor: '#fff',
    textTransform: 'none',
    padding: '0.5rem 1rem',
    fontSize: '1rem',
    '&:hover': {
      backgroundColor: '#3a3a3a',
    },
  },
  selectedButton: {
    backgroundColor: '#0057d8',
    color: '#fff',
    borderRadius: '20px',
    padding: '0.5rem 1rem',
    fontSize: '1rem',
    '&:hover': {
      backgroundColor: '#003fa3',
    },
  },
};
