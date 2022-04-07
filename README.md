# Create react swipe

_React hook which allows you to make component swipe and get an image carousels in different extensions._

## Install

To install package run:
```bash
npm install --save use-react-swipe
```

To install `peerDependencies` run:
```bash
npm install --save react html2canvas
```

## Usage

_A simple example which allows you to take a swipe and place it as an images on the page (also you can download it or use differently, see examples section above)._

```jsx
import React, { createRef, useState } from 'react';
import { useSwipe } from 'use-react-swipe';

const images = [
  { url: "imageURL1", id: 1 },
  { url: "imageURL2", id: 2 },
  { url: "imageURL3", id: 3 },
];

export default () => {
  const ref = createRef(null);
  const swipeIndex = useSwipe(ref.current, 3);

  return (
    <div>
      <h1>use-react-swipe</h1>
      <p>
        <strong>hook by @arsenpoghosyan1989 which allows to create swipes</strong>
      </p>
      <div ref={ref}>
        {
            images.map(({url, id}) => (
                <img
                    key={id}
                    src={url}
                    alt={'swipeImage'}
                    className={swipeIndex === id ? "active" : ""}
                />
            ))
        }
      </div>
    </div>
  )
}
```
