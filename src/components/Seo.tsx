// src/components/Seo.tsx
import { Helmet } from 'react-helmet-async';

type SeoProps = {
  title: string;
  description: string;
  imageUrl?: string;
};

const Seo = ({ title, description, imageUrl }: SeoProps) => {
  const siteName = "Lucian Talu Mayabi Portfolio";
  const fullTitle = `${title} | ${siteName}`;
  // Note: For the image, you'll need a full URL after deploying.
  // For now, we can use a placeholder or leave it relative.
  const fullImageUrl = imageUrl || '/lucian-social-card.png'; // A social sharing image you create

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      
      {/* Open Graph / Facebook / LinkedIn */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:image" content={fullImageUrl} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
    </Helmet>
  );
};

export default Seo;