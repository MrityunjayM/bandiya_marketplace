import Layout from "components/layout";
import SEO from "components/seo";
import Banner from "sections/banner";
import Blog from "sections/blog";
import CustomerSupport from "sections/customer-support";
import Faq from "sections/faq";
import Pricing from "sections/pricing";
import Support from "sections/support";
import UltimateFeatures from "sections/ultimate-features";
import UserPricing from "sections/user-pricing";
import theme from "theme";
import { jsx,ThemeProvider } from "theme-ui";

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        
        {/* <SEO title="Agency Digital" description="Collection of free top of the line startup landing templates built using react/ next js. Free to download, simply edit and deploy! Updated weekly!" /> */}
      <SEO
          title="Marketplace of patent licencing"
          description="We help patent owners to monetize their intellectual property and bring their ideas to market. To achieve this goal, we work with companies of all sizes, from early stage startups to Fortune 500 companies."
        />
        <Banner />
        <UltimateFeatures />
        <CustomerSupport />
        <Pricing />
        <UserPricing />
        <Support />
        {/* <Clients /> */}
        <Blog />
        <Faq />
      </Layout>
    </ThemeProvider>
  );
}
