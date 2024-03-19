import React, { useEffect, useState } from 'react'
import { Title } from '../typography/Title'
import { InstagramSectionStyles } from '../../styles/homePage/InstagramSectionStyles';
import { Link } from 'gatsby';

export const getStaticProps = async () => {

  
    console.log(feed);
    return {feed}
  }
  

const InstagramSection: React.FC<{}> = () => {
    const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink&access_token=IGQWRQekk2RGhWV1NBNTRXY202a0R4Ykw2cnJOSkJOT3RHT241Smk1LWxiWEd3Skt4dDV3RnFJWXQyV2lpaERwcWVpemFhczExSlJGVkRDa0ExcGFwMHFBS3Jsdk94TVo2QnFLS2l2THg5T3VCNElkU0JpWjJfUm8ZD`
    const [feed, setFeed] = useState()
    useEffect(() => {
        const data = fetch(url)
            .then(res => res.json())
            .then(data => {
                setFeed(data)
            }
            )
        }, [])
        const urlProfile = `https://graph.instagram.com/me?fields=id,username&access_token=IGQWRQekk2RGhWV1NBNTRXY202a0R4Ykw2cnJOSkJOT3RHT241Smk1LWxiWEd3Skt4dDV3RnFJWXQyV2lpaERwcWVpemFhczExSlJGVkRDa0ExcGFwMHFBS3Jsdk94TVo2QnFLS2l2THg5T3VCNElkU0JpWjJfUm8ZD`
        const [profile, setProfile] = useState()
        useEffect(() => {
            const data = fetch(urlProfile)
                .then(res => res.json())
                .then(data => {
                    setProfile(data)
                }
                )
            }, [])
    

        
        console.log(feed);
        console.log(profile);
    return (
        <InstagramSectionStyles>
            <Title tag={"h2"}>Síguenos en instagram</Title>
            <section className="container">
                {feed && 
                    <>
                        {
                            feed.data.map((post, i) => {
                                if(post.media_type === "VIDEO" || i >= 6) {return}
                                return(
                                    <article className='post' key={post.id}>
                                        <a href={post.permalink} target='_blank' rel='noreferer'>
                                            <img src={post.media_url} alt={post.caption}></img>
                                            <p>{post.caption}</p>
                                        </a>
                                    </article>
                                )
                            })
                        }
                    </>
                }     
            </section>
            
            <a href={`https://www.instagram.com/${profile?.username}`} target='_blank' rel='noreferer'><h3>{profile && `@${profile.username}`}</h3></a>
        </InstagramSectionStyles>
    )
}

export default InstagramSection