import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { RootState } from '../redux/store';

export default function Favorite() {
  const favoriteState = useSelector((state: RootState) => state.resolution);
  // declare favorites array in the state
  const favorites = favoriteState.favorite;

  return (
    <div>
      <h2>My Favorite</h2>
      {favorites.map((favorite) => (
        <div key={uuidv4()}>
          <h3>{favorite.title}</h3>
        </div>
      ))}
    </div>
  );
}
