import React, { useEffect, useState } from 'react'
import { Title } from '../typography/Title'
import { InstagramSectionStyles } from '../../styles/homePage/InstagramSectionStyles';

export const getStaticProps = async () => {

  
    console.log(feed);
    return {feed}
  }
  

const InstagramSection: React.FC<{}> = () => {
    const url = `https://graph.instagram.com/me?fields=id,username&access_token=IGQWROc3d2aEd1WldycktPNU81QkllMTVFTkZAfRzlqN2pDNmZAMMXh0Y2JqdkNLNjRNNUMySVlLVm50ZAkRpQjZAfVXUtNk9SWW5YSm1oTGtMWWtSd01XbWF5aXJxSnExZAnhyRUk1eWxxNm5QN0hhOGxPSXlXV2h6Y0EZD`
    const [feed, setFeed] = useState()
    useEffect(() => {
        const data = fetch(url)
            .then(res => res.json())
            .then(data => setFeed(data))
    }, [])

    return (
        <InstagramSectionStyles>
            <Title tag={"h2"}>Instagram</Title>
            <section className="container">
                {feed && 
                    <>
                        <p>
                            {/* {feed.username} */}
                            Aquí ira una preview del perfil de instagram   
                        </p>
                    </>
                }     
            </section>
        </InstagramSectionStyles>
    )
}

export default InstagramSection