import { Container, Text } from "./styles";
import {Icon} from "@iconify/react"

interface DetailsProps {
    text: string
    icon: string
}

export function Details ({icon, text}: DetailsProps) {
    return (
        <Container>
            <Icon icon={icon} style={{ fontSize: '49px' }}/> 
            <Text>{text}</Text>
        </Container>
    )
}