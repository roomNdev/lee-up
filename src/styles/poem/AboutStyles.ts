import styled from 'styled-components';

export const AboutSectionStyles = styled.div`
    margin-top: 10vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
        .title {
            margin-top: 80px;
            margin-bottom: 40px;
            font-size: 40px;
            color: var(--text-1);
            text-align: center;
        }
        .bio__container{
            width: 80%;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            .bio__image {
            float: right;
            margin: 10px;
            overflow: visible;
            min-width: 240px;
            max-width: 30%;
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
        
    /* .container {
        margin-top: 40px;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 24px;
        position: relative;
        color: var(--gray);
        p {
            font-size: 18px;
        }
        .creativa__description {
            width: 80%;
            margin-bottom: 10vh;
        }
        
    } */
    @media (max-width: 1000px) {
        .container {
        flex-direction: column-reverse;
            .groupal__image {
            /* background-color: var(--primary-light-blue); */
            /* border-radius: 160px 32pxpx 32pxpx 160px; */
            img {
                border-radius: 32px;
            }
        }
    }
}
`