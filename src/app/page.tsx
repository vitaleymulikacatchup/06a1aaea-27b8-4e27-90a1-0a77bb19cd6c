'use client';
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import BillboardHero from '@/components/sections/layouts/hero/BillboardHero';
import TextboxStandard from '@/components/text/TextboxStandard';
import VerticalCardRoadmap from '@/components/sections/layouts/roadmap/VerticalCardRoadmap';
import CentralFAQ from '@/components/sections/layouts/faq/CentralFAQ';
import NumberGridTokenomics from '@/components/sections/layouts/tokenomics/NumberGridTokenomics';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: 'futuristicAndOutOfBox', colorTemplate: 2 }}>
      <div className='container mx-auto'>
        <section id='hero' className='relative'>
          <BillboardHero
            title='FuturaLens Portfolio'
            subtitle='Showcasing the art of futuristic photography.'
          />
        </section>
        <section id='about' className='py-12'>
          <TextboxStandard
            title={<h1 className='text-3xl font-bold'>About FuturaLens</h1>}
            description={<p className='text-lg'>FuturaLens captures the essence of futuristic aesthetics in photography. Offering prints and licensing, this portfolio showcases work inspired by sci-fi and modern design.</p>} 
          />
        </section>
        <section id='how-to-buy' className='py-12'>
          <VerticalCardRoadmap
            items={[
              { title: 'Step 1', description: 'Browse our collection.', image: '/images/placeholder1.avif' },
              { title: 'Step 2', description: 'Select your favorite prints.', image: '/images/placeholder2.avif' },
              { title: 'Step 3', description: 'Inquire about prints.', image: '/images/placeholder3.avif' },
            ]}
            title='How to Buy'
            className='my-6'
          />
        </section>
        <section id='tokenomics' className='py-12'>
          <NumberGridTokenomics
            title='Key Metrics'
            description='Our financial metrics reflect a commitment to quality.'
            kpiItems={[
              { value: '100+', description: 'Projects Completed' },
              { value: '5', description: 'Awards Won' },
              { value: '10', description: 'Years in Business' },
            ]}
          />
        </section>
        <section id='faq' className='py-12'>
          <CentralFAQ
            items={[
              { title: 'What services do you offer?', content: 'We provide high-quality prints and licensing for our photographs.' },
              { title: 'How do I inquire?', content: 'You can click on any print you like to get in touch.' },
              { title: 'Do you offer discounts?', content: 'Yes, bulk orders come with discounts.' },
              { title: 'What is your return policy?', content: 'We accept returns within 30 days of purchase.' },
            ]}
            heading='Frequently Asked Questions'
            lead='Find answers to your common queries here'
          />
        </section>
        <footer id='footer' className='py-6'>
          <div className='flex justify-between'>
            <span>© 2023 FuturaLens</span>
            <div className='flex space-x-4'>
              <a href='#hero'>Home</a>
              <a href='#about'>About</a>
              <a href='#how-to-buy'>How to Buy</a>
              <a href='#tokenomics'>Tokenomics</a>
              <a href='#faq'>FAQ</a>
            </div>
          </div>
        </footer>
      </div>
    </SiteThemeProvider>
  );
}