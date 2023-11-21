//import React, { createContext } from 'react';
//import useMediaQuery from '@mui/material/useMediaQuery';
/*

//Make this non  MUI
type mediaquery = {
  width1100: boolean;
  width400: boolean;
  width600: boolean;
  width900: boolean;
  open: boolean;
  setOpen: Function;
};
export const themeContext = createContext<mediaquery>({
  width1100: true,
  width400: true,
  width600: true,
  width900: true,
  open: false,
  setOpen: () => {},
});
export default function MediaQuery(props: any) {
  const width900 = useMediaQuery('(min-width:900px)');
  const width600 = useMediaQuery('(min-width:600px)');
  const width400 = useMediaQuery('(min-width:400px)');
  const width1100 = useMediaQuery('(min-width:1100px)');
  const [open, setOpen] = React.useState<boolean>(false);

return (
    <themeContext.Provider
      value={{ width1100, width400, width600, width900, open, setOpen }}
    >
      {props.children}
    </themeContext.Provider>);} */