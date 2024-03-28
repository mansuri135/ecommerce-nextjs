import Layout from '../layouts/Main';
import PageIntro from '../components/page-intro';
import ProductsFeatured from '../components/products-featured';
import Footer from '../components/footer';


const IndexPage = () => {
  return (
    <Layout>
      <PageIntro />

      <ProductsFeatured />
      
      <Footer />
    </Layout>
  )
}


export default IndexPage