export type ProfileType = "gmail" | "github" | "leetcode" | "linkedin";

export interface Profile {
  url: string;
  icon_url: string;
  type: ProfileType;
}

export const profileData: Profile[] = [
  {
    url: "https://mail.google.com",
    icon_url: "/brands/gmail.svg",
    type: "gmail",
  },
  {
    url: "https://github.com",
    icon_url: "/brands/github.svg",
    type: "github",
  },
  {
    url: "https://linkedin.com",
    icon_url: "/brands/linkedin.svg",
    type: "linkedin",
  },
];
