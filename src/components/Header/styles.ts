import styled from 'styled-components';

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    width: 100%;
    max-width: 74rem; 
    margin: 2rem auto; 
    padding: 0 2rem;


    img {
        height: 2.5rem;
        width: 5.3095rem;
    }
`

export const ActionsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
`

export const LocationContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;

    background: ${props => props.theme['purple-light']};
    color: ${props => props.theme['purple-dark']};
    
    font-family: 'Roboto', sans-serif;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1,1375rem;

    padding: 0.5rem;
    border-radius: 6px;
`

export const CartButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0.5rem;
    gap: 0.25rem;

    border-radius: 6px;
    border: none;

    background: ${props => props.theme['yellow-light']};
    color: ${props => props.theme['yellow-dark']};
`