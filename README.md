# Create react swipe

_React hook which allows you to make component swipe and get an image carousels in different extensions._

## Install

Note, this package has as `peerDependencies`: `react` and `html2canvas`. As we assume that you already have `react` installed, you can just install `html2canvas`.

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
import React, { createRef, useState } from 'react'
import { useswipe } from 'use-react-swipe'

export default () => {
  const ref = createRef(null)
  const [image, takeswipe] = useswipe()
  const getImage = () => takeswipe(ref.current)
  return (
    <div>
      <div>
        <button style={{ marginBottom: '10px' }} onClick={getImage}>
          Take swipe
        </button>
      </div>
      <img width={width} src={image} alt={'swipe'} />
      <div ref={ref}>
        <h1>use-react-swipe</h1>
        <p>
          <strong>hook by @arsenpoghosyan1989 which allows to create swipes</strong>
        </p>
      </div>
    </div>
  )
}
```
