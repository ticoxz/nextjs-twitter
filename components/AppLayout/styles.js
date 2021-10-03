import css from 'styled-jsx/css'
import { colors, fonts, breakpoints } from "../../styles/theme"

import { addOpacityToColor } from "../../styles/utils"
const backgroundColor = addOpacityToColor(colors.primary, 0.3)


export const globalStyles = css.global`
     html,
     body {
        background-image:
         radial-gradient(${backgroundColor}, 1px, transparent 1px),
        radial-gradient(${backgroundColor} 1px, transparent 1px);
          background-position: 0 0, 25px 25px;
         background-size: 50px 50px;

        padding: 0;
        margin: 0;
        overflow: hidden;
         font-family: ${fonts}
     }
                    
     a {
        font-size: 24px;
        text-align: center;
        color: #09f;
        text-decoration: none;
        }
                    
     * {
         box-sizing: border-box;
         }
     textarea, input {
        font-family: ${fonts}
     }
`

export default css`
div {
    display:grid;
    place-items: center;
    height: 100vh;
}

main {
    background: #fff;
    box-shadow: 0 10px 25px rgba(0,0,0, .1);
    border-radius: 10px;
    height: 100%;
    position: relative;
    overflow-y: auto;
    width: 100%;
}
@media (min-width: ${breakpoints.mobile}) {
    main {
        height: 90vh;
        width: ${breakpoints.mobile}
    }
}
`
