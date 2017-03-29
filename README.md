# playground
This repository is for all kind of small experiments with different languages, tools and technologies


# Layered Architecture

Currently I'm in the process of better understanding different approaches of layered architectures.
Here are some helpful links I found during the understanding process:

- https://www.codeproject.com/Articles/493389/Four-ways-of-passing-data-between-layers
- http://richard.jp.leguen.ca/tutoring/soen343-f2010/tutorials/implementing-table-data-gateway/

### Non Uniform Data Passing in a Layered Architecture
[Example Code](./layered-architecture/non-uniform)

```bash
cd ./layered-architecture/non-uniform
npm install
# init db
node init-db.js
# run the example code
node index.js
```

### Active Record Pattern

- Good for small to medium sized applications, which are heavily database driven
- An active record object contains: model properties, getters and setters, domain logic and sql operations
- Domain layer and data access layer is the same class

### Data Mapper Pattern

- Is an improvement compared to the active record pattern, because it splits the active record class in two separate classes
  - domain class (properties, getter/setter, domain logic)
  - data mapper class (sql operations, creation of domain class)
- Problem: It's not clear in which layer (domain layer or data access layer) the data mapper belongs. He has a dependency on the domain class in the domain layer and to the sql connection in the data access layer.

### Table Data Gateway Pattern

- The domain layer and the data access layer is divided properly
- the table data gateway in the data access layer has no dependency to the domain layer
- the data mapper in the domain layer is responsible to convert between the models and the data

[Example Code](./layered-architecture/table-data-gateway)

```bash
cd ./layered-architecture/table-data-gateway
npm install
node index.js # run the example code
node reset-db.js # reset the db
```

