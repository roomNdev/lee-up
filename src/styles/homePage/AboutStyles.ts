import styled from 'styled-components';

export const AboutSectionStyles = styled.div`
        h2 {
        /* margin-top: 80px; */
            font-size: 40px;
            color: var(--gray);
            text-align: center;
            font-weight: 500;
        }
    .container {
        margin-top: 60px;
        display: flex;
        align-items: center;
        text-align: center;
        gap: 24px;
        position: relative;
        color: var(--gray);
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
        .groupal__image {
            min-width: 300px;
            max-width: 600px;
            position: relative;
            img {
                border-radius: 32px;
            }
            &::after {
                border-radius: 32px;
                width: 100%;
                max-width: 600px;
                min-height: 100%;
                content: "";
                position: absolute;
                z-index: -1;
                top: 5%;
                left: -5%;
                background-color: var(--primary-light-blue);
            }
        }
        
    }
    @media (max-width: 1000px) {
        h2 {
            font-size: 2.8rem;
        }
        .container {
        flex-direction: column;
            .groupal__image {
                margin-bottom: 10px;
            /* background-color: var(--primary-light-blue); */
            /* border-radius: 160px 32pxpx 32pxpx 160px; */
            img {
                border-radius: 32px;
            }
        }
    }
}
`