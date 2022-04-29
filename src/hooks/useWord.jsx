import React from 'react';
import { WordContext } from '../contexts/WordContext';

export const useWord = () => {
    return React.useContext(WordContext)
}