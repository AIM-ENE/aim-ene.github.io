// @ts-check

const path = require('path');

const config = {
  title: 'Software Engineering S2: Exploration and Elaboration',
  tagline: 'ENE semester startpagina',
  url: 'https://aim-ene.github.io',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  organizationName: 'AIM-ENE',
  projectName: 'aim-ene.github.io',
  i18n: {
    defaultLocale: 'nl',
    locales: ['nl'],
  },
  staticDirectories: [
    'static',
    'courses/doex/studenten/static',
    'courses/teex/studenten/static',
    'courses/soex/studenten/static',
    'courses/pexe/studenten/static',
  ],
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
      onBrokenMarkdownImages: 'warn',
    },
  },
  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'doex',
        path: path.join(__dirname, 'courses/doex/studenten/docs'),
        routeBasePath: 'doex',
        sidebarPath: path.join(__dirname, 'courses/doex/studenten/sidebars.js'),
        exclude: [
          // TODO(brightspacosaurus): shared components are missing in root build.
          // Exclude docs that import FontAwesome or ToggleShortcut until shared pkg exists.
          '**/week-2/les-2/02-Lesprogramma/Criteria.mdx',
          '**/week-4/les-1/02-Lesprogramma/02-Lesprogramma.mdx',
        ],
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'teex',
        path: path.join(__dirname, 'courses/teex/studenten/docs'),
        routeBasePath: 'teex/docs',
        sidebarPath: path.join(__dirname, 'courses/teex/studenten/sidebars.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'soex',
        path: path.join(__dirname, 'courses/soex/studenten/docs'),
        routeBasePath: 'soex',
        sidebarPath: path.join(__dirname, 'courses/soex/studenten/sidebars.js'),
        exclude: [
          // TODO(brightspacosaurus): shared components are missing in root build.
          // Exclude docs that import Quiz or OnlyShowOnOrAfter until shared pkg exists.
          '**/week-1/les-1/02_Voorbereiding.mdx',
          '**/week-1/les-1/04_KwaliteitseisenContext.mdx',
          '**/week-1/les-3/04_KwaliteitContainer.mdx',
          '**/week-1/les-4/02_Voorbereiding.mdx',
          '**/week-2/les-1/03_Lesprogramma.mdx',
        ],
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'pexe',
        path: path.join(__dirname, 'courses/pexe/studenten/docs'),
        routeBasePath: 'pexe/docs',
        sidebarPath: path.join(__dirname, 'courses/pexe/studenten/sidebars.js'),
        exclude: [
          // TODO: fix upstream duplicate doc id in pexe repo (05-Beoordeling).
          '**/05-Beoordeling/05-Beoordeling.mdx',
        ],
      },
    ],
  ],
  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        language: ['nl'],
        indexDocs: true,
        indexBlog: false,
        indexPages: true,
      },
    ],
  ],
  themeConfig: {
    navbar: {
      title: "AIM SE Semester 2 OWE 1",
      items: [
        {
          label: "ENE",
          to: "/",
          className: "navbar-home-link",
          position: "left"
        },
        {
          type: "search",
          position: "right"
        }
      ]
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} AIM / HAN - Hogeschool Arnhem Nijmegen`,
    },
  },
};

module.exports = config;
