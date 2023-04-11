# Custom Metal Creations

---

This is a portfolio website for the Artist Terry Lawrenz, who works primarily in metal. 

---

## Setup 

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

### This site depends on data from Google Sheets and utilizes the Google Visualization API instead of the traditional Google Sheets API. 

In order to use this, you'll need to either find my original spreadsheet or make your own, which should contain the following column titles: 

Row 1, Column A: title
Row 1, Column B: url
Row 1, Column C: material

In your `.env` file, include a variable named `VITE_SHEET_ID`, which should match your Google sheet id. 

### This stie also depends on a contact email address. 

In your `.env` add a variable named `VITE_EMAIL` and set it to whichever email you'd like people to contact you at. 