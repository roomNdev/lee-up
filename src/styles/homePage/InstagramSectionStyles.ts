import styled from 'styled-components';

export const InstagramSectionStyles = styled.div`
            /* width: 100%; */
            display: flex;
            /* background-color: var(--text-1); */
            justify-content: center;
            align-items: center;
            flex-direction: column;
        a {
        }
        h2 {
            font-size: 20px;
            color: var(--gray);
            text-align: center;
            margin-top: 160px;
            font-weight: 500;
        }
        h3 {
            margin-top: 10px;
            /* background-color: #fff; */
            color: var(--text-1);
            font-size: 20px;
            /* text-decoration: underline; */
        }
    .container {
            margin-top: 20px;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
            text-align: center;
            gap: 24px;
            position: relative;
        .post {
            display: flex;
            align-items: center;
            justify-content: center;
            transition: scale .5s;
            overflow: hidden;
            border-radius: 16px;
            background-color: var(--primary-light-blue);
            padding: 4px;
            width: 310px;
            cursor: pointer;
            img{
            border-radius: 16px;
                width: 300px;
                height: 300px;
            }
            &:hover{
                scale: 1.05;
            }
            p {
                color: var(--gray);
               overflow: hidden;
               font-size: 15px;
               display: -webkit-box;
               -webkit-line-clamp: 2; /* number of lines to show */
                       line-clamp: 2; 
               -webkit-box-orient: vertical;
               text-align: left;
               max-width: 310px;
               padding-left: 5px;
            }
        }

        
    }
    @media only screen and (max-width: 820px) {
    .container {
        .post {
            width: 150px;
            height: 200px;
            /* min-height: 200px; */
            padding: 10px;
            p {
                max-width: 150px;
            }
            img {
                width: 140px;
                padding: 4px;
                max-height: 150px;
            }
        }
    }
    
    @media only screen and (max-width: 640px) {
        .container{
            gap: 0;
            padding-block: 12px;
            border-radius: 16px;
            /* max-width: 85%; */
            background-color: var(--primary-light-blue);
            .post{
                height: 150px;
                border-radius: 0;
                /* padding-top: 2px; */
                p {
                display: none;
                }
                img{
                height: 140px;
                }
            }
        }
    }
    
    @media only screen and (max-width: 390px) {
        .container{
            .post{
                height: 110px;
                width: auto;
                p {
                display: none;
                }
                img{
                    width: 100px;
                    height: 100px;
                }
            }
        }
    }
  }
`