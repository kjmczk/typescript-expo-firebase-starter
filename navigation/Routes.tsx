import { NavigationContainer } from '@react-navigation/native';
import React, { useContext, useEffect, useState } from 'react';

import { auth } from '../components/Firebase/firebase';
import Spinner from '../components/Spinner';
import AppStack from './AppStack';
import AuthStack from './AuthStack';
import { AuthUserContext } from './AuthUserProvider';
import navigationTheme from './navigationTheme';

const Routes: React.FC = () => {
  const { user, setUser } = useContext(AuthUserContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // onAuthStateChanged returns an unsubscriber
    const unsubscribeAuth = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
      setIsLoading(false);
    });

    // unsubscribe auth listener on unmount
    return unsubscribeAuth;
  }, [setUser]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <NavigationContainer theme={navigationTheme}>
      {user ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Routes;
