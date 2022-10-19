import Svg from "../public/404.svg"
import Link from "next/link"

export default function Custom404() {
    return (
        <div className="container">
            <h1>I&apos;m still working on this...</h1>
            <div className="img">
                <Svg />
            </div>
            <Link href="/">
                <h2>&#60;&#92; Back to home</h2>
            </Link>
            <style jsx>
                {`
                    .container {
                        min-height: 100vh;
                        max-width: 1280px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        flex-direction: column;
                        padding: 2rem;
                        margin: auto;
                    }
                    h1 {
                        font-size: 2rem;
                        margin-bottom: 5vh;
                    }
                    .img {
                        max-width: 50%;
                        max-height: 50%;
                    }
                    h2 {
                        text-decoration: none;
                        color: inherit;
                        cursor: pointer;
                    }
                `}
            </style>
        </div>
    )
}
