/** @type {import('@eventcatalog/core/bin/eventcatalog.config').Config} */
export default {
  title: 'Crafter Hustle',
  tagline: 'Manage your craft inventory, sales, and insights',
  organizationName: 'Synadia Lab Demos',
  homepageLink: 'https://crafterhustle.netlify.app',
  editUrl: '',
  // By default set to false, add true to get urls ending in /
  trailingSlash: false,
  // Change to make the base url of the site different, by default https://{website}.com/docs,
  // changing to /company would be https://{website}.com/company/docs,
  base: '/',
  // Customize the logo, add your logo to public/ folder
  logo: {
    alt: 'EventCatalog Logo',
    src: '/logo.png',
    text: 'Crafter Hustle'
  },
  landingPage: '/visualiser',
  docs: {
    sidebar: {
      // Should the sub heading be rendered in the docs sidebar?
      showPageHeadings: true
    }
  }
}
