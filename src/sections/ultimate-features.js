/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Feature from 'components/cards/feature';

import icon1 from 'assets/images/features/1.png';
import icon2 from 'assets/images/features/2.png';
import icon3 from 'assets/images/features/3.png';
import icon4 from 'assets/images/features/4.png';
import icon5 from 'assets/images/features/5.png';
import icon6 from 'assets/images/features/6.png';

const data = [
  {
    id: 1,
    icon: icon1,
    path: '#!',
    title: 'Experienced team',
    description: `We have a team of seasoned patent licensing experts, highly skilled in their domain.`,
  },
  {
    id: 2,
    icon: icon2,
    path: '#!',
    title: 'Global reach',
    description: `We have a global reach and can help you license your patents to companies all over the world.`,
  },
  {
    id: 3,
    icon: icon3,
    path: '#!',
    title: 'Customizable services',
    description: `We offer customizable services that can be tailored to your specific needs.
    `,
  },
  {
    id: 4,
    icon: icon4,
    path: '#!',
    title: 'Transparent fees',
    description: `Experience fee transparency with our value-based pricing, tailored to your patent's worth.
    `,
  },
  {
    id: 5,
    icon: icon5,
    path: '#!',
    title: 'Commitment to results',
    description: `We are committed to helping you achieve your goals and make your dreams a reality.
    `,
  },
  {
    id: 6,
    icon: icon6,
    path: '#!',
    title: 'Personalized attention',
    description: `We provide personalized attention to each of our clients and work with them every step of the way.`,
  },
];

const UltimateFeatures = () => {
  return (
    <section id="features" sx={styles.section} style={{"background-color":"#000000"}}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          slogan="Ideal solutions for you"
          title="Go beyond ultimate features"
        />
        <Box sx={styles.grid}>
          {data?.map((item) => (
            <Feature className="feature-item boxClass" key={item.id} data={item} />
          ))}
        </Box>
        
       
      </Container>
    </section>
  );
};

export default UltimateFeatures;

const styles = {
  section: {
    backgroundColor: '#F9FBFD',
    pt: [8, null, null, 12, null, 10],
    pb: [9, null, null, 12, 16, 18],
  },
  heading: {
    marginBottom: [7, null, null, 8, 7],
    p: {
      maxWidth: 490,
      margin: ['10px auto 0'],
    },
  },
  grid: {
    gap: [6, null, 0],
    display: 'grid',
    maxWidth: 1080,
    margin: '0 auto',
    gridTemplateColumns: [
      'repeat(1, 1fr)',
      null,
      null,
      'repeat(2, 1fr)',
      'repeat(3, 1fr)',
    ],
    borderTop: (t) => [null, null, `1px solid ${t.colors.borderColor}`],
    borderLeft: (t) => [null, null, `1px solid ${t.colors.borderColor}`],
   
  },
};
