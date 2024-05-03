<div align="center">

# Custom Metal Creations

![image](https://i.imgur.com/WJSFtp6.png 'logo and description of custom metal creations')

<p>This is a portfolio website for the Artist Terry Lawrenz, who works primarily in metal. </p>

[custommetalcreations.live](https://custommetalcreations.live/)

![image](https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D 'vue badge') ![image](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white 'tailwind badge') ![image](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E 'Vite badge') ![image](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E 'JavaScript badge') ![image](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white 'HTML badge') ![image](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white 'vercel badge')

</div>

---

## Check It Out
![Animated gif of website being used in mobile view](https://i.imgur.com/UOqmRAX.gif)

---

<div align="center">

## Setup 

</div>

### This site utilizes Vue 3 with Vite. You can find information on how to set up with Vue 3 in Vite below: 

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

---

<div align="center">

## Important Note

### This site depends on data from Google Sheets and utilizes the Google Visualization API instead of the traditional Google Sheets API. 

</div>

In order to use this, you'll need to either find my original spreadsheet or make your own, which should contain the following column titles: 

Row 1, Column A: title
Row 1, Column B: url
Row 1, Column C: material

In your `.env` file, include a variable named `VITE_SHEET_ID`, which should match your Google sheet id. 

--- 

<div align="center">

## Important Note

### This stie also depends on a contact email address. 

</div>

In your `.env`, add a variable named `VITE_EMAIL` and set it to whichever email you'd like people to contact you at. 

---

<div align="center">

## Future Iterations

### This website is currently in it's MVP stage. It's usable, but not ideal. Please find my notes on what I would like to add or improve in the future.

</div>


- Improve Largest Contentful Paint
- Compress images
  - Consider utilizing a CDN for some images
- Allow users to click images to see the image in a larger view and to see details such as approximate scultpure creation date and materials used
- Identify repetitive classes and extract them using @apply
