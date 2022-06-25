import Toggle from 'react-toggle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ThemeToggle = ({ onChange }) => {
  return (
    <label>
      <Toggle
        className='day-night-toggle'
        onChange={onChange}
        icons={{
          unchecked: <FontAwesomeIcon inverse icon='moon' />,
          checked: <FontAwesomeIcon inverse icon='sun' />,
        }}
      />
    </label>
  );
};

export default ThemeToggle;
