import { Container, DescriptionTitle,IconLogo,IconUser, Subtitles, } from "./styled";
import { Icon } from "@iconify/react";
import { DetailsIconEnum } from "../../models/enums/details-enums";


export function TopGround () {
    
    return (
        <Container>
            <Subtitles>   
                <Icon icon={DetailsIconEnum.log} style={{fontSize: '50px'}}/>       
                    <p>Home</p>
                    <p>Sobre</p> 
                    <p>Tabela</p> 
                    <p>Fale Conosco</p>  
                    <IconUser>
                        <p>Entrar </p>   
                        <Icon icon={DetailsIconEnum.user}/>
                    </IconUser>
            </Subtitles>
            <DescriptionTitle>
                    <h1>MUSTANG</h1>                
            </DescriptionTitle>                           
        </Container>

        
            
    )
}
