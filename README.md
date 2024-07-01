# 11_typescript

## COMO RODAR O PROJETO BAIXADO

### Instalar todas as dependências indicadas pelo package.json
```bash
npm install
```

### Executar o arquivo JavaScript compilado
```bash
node dist/index.js
```

## SEQUÊNCIA PARA CRIAR O PROJETO

### Verificar se o Node.js está instalado na máquina
```bash
node -v
```

### Criar o arquivo package.json
```bash
npm init
npm init -y
```

### Instalar o TypeScript como uma dependência de desenvolvimento
```bash
npm install --save-dev typescript
```

### Criar o arquivo tsconfig.json, executar quando o typescript foi instalado somente no projeto
```bash
npx tsc --init
```
### Compilar os arquivos TypeScript
```bash
npx tsc
```