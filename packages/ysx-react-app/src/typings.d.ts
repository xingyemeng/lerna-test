declare module '*.module.css' {
  const classes: { readonly [key: string]: string }
  export default classes
}

declare module '*.module.sass' {
  const classes: { readonly [key: string]: string }
  export default classes
}

declare module '*.module.scss' {
  const classes: { readonly [key: string]: string }
  export default classes
}

declare module '@hala/core'

declare module '@hala/ui'

declare namespace JSX {
  interface IntrinsicElements {
      [tagName:string]: any
  }
}
