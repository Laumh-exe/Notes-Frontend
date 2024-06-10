import React, { useState } from "react";
import styled from "styled-components";

export default function About() {
  const [text] = useState("");

  return (
    <StyledDiv>
      <StyledH1>About Notes!</StyledH1>
      <StyledIntro>
        Welcome to Notes, here you can create a collective of your thoughts in
        the form of long and short form notes in an easy and secure way!
      </StyledIntro>
      <StyledUses>
        <StyledTitle>Features:</StyledTitle>
        <StyledList>
          <StyledListItems>Create and edit your notes</StyledListItems>
          <StyledListItems>Sort your notes into catagories</StyledListItems>
          <StyledListItems>
            Easy access and search for notes you want to find
          </StyledListItems>
          <StyledListItems>
            Have access to your notes from any device
          </StyledListItems>
        </StyledList>
      </StyledUses>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column; //Change to row for example
  flex-wrap: wrap;
  justify-content: space-between;
  
  padding: 30px 40px;
  min-height: 400px;
  max-width: 500px; // remove for example 
  min-width: 360px;
  margin: auto;
  margin-top: 10px;
  backdrop-filter: blur(100px);
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

const StyledH1 = styled.h1`
max-width: 500px;
  color: #333;
  text-align: center;
  font-weight: 500;
    //Example border
  border: 2px solid;

`;

const StyledIntro = styled.p`
max-width: 500px;
  color: #666;
  font-size: 18px;
  line-height: 1.6;
  text-align: center;
  //Example border
  border: 2px solid;
`;

const StyledUses = styled.div`
max-width: 500px;
    //Example border
  border: 2px solid;
`;

const StyledTitle = styled.h2`
  color: #e99139;
  margin-bottom: 15px;
`;

const StyledList = styled.ul`
  color: #666;
  font-size: 16px;
  line-height: 1.6;
`;

const StyledListItems = styled.li`
  margin-bottom: 10px;
`;
