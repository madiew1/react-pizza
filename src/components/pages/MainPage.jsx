import React from 'react'
import {Header, Categories, SortPopup, PizzaList} from '../';
import '../../scss/app.scss';

const MainPage = ({pizzas}) => {
  return (
    <div className="wrapper">
      <Header/>
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories items={['Все','Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']}/>
            <SortPopup items={['популярности', 'цене', 'алфавиту']}/>
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {
              pizzas.map((pizza) => <PizzaList {...pizza} key={pizza.id}/>)
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainPage
