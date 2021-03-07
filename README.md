# bookmarks

Bookmarks app

## ■ Getting Started

```bash
# インストール
$ yarn install

# 開発サーバー起動
$ yarn dev
```

## ■ Technology stack

```bash
# フレームワーク
Next.js + TypeScript

# CSS
CSS Modules(SCSS)

# その他
ESLint
```

## ■ Development notes

### 基本ファイル構成

```tsx
/*
 * Import
 */
import React, { useState } from 'react'
import styles from './style.module.scss'

/*
 * Types
 */
export type Props = {
  name: string
  nameHandler: (e: React.ChangeEvent<HTMLInputElement>) => void
}

/*
 * DOM
 */
export const Example: React.FC<Props> = (props) => (
  <div className={styles.example}>
    <label htmlFor="username">Name</label>
    <input
      id="username"
      typeof="username"
      type="text"
      value={props.name}
      onChange={props.nameHandler}
      autoComplete="username"
    />
  </div>
)

/*
 * Container
 */
export const ExampleContainer: React.FC = () => {
  const [name, setName] = useState('')

  const nameHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setName(e.target.value)
  }

  return <Signup name={name} nameHandler={nameHandler} />
}
```
