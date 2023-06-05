import * as S from './style.js'

const Form = ({title, children}) => {
    
    return(
        <S.Container>
            <h2>{title}</h2>
            {children}
        </S.Container>
    )
}

export default Form