export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "DevGym",
  description:
    "Welcome to DevGym",
  mainNav: [
    {
      title: "/",
      href: "/",
    },
  ],
  links: {
    signin: "/signin",
    signup: "/signup",
  },
}
