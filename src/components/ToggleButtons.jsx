import React, { memo } from 'react'

import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

const ToggleButtons = ({alignment,setAlignment})=> {
    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    return (
        <ToggleButtonGroup
                color="primary"
                value={alignment}
                exclusive
                onChange={handleChange}
                aria-label="Platform"
                sx={{justifyContent:"center"}}
            >
                <ToggleButton value="kril-lotin">Kril - Lotin</ToggleButton>
                <ToggleButton value="lotin-kril">Lotin - Kril</ToggleButton>        
        </ToggleButtonGroup>
    );
}

export default memo(ToggleButtons);
