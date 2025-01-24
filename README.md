**MATA60 - Banco de Dados**  
Prof. Robespierre Pita  
robespierre.pita@ufba.br

## Executando o Projeto

1. O projeto necessita do Make e do Podman
3. Execute `make` para o Build e Seeding do Banco de Dados
4. Exucte `make connect` para se Conectar ao Banco

## Trilha Prática ( Parte 2 )

### 1. Da Primeira Parte

A [primeira parte do projeto](https://github.com/FormigTeen/uni-bd) consistiu no desenvolvimento do banco de dados de uma empresa de logística de alimentos juntamente com a implementação e análise de performance em um banco relacional ( PostgreSQL ). Essa continuação do projeto consiste no entendimento dos bancos NoSQL ( MongoDB ), seus principais recursos e da adaptação do Schema ou da organização dos dados em contraponto com o Schema inicialmente projetado para um banco SQL.

### 2. Estrutura do Seeding e Schema

O **MongoDB** não exige um schema pré-definido para a estrutura de dados armazenados em suas collections, transferindo grande parte da responsabilidade da estruturação dos dados para a camada da aplicação. Diferentemente da primeira parte do projeto, onde o schema era estritamente definido, no MongoDB essa flexibilidade permite ajustes em tempo de execução.

Para realizar a criação das collections, a inserção dos dados (seeding) e a definição de índices, foi desenvolvido um [script](/init.js) que utiliza a CLI em cima em JavaScript oferecida pelo MongoDB. 

A estrutura final dos documentos é definida dinamicamente no momento da inserção. Isso é importante porque os dados foram projetados originalmente para um banco relacional (SQL), e durante o processo de seeding foram feitas alterações para melhor aproveitar a natureza do MongoDB. Essas mudanças serão detalhadas nas próximas seções.

### 3. Adaptações

#### 3.1 O Padrão de Chave Primária

Na primeira parte do projeto, foi uma escolha intencional em todas as entidades do sistema criar e selecionar a coluna ***ID*** como chave primária, mesmo quando os requisitos do sistema ofereciam campos adicionais que poderiam ser utilizados como chave primária. Um exemplo é o CNPJ para os ***Fornecedores***. Essa escolha permitiu que as chaves estrangeiras seguissem uma nomenclatura mais uniforme e resiliente a mudanças futuras, já que todas as entidades são minimamente elegíveis para ter um campo ID incremental e único, independentemente de suas propriedades individuais. Assim, as chaves estrangeiras puderam ser nomeadas no formato `<entidade>_id` (e.g., `supplier_id`).

Outra grande vantagem dessa abordagem é que, dependendo da tecnologia utilizada como banco de dados, o desenvolvedor pode implementar mecanismos de log temporal mais precisos, vinculados ao registro que manipulou as alterações, em vez de depender apenas da entidade no mundo real que realizou as ações. Por exemplo, ao realizar um *soft delete* em um registro de CNPJ *AB*, a criação de um novo registro com o mesmo CNPJ *AB* terá um rastreamento independente, sem interferir no registro anterior desativado. Caso fosse desejável reutilizar o registro original, ele poderia ser simplesmente reativado.

No MongoDB, entretanto, essa abordagem é menos vantajosa. Seus IDs não são incrementais, sua estrutura incentiva a agregação de documentos e a desnormalização de dados com réplicas de informações em dados correlatos. Além disso, o MongoDB não oferece os mesmos recursos de consistência para chaves estrangeiras que os bancos de dados ACID oferecem. Por conta disso, o projeto foi adaptado para evitar o uso de referências diretas para o ID, preferindo estratégias de referência por outros atributos mais descritivos.

#### 3.2 Relação Produtos e Categorias

Foi mantida uma tabela (ou melhor dizendo, Collection) para **Categories** sem muitas alterações, mas o relacionamento entre essa entidade e **Products** foi adaptado. Em vez de manter apenas o código da categoria nos produtos, que seria a informação mínima para construir a relação entre as duas entidades, foi decidido armazenar uma cópia de um subconjunto das propriedades da categoria dentro do documento de produtos, considerando o seu domínio.

A principal desvantagem dessa abordagem é a possibilidade de inconsistências, exigindo sincronizações eventuais quando ocorrem mudanças nos dados das categorias. No entanto, os benefícios superam essas desvantagens, pois a quantidade de joins necessários para recuperar as informações completas será reduzida. Além disso, a aplicação poderá obter todos os dados relacionados a um produto em uma única consulta, o que aumenta a performance geral no acesso ao banco.

Segue o exemplo do documento de um produto no MongoDB:

```json
{
    "_id": "__GID__",
    "ean": "__PRODUCT_EAN__",
    "name": "__PRODUCT_NAME__",
    "primary": {
        "code": "__CATEGORY_CODE__",
        "name": "__CATEGORY_NAME__"
    },
    "secondary": {
        "code": "__CATEGORY_CODE__",
        "name": "__CATEGORY_NAME__"
    }
}
```

Como pode ser observado, em um único findOne a aplicação pode obter todas as informações do produto, incluindo as informações relevantes das categorias primária e secundária. Quando ocorrer uma mudança no nome ou outros atributos das categorias, os documentos dos produtos associados precisarão ser sincronizados para garantir a consistência dos dados, eliminando a ambiguidade de informações.

#### 3.3 A Tabela Locations

A tabela *locations* não foi mantida e sofreu uma conversão para se tornar uma agregação nos documentos que a utilizariam caso fosse transformada em uma Collection. Essa decisão foi tomada com o objetivo de reduzir a quantidade de Joins e maximizar o aproveitamento dos agregados oferecidos pelo MongoDB.

Além disso, foi necessário adaptar as informações de localização para utilizar a indexação do tipo ***2dsphere***, oferecida pelo MongoDB, o que possibilita recursos de localização geo-espacial de forma performática. A seguir, um exemplo do documento de Supplier que foi impactado por essa adaptação:

```json
{
    "_id": "__GID__",
    "cnpj": "__SUPPLIER_CNPJ__",
    "address": "__ADDRESS__",
    "city": "__CITY__",
    "code": "__CODE__",
    "state": "__STATE__",
    "location": {
        "type": "Point",
        "coordinates": [
            "__LATITUDE_NUMBER__", "__LONGITUDE_NUMBER__"
        ]
    }
}
```

Essa estrutura de documento permite que consultas geo-espaciais sejam realizadas de forma eficiente, sem a necessidade de consultar uma tabela separada para obter as informações de localização.

#### 3.4 Configuração de Estoque

Assim como aconteceu com *locations*, a tabela de *configurations* não foi portada como uma collection, mas foi adaptada para um agregado dentro de *places*, que representam cada loja ou galpão do mini-mundo em questão. 

O documento agregado foi estruturado como um **Map**, onde as chaves representam o código EAN do produto, e os valores são documentos contendo as configurações de estoque correspondentes. Essa estrutura foi projetada para facilitar o acesso a essas informações diretamente na camada de aplicação.

A decisão de usar um **Map** em vez de um **Array** foi tomada por diversas razões:
- **Prevenção de inconsistência**: Evita entradas duplicadas para a configuração de um mesmo produto, reduzindo a necessidade de verificações adicionais.
- **Simplificação de consultas**: Consultar um Map por chave é mais eficiente do que procurar em um Array.
- **Facilidade de manipulação na aplicação**: Permite operações diretas com menos validações, já que a chave do Map garante unicidade.

Segue um exemplo da estrutura de um documento de *place* com as configurações agregadas:

```json
{
    "_id": "6793834d84e42000cbaf484c",
    "cnpj": "12345678000100",
    "address": "Avenida Paulista, 1000",
    "city": "3550308",
    "location": {
        "type": "Point",
        "coordinates": [-46.633308, -23.55052]
    },
    "name": "Loja Centro SP",
    "state": "SP",
    "configurations": {
        "7891001234567": { "ean": "7891001234567", "min": 50, "max": 150 },
        "7891001234571": { "ean": "7891001234571", "min": 20, "max": 100 },
        "7891001234578": { "ean": "7891001234578", "min": 30, "max": 120 },
        "7891001234591": { "ean": "7891001234591", "min": 15, "max": 180 },
        "7891001234611": { "ean": "7891001234611", "min": 10, "max": 150 },
        "7891001234787": { "ean": "7891001234787", "min": 20, "max": 170 },
        "7891001234788": { "ean": "7891001234788", "min": 15, "max": 180 },
        "7891001234789": { "ean": "7891001234789", "min": 25, "max": 200 },
        "7891001234790": { "ean": "7891001234790", "min": 10, "max": 180 },
        "7891001234791": { "ean": "7891001234791", "min": 10, "max": 150 },
        "7891001234792": { "ean": "7891001234792", "min": 10, "max": 140 },
        "7891001234612": { "ean": "7891001234612", "min": 20, "max": 150 },
        "7891001234653": { "ean": "7891001234653", "min": 15, "max": 180 },
        "7891001234655": { "ean": "7891001234655", "min": 10, "max": 150 },
        "7891001234656": { "ean": "7891001234656", "min": 15, "max": 180 },
        "7891001234667": { "ean": "7891001234667", "min": 20, "max": 150 },
        "7891001234669": { "ean": "7891001234669", "min": 10, "max": 180 },
        "7891001234680": { "ean": "7891001234680", "min": 30, "max": 140 }
    }
}
```

#### 3.5 Armazenamento de Itens

Em contrapartida, a tabela de itens foi convertida em **collection** no MongoDB e, consequentemente, como explicado anteriormente, teve parte de suas propriedades inicialmente representadas por chaves estrangeiras convertidas para documentos agregados com um subconjunto de propriedades pertinentes ao domínio do documento relacionado.

Vale ressaltar algumas observações sobre o resultado final dessa collection específica, respondendo algumas perguntas:

1. **Por que Itens não foi convertido para um agregado de `products` ou `purchase_orders`?**

   É uma abordagem que faz muito sentido, entretanto, o MongoDB apresenta uma limitação padrão de tamanho de documentos, que pode ser alterada dependendo da versão utilizada ou do administrador. Essa limitação pesa bastante na decisão, pois a quantidade de itens inseridos no sistema é linear e não regressiva (não haverá remoção de registros). Caso esse tipo de informação fosse acumulado como um agregado em outro documento, poderia atingir rapidamente o limite de espaço do documento. 

   Para evitar esse tipo de problema, é mais proveitoso utilizar uma collection específica para essa entidade, que será limitada apenas pelos recursos de armazenamento da máquina e sem prejudicar a performance na manipulação de documentos com agregados extensos em memória.

2. **Mas e as Transactions?**

   Como pode ser visto pelo exemplo abaixo, a tabela de `transactions` não foi portada como uma collection. Em vez disso, foi criada como um array dentro de `items`. Nesse caso, espera-se que a cardinalidade de transactions por item seja tratável, uma vez que há um limite claro — em algum momento, o item será vendido ou retido. 

   Armazenar as transações como uma lista dentro do próprio item é uma solução natural, mesmo que essa estrutura possa causar problemas de consistência devido aos seus próprios agregados. Entretanto, dado o caráter temporal desse tipo de registro, ele pode oferecer uma visão clara de como os agregados estavam configurados no momento da transação, minimizando os impactos da falta de consistência.

Visando essas perguntas e limitações, o resultado final dessa estrutura pode ser observado no exemplo a seguir:

```json
{
    "_id": "6793834d84e42000cbaf4da5",
    "code_rfid": "RFID-6793834d84e42000cbaf4db3-0",
    "order": {
        "_id": "6793834d84e42000cbaf4db3",
        "product": { "ean": "7891001234578", "name": "Leite Desnatado" },
        "expired_at": ISODate("2024-03-01T12:00:00.000Z"),
        "supplier": { "code": 3001, "cnpj": "12345678000100" },
        "sold_at": ISODate("2023-10-01T12:00:00.000Z"),
        "price_by_unit": 15,
        "quantity": 80
    },
    "status": 0,
    "transactions": [
        {
            "location": { "cnpj": "182345678000100" },
            "employee": { "cpf": "970.123.456-29", "name": "Gustavo Martins" },
            "executed_at": ISODate("2024-12-11T12:11:49.047Z")
        },
        {
            "location": { "cnpj": "22345678000100" },
            "employee": { "cpf": "758.901.234-57", "name": "Tatiane Vasconcelos" },
            "executed_at": ISODate("2024-11-21T12:11:49.047Z")
        },
        {
            "location": { "cnpj": "182345678000100" },
            "employee": { "cpf": "203.456.789-22", "name": "Fernanda Monteiro" },
            "executed_at": ISODate("2025-01-16T12:11:49.047Z")
        }
    ]
}
```

### 4. Ideias Adicionais

Nesta seção apresento visões de implementações usando o MongoDB para suprir necessidades iniciais que foram introduzidas e implementadas na Parte 1.

#### 4.1 Dashboards

Na Parte 1, foi utilizado **Materialized Views** e construídas algumas queries complexas com caráter analítico sobre os dados do sistema. No MongoDB, podemos utilizar o recurso de **Capped Collections**, que permite armazenar documentos com tamanho limite e gerenciamento de espaço usando a política FIFO (First In, First Out). Esse recurso pode evitar o acúmulo de dados analíticos que não trazem valor ao negócio, reduzindo os custos de armazenamento.

Além disso, é possível aproveitar a flexibilidade do MongoDB para construir padrões mais dinâmicos. Por exemplo, podemos simular polimorfismo a nível de banco, usando uma chave indexada para definir o tipo real do dado. Segue o exemplo:

```json
[
    {
        "type": "sales",
        "interval": {
            "start": "2024-10-01",
            "end": "2024-11-01",
            "unit": "day"
        },
        "values": {
            "sales": 25
        }
    },
    {
        "type": "sales",
        "interval": {
            "start": "2024-09-01",
            "end": "2024-10-01",
            "unit": "day"
        },
        "values": {
            "sales": 34
        }
    },
    {
        "type": "leads",
        "interval": {
            "start": "2024-09",
            "end": "2024-10",
            "unit": "month"
        },
        "values": {
            "count": 543
        }
    }
]
```

#### Observações:

1. **Uso do Campo `type` para Inferência**:
   - A coluna `type` pode ser utilizada pela aplicação para inferir o tipo de dado analítico armazenado ou processado.
   - Isso permite que a aplicação defina regras de armazenamento e crie rotinas de inserção e atualização sem modificar a estrutura do banco.

2. **Campos Auxiliares para Funcionalidades Avançadas**:
   - Campos como `interval.unit` fornecem flexibilidade para estender funcionalidades analíticas no mesmo conjunto de dados.

3. **Estrutura Flexível e Índices Dinâmicos**:
   - No exemplo acima, a estrutura de `interval` e `type` foi projetada de forma uniforme, mas o campo `values` pode armazenar qualquer tipo de informação.
   - O MongoDB permite criar índices dinâmicos sem exigir uniformidade nos documentos de uma mesma collection.
   - É possível criar índices compostos para subconjuntos de propriedades específicas de `values` sem impactar a performance de consultas mais complexas.

Essa abordagem aproveita a flexibilidade do MongoDB para armazenar dados analíticos de diferentes tipos em uma única collection, reduzindo a necessidade de reestruturar o banco e garantindo alta performance em consultas específicas.




#### 4.2 Sharding

Intencionalmente, nenhum índice único foi criado na aplicação. O MongoDB oferece o recurso de **upsert** e também suporta operações em sistemas distribuídos, mas a ativação do **sharding** (distribuição de dados em diferentes nós) traz algumas limitações em funcionalidades específicas para evitar impactos negativos na performance.

No contexto de sharding, as chaves únicas só podem ser aplicadas às chaves de shard, ou seja, aquelas que definem o nó no qual o documento será armazenado. Por esse motivo, foi decidido postergar a adição de chaves únicas, aceitando como contrapartida a possibilidade de dados acidentalmente inconsistentes no banco. Essa abordagem exige que a aplicação tenha rotinas de sanitização para garantir a consistência dos dados de forma periódica e controlada.

Embora essa decisão introduza um pequeno risco de inconsistência temporária, ela permite uma maior flexibilidade e aproveita ao máximo o modelo distribuído do MongoDB.
