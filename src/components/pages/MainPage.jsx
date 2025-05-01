import React, {useCallback, useEffect} from 'react'
import { useSelector, useDispatch} from 'react-redux';
import {Header, Categories, SortPopup, PizzaList, Skeleton} from '../';
import { setCategory, setSortBy} from '../../redux/actions/filters';
import { addPizzaToBasket } from '../../redux/actions/basket';
import { fetchPizzas } from '../../redux/actions/pizzas';
import '../../scss/app.scss';

const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

const sortByNames = [
  {name: 'популярности', type: 'popular', order: 'desc'}, 
  {name: 'цене', type: 'price', order: 'desc'}, 
  {name:'алфавиту', type: 'name', order: 'asc'}
];

const MainPage = () => {
  const items = useSelector(({pizzas}) => pizzas.items);
  const basketItems = useSelector(({basket}) => basket.items)
  const isLoaded = useSelector(({pizzas}) => pizzas.isLoaded);
  const {category, sortBy} = useSelector(({filters}) => filters);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPizzas(sortBy, category))
  }, [category, sortBy])

  const onSelectCategory = useCallback((index) => {
    dispatch(setCategory(index))
  }, [])

  const onSelectSort = useCallback((type) => {
    dispatch(setSortBy(type))
  }, [])

  const handleAddPizzaToBasket = (obj) => {
    dispatch(addPizzaToBasket(obj))
  }

  return (
    <div className="wrapper">
      <Header/>
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories activeCategory={category} onClickItem={onSelectCategory} items={categoryNames}/>
            <SortPopup activeSortType={sortBy.type} items={sortByNames} onClickSortType={onSelectSort}/>
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {
              isLoaded 
              ? 
              items.map((pizza) => <PizzaList addedCount={basketItems[pizza.id] && basketItems[pizza.id].length} onClickAddPizza={handleAddPizzaToBasket} {...pizza} key={pizza.id}/>) 
              : 
              Array(10).fill(0).map((_, index) => <Skeleton key={index}/>)
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainPage
