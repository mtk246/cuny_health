import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function HeaderComponent() {
    return (
        <div>
            <Head>
                <title>CUNYHealth</title>
                <meta name="description" content="FoodLink" />
                <link rel="icon" href="/assets/images/logo.png" />
            </Head>
            <nav className="navbar  navbar-expand-lg navbar-light top-navbar" data-toggle="sticky-onscroll">
                <div className="container">
                    <Link className="navbar-brand" href="/">
                        <h1>CUNYHealth</h1>
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav pull-right">
                            <li className="nav-item">
                                <Link className="nav-link active" href="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="/bmi">Nutrition Calculator</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="/foodbanks">Food Banks Locator</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}