import { BurgerButton } from "../Buttons/BurgerButton/BurgerButon"
import { Button } from "../Buttons/DefaultButton/Button"
import * as S from "./style"

export const WelcomeMessage = () => {
    return(
        <S.Container>
            <BurgerButton/>
            <S.MessageContainer>
                <h2>COMEÇE A CRIAR AGORA MESMO!</h2>
                <Button text="Criar novo gráfico" />
            </S.MessageContainer>
        </S.Container>
    )
}