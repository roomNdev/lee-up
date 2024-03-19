import styled from 'styled-components';

export const AboutSectionStyles = styled.div`
    /* margin-top: 5vh; */
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
        .title {
            margin-top: 80px;
            margin-bottom: 40px;
            font-size: 30px;
            font-weight: 800;
            color: var(--text-1);
            text-align: center;
        }
        .bio__container{
            width: 65%;
            /* display: flex; */
            align-items: center;
            justify-content: center;
            position: relative;
            .text__wrapper {
                p {
                    flex-direction: row-reverse;
                    /* display: flex; */
                    justify-content: center;
                    align-items: center;
                }
            }
            .bio__image {
            float: right;
            margin: 15px;
            margin-left: 30px;
            overflow: visible;
            min-width: 260px;
            max-width: 45%;
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
    @media (max-width: 600px) {
        .bio__container {
            .text__wrapper{
                p {
                    display: flex;
                    flex-direction: column;
                    text-align: justify;
                }
            }
            .bio__image{
                min-width: 250px;
            }
        }
    }
}
`