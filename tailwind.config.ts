import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily:{
      helvetica: ["Helvetica", "sans-sherif"],
    },
    screens: {
      'sm': '360px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1920px',
    },
    extend: {
      letterSpacing:{
        "title": "0.06em",
        "homePageOrangeText": "0.02em",
        "homePageTitle": "0.04em",
        "menuItem": "0.08em",
        "sticky": "0.18em"
      },
      spacing:{
        "navbar": "71px",
        "stickySm":"57px",
        "stickyMd":"35px",
        "menuSmMobileHeight": "55px",
        "menuMdMobileHeight": "65px",
        "menuLgHeight": "70px",
        "dot": "25px"
      },
      container:{
        center: true,
      },
      fontSize: {
        //Menu and sticky bar
        "stickySm": ["9px", "11px"],
        "stickyMd": ["10px", "12px"],

        "menuItem": ["14px", "17px"],
        "menuItemSmall": "16px",

        //Tittle subtitle in header
        "title": ["32px", "38px"],
        "titleMd": ["26px", "38px"],
        "titleSm": ["20px", "19px"],
        "subtitle": "18px",
        "subtitleSm": ["14px", "15px"],

        //Big button
        "bigButtonPrefixSm": ["16px", "15px"],
        "bigButtonPrefixLg": ["18px", "15px"],

        "bigButtonTypeSm": ["30px", "31px"],
        "bigButtonTypeLg": ["32px", "31px"],

        "bigButtonPhraseSm": ["12px", "14px"],
        "bigButtonPhraseLg": ["14px", "16px"],

        //Boreal facts on home page
        "borealSm": ["38px", "32px"],
        "borealMd": ["50px", "50px"],
        "borealLg": ["56px", "26px"],
        "homePageTextOrangeSm": ["29px", "40px"],
        "homePageTextOrangeMd": ["42px", "46px"],
        "homePageTextOrangeLg": ["46px", "52px"],
        //Grid with titles and text
        "gridFactsTitleSm": ["21px", "25px"],
        "gridFactsTextSm": ["14px", "16px"],
        //Footer nav columns
        "bottomCollumnsTitleSm": ["20px", "20px"],
        "bottomCollumnsTitleLg": ["26px", "36px"],
        "bottomCollumnsTextSm": ["12px", "14px"],
        "bottomCollumnsTextLg": ["14px", "16px"],

        //Footer
        "footerStatsSm": ["25px", "29px"],
        "footerStatsLg": ["30px", "35px"],
        "footerStatsXl": ["40px", "35px"],
        "footerStatsTextSm": ["16px", "18px"],
        "footerStatsTextLg": ["20px", "24px"],
        "footerStatsTextXl": ["24px", "31px"],
        "footerNavLinks": ["14px", "28px"],
        "footerNavTitle": ["16px", "8px"],
        "footerCopyright": ["13px", "25px"],
        "footerInfolettreTitle": ["18px", "6px"],
        "footerInfolettreSubtitle": ["14px", "16px"],
        "footerSocialLinkTitle": ["16px", "6px"],

        //Infolettre
        "infolettreFormTextSm": ["9px", "10px"],
        "infolettreFormText": ["10px", "12px"],

        //Copyright Footer
        "copyrightFooterText": ["12px", "28px"],

        //Launch Modal
        "launchModalTitle": ["17px", "21px"],
        "launchModalText": ["13px", "16px"],
        "launchModalTextCallToAction": ["11px", "13px"],
        "launchModalTextPrevenir": ["16px", "19px"],

        //bottin card
        "cardTitle": ["16px", "12px"],
        "cardCritere": ["11px", "16px"],
        "cardServicesTitle": ["12px", "12px"]
      },
      colors:{
        "primary": "#006663",
        "lightGreen": "#68A4A2",
        "primary-800": "#172E2C",
        "primary-100": "#172E2C",
        "secondary-800": "#B34001",
        "secondary": "#FF6B1A",
        "lightSecondary": "#FFB68F",
        "secondary-pale": "rgba(255,107,26,0.3)",
        "white-pale": "rgba(255,255,255,0.5)",
        "beige": "#EFDEC2",
        "cyan": "#00B3AD",
        "cyan-light": "#47cec9"
      },
      borderRadius:{
        "5xl": "50px"
      }
    },
  },
  plugins: [],
}
export default config
