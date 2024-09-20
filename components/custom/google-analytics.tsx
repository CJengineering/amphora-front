import Script from "next/script";

const GoogleAnalyticsCustom = () => {
  return (
    <>
      <Script
       
        src={`https://www.googletagmanager.com/gtag/js?id=G-FZC53HN9TW`}
      />

      <Script id="googleAnalytics" >
        {`
             window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-FZC53HN9TW');
          `}
      </Script>
    </>
  );
};

export default GoogleAnalyticsCustom;
