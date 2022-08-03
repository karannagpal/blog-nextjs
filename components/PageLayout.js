import { Container } from 'react-bootstrap';
import BlogNavbar from './Navbar';
import { useTheme } from 'providers/ThemeProvider';

export default function PageLayout({ children, className }) {
  const { currentTheme, toggleTheme } = useTheme();

  return (
    <div className={currentTheme.type}>
      <Container>
        <BlogNavbar currentTheme={currentTheme} toggleTheme={toggleTheme} />
        <div className={`page-wrapper ${className}`}>{children}</div>
        <footer className='page-footer'>
          <div>
            <a href='#'>courses</a>
            {' | '}
            <a href='https://github.com/karannagpal'>github</a>
            {' | '}
            <a href='#'>facebook</a>
          </div>
        </footer>
      </Container>
      <style jsx global>{`
        html body {
          background: ${currentTheme.background};
          color: ${currentTheme.fontColor};
          transition: color 0.1s ease-in-out 0s, background: 0.3s ease-in-out 0s;
        }
      `}</style>
    </div>
  );
}
