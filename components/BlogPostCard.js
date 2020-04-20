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
                    border: 1px solid #00aa50;
                    border-radius: 10px;
                    text-decoration:none;
                }
            .cardContainer:hover{
                border: 1px solid transparent;
                border-image: linear-gradient(to bottom right, #b827fc 0%, #2c90fc 25%, #b8fd33 50%, #fec837 75%, #fd1892 100%);
                border-image-slice: 1;
                transition: border .2s, border-image .2s;
                border-image-radius: 10px;
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
                img:hover{
                    transition: left, top .5s;
                    transition: box-shadow, .5s; 
                    left:53%;
                    top:47%;
                    -webkit-box-shadow: -9px 10px 18px 0px rgba(0,0,0,0.75);
                    -moz-box-shadow: -9px 10px 18px 0px rgba(0,0,0,0.75);
                    box-shadow: -9px 10px 18px 0px rgba(0,0,0,0.75);
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
