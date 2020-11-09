import Layout from "../components/Layout";
import Header from "../components/Header";
import Head from "next/head";
import SideBar from "../components/SideBar";
import Footer from "../components/Footer";

export default function MatematikDers(query) {
  return (
    <Layout>
      <Head>
       
        <link
          rel="stylesheet"
          type="text/css"
          href="/styles/news_post_responsive.css"
        />
      </Head>
      <div className="super_container">
        {
          console.log(query.query)
        }
       <Header id={query.query.id}/>

        <div className="home">
          <div className="home_background_container prlx_parent">
            <div
              className="home_background prlx"
              style={{ backgroundImage: "url('/images/news_background.jpg')" }}
            />
          </div>
          <div className="home_content">
            <h1>Matematik Özel Ders</h1>
          </div>
        </div>

        <div className="news">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="news_post_container">
                  <div className="news_post">
                    <div className="news_post_image">
                      <img
                        src="images/matematik.jpeg"
                        alt="https://unsplash.com/@dsmacinnes"
                      />
                    </div>
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
                          <a
                            href="#top"
                            style={{ pointerEvents: "none", cursor: "default" }}
                          >
                            Matematik Özel Ders Nedir Nasıl Yapıyorum?
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="news_post_text">
                      <p>
                        Üniversiteden mezun olduğum 2001 yılından buyana
                        neredeyse her gün Matematik Özel Ders vermekteyim.
                        Üniversite Sınavı (TYT-AYT) ve Liselere Geçiş (LGS)
                        sınavında bu güne kadar ilk 100'de 11 farklı öğrencim
                        olup, 5. sınıf ile Üniversite Sınavına hazırlık
                        arasındaki seviyelere hitap etmekteyim.{" "}
                      </p>
                    </div>

                    <div className="news_post_quote">
                      <p className="news_post_quote_text">
                        <span>İTÜ </span>"Matematik", Helsinki Üniversitesi
                        "Kişiye Özel Eğitim Teknikleri" Yüksek Lisansı, Başkent
                        Üniversitesi " Öğrenci Koçluğu" eğitimlerini almış
                        bulunuyorum.
                      </p>
                    </div>

                    <p className="news_post_text" style={{ marginTop: 50 }}>
                      Derslerimiz eğlenceli ve dolu dolu geçiyor. Kısaca konu
                      anlatımı ve hemen ardından bol soru çözümü yapıp; soru
                      çözerken konunun detaylarına dokunmayı tercih ediyorum.
                      Diğer ders başında öğrencimin yapamadığı soruları çözüp,
                      derse devam ediyorum. Öğrencilerimde her konuda işlem
                      yapma becerisini geliştirip ardından muhakeme sorularına
                      ve marjial sorulara geçiyorum. Sınavda çıkan ve çıkması
                      muhtemel unsurlara daha çok zaman ayırıyorum.{" "}
                    </p>

                    <p className="news_post_text" style={{ marginTop: 50 }}>
                      Derslerimize başlamadan önce ön görüşme yapıyoruz ve pek
                      çok detayı konuştuğumuz bu ön görüşme sırasında öğrencinin
                      durumuna bakıyorum. Ardından diğer mevcut veya ders
                      talebinde bulunan öğrencilerimi inceleyerek, öğrencimizin
                      kendi bilgi seviyesine, öğrenme gücüne çok yakın olan aynı
                      zamanda da mümkün olduğu kadar mizacına uygun
                      öğrencilerden oluşan 4 kişilik Özel Ders Grubu
                      oluşturuyorum. Haftalık ders zamanı konusunda ortak
                      noktayı bulup, derslere başlıyoruz.{" "}
                    </p>

                    <p className="news_post_text" style={{ marginTop: 50 }}>
                      Ders sırasında öğrencime not tutturmuyorum, ders sonunda
                      tahta görsellerini çıktı olarak veriyorum. İşlediğimiz her
                      nüansı ve ödevlerini, sizlerle yapacağımız ön görüşmemizde
                      detaylıca bahsedeceğim "48 Saat Tekrarı", "Süreli Soru
                      Çözüm Tekniği", "Evde Takılmama" çalışmalarına uygun
                      şekilde yapmasını istiyorum. Ve inanın ki, başarı geliyor.
                      Öğrencimin söylenileni uygulaması yeterli oluyor.{" "}
                    </p>

                    <p className="news_post_text" style={{ marginTop: 50 }}>
                      Halihazırda her Matematik Özel Ders öğrencim, başarısı
                      yıllar boyunca test edilmiş ve detaylı geliştirmeler
                      sonucunda oluşturulmuş Kemal Balta Koçluk Sisteminin her
                      detayından faydalanmaktadır.  {" "}
                    </p>
                  </div>
                </div>
              </div>

              <SideBar id={query.query.id} />
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </Layout>
  );
}

MatematikDers.getInitialProps = async ({ req, query }) => {
  // const res = await fetch('/api/files')

  return {query};
};
