import * as React from 'react';
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import Paper from '@mui/material/Paper';
import Collapse from '@mui/material/Collapse';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Button } from '@mui/material';
import Image from 'next/image';
import newImage from '@/assets/images/new_release.png'
import { height } from '@mui/system';


const icon = (
      <Image width={'full'} src={newImage} className="object-cover overflow-hidden h-[500px]"></Image>
);

export default function Colapse() {
  const [checked, setChecked] = React.useState(false);
  const [checked2, setChecked2] = React.useState(true);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <Box sx={{ height: '500px' }}>
      <FormControlLabel
        control={<Switch checked={checked} onChange={handleChange} />}
        label="Show"
      />
      <Box
        sx={{
          '& > :not(style)': {
            display: 'flex',
            // justifyContent: 'space-around',
            height: '500px',
            width: '100%',
          },
        }}
      >
        {/* <div>
          <Collapse in={checked}>{icon}</Collapse>
          <Collapse in={checked} collapsedSize={40}>
            {icon}
          </Collapse>
        </div> */}
        <div>
          {/* <Box sx={{ width: '50%' }}>
            <Collapse orientation="horizontal" in={checked}>
              {icon}
            </Collapse>
          </Box> */}
          <Box sx={{ width: '40%', height:'500px'}}>
            <Collapse orientation="horizontal" in={checked} collapsedSize={200} >
              {/* <Button onClick={handleChange}> */}
              {icon}
              {/* </Button> */}
            </Collapse>
          </Box>
          <Box sx={{ width: '40%', height:'500px'}}>
            <Collapse orientation="horizontal" in={!checked} collapsedSize={200} >
              {/* <Button onClick={handleChange}> */}
              {icon}
              {/* </Button> */}
            </Collapse>
          </Box>
        </div>
      </Box>
    </Box>
  );
};
