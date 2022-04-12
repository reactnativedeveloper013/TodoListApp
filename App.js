/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { useEffect,  createContext, useRef} from 'react';
 import {
   PermissionsAndroid,View, LogBox, StatusBar
 } from 'react-native';
 import {Provider} from 'react-redux';
 import {store} from './src/reduxStore';
 import Routes from './src/Navigation/routes';
 import {initiateEmptyStore} from './src/models';
import Loader from './src/Components/Loader';


LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);

// initialize empty store
 initiateEmptyStore();
 const App = () => {

 
   const AppContext = createContext({});
   const AppProvider = props => {
     const loader = useRef();
 
     const globalFunc = {
       startLoader: () => loader.current.start(),
       stopLoader: () => loader.current.stop(),
       isLoading: () => loader.current.isLoading(),
     };
  
     return (
       <AppContext.Provider value={{...globalFunc}}>
         {props.children}
         <Loader ref={loader} />
       </AppContext.Provider>
     );
   };
 
   return (
   
     <Provider store={store}>
       <AppProvider>
         <AppContext.Consumer>
           {funcs => {
             global.props = {...funcs};
             return (
               <View {...funcs} style={{flex: 1}}>
                 <Routes enableURLHandling={false} />
               </View>
             );
           }}
         </AppContext.Consumer>
       </AppProvider>
   </Provider>

   );
 }
 export default App
 