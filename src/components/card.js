import styled from 'styled-components'
import { withReflex } from 'reflexbox'

const Card = styled.div`
    background-color: white;
    border-radius: 4px;
    border: solid 2px grey;
    padding: ${props => props.padding ? props.padding : '0px'
    };
`

export default withReflex()(Card)
