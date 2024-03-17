import styled from 'styled-components';

export default styled.div`
    .image__wrapper{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 16px;
        margin-bottom: 10vh;
        overflow: visible;
        .left, .right {
        max-width: 400px;
            width: 100%;
        }
    }
    .left__image{
        &::before{
            top: 5%;
            left: -5%;
        }
    }
    .right__image{
        &::before{
            top: 5%;
            left: 5%;
        }
    }
    .left__image, .right__image{
        width: 100%;
        overflow: visible;
        position: relative;
        &::before {
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            z-index: -1;
            border-radius: 16px;
            background-color: var(--primary-light-blue);
            }
        img {
        border-radius: 16px;
        }
    }
    .right__image {
        margin-top: 10vh;
    }
    .title {
        color: var(--text-1);
        font-size: 48px;
        margin-bottom: 30px;
        text-align: center;
    }
    .form {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    input,textarea {
        padding-block: 10px;
        padding-left: 30px;
        font-size: 20px;
        border: 0;
        border-radius: 4px;
    }
    input[type="submit"] {
        width: 100%;
        padding-inline: 0;

        cursor: pointer;
        background-color: var(--primary-light-blue);
        text-align: center;
    }
    textarea{
        height: 140px;
    }
    .label {
        color: var(--text-1);
        text-align: center;
        font-size: 14px;
    }
    .info {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        gap: 10px;
        input {
            width: 50%;
        }
    }
    .maps {
        margin-top: 10vh;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
    .mapouter {
        position: relative;
        text-align: right;
        width: 100%;
        height: 100%;
        max-width: 600px;
        max-height: 600px;
        aspect-ratio: 1;
        /* height: 100%; */
    }
    #gmap_canvas{
        max-width: 600px;
        max-height: 600px;
    }
    .gmap_canvas{
        overflow: hidden;
        background: none !important;
        width: 100%;
        height: 100%;
        /* aspect-ratio: 1; */
    }
    @media only screen and (max-width: 768px) {
        .title{
            font-size: 3rem;
        }
    }
`;
