import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';

import { RootState } from '../redux/store';
import { actions } from '../redux/slice/resolution';

export default function Favorite() {
  const favoriteState = useSelector((state: RootState) => state.resolution);
  // declare favorites array in the state
  const favorites = favoriteState.favorite;

  // dispatch for actions
  const dispatch = useDispatch();

  return (
    <div>
      <h2>My Favorite</h2>
      {favorites.map((favorite) => (
        <Box key={uuidv4()} className='favorite-item'>
          <Typography>{favorite.title}</Typography>
          <Button onClick={() => dispatch(actions.deleteFavorite(favorite))}>
            Delete
          </Button>
        </Box>
      ))}
    </div>
  );
}
