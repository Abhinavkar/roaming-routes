import styled from 'styled-components';


 export const Container = styled.div`
 background-image:url('https://shimlahillsinternational.com/shi-sync/2016/04/Shimla-Hills-International.jpg');

 border-radius: 10px;
 box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
 position: relative;
 overflow: hidden;
 width: 678px;
 max-width: 100%;
 min-height: 400px;
 `;

 export const SignUpContainer = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
  left: 0;
  width: 50%;
  opacity: 0;
  z-index: 1;
  ${props => props.signinIn !== true ? `
    transform: translateX(100%);
    opacity: 1;
    z-index: 5;
  ` 
  : null}
 `;


 export const SignInContainer = styled.div`
 position: absolute;
 top: 0;
 height: 100%;
 transition: all 0.6s ease-in-out;
 left: 0;
 width: 50%;
 z-index: 2;
 ${props => (props.signinIn !== true ? `transform: translateX(100%);` : null)}
 `;

 export const Form = styled.form`
 background-color: #ffffff;
 display: flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 padding: 0 50px;
 height: 100%;
 text-align: center;
 `;

 export const Title = styled.h1`
 font-weight: bold;
 margin: 0;
 `;

 export const Input = styled.input`
 background-color: #eee;
 border: none;
 padding: 12px 15px;
 margin: 8px 0;
 width: 100%;
 `;


 export const Button = styled.button`
    border-radius: 20px;
    border: 1px solid white;
    background-color: lightblue;
    color: #ffffff;
    font-size: 12px;
    font-weight: bold;
    padding: 12px 45px;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: transform 80ms ease-in;
    &:active{
        transform: scale(0.95);
    }
    &:focus {
        outline: none;
    }
 `;
 export const GhostButton = styled(Button)`
 background-color: transparent;
 border-color: #ffffff;
 `;

 export const Anchor = styled.a`
 color: #333;
 font-size: 14px;
 text-decoration: none;
 margin: 15px 0;
 `;
 export const OverlayContainer = styled.div`
position: absolute;
top: 0;
left: 50%;
width: 50%;
height: 100%;
overflow: hidden;
transition: transform 0.6s ease-in-out;
z-index: 100;
${props =>
  props.signinIn !== true ? `transform: translateX(-100%);` : null}
`;

export const Overlay = styled.div`
background: #ff416c;
background: -webkit-linear-gradient(to right, #ff4b2b, #ff416c);
background: linear-gradient(to right, lightblue, #ff416c);
background-image:url('data:image/jpeg;base64,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');
background-repeat: no-repeat;
background-size: cover;
background-position: 0 0;
color: black;
position: relative;
left: -100%;
height: 100%;
width: 200%;
transform: translateX(0);
transition: transform 0.6s ease-in-out;
${props => (props.signinIn !== true ? `transform: translateX(50%);` : null)}
`;

 export const OverlayPanel = styled.div`
     position: absolute;
     display: flex;
     align-items: center;
     justify-content: center;
     flex-direction: column;
     padding: 0 40px;
     text-align: center;
     top: 0;
     height: 100%;
     width: 50%;
     transform: translateX(0);
     transition: transform 0.6s ease-in-out;
 `;

 export const LeftOverlayPanel = styled(OverlayPanel)`
   transform: translateX(-20%);
   ${props => props.signinIn !== true ? `transform: translateX(0);` : null}
 `;

 export const RightOverlayPanel = styled(OverlayPanel)`
     right: 0;
     transform: translateX(0);
     ${props => props.signinIn !== true ? `transform: translateX(20%);` : null}
 `;

 export const Paragraph = styled.p`
 font-size: 14px;
   font-weight: 100;
   line-height: 20px;
   letter-spacing: 0.5px;
   margin: 20px 0 30px
 `;