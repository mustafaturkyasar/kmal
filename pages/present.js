import Layout from "../components/Layout";
import Header from "../components/Header";
import Head from "next/head";
import Link from "next/link";

export default function present(query) {
    return (
        <Layout>
            <Head>
                <script src="/js/custom.js"></script>

            </Head>
            <div className="super_container">

                <Header id={query.query.id}></Header>

                <div className="home">
                    <div className="hero_slider_container">
                        <div className="hero_slider owl-carousel">

                            <div className="hero_slide">
                                <div
                                    className="hero_slide_background"
                                    style={{
                                        backgroundImage:
                                            "url(" +
                                            "https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" +
                                            ")",
                                        backgroundPosition: "center",
                                        backgroundSize: "cover",
                                        backgroundRepeat: "no-repeat",
                                    }}
                                />
                                <div className="hero_slide_container d-flex flex-column align-items-center justify-content-center">
                                    <div className="hero_slide_content text-center">
                                        <h1
                                            data-animation-in="fadeInUp"
                                            data-animation-out="animate-out fadeOut"
                                        >
                                            Uzaktan Özel <span>Matematik</span> dersleri!
                                        </h1>
                                    </div>
                                </div>
                            </div>

                            <div className="hero_slide">
                                <div
                                    className="hero_slide_background"
                                    style={{
                                        background: "url('/images/slider_background.jpg')",
                                    }}
                                />
                                <div className="hero_slide_container d-flex flex-column align-items-center justify-content-center">
                                    <div className="hero_slide_content text-center">
                                        <h1
                                            data-animation-in="fadeInUp"
                                            data-animation-out="animate-out fadeOut"
                                        >
                                            Öğrenci Koçluğu ve <span>Matematik</span> Özel Ders!
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="hero_slider_left hero_slider_nav trans_200">
                            <span className="trans_200">geri</span>
                        </div>
                        <div className="hero_slider_right hero_slider_nav trans_200">
                            <span className="trans_200">ileri</span>
                        </div>
                    </div>
                </div>

                <div className="hero_boxes">
                    <div className="hero_boxes_inner">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4 hero_box_col">
                                    <div className="hero_box d-flex flex-row align-items-center justify-content-start">
                                        <img src="/images/earth-globe.svg" className="svg" alt="" />
                                        <div className="hero_box_content">
                                            <h2 className="hero_box_title">Matematik Özel Ders</h2>
                                            <Link href={`/MatematikDers?id=${query.query.id}`}>

                                                <a href="courses.html" className="hero_box_link">
                                                    Detaylar
                                                </a>

                                            </Link>

                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 hero_box_col">
                                <div className="hero_box d-flex flex-row align-items-center justify-content-start">
                                    <img src="/images/books.svg" className="svg" alt="" />
                                    <div className="hero_box_content">
                                        <h2 className="hero_box_title">
                                            Uzaktan Canlı Matemetik Özel Ders
                                        </h2>

                                        <Link href={`/UzaktanCanliDers?id=${query.query.id}`}>
                                            <a href="" className="hero_box_link">Detaylar</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                                <div className="col-lg-4 hero_box_col">
                                    <div className="hero_box d-flex flex-row align-items-center justify-content-start">
                                        <img src="/images/professor.svg" className="svg" alt="" />
                                        <div className="hero_box_content">
                                            <h2 className="hero_box_title">Koçluk Sistemi</h2>
                                            <Link href={`/KoclukSistemi?id=${query.query.id}`}>
                                                <a href="" className="hero_box_link">Detaylar</a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

present.getInitialProps = async ({ req, query }) => {
    // const res = await fetch('/api/files')

    return { stars: 'json', user: 'json2' ,query};
};
