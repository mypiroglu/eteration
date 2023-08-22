import React from 'react';
import {
  Basket,
  Home,
  Star,
  UnStar,
  User,
  Search,
  EyeOff,
  Eye,
  Back,
} from '../../../assets/svg';

const iconTypes = {
  Basket,
  Home,
  Star,
  User,
  Search,
  EyeOff,
  Eye,
  UnStar,
  Back,
};

export const Icon = ({icon, ...props}) => {
  let Icon = iconTypes[icon];
  return <Icon {...props} />;
};
