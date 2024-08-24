import { useContext, useState } from "react";
import { DataContext } from '../content/DataProvider';
import { Box, styled } from "@mui/material";
import { useEffect } from "react";
const Restyle = styled(Box)`
height:45vh;
background:white;

 `


const Result = () => {
    const [src, setSrc] = useState('');
    const { Html, Css, Js } = useContext(DataContext);
    const srcCode = `
    <html>
    <body>${Html}</body>
    <style>${Css}</style>
    <script>${Js}</script>
</html>
    `
    useEffect(() => {
        const timeout = setTimeout(() => { setSrc(srcCode) }, 500)
        return () => clearTimeout(timeout);
    }, [Html, Css, Js])






    return (
        <Restyle style={Html || Css || Js ? null : { background: '#1d1e22' }}>
            <iframe
                srcDoc={src}
                title="OUTPUT"
                sandbox="allow-scripts"
                frameBorder={0}
                width="100%"
                height="100%" />
        </Restyle>
    )
}


export default Result;