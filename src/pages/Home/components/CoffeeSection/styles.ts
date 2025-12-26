import styled from "styled-components";

export const CoffeeSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 3.375rem;

    width: 100%;

    max-width: 74rem;
    margin: 0 auto;
    padding: 2rem 2rem 10rem 2rem;

    h1 {
        font-family: 'Baloo 2', cursive;
        font-size: 2rem;
        font-style: normal;
        font-weight: 800;
        line-height: 2.6rem;

        color: ${props => props.theme['base-title']};
    }  
`;

export const CoffeeListContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;

    width: 70rem;
`;

export const CoffeeCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 16rem;
    height: 19.375rem;
    background-color: ${props => props.theme['base-card']};
    border-radius: 0.375rem 2.25rem;

    img {
        width: 7.5rem;
        height: 7.5rem;
        flex-shrink: 0;

        margin-top: -1.25rem;
        margin-bottom: 1rem;
    }
`;

export const TagContainer = styled.div`
    display: flex;
    
    justify-content: center;
    align-items: center;

    gap: 0.25rem;
        
    margin-bottom: 1rem;

    span {
        background-color: ${props => props.theme['yellow-light']};
        color: ${props => props.theme['yellow-dark']};

        padding: 0.25rem 0.5rem;
        border-radius: 100px;

        font-family: 'Roboto', sans-serif;
        font-size: 0.625rem;
        font-style: normal;
        font-weight: 700;
        line-height: 0.813rem;
        text-transform: uppercase;
    }
`;

export const CoffeeTitle = styled.div`
    font-family: 'Baloo 2', cursive;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.625rem;

    max-width: 13.5rem;

    color: ${props => props.theme['base-subtitle']};

    margin-bottom: 0.5rem;
`;

export const CoffeeDescription = styled.div`
    font-family: 'Roboto', sans-serif;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.137rem;

    color: ${props => props.theme['base-label']};
    text-align: center;

    max-width: 13.5rem;
`;


export const CoffeeBuyContainer = styled.div`
    display: flex;
    max-width: 13rem;
    justify-content: space-between;
    align-items: center;

    margin-top: 1.4rem;
`;

export const CoffeePrice = styled.div`
    font-family: 'Roboto', sans-serif;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.137rem;

    color: ${props => props.theme['base-text']};

    strong {
        font-family: 'Baloo 2', cursive;
        font-size: 1.5rem;
        font-style: normal;
        font-weight: 800;
        line-height: 1.137rem;
    }
`

export const CoffeeActions = styled.div`
    display: flex;
    height: 2.375rem;
    padding: 0.5rem;
    
    gap: 0.5rem;
`

export const IconContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    color: ${props => props.theme['purple-dark']};
`

export const QuantityInputContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;

    background-color: ${props => props.theme['base-button']};

    border-radius: 6px;
    padding: 0.5rem;
`

export const AddToCartButton = styled.button`
    background-color: ${props => props.theme['purple-dark']};
    color: ${props => props.theme['white']};

    border: 1px solid transparent;
    border-radius: 6px;

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 0.5rem;
`

