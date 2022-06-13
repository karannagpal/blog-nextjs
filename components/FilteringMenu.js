import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LIST_VIEW_ICONS = ['border-all', 'list'];

const FilteringMenu = ({ onChange, filter }) => {
  return (
    <div className='filtering-menu mb-2'>
      <span className='filter-menu-text'>Change layout</span>
      <FontAwesomeIcon
        icon={LIST_VIEW_ICONS[filter.view.list]}
        className='clickable hoverable'
        onClick={() => onChange('view', { list: +!filter.view.list })}
      />
    </div>
  );
};

export default FilteringMenu;
