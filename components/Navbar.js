import { Navbar, Nav, Button } from 'react-bootstrap';
import Link from 'next/link';
import { useTheme } from 'providers/ThemeProvider';

const BlogNavbar = () => {
  const { currentTheme, toggleTheme } = useTheme();

  return (
    <Navbar className='fj-navbar fj-nav-base' bg='transparent' expand='lg'>
      <Navbar.Brand className='fj-navbar-brand'>
        <Link href='/currentTheme'>
          <a>Karan Nagpal</a>
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='ml-auto'>
          <Button className='btn' onClick={toggleTheme}>
            {currentTheme.type}
          </Button>
          <Link href='/'>
            <a className='fj-navbar-item fj-navbar-link'>Home</a>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default BlogNavbar;
