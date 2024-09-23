import { colors } from '../../styles/colors';

export const headerStyles = {
    header: {
      backgroundColor: colors.primary,
    },
    headerContainer: {
      display: 'flex',
      alignItems: 'center',
    },
    logoImage: {
        height: '100px', 
        width: 'auto',
      },
    navLinks: {
      display: 'flex',
      listStyleType: 'none',
    },
    navLinkItem: {
      marginLeft: '2rem',
    },
    navLink: {
      color: '#fff',
      textDecoration: 'none',
      fontSize: '1rem',
      transition: 'color 0.3s ease',
    },
    navLinkHover: {
      color: '#ffcc00',
    },
  };
  