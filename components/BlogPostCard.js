import Link from 'next/link'

const BlogPostCard = props => (
        <div className="cardContainer">
            <style jsx>{`
            .cardContainer{
                    margin: 20px;
                    display:flex;
                    flex-direction: column;
                    align-items:center;
                    max-width:300px;
                    border: 1px solid #aaa;
                    border-radius: 10px;
                    text-decoration:none;
                }
                a{
                    text-decoration:none;
                    color: #000;
                    max-width: 350px;
                    max-height: 350px;
                    position: relative;
                }
                .imageLink{
                    margin: 0 auto;
                    width:300px;
                    height:200px;
                    text-align: center;
                    vertical-align: bottom;
                }
                img{
                    max-width:250px;
                    max-height:200px;
                    border-radius:5px;
                    margin: 0;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    margin-right: -50%;
                    transform: translate(-50%, -50%)
                    
                }
                h2{
                    text-align:center;
                }
                p{
                    padding:10px;
                    margin:10px;
                }
                .date{
                    color:#888;
                }
                .desc{
                    padding-bottom:24px;
                }

                @media screen and (max-width: 800px) {
                    h2{
                        padding: 0px;
                        margin: 0px;
                        padding-top:12px;
                    }
                    .cardContainer{
                        margin: 10px;
                        max-width:275px;
                        border: 1px solid #aaa;
                        border-radius: 10px;
                        text-decoration:none;
                    }
                    a{
                        text-decoration:none;
                        color: #000;
                        max-width: 250px;
                        max-height: 250px;
                    }
                    .imageLink{
                        margin: 0 auto;
                        width:225px;
                        height:150px;
                        text-align: center;
                        vertical-align: bottom;
                    }
                    img{
                        max-width:225px;
                        max-height:150px;
                        border-radius:5px;
                        margin: 0 auto;
                        
                    }
                    p{
                        padding:8px;
                        margin:8px;
                    }
                }
                `}

            </style>
            <Link href="/post/[slug]" as={`/post/${props.title}`}>
                <a><h2>{props.title}</h2></a>
            </Link>
            <Link href="/post/[slug]" as={`/post/${props.title}`}>
                <a className="imageLink"><img src={props.img} /></a>
            </Link>
            <p className="date"> Laget: {props.date}</p>
            <p className="desc">{props.desc}</p>
        </div>

);

export default BlogPostCard;
