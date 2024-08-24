import { Box, styled } from "@mui/material";
import Struc from "./structue";
import { useContext } from "react";
import { DataContext } from "../content/DataProvider";




const Flexy = styled(Box)`
 display:flex;
 background-color:#060606;
 height:54vh;
 `
const Code = () => {
   const { Html, setHtml, Css, setCss, Js, setJs } = useContext(DataContext);
   return (
      <>
         <Flexy>
            <Struc
               heading="HTML"
               icon="<>"
               color="#FF3C41"
               value={Html}
               onChange={setHtml} />
            <Struc
               heading="CSS"
               icon="*"
               color="blue"
               value={Css}
               onChange={setCss} />
            <Struc
               heading="JS"
               icon="()"
               color="yellow"
               value={Js}
               onChange={setJs} />
         </Flexy>
      </>
   );
}
export default Code;