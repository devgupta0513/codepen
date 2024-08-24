import { Controlled as ControlledEditor } from 'react-codemirror2';
import { Box, styled } from "@mui/material";
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import '../App.css';
import { useState } from 'react';


const Dev = styled(Box)`
background:#1d1e22;
display:flex;
padding :9px 12px ;

`
const Sed = styled(Box)`
  
    height:20px ;
    width :20px;
    display:flex;
    place-Content:center;
    border-Radius:5px;
    margin-Right: 5px;
    padding-Bottom:5px;
    component = span;
`
const Wrap = styled(Box)`
     display:flex;
     background : #060606;
     justify-content:space-between;
     font-weight:700;
     


`
const Flexed = styled(Box)`
flex-grow:1;
flex-basic:0;
display:flex;
flex-direction:column;
padding:5px;

`


const Struc = ({ heading, icon, color, value, onChange }) => {

    const [open, setOpen] = useState('true');


    const handleChange = (editor, data, value) => {
        onChange(value);
    }



    return (
        <>
            <Flexed style={open ? null : { flexGrow: 0 }}>
                <Wrap>
                    <Dev>
                        <Sed
                            component="span"
                            style={{
                                background: color,


                            }}

                        >
                            {icon}
                        </Sed>
                        {heading}
                    </Dev>
                    <CloseFullscreenIcon style={{ background: '#1d1e22', alignSelf: 'center' }}
                        onClick={() => setOpen(prevState => !prevState)} />

                </Wrap>
                <ControlledEditor
                    className='controlled-editor'
                    value={value}
                    onBeforeChange={handleChange}
                    options={{

                        theme: 'material',
                        lineNumbers: true

                    }}

                />
            </Flexed>


        </>
    );


}
export default Struc;