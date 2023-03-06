import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';
const Questions = () => {
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));
  

  return (
    <div>
        <Card sx={{ border:1, borderColor:"#6E028F" , background:'transparent',  boxShadow: 0}}>
            <div className='flex flex-row '>
      <CardContent sx={{ width:'70vw'}}>
      <p className="text-base text-white font-semibold">preguntas</p>
        
      </CardContent>
      <CardActions disableSpacing  sx={{m:'auto', width:'135px'}}>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon sx={{ color: 'white', m:'auto'  }}/>
        </ExpandMore>
        <p className="text-base text-white font-semibold">
          See More
        </p>
      </CardActions>
      </div>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
        <p className="text-base text-white font-semibold">preguntas</p>
        <div></div>
        <p className="text-base text-white font-semibold">preguntas</p>
        </CardContent>
      </Collapse>
    </Card>
      
    </div>
  )
}

export default Questions
