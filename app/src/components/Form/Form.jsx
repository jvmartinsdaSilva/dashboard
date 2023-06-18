import { LinkComponent } from '../LinkComponent/LinkComponent'

import * as S from './style.js'

const Form = ({title, children, link, ...rest}) => { 
    return(
        <S.Container {...rest}>
            <S.Header>
                <S.Title>{title}</S.Title>
                {link && <LinkComponent link={link.toGo} info={link.info}/>}
            </S.Header>
            {children}
        </S.Container>
    )
}

export default Form