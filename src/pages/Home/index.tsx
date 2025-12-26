import { HeroSection, HeroSectionContent, HeroSectionList, IconContainer, ListItem } from "./styles";
import coffeeImageHero from '../../assets/coffee-intro.png'
import { CoffeeIcon, PackageIcon, ShoppingCartIcon, TimerIcon } from "@phosphor-icons/react";

export function Home () {
    return (
        <HeroSection>
            <HeroSectionContent>
                <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
            
                <HeroSectionList>
                    <ListItem>
                        <IconContainer $iconColor='yellowDark'>
                            <ShoppingCartIcon 
                                size={16} 
                                weight="fill" 
                            />
                        </IconContainer>
                        <span>Compra simples e segura</span>
                    </ListItem>
                    <ListItem>
                        <IconContainer $iconColor='gray'>
                            <PackageIcon
                                size={16}
                                weight="fill"
                            />
                        </IconContainer>
                        <span>Embalagem mantém o café intacto</span>
                    </ListItem>
                    <ListItem>
                        <IconContainer $iconColor='yellow'>
                            <TimerIcon
                                size={16}
                                weight="fill"
                            />
                        </IconContainer>
                        <span>Entrega rápida e rastreada</span>
                    </ListItem>
                    <ListItem>
                        <IconContainer $iconColor='purple'>
                            <CoffeeIcon
                                size={16}
                                weight="fill"
                            />
                        </IconContainer>
                        <span>O café chega fresquinho até você</span>
                    </ListItem>
                </HeroSectionList>
            </HeroSectionContent>
            <img 
                src={coffeeImageHero} 
                alt="Copo de café cercado por grãos de café" 
            />
        </HeroSection>
    );
}