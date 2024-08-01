/** @type {import('@eventcatalog/core/bin/eventcatalog.config').Config} */
export default {
  title: 'Crafter Hustle',
  tagline: 'Hustle your crafts',
  organizationName: 'Synadia Lab Demos',
  homepageLink: 'https://crafterhustle.dev',
  editUrl: '',
  // By default set to false, add true to get urls ending in /
  trailingSlash: false,
  // Change to make the base url of the site different, by default https://{website}.com/docs,
  // changing to /company would be https://{website}.com/company/docs,
  base: '/',
  // Customize the logo, add your logo to public/ folder
  logo: {
    alt: 'Crafter Hustle Logo',
    src: '/logo.png',
    text: 'Crafter Hustle'
  },
  docs: {
    sidebar: {
      // Should the sub heading be rendered in the docs sidebar?
      showPageHeadings: true
    }
  }
}
