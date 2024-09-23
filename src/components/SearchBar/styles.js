import { colors } from '../../styles/colors';

export const searchBarStyles = {
  container: {
    backgroundColor: '#fff',
    borderRadius: '16px',
    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)', // Softer shadow for depth
    padding: '1.5rem',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '2rem',
  },
  input: {
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    fontSize: '1rem',
    height: '56px', // Set consistent height for inputs
    border: '1px solid #ddd',
  },
  button: {
    padding: '12px 14px',
    fontSize: '1rem',
    backgroundColor: colors.primary,
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    height: '56px', // Match the input height
    cursor: 'pointer',
    textTransform: 'none',
    transition: 'background-color 0.3s ease',
  },
  buttonHover: {
    backgroundColor: '#0b5ed7',
  },
};
