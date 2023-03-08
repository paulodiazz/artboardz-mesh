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
  description: "Artboardz supports the creation of Cardano NFTs in the real world. It is an art initiative that is incubated by The Art Bank Group. Learn more here [link to About tab]",
  ref: "q1",
  handleClick: handleExpandClick,
  expanded: expanded,

},

  {
    title: "What kind of creators does Artbordz work with?",
    description: "Artboardz works with creators that have digital illustration and marketing skills to develop and promote NFT collections.",
    ref: "q2",
    handleClick: handleExpandClick2,
   
expanded: expanded2  },
  
  {
    title: "Do I need to be an NFT creator to join Artboardz?",
  description: "Artboardz strives to onboard new artists into the ecosystem, so we welcome artists of all disciplines to join us.",
  ref: "q3",
  handleClick: handleExpandClick3,
 
expanded: expanded3},
  {
    title: "What does  the cration process entail?",
    description: "Preparing for an Artboardz mint takes place over 3 months including the following steps:",
    ref: "q4",
    handleClick: handleExpandClick4,
   
expanded: expanded4  },
  {
    title: "How do I become a creator with Artboardz?",
  description: "Artboardz works with creators around the world to bring their digital art to life. To apply to work with Artboardz, please submit the form at the bottom of the page.",
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
      
        
        <Box key={index} onClick={question.handleClick} sx={{ width:{xl: '85vw',lg: '75vw', md: '70 vw', sm:'50vw'}, display: 'flex',
        flexDirection: 'row', justifyContent:'center'}}>
      <Card sx={{ border:1, borderColor:"#6E028F" , background:'transparent',  boxShadow: 0, marginY:'10px',}}>
      <ExpandMore
        expand={question.expanded}
        onClick={question.handleClick}
        aria-expanded={question.expanded}
        aria-label="show more"
      >
         
          
    <CardContent sx={{ width:{xl: '70vw', lg: '65vw', md: '55vw',sm:'40vw'}, display: 'flex',
        flexDirection: 'row', justifyContent:'space-between'}}>
    <p className="text-base text-white font-semibold text-xl text-left">{question.title}</p>
      
    </CardContent>

    <CardActions disableSpacing    sx={{m:'auto', width:'3vw', marginX:'10px'}}>
     {question.expanded?   <RemoveIcon sx={{ color: 'white', }}/>:  <AddIcon sx={{ color: 'white',  }}/>}
       
      
     
      {/* <p className="text-base text-white font-semibold">
        See More
      </p> */}
    </CardActions>
  
    
    </ExpandMore> 
    <Collapse in={question.expanded} timeout="auto" unmountOnExit>
   
      <CardContent>
   
      <p className="text-base text-white  mx-2 align-text-top"> {question.description}</p>
     
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
