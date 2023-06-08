import Link from "next/link"
import * as S from "./style"

export const LinkComponent = ({link, info}) => {
    return(
        <S.Container>
            <Link href={link}>{info}</Link>
        </S.Container>
    )
}