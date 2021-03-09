import Layout from "../../components/Layout";
import Header from "../../components/Header"
import Head from "next/head";
import fetch from "isomorphic-unfetch";
import Link from "next/link";
import absoluteUrl from "next-absolute-url";
export default function Students({stars,files,query}) {
    return (
        <Layout>
            <Head>
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="/styles/news_post_styles.css"
                />
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="/styles/news_post_responsive.css"
                />
            </Head>
            <div className="super_container">
                <Header id={query.id}/>


                <div className="home">
                    <div className="home_background_container prlx_parent">
                        <div
    className="home_background prlx"
    style={{backgroundImage: "url('/images/news_background.jpg')"}}
    />
                    </div>
                    <div className="home_content">
                        <h1>Dosya Paylaşım Sistemi</h1>
                    </div>
                </div>

                <div className="">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="">
                                    <div className="">

                                        <div className="news_post_top d-flex flex-column flex-sm-row">
                                            <div className="news_post_date_container">
                                                <div className="news_post_date d-flex flex-column align-items-center justify-content-center">
                                                    <div>Kemal</div>
                                                    <div>Balta</div>
                                                </div>
                                            </div>
                                            <a name="#op"></a>
                                            <div className="news_post_title_container">
                                                <div className="news_post_title">
                                                    <a href="#top" style={{pointerEvents: 'none', cursor: 'default'}}>
                                                        Öğrenciye Ait Dosyalar
                                                    </a>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="news_post_text">
                                            <table className="table table-dark">
                                                <thead>
                                                <tr>
                                                    <th scope="col">#</th>
                                                    <th scope="col">Dosya Adı</th>
                                                    <th scope="col">Adı</th>
                                                    <th scope="col">İndirme Linki</th>
                                                </tr>
                                                </thead>
                                                <tbody>

                                                {stars.map((e, index) => (
                                                    <tr>
                                                        <th scope="row">{index + 1}</th>
                                                        <td>{e.aciklama}</td>
                                                        <td>{e.resimyol.slice(34)}</td>
                                                        <td>

                                                            <a href={'http://176.98.40.141/portal/' + e.resimyol}>
                                                                İndir
                                                            </a>

                                                        </td>
                                                    </tr>

                                                ))}

                                                </tbody>
                                            </table>

                                        </div>


                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">

                                <div className="sidebar">
                                    <div className="sidebar_section">
                                        <div className="sidebar_section_title">
                                            <h3 style={{marginTop:30}}>Dosya Tipleri</h3>
                                        </div>

                                        <ul className="sidebar_list">
                                            {files.map((e, index) => (
                                            <li className="sidebar_list_item">
                                                <Link  href={`/student/${query.id}?id=${query.id}&type=${e.id}`}>
                                                    <a href="">{e.aciklama}</a>
                                                </Link>
                                            </li>
                                            ))}




                                        </ul>
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

Students.getInitialProps = async ({ req,query }) => {
    // const res = await fetch('/api/files')
    const { protocol, host } = absoluteUrl(req, 'localhost:3000')


   let response ;

    if(!query.type)
    {

         response = await fetch( `${protocol}//${host}/api/student/files?id=${query.id}`);
    }
    else
    {

         response = await fetch(`${protocol}//${host}/api/student/filesbytype?id=${query.id}&type=${query.type}`);
    }


    const json = await response.json()
    const response2 = await fetch(`${protocol}//${host}/api/student/filetype`);
    const json2 = await response2.json()
    return { stars: json,files:json2,query }
}
