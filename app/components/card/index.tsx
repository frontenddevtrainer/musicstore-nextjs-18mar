import styled from "styled-components";

interface CardProps {
    primary? : boolean
}

const Card = styled.div<CardProps> `
    background-color: ${ (props) => props.primary ? 'blue' : 'green' };
    color: white;
    border-radius : 8px;
    margin: 10px;
`


// const Card = ({ children }: { children: React.ReactNode }) => {
//   return <div className="rounded bg-slate-300 border border-cyan-200 m-10">{children}</div>;
// };


export default Card