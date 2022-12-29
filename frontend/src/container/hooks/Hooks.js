import { useState , createContext, useContext, useEffect} from "react";
import { Button, Input, message, Tag} from 'antd'

const LOCALSTORAGE_KEY = "save-me";
const savedMe = localStorage.getItem(LOCALSTORAGE_KEY);

const HookContext = createContext({
	login : false,
});

const HookProvider = (props) => {
    const [login, setLogin] = useState(false);
  	const [currentpage, setCurrentpage] = useState('Home');

  	return (
    	<HookContext.Provider
    	value={{
      		login, setLogin, currentpage, setCurrentpage
    	}}
    	{...props}
    	/>
  	);
};

const useHooks = () => useContext(HookContext);

export { HookProvider, useHooks };
