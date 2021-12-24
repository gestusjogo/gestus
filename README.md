
# Setup Docker Para Projetos Laravel
[Assine a Academy, e Seja VIP!](https://academy.especializati.com.br)

### Passo a passo

### Passo 1: Clone o repositório
```sh
git clone https://github.com/gestusjogo/gestus.git

```

### Passo 2: Alterne para a branch laravel-8
```sh
git checkout laravel-8
```

### Passo 3: Entre na pasta core
```sh
cd core/
```


### Passo 4: Crie o Arquivo .env
```sh
cp .env.example .env
```


### Passo 5: Atualize as variáveis de ambiente do arquivo .env

```dosini
APP_NAME=Gestus
APP_URL=http://localhost:8180

DB_CONNECTION=mysql
DB_HOST=mysql
DB_PORT=3306
DB_DATABASE=nome_que_desejar_db
DB_USERNAME=root
DB_PASSWORD=root

CACHE_DRIVER=redis
QUEUE_CONNECTION=redis
SESSION_DRIVER=redis

REDIS_HOST=redis
REDIS_PASSWORD=null
REDIS_PORT=6379
```


### Passo 6: Suba os containers do projeto
```sh
docker-compose up -d
```

### Passo 7: Acessar o container
```sh
docker-compose exec laravel_8 bash
```


### Passo 8: Instalar as dependências do projeto
```sh
composer install
```


### Passo 9: Gerar a key do projeto Laravel
```sh
php artisan key:generate
```


### Passo 10: Acesse o projeto
[http://localhost:8180](http://localhost:8180)
