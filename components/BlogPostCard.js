import Link from 'next/link'

const BlogPostCard = props => (
        <div className="cardContainer">
            <style jsx>{`
                .cardContainer{
                    padding-left:20px;
                    padding-right:20px;
                    margin: 20px;
                    display:flex;
                    flex-direction: column;
                    width:370px;
                    border: 1px solid #aaa;
                    border-radius: 10px;
                    text-decoration:none;
                }
                a{
                    text-decoration:none;
                    color: #000;
                    max-width: 350px;
                    max-height: 350px;
                }
                .imageLink{
                    margin: 0 auto;
                    width:300px;
                    height:200px;
                    text-align: center;
                    vertical-align: bottom;
                }
                img{
                    max-width:300px;
                    max-height:200px;
                    border-radius:5px;
                    margin: 0 auto;
                    
                }
                h2{
                    text-align:center;
                }
                p{
                    padding:0px;
                    margin:10px;
                    margin-left: 30px;
                }
                .date{
                    color:#888;
                }
                .desc{
                    padding-bottom:24px;
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
