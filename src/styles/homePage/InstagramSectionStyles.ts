import styled from 'styled-components';

export const InstagramSectionStyles = styled.div`
        h2 {
            font-size: 40px;
            color: var(--gray);
            text-align: center;
            margin-top: 160px;
        }
    .container {
            margin-top: 40px;
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
            max-width: 600px;
            padding: 40px 0px 40px 40px;
            background-color: var(--primary-light-blue);
            border-radius: 160px 200px 200px 160px;
            img {
                border-radius: 120px;
            }
        }
        
    }
`