//#1.Create context 
import React from 'react';
const UserContext=React.createContext("kadapala");
const UserProvider=UserContext.Provider
const UserConsumer=UserContext.Consumer
export {UserProvider,UserConsumer}
export default UserContext;



