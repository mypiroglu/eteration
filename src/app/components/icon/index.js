import React from 'react';
import {
  Basket,
  Home,
  Star,
  User,
  Search,
  EyeOff,
  Eye,
} from '../../../assets/svg';

const iconTypes = {
  Basket,
  Home,
  Star,
  User,
  Search,
  EyeOff,
  Eye,
};

export const Icon = ({icon, ...props}) => {
  let Icon = iconTypes[icon];
  return <Icon {...props} />;
};
