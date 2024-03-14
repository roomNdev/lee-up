import styled from 'styled-components';

export const AboutSectionStyles = styled.div`
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 24px;
        position: relative;
        color: var(--gray);
        h1 {
            font-size: 40px;
        }
        p {
            font-size: 18px;
        }
        .text__wrapper{ 
            display: flex;
            gap: 24px;
            width: 80%;
            align-items: center;
            text-align: center;
            flex-direction: column;
        }
        /* .aside__image {
            position: absolute;
        } */
        
    }
`