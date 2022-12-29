import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { v4 as uuidv4 } from 'uuid';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import { actions } from '../redux/slice/resolution';

export default function ResolutionList() {
  // resolution state in the state
  const resolutionState = useSelector((state: RootState) => state.resolution);
  // dispatch for actions
  const dispatch = useDispatch();

  return (
    <div>
      {resolutionState.resolution.map((r) => (
        <div key={uuidv4()} className='resolution-list'>
          <h2>{r.title}</h2>
          <h3>{r.date}</h3>
          <FavoriteBorderIcon
            onClick={() => dispatch(actions.addFavorite(r))}
            style={{ cursor: 'pointer' }}
          />
          <DeleteOutlinedIcon
            onClick={() => dispatch(actions.deleteResolution(r))}
            style={{ cursor: 'pointer' }}
          />
        </div>
      ))}
    </div>
  );
}
