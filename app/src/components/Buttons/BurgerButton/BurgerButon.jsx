import { useContext, React } from "react"

import { MenuDisplayContext } from "@/context/MenuDisplay/MenuDispalyContext"

import * as S from "./style"

export const BurgerButton = () => {
    const { toggleDisplay } = useContext(MenuDisplayContext)
    //teste3
    
    return (
        <S.Container>
            <S.Button onClick={() => toggleDisplay()}>
                <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                    width="16.000000pt" height="16.000000pt" viewBox="0 0 128.000000 128.000000"
                    preserveAspectRatio="xMidYMid meet">

                    <g transform="translate(0.000000,128.000000) scale(0.100000,-0.100000)"
                        fill="#ffffff" stroke="none">
                        <path d="M135 1015 c-33 -32 -33 -78 0 -110 l24 -25 481 0 481 0 24 25 c16 15 25 36 25 55 0 19 -9 40 -25 55 l-24 25 -481 0 -481 0 -24 -25z"/>
                        <path d="M135 695 c-33 -32 -33 -78 0 -110 l24 -25 481 0 481 0 24 25 c16 15 25 36 25 55 0 19 -9 40 -25 55 l-24 25 -481 0 -481 0 -24 -25z"/>
                        <path d="M135 375 c-33 -32 -33 -78 0 -110 l24 -25 481 0 481 0 24 25 c16 15 25 36 25 55 0 19 -9 40 -25 55 l-24 25 -481 0 -481 0 -24 -25z"/>
                    </g>
                </svg>
            </S.Button>
        </S.Container>
    )
}