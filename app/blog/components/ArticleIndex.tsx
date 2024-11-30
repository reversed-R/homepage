import styled from "styled-components";
//import ContentBlock from "../../ya-hp_vite/src/ContentBlock";


const Div = styled.div`
  margin: 100px 20px auto 80%;
  //padding: 20px;

  width: 16%;
  position: fixed;
  //top: 90px;
  padding: 0.5em 0.5em;

  z-index: 30;

  box-shadow: 0px 1px 5px rgb(144, 144, 144);
  border-radius: 10px;
  background-color: white;


  @media only screen and (max-width: 600px){
    display: none;
  }
`;


export default function ArticleIndex(){

  return (
    <Div>
      <p>#h1</p>
      <p>#h1</p>
      <p>#h1</p>
    </Div>
  );
}


