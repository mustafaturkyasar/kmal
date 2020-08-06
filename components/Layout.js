import Head from "next/head";

const Layout = props => (

    <div>
        <Head>

            <title>Kemal Balta</title>
            <link rel="stylesheet" type="text/css" href="/styles/bootstrap4/bootstrap.min.css"/>
            <link href="/plugins/fontawesome-free-5.0.1/css/fontawesome-all.css" rel="stylesheet" type="text/css"/>
            <link rel="stylesheet" type="text/css" href="/plugins/OwlCarousel2-2.2.1/owl.carousel.css"/>
            <link rel="stylesheet" type="text/css" href="/plugins/OwlCarousel2-2.2.1/owl.theme.default.css"/>
            <link rel="stylesheet" type="text/css" href="/plugins/OwlCarousel2-2.2.1/animate.css"/>
            <link rel="stylesheet" type="text/css" href="/styles/main_styles.css"/>
            <link rel="stylesheet" type="text/css" href="/styles/responsive.css"/>





            <script src="/js/jquery-3.2.1.min.js"></script>
            <script src="/styles/bootstrap4/popper.js"></script>
            <script src="/styles/bootstrap4/bootstrap.min.js"></script>
            <script src="/plugins/greensock/TweenMax.min.js"></script>
            <script src="/plugins/greensock/TimelineMax.min.js"></script>
            <script src="/plugins/scrollmagic/ScrollMagic.min.js"></script>
            <script src="/plugins/greensock/animation.gsap.min.js"></script>
            <script src="/plugins/greensock/ScrollToPlugin.min.js"></script>
            <script src="/plugins/OwlCarousel2-2.2.1/owl.carousel.js"></script>
            <script src="/plugins/scrollTo/jquery.scrollTo.min.js"></script>
            <script src="/plugins/easing/easing.js"></script>
            <script src="/js/custom.js"></script>
        </Head>
        {
            props.children
        }
    </div>
)
export default Layout
