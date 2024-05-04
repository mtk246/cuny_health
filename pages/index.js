import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faComputer, faRobot } from "@fortawesome/free-solid-svg-icons";
import ChatbotPopup from "./chatbot";

export default function Home() {
  return (
    <>
      <Head>
        <title>CUNYHealth</title>
        <meta name="description" content="CUNYHealth" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div className="container d-flex align-items-center justify-content-center w-100 rounded" style={{height: '70vh', backgroundColor: '#F0F4FC'}}>
            <div className="col-md-4 mx-auto mb-4 mb-sm-0 headline px-5">
                <span className="text-secondary text-uppercase">Forging Futures for </span>
                <h1 className="display-4 my-4 font-weight-bold">Empowering <span style={{ color: 'forestgreen' }}>Low-income Families</span></h1>
                <Link href="/resources" className="btn px-5 py-3 text-white mt-3 mt-sm-0" style={{ borderRadius: '30px', backgroundColor: 'forestgreen' }}>
                    Get Started using our Bot
                </Link>
                <p className="mt-4 text-muted">Using advanced algorithms, our platform provides tailored recommendations for optimal well-being, revolutionizing how users approach their diet and lifestyle choices...</p>
            </div>
            <div>
                <Image
                    src="/assets/images/features_bg.png"
                    alt="Picture of the author"
                    className="img-fluid"
                    width={500}
                    height={500}
                />
            </div>
        </div>
        <div
            className="d-flex align-items-center justify-content-center w-75 m-auto my-5 rounded border p-5"
        >
            <div className="d-flex align-items-center justify-content-center">
                <div>
                    <h1 className="text-success text-center display-1 p-4">
                        <FontAwesomeIcon icon={faComputer} />
                    </h1>
                </div>
                <div>
                    <h4>Get Nutrition Advise</h4>
                    <p className="text-muted">Tips for Saving Costs While Maintaining Nutritional Value</p>
                </div>
            </div>
            <div className="d-flex align-items-center justify-content-center">
                <div>
                    <h1 className="text-success text-center display-1 p-4">
                        <FontAwesomeIcon icon={faRobot} />
                    </h1>
                </div>
                <div>
                    <h4>Nutrition Chatbot</h4>
                    <p className="text-muted">Your Guide to Budget-Friendly, Nutrient-Rich Meals</p>
                </div>
            </div>
        </div>
        <div className="text-center my-5">
            <h3>Our Tracks</h3>
            <p className="text-muted">Get Your Meal Sorted: Easy Solutions for Quick and Delicious Dining.</p>
        </div>
        <div className="my-5 d-flex align-items-center justify-content-around">
            <div>
              <FontAwesomeIcon className="display-1 text-success" icon={faRobot} />
            </div>
            <div>
                <h2>Seamless support across channels</h2>
                <p className="text-muted">
                    Experience seamless support for nutritional and financial budgeting for meals across all channels. <br/>
                    Our AI-powered chatbot process automation to streamline your meal planning. Or, get started instantly<br/>with UltimateGPT, our new generative AI-powered bot for meal support.
                </p>
                <Link href="/resources" className="btn px-5 py-3 text-white mt-3 mt-sm-0" style={{ borderRadius: '30px', backgroundColor: 'forestgreen' }}>
                    Get Started using our Bot
                </Link>
            </div>
        </div>
        <ChatbotPopup />
    </div>
    </>
  );
}
