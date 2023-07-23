/** @jsxRuntime classic */
/** @jsx jsx */
import illustration from "assets/images/banner-bg.png";
import BandiyaBanner from "assets/images/Banner-transformed.jpeg"
import SubscriptionForm from "components/subscription-form";
import { rgba } from "polished";
import {jsx, Box, Container, Flex, Heading, Text } from "theme-ui";

const logos = [
  // {
  //   name: "Paypal",
  //   src: paypal
  // },
  // {
  //   name: "Google",
  //   src: google
  // },
  // {
  //   name: "Dropbox",
  //   src: dropbox
  // }
];

const Banner = () => {
  return (
    <Box as="section" id="home" sx={styles.section}>
      <Container>
        <Box sx={styles.contentWrapper}>
          <Box sx={styles.bannerContent}>
            <Heading as="h1">We're not just licensing patents. We're licensing the future.</Heading>
            <Text as="p">
              We help patent owners to monetize their intellectual property and bring their ideas to market. To achieve this goal, we work with companies of all sizes, from early stage startups to Fortune 500 companies.
              {/* We have a team of experienced
              patent licensing professionals who can help you every step of the way */}
            </Text>
            <SubscriptionForm sx={styles.subscriptionForm} />
            <Flex sx={styles.sponsoredBy}>
              {/* <Text as="span">Our clients</Text> */}
              {/* <Flex sx={styles.sponsor}>
                {logos?.map((logo, index) => (
                  <Flex as="figure" key={index}>
                    <Image src={logo.src} alt={logo.name} />
                  </Flex>
                ))}
              </Flex> */}
            </Flex>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Banner;

const styles = {
  section: {
    background: `transparent url(${BandiyaBanner}) no-repeat center top / cover`,
    // background: `transparent url(${illustration}) no-repeat center top / cover`,
    pt: [18, null, null, 17, null, null, 0],
    pb: [12, null, null, 12, 7, 11, 0]
  },
  contentWrapper: {
    gap: [null, null, null, null, 8, 15],
    display: ["block", null, null, null, "grid"],
    alignItems: "center",
    gridTemplateColumns: [null, null, null, null, "1fr 1fr", "530px 1fr"],
    minHeight: ["auto", null, null, null, "42vh", "81vh", "100vh"],
    pt: [null, null, null, 50, 0, null],
    "@media only screen and (min-width:1501px) and (max-width:1600px)": {
      pt: 14
    }
  },
  bannerContent: {
    maxWidth: [null, null, 450, "600px", null, "none"],
    m: [null, null, "0 auto", null, 0],
    textAlign: ["center", null, null, null, "left"],
    h1: {
      fontFamily: "headingAlt",
      fontSize: [9, null, null, 10, 12, 45, 16],
      lineHeight: [1.31, null, null, 1.5, null, 1.26],
      letterSpacing: [0, null, null, null, "-1.5px"],
      color: "textSecondary"
    },
    p: {
      fontSize: ["13px", null, null, 2, 3],
      lineHeight: [1.87, null, null, 2, null, 2.33],
      color: "textSecondary",
      maxWidth: [null, null, 370, 470],
      m: ["20px auto 0", null, null, null, "25px auto 0"]
    }
  },
  subscriptionForm: {
    maxWidth: [null, null, null, 470, "none"],
    m: ["30px 0 0", null, null, "30px auto", "35px 0 0"],
    input: {
      backgroundColor: "#FFFFFF",
      border: "0 none",
      fontFamily: "body",
      fontSize: [1, null, null, null, 2],
      px: [3, null, null, 5],
      boxShadow: "0px 16px 40px rgba(72, 59, 26, 0.08)",
      minHeight: [40, 50, null, null, null, 60],
      /* Chrome, Firefox, Opera, Safari 10.1+ */
      "::placeholder": {
        color: rgba("#02073E", 0.4),
        opacity: 1 /* Firefox */
      }
    },
    button: {
      fontSize: [0, 1, null, null, 2],
      minHeight: [40, 50, null, null, null, 60],
      px: ["18px", null, null, null, 6]
    }
  },
  sponsoredBy: {
    alignItems: "center",
    justifyContent: ["center", null, null, "flex-start"],
    maxWidth: [null, null, null, 470, "none"],
    m: ["30px 0 0", null, null, "30px auto", "35px 0 0"],
    span: {
      fontSize: ["13px", null, null, null, 2],
      lineHeight: 2.62,
      color: rgba("#566272", 0.6)
    }
  },
  sponsor: {
    alignItems: "center",
    figure: {
      ml: [2, null, null, null, 4, 5],
      img: {
        maxWidth: ["60px", null, null, null, "80px", "100%"]
      }
    }
  }
};
