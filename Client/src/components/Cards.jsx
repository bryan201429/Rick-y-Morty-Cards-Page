import Card from './Card';
import styled from 'styled-components';

const Cartas=styled.div`
padding: 20px;
margin-bottom: 20px;
display:grid;
grid-template-columns:1fr 1fr 1fr 1fr;
column-gap: 5vw;
row-gap: 70px;

max-width: 90vw;
justify-items:center;
`

export default function Cards(props) {

   const lista=  props.characters?.map(element=>{
      return(
         
            <Card 
            key={element.id}      //React lo usa internamente para diferenciar elementos con la misma plantilla             
            id={element.id}
            name={element.name}
            status={element.status}
            species={element.species}
            gender={element.gender}
            origin={element.origin.name}
            image={element.image}
            onClose={props.onClose} >
            </Card>    
      )
   })

   return <Cartas>{lista}
   </Cartas>;
}
