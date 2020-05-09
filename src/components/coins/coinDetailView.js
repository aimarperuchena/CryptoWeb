import React from 'react';
import {
  
  useParams,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
export default function CoinDetailView() {
  let { id } = useParams();
  const coinInfo = useSelector((state) => state.coins.coin);
  return (
    <div>
      <p>{id}</p>
      <p>{coinInfo.id}</p>
    </div>
  );
}
