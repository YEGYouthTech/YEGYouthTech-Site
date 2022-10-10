import React from 'react';

export const AnimationStateContext = React.createContext();
export const useAnimationState = () => React.useContext(AnimationStateContext);
