import { useEffect } from "react";
import QuestionTabs from "@/components/faq/FullTabPanel";
import releaseImg from "@/assets/images/new_release.png";
import { useRouter } from 'next/router'
import SergeImage from "@/assets/images/SergeImage.png"

const FAQData = {
  
    collectors:
    {
      q1:{
       
      title: "What is Artboardz?",
      description: "The mint price for each Artboardz collections varies depending of factors including who the artist is, their location, the size of the collection and others",
      ref: "q1"
      },
      q2:{
        title: "What is Artboardz?",
        description: "The mint price for each Artboardz collections varies depending of factors including who the artist is, their location, the size of the collection and others",
        ref: "q2"
      },
  
     q3: {
        title: "What is Artboardz?",
      descriptionn: "The mint price for each Artboardz collections varies depending of factors including who the artist is, their location, the size of the collection and others",
      ref: "q3"
      },
      q4:{
        title: "What is Artboardz?",
        description: "The mint price for each Artboardz collections varies depending of factors including who the artist is, their location, the size of the collection and others",
        ref: "q4"
    },
      q5:{
        title: "What is Artboardz?",
        description: "The mint price for each Artboardz collections varies depending of factors including who the artist is, their location, the size of the collection and others",
        ref: "q5"
    },
    q6:{
      title: "What is Artboardz?",
      description: "The mint price for each Artboardz collections varies depending of factors including who the artist is, their location, the size of the collection and others",
      ref: "q6"
    }
    ,
      q7:{
        title: "What is Artboardz?",
        description: "The mint price for each Artboardz collections varies depending of factors including who the artist is, their location, the size of the collection and others",
        ref: "q7"
    }
    },
    creators:
    {
      q1:{
       
      title: "What is Artboardz?",
      description: "The mint price for each Artboardz collections varies depending of factors including who the artist is, their location, the size of the collection and others",
      ref: "q1"
      },
      q2:{
        title: "What is Artboardz?",
        description: "The mint price for each Artboardz collections varies depending of factors including who the artist is, their location, the size of the collection and others",
        ref: "q2"
      },
  
     q3: {
        title: "What is Artboardz?",
      descriptionn: "The mint price for each Artboardz collections varies depending of factors including who the artist is, their location, the size of the collection and others",
      ref: "q3"
      },
      q4:{
        title: "What is Artboardz?",
        description: "The mint price for each Artboardz collections varies depending of factors including who the artist is, their location, the size of the collection and others",
        ref: "q4"
    }
    }
  };

const QuestionDetails = () => {
  const router = useRouter()
  const { id } = router.query
  useEffect(() => {
    document.querySelector("#main-layout").scrollTop = 0;
  }, []);

  return (
    <>
      {/* <h1 className="text-2xl md:text-4xl font-medium tracking-wide text-center my-4 text-white font-Montserrat">
        Artboardz {id}
      </h1> */}
      <QuestionTabs
        collectors={FAQData.collectors}
        creators={FAQData.creators}
      />
    </>
  );
};

export default QuestionDetails;
