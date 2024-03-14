import styled from 'styled-components';

export default styled.div`
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
    }
    input[type="submit"] {
        width: 100%;
        cursor: pointer;
        background-color: var(--primary-light-blue);
    }
    textarea{
        height: 140px;
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
`;
