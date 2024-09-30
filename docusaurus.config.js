// @ts-check
import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Zachary Girouard",
  tagline: "Be the spaghetti against the wall",
  favicon: "img/favicon.ico",

  url: "https://Zgirouard.github.io", // Replace with your actual domain
  baseUrl: "/zach-ui-portfolio",

  organizationName: "ZGirouard", // Replace with your GitHub org/user name
  projectName: "zach-ui-portfolio", // Replace with your repo/project name
  trailingSlash: false,
  onBrokenLinks: "ignore",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false, // Disable docs if not needed
        blog: {
          showReadingTime: true,
          // Add any additional blog configuration if needed
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
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "Zachary Girouard",
        logo: {
          alt: "My UI Portfolio Logo",
          src: "img/zg-logo.svg",
        },
        items: [
          { to: "/about-me", label: "About Me", position: "left" },
          { to: "/projects", label: "Projects", position: "left" },
          { to: "/graphic-design", label: "Graphic Design", position: "left" },
          { to: "/blog", label: "Blog", position: "left" },
          { to: "/contact", label: "Contact", position: "left" },
          {
            href: "https://github.com/ZGirouard/zach-ui-portfolio",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "About Me",
            items: [{ label: "About Me", to: "/about-me" },
                    { label: "Graphic Design", to: "/graphic-design" },
            ],
          },
          {
            title: "Projects",
            items: [{ label: "Projects", to: "/projects" },
                    { label: "Internship", to: "/internship" },
                    { label: "Grocery Store", to: "/grocery" }],
          },
          {
            title: "Blog",
            items: [{ label: "Blog", to: "/blog" }],
          },
          {
            title: "Community",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/ZGirouard/zach-ui-portfolio",
              },
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/zachary-girouard-85832525a/",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My UI Portfolio. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
