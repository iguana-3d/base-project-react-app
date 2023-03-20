import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*,
*::before,
*::after {
   margin: 0;
   padding: 0;
   box-sizing: inherit;
}

html {
   box-sizing: border-box;
   font-size: 62.5%; // 1 Rem === 10px
   @media ${(props) => props.theme.medias.laptopSmall} {//1024px
      font-size: 56.25%;//9px = 9/16 * 100
   }
   @media ${(props) => props.theme.medias.tablet} {//768px
      font-size: 50%;//8px = 8/16 * 100
   }
   @media ${(props) => props.theme.medias.mobile} {//600px
      font-size: 43.75%;//7px = 7/16 * 100
   }
}

body {
   font-family: 'Inter', sans-serif;
   font-weight: ${(props) => props.theme.typeFaceWeight.regular};
   font-size: 1.6rem;
   line-height: 1.6;
   background-image: url('/static/images/background.jpg');
   background-attachment: fixed;
   background-size: cover;
   background-position: center;
}

h1 {
   font-family: 'Inter', sans-serif;
   font-size: 4.8rem;
   font-weight: ${(props) => props.theme.typeFaceWeight.semiBold};
   color: ${(props) => props.theme.pallete.colors.text.primary};
   line-height: 4rem;
}

h2 {
   font-family: 'Inter', sans-serif;
   font-size: 3.2rem;
   font-weight: ${(props) => props.theme.typeFaceWeight.semiBold};
   color: ${(props) => props.theme.pallete.colors.others.gray[11]};
   line-height: 3.4rem;
   margin-bottom: 1.6rem;
}

h3 {
   font-family: 'Inter', sans-serif;
   font-size: 2rem;
   font-weight: ${(props) => props.theme.typeFaceWeight.semiBold};
   color: ${(props) => props.theme.pallete.colors.text.primary};
   line-height: 2.4rem;
   margin-bottom: 0.8rem;
}

p {
   font-family: 'Inter', sans-serif;
   font-size: 1.6rem;
   font-weight: ${(props) => props.theme.typeFaceWeight.regular};
   color: ${(props) => props.theme.pallete.colors.others.gray[10]};
   line-height: 2.4rem;
}

span {
   font-family: 'Inter', sans-serif;
   color: ${(props) => props.theme.pallete.colors.others.gray[10]};
   font-size: 1.4rem;
}

#nprogress {
          pointer-events: none;
          
          & .bar {
            top: 0;
            left: 0;
            height: 3px;
            width: 100%;
            position: fixed;
            z-index: 20;
            background-color: ${(props) =>
              props.theme.pallete.colors.primary.main};
            box-shadow: 0 0 .5rem ${(props) =>
              props.theme.pallete.colors.primary.main};
          }
          & .peg {
            right: 0;
            opacity: 1;
            width: 100%;
            height: 100%;
            display: block;
            position: absolute;
            transform: rotate(0deg) translate(0px, 0px);
            box-shadow: 0 0 0 ${(props) =>
              props.theme.pallete.colors.primary.main},
             0 0 0 ${(props) => props.theme.pallete.colors.primary.main};
          }
         }
`;
