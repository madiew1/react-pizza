import React, { useState } from 'react'

const Categories = ({items}) => {
  const [categoryId, setCategoryId] = useState(0);
  return (
    <div>
      <div className="categories">
              <ul>
                {
                  items.map((item, i) => 
                    <li
                      onClick={() => setCategoryId(i)}
                      className={categoryId === i ? 'active' : ''}
                      key={item}
                      >{item}</li>
                )}
              </ul>
            </div>
    </div>
  )
}

export default Categories
