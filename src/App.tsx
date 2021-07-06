import { useState, useMemo, useCallback } from 'react';
import { Item } from './components/Item';
import './App.css';

function App() {
  const [items, setItems] = useState<string[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [newItem, setNewItem] = useState('');

  function addItemToList()  {
    setItems([...items, `Item ${items.length}`]);
  }

  const addItemToWishlist = useCallback((item: string) => {
    setWishlist(state => [...state, item]);
  }, []);

  const countItemWithOne = useMemo(() => {
    console.log('test');
    return items.filter(item => item.includes('1')).length;
  }, [items]);

  return (
    <div>
      <input type='text' onChange={e => setNewItem(e.target.value)} value={newItem} />
      <button type='button' onClick={addItemToList}>Add</button>
      <ul>
        {items.map(item => {
          return (
            <Item
              key={item}
              onAddToWishlist={addItemToWishlist}
              title={item}
              countItemWithOne={countItemWithOne}
            />)
        })}
      </ul>
      <div>
        Count: {countItemWithOne}
      </div>
    </div>
  );
}

export default App;
