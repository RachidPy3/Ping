# Frontend Mentor - Ping coming soon page solution

This is a solution to the [Ping coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ping-single-column-coming-soon-page-5cadd051fec04111f7b848da). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Overview

### The challenge

Users should be able to:

- Submit their email address using an `input` field
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty. The message for this error should say _"Whoops! It looks like you forgot to add your email"_

### Screenshot

!["screenshot"](./screenshot.png)

### Links

- Solution URL: [Github](https://github.com/RachidPy3/Ping)
- Live Site URL: [Live Site](https://your-live-site-url.com)

## My process

### Built with

- CSS custom properties
- Flexbox
- [React](https://reactjs.org/) - JS library

### What I learned

I gained more experience with forms in React

```jsx
<input
  type="email"
  id="message"
  name="message"
  placeholder="Email Address"
  onChange={handleChange}
  value={value}
  autoComplete="off"
  style={{ border: !valid && "1px solid var(--LightRed)" }}
/>
```

Gained more insights on handling state in React

```js
const [valid, setValid] = useState(true);
const [value, SetValue] = useState("");

const handleChange = (event) => {
  SetValue(event.target.value);
};

const checker = () => {
  if (value.trim().length === 0) {
    setValid(false);
  } else {
    setValid(true);
  }
};
```

## Author

- Frontend Mentor - [@RachidPy3](https://www.frontendmentor.io/profile/RachidPy3)
- Twitter - [@rachid_03](https://twitter.com/rachid_03)
