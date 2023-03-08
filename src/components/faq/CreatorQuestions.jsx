import React from 'react'
import { Box } from '@mui/system';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { styled } from '@mui/material/styles';



const CreatorQuestions = () => {
    const [expanded, setExpanded] = React.useState(false);
    const [expanded2, setExpanded2] = React.useState(false);
    const [expanded3, setExpanded3] = React.useState(false);
    const [expanded4, setExpanded4] = React.useState(false);
    const [expanded5, setExpanded5] = React.useState(false);
    const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleExpandClick2 = () => {
    setExpanded2(!expanded2);
  };
  const handleExpandClick3 = () => {
    setExpanded3(!expanded3);
  };
  const handleExpandClick4 = () => {
    setExpanded4(!expanded4);
  };
  const handleExpandClick5 = () => {
    setExpanded5(!expanded5);
  };

  const CreatorsData = [
  
    {
   
  title: "What is Artboardz?",
  description: "The mint price for each Artboardz collections varies depending of factors including who the artist is, their location, the size of the collection and others",
  ref: "q1",
  handleClick: handleExpandClick,
  expanded: expanded,

},

  {
    title: "What kind of creators does Artbordz work with?",
    description: "The mint price for each Artboardz collections varies depending of factors including who the artist is, their location, the size of the collection and others",
    ref: "q2",
    handleClick: handleExpandClick2,
   
expanded: expanded2  },
  
  {
    title: "Do I need to be an NFT creator to join Artboardz?",
  description: "The mint price for each Artboardz collections varies depending of factors including who the artist is, their location, the size of the collection and others",
  ref: "q3",
  handleClick: handleExpandClick3,
 
expanded: expanded3},
  {
    title: "What does  the cration process entail?",
    description: "The mint price for each Artboardz collections varies depending of factors including who the artist is, their location, the size of the collection and others",
    ref: "q4",
    handleClick: handleExpandClick4,
   
expanded: expanded4  },
  {
    title: "How do I become a creator with Artboardz?",
  description: "The mint price for each Artboardz collections varies depending of factors including who the artist is, their location, the size of the collection and others",
  ref: "q5",
  handleClick: handleExpandClick5,  
expanded: expanded5
},
  
  
  ];
  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    // transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    // marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));
  
  const displayQuestions = CreatorsData.map((question, index) => {
    return (
      
        
        <Box key={index} onClick={question.handleClick} sx={{ width:{xl: '85vw', md: '60vw'}, display: 'flex',
        flexDirection: 'row', justifyContent:'center'}}>
      <Card sx={{ border:1, borderColor:"#6E028F" , background:'transparent',  boxShadow: 0, marginY:'10px',}}>
      <ExpandMore
        expand={question.expanded}
        onClick={question.handleClick}
        aria-expanded={question.expanded}
        aria-label="show more"
      >
         
          
    <CardContent sx={{ width:'70vw', display: 'flex',
        flexDirection: 'row', justifyContent:'space-between'}}>
    <p className="text-base text-white font-semibold text-xl">{question.title}</p>
      
    </CardContent>

    <CardActions disableSpacing    sx={{m:'auto', width:'30px', marginX:'20px'}}>
     {question.expanded?   <RemoveIcon sx={{ color: 'white', m:'auto'  }}/>:  <AddIcon sx={{ color: 'white', m:'auto'  }}/>}
       
      
     
      {/* <p className="text-base text-white font-semibold">
        See More
      </p> */}
    </CardActions>
  
    
    </ExpandMore> 
    <Collapse in={question.expanded} timeout="auto" unmountOnExit>
   
      <CardContent>
   
      <p className="text-base text-white  mx-2"> {question.description}</p>
     
      </CardContent>
     
    </Collapse>
  </Card>
  </Box>
    );
  })

  return (

    <div className='mx-auto'>
      {displayQuestions}
    </div>
  )
}

export default CreatorQuestions
