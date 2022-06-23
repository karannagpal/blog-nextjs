import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LIST_VIEW_ICONS = ['list', 'border-all'];
const DATE_FILTERING_ICONS = ['sort-numeric-down', 'sort-numeric-up'];

const FilteringMenu = ({ onChange, filter }) => {
  return (
    <div className='filtering-menu mb-2'>
      <span className='filter-menu-text'>Change layout</span>
      <FontAwesomeIcon
        icon={LIST_VIEW_ICONS[filter.view.list]}
        className='clickable hoverable mr-2'
        onClick={() => onChange('view', { list: +!filter.view.list })}
      />
      <FontAwesomeIcon
        icon={DATE_FILTERING_ICONS[filter.date.asc]}
        className='clickable hoverable'
        onClick={() => onChange('date', { asc: +!filter.date.asc })}
      />
    </div>
  );
};

export default FilteringMenu;
