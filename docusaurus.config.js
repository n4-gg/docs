// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "n4.gg FiveM Scripts",
  tagline: "Official Documentation Site",
  url: "https://docs.n4.gg",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "n4-gg", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: {
          blogTitle: "Changelog",
          path: "changelog",
          routeBasePath: "changelog",
          blogSidebarTitle: "Script Updates",
          blogSidebarCount: "ALL",
          showReadingTime: true,
          editUrl: "https://github.com/n4-gg/docs/pulls",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      announcementBar: {
        id: "extra_info",
        content: "NOTE: Some written features for the Queue may not be released yet.",
        backgroundColor: "#fafbfc",
        textColor: "#091E42",
        isCloseable: false,
      },
      colorMode: {
        defaultMode: "dark",
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: "n4.gg",
        logo: {
          alt: "Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "faq",
            position: "left",
            label: "Docs",
          },
          {
            to: "/changelog",
            label: "Changelog",
            position: "left",
          },
          {
            href: "https://discord.gg/n4",
            label: "Discord",
            position: "right",
          },
          {
            href: "https://github.com/n4-gg/docs",
            position: "right",
            className: "header-github-link",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "FAQ",
                to: "/",
              },
              {
                label: "Asset Escrow",
                to: "/escrow",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.gg/n4",
              },
              {
                label: "GitHub",
                href: "https://github.com/n4-gg/docs",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Changelog",
                to: "/changelog",
              },
              {
                label: "Tebex Store",
                to: "https://store.n4.gg",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} n4.gg, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["lua"],
      },
    }),
};

module.exports = config;
