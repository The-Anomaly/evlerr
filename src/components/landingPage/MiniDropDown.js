// import React from 'react';
// import Box from '@mui/material/Box';
// import InputLabel from '@mui/material/InputLabel';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';

// const MiniDropDown = ({ label, children }) => {

//     const [age, setAge] = React.useState('');

//     const handleChange = (event) => {
//         setAge(event.target.value);
//     };
//     return (
//         <>
//             <Box sx={{ minWidth: 120 }}>
//                 <FormControl fullWidth>
//                     <InputLabel id="demo-simple-select-label">{label}</InputLabel>
//                     <Select
//                         labelId="demo-simple-select-label"
//                         id="demo-simple-select"
//                         value={age}
//                         label={label}
//                         onChange={handleChange}
//                     >
//                         {children}
//                     </Select>
//                 </FormControl>
//             </Box>
//         </>
//     )
// }

// export default MiniDropDown


import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 160,
        },
    },
};




export default function MiniDropDown({ children }) {

    const [personName, setPersonName] = React.useState([]);

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    return (
        <div>
            <FormControl sx={{ minWidth: 160, }}>
                <Select
                    multiple
                    displayEmpty
                    value={personName}
                    onChange={handleChange}
                    input={<OutlinedInput />}
                    renderValue={(selected) => {
                        if (selected.length === 0) {
                            return <p className='f16 regularText' style={{ color: '#006C70', opacity: '0.4' }}>Property Type</p>;
                        }

                        return selected.join(', ');
                    }}
                    MenuProps={MenuProps}
                    inputProps={{ 'aria-label': 'Without label' }}
                >

                    {/* {names.map((name) => (
                        <MenuItem
                            key={name}
                            value={name}
                            style={getStyles(name, personName, theme)}
                        >
                            {name}
                        </MenuItem>
                    ))} */}
                    {children}
                </Select>
            </FormControl>
        </div>
    );
}