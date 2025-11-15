# create-my-website
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-my-website`](https://github.com/nordic96/create-my-website). The template is built on top with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

### Features
* ⚡ Next.js + React 19 + TypeScript

* 🎨 TailwindCSS ready

* 🧩 Modular component structure

* 🧠 SEO-friendly and responsive

![Project Layout](documentation/images/layout.png "Optional Title Text")

The purpose of this template is to provide an easy-to-begin-with structure and initial React Components who are new to React, Typescript and Next.js, and to those who wish to build their own website to display their technical skills over the web.

## 1. Running on Dev Mode

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## 2. Basic Page Layout & Components

### 2.1 Intro Section

#### 2.1.1 Certification Section
Section has been initialised with the HoC function `withHeaderDesc()` using the `certs` key
```typescript
export default withHeaderDesc(CertsSection, "certs");
```

### 2.2 Right Section

#### 2.2.1 Tech Stack Section
Section has been initialised with the HoC function `withHeaderDesc()` using the `skills` key
```typescript
export default withHeaderDesc(SkillsSection, "skills");
```

#### 2.2.2 Publication Section

Section has been initialised with the HoC function `withHeaderDesc()` using the `publication` key
```typescript
export default withHeaderDesc(PublicationSection, "publication");
```

#### 2.2.3 Personal Projects Section
Section has been initialised with the HoC function `withHeaderDesc()` using the `project` key
```typescript
export default withHeaderDesc(ProjectSection, "project");
```
Refer to the `ProjectCard` component if you wish to modify with your own project card component or with more advanced UI features.

### 2.3 Header & Footer

#### 2.3.1 Banner
Banner message is provided with the prop `msg` using `banner_msg` key from `app/constants/label.ts`

### 2.4 Localisation
Localisation has been initialised using the [`labelcontainer`](https://www.npmjs.com/package/labelcontainer) module for light label management of the project.

Labels are initialised with the dummy label file `app/constants/label.ts`
Usage:
```typescript
const labelInstance = LabelContainer.getInstance();
labelInstance.getLabel("header_project_section"); //displays the label that has key header_project_section
```

For more information, please visit the [`labelcontainer`](https://www.npmjs.com/package/labelcontainer) page for reference.

### 2.5 Higher Order Component (HoC) Functions

#### 2.5.1 `withHeaderDesc()` Wraps the UI Component with the common component `HeaderLabel`, `Description`, and `Divider` component to provide UI consistency.


## 4. Disclaimer
This template includes brand logos (GitHub, LinkedIn) under their respective trademark guidelines for UI referencing only. These companies do not endorse or sponsor this project.