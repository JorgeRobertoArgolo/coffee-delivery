import styled from "styled-components";

export const HeroSection = styled.section`
    display: flex;
    gap: 3.5rem;
    
    width: 100%;
    min-height: 34rem;

    max-width: 74rem; 
    margin: 0 auto;
    padding: 5.75rem 2rem;

    img {        
        height: 22.5rem;
        width: 29.75rem;
        margin-top: 5.75rem;
    }
`

export const HeroSectionContent = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    h1 {
        color: ${props => props.theme['base-title']};
        font-family: 'Baloo 2', cursive;
        font-size: 3rem;
        font-style: normal;
        font-weight: 800;
        line-height: 3.9rem;

        margin-bottom: 1rem;
    }

    p {

        align-self: stretch;

        color: ${props => props.theme['base-subtitle']};
        font-family: 'Roboto', sans-serif;
        font-size: 1.25rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.625rem;
    }
`

export const HeroSectionList = styled.ul`
    display: grid;    
    grid-template-columns: repeat(2, auto);
    row-gap: 1.25rem;
    column-gap: 2.5rem;
    

    width: 35.4375rem;
    height: 5.25rem;

    margin-top: 4.125rem;

    list-style: none;

    span {
        color: ${props => props.theme['base-text']};
        font-family: 'Roboto', sans-serif;
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.625rem;
    }
`

export const ListItem = styled.li`
    display: flex;
    align-items: center;
    gap: 0.75rem;
`

/** Icons */
const ICON_COLORS= {
    yellowDark: 'yellow-dark',
    yellow: 'yellow',
    gray: 'base-text',
    purple: 'purple'
} as const;

interface IconContainerProps {
    $iconColor: keyof typeof ICON_COLORS;
}

export const IconContainer = styled.div<IconContainerProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    
    width: 2rem;
    height: 2rem;
    border-radius: 50%; // Deixa redondo

    background: ${props => props.theme[ICON_COLORS[props.$iconColor]]};
    color: ${props => props.theme['white']};    
`

