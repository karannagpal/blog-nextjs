import { Navbar, Nav, Button } from 'react-bootstrap';
import Link from 'next/link';
import ThemeToggle from 'components/ThemeToggle';

const BlogNavbar = ({ currentTheme, toggleTheme }) => {
  return (
    <Navbar
      className='fj-navbar fj-nav-base'
      bg='transparent'
      expand='lg'
      variant={currentTheme.type}
    >
      <Navbar.Brand className='fj-navbar-brand'>
        <Link href='/'>
          <a style={{ color: currentTheme.fontColor }}>Karan Nagpal</a>
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='ml-auto'>
          <ThemeToggle onChange={toggleTheme} />
          <Link href='/'>
            <a className='fj-navbar-item fj-navbar-link'>Home</a>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default BlogNavbar;
