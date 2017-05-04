# Typescript
## Type Annotations

## Interfaces
### InterfaceDeclaration
```js
interface TSInterfaceDeclaration <: Declaration {
  type: "TSInterfaceDeclaration";
  id: Identifier;
  body: TSInterfaceBody;
  heritage: [TSInterfaceHeritage]
}
```

### InterfaceBody
```js
interface TSInterfaceBody <: Node {
  type: "TSInterfaceBody";
  body: [ TSPropertySignature | TSMethodSignature | TSIndexSignature | TSCallSignature | TSConstructSignature ];
}
```

### InterfaceHeritage
```js
interface TSInterfaceHeritage <: Node {
  type: "TSInterfaceHeritage";
}
```
