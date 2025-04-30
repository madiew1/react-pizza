import React from 'react';
import PropTypes from 'prop-types';

const Categories = React.memo(({activeCategory, items, onClickItem}) => {


  return (
    <div>
      <div className="categories">
              <ul>
              <li
                className={activeCategory === null ? 'active' : ''}
                onClick={() => onClickItem(null)}>
                Все
              </li>
                {
                  items.map((item, i) => 
                    <li
                      onClick={() => onClickItem(i)}
                      className={activeCategory === i ? 'active' : ''}
                      key={item}
                      >{item}</li>
                )}
              </ul>
            </div>
    </div>
  )
}
)

Categories.prototype = {
  activeCategory: PropTypes.number.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClickItem: PropTypes.func

};

Categories.defaultProps = {
  activeCategory: 0, 
  items: []
}
export default Categories
