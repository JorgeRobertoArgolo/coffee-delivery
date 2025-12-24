import { MapPinIcon, ShoppingCartIcon } from '@phosphor-icons/react';
import logoCoffeeDelivery from '../../assets/logoCoffeeDelivery.svg'
import { ActionsContainer, CartButton, HeaderContainer, LocationContainer } from './styles';

export function Header () {
    return (
        <HeaderContainer>
            <img src={logoCoffeeDelivery} alt="Logo do Coffee Delivery" />
            <ActionsContainer>
                <LocationContainer>
                    <MapPinIcon size={32}/>
                    Irecê, BA
                </LocationContainer>
                <CartButton>
                    <ShoppingCartIcon size={32} />
                </CartButton>
            </ActionsContainer>
        </HeaderContainer>
    );
}