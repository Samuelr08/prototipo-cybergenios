import { Container, DetailsGroup } from "./styles";
import { Button } from "../Button";
import { Details } from "../Details";
import { detailsList } from "./details-const";

interface MustangProps {
    image: string
    title: string 
}


export function MustangCard({image,title}: MustangProps) {

    return(
        <Container>
          <h1>{title}</h1>
            <img src={image} width={228} height={171}/>
            <DetailsGroup>
                {
                    detailsList.map((item) => {
                        return <Details text={item.text} icon={item.icon}/>
                    })
                }
            </DetailsGroup>
            <Button/>
        </Container>
    )
}

