# My personal website

I will write the technical specification for my personal website here.

## Git and Markdown cheat sheets

![Markdown cheat sheet](/assets/mdcheatsheet.png)

![Git cheat sheet](/assets/gitcheatsheet.png)

## Technical specification

- Navigation bar
    - Logo
    - Menu items

- Sidebar
    - List of written guides
    - Tags for written guides

- Main content
    - Feed with written guides
        - Headline
        - Text
        - Read more button

## Design sketches

![Wireframe](/assets/wireframe.png)

## Build and deploy

React application created with create-react-app (https://create-react-app.dev/).

Install Node.js version greater than 8.10 (https://nodejs.org/en/).

Check in Terminal or Cmd with ‘node -v’.

npm version greater than 5.6 should be installed with Node.js.

Check in Terminal or Cmd with ‘npm -v’.

Open Terminal or Cmd:

```
npx create-react-app personalwebsite

cd personalwebsite

npm start
```

**Alternative Git clone**

In Terminal or Cmd:

```
git clone https://github.com/MIKKEL4VILD/personalwebsite

cd personalwebsite

npm install

npm start
```

**Run build and deploy**

In Terminal or Cmd:

```
npm run-script build 
````

Create account on Netlify (https://www.netlify.com/).

Drag and drop your personalwebsites/build folder under 'Sites'.

## Demo

Link: https://mikkelpersonalwebsite.netlify.app/