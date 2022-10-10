import React from 'react';

export const ScrollbarContext = React.createContext();
export const useScrollbar = () => React.useContext(ScrollbarContext);
