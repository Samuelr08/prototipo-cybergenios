import { Container, DescriptionTitle, IconUser, HeaderItems } from "./styles";
import { Icon } from "@iconify/react";
import { DetailsIconEnum } from "../../models/enums/details-enums";
import { useWindowSize } from "../../hooks/useWindowSize";
import { useState } from "react";


export function Header() {
    const { width } = useWindowSize()
    const [isOpen, setIsOpen] = useState(false)

    return (
        <Container>
            <>
                <Icon
                    icon="charm:menu-hamburger"
                    style={{ fontSize: '48px', color: '#EBEFF2', margin: '24px', display: width && width <= 768 ? "initial" : "none" }}
                    onClick={() => setIsOpen(true)}
                />
                <HeaderItems style={{ transform: isOpen ? "translate(0)" : "" }}>
                    <Icon
                        icon={DetailsIconEnum.log}
                        style={{ fontSize: '48px' }}
                    />
                    {
                        width && width > 768 ? null : <Icon
                        icon="akar-icons:cross"
                        style={{ fontSize: '16px', position: "absolute", right: "16px", top: "16px", cursor: "pointer" }}
                        onClick={() => setIsOpen(false)}
                    />
                    }
                    <a>Home</a>
                    <a>Sobre</a>
                    <a>Tabela</a>
                    <a>Fale Conosco</a>
                    <IconUser>
                        <a>Entrar</a>
                        <Icon icon={DetailsIconEnum.user} style={{ fontSize: '24px' }} />
                    </IconUser>
                </HeaderItems>
                <DescriptionTitle>
                    <h1>MUSTANG</h1>
                </DescriptionTitle>

            </>
        </Container>
    )
}
