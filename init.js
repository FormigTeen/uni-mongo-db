// Conecta ao banco de dados
db = connect("localhost:27017/myProject");

const categories = [
    { name: "Frutas", code: 2001 },                    // Categoria Primária
    { name: "Frutas Cítricas", code: 2002 },           // Categoria Secundária de 'Frutas'
    { name: "Frutas Tropicais", code: 2003 },          // Categoria Secundária de 'Frutas'
    { name: "Legumes e Verduras", code: 2004 },        // Categoria Primária
    { name: "Verduras Folhosas", code: 2005 },         // Categoria Secundária de 'Legumes e Verduras'
    { name: "Tubérculos", code: 2006 },                // Categoria Secundária de 'Legumes e Verduras'
    { name: "Laticínios", code: 2007 },                // Categoria Primária
    { name: "Leite", code: 2008 },                     // Categoria Secundária de 'Laticínios'
    { name: "Queijos", code: 2009 },                   // Categoria Secundária de 'Laticínios'
    { name: "Bebidas", code: 2010 },                   // Categoria Primária
    { name: "Refrigerantes", code: 2011 },             // Categoria Secundária de 'Bebidas'
    { name: "Sucos Naturais", code: 2012 },            // Categoria Secundária de 'Bebidas'
    { name: "Carnes", code: 2013 },                    // Categoria Primária
    { name: "Carnes Vermelhas", code: 2014 },          // Categoria Secundária de 'Carnes'
    { name: "Aves", code: 2015 },                      // Categoria Secundária de 'Carnes'
    { name: "Pescados", code: 2016 },                  // Categoria Primária
    { name: "Peixes", code: 2017 },                    // Categoria Secundária de 'Pescados'
    { name: "Frutos do Mar", code: 2018 },             // Categoria Secundária de 'Pescados'
    { name: "Padaria e Confeitaria", code: 2019 },     // Categoria Primária
    { name: "Pães", code: 2020 },                      // Categoria Secundária de 'Padaria e Confeitaria'
    { name: "Doces e Bolos", code: 2021 },             // Categoria Secundária de 'Padaria e Confeitaria'
    { name: "Grãos e Cereais", code: 2022 },           // Categoria Primária
    { name: "Arroz", code: 2023 },                     // Categoria Secundária de 'Grãos e Cereais'
    { name: "Feijão", code: 2024 }                     // Categoria Secundária de 'Grãos e Cereais'
];

const products = [
    {
      name: "Laranja",
      ean: "7891001234567",
      primary_category_code: 2001,
      secondary_category_code: 2002
    },
    {
      name: "Limão",
      ean: "7891001234568",
      primary_category_code: 2001,
      secondary_category_code: 2002
    },
    {
      name: "Banana",
      ean: "7891001234569",
      primary_category_code: 2001,
      secondary_category_code: 2003
    },
    {
      name: "Manga",
      ean: "7891001234570",
      primary_category_code: 2001,
      secondary_category_code: 2003
    },
    {
      name: "Maçã",
      ean: "7891001234571",
      primary_category_code: 2001,
      secondary_category_code: null
    },
    {
      name: "Alface",
      ean: "7891001234572",
      primary_category_code: 2004,
      secondary_category_code: 2005
    },
    {
      name: "Couve",
      ean: "7891001234573",
      primary_category_code: 2004,
      secondary_category_code: 2005
    },
    {
      name: "Cenoura",
      ean: "7891001234574",
      primary_category_code: 2004,
      secondary_category_code: 2006
    },
    {
      name: "Batata",
      ean: "7891001234575",
      primary_category_code: 2004,
      secondary_category_code: 2006
    },
    {
      name: "Espinafre",
      ean: "7891001234576",
      primary_category_code: 2004,
      secondary_category_code: 2005
    },
    {
      name: "Leite Integral",
      ean: "7891001234577",
      primary_category_code: 2007,
      secondary_category_code: 2008
    },
    {
      name: "Leite Desnatado",
      ean: "7891001234578",
      primary_category_code: 2007,
      secondary_category_code: 2008
    },
    {
      name: "Queijo Mussarela",
      ean: "7891001234579",
      primary_category_code: 2007,
      secondary_category_code: 2009
    },
    {
      name: "Queijo Parmesão",
      ean: "7891001234580",
      primary_category_code: 2007,
      secondary_category_code: 2009
    },
    {
      name: "Refrigerante Cola",
      ean: "7891001234581",
      primary_category_code: 2010,
      secondary_category_code: 2011
    },
    {
      name: "Refrigerante Guaraná",
      ean: "7891001234582",
      primary_category_code: 2010,
      secondary_category_code: 2011
    },
    {
      name: "Suco de Laranja Natural",
      ean: "7891001234583",
      primary_category_code: 2010,
      secondary_category_code: 2012
    },
    {
      name: "Suco de Uva Integral",
      ean: "7891001234584",
      primary_category_code: 2010,
      secondary_category_code: 2012
    },
    {
      name: "Carne Bovina",
      ean: "7891001234585",
      primary_category_code: 2013,
      secondary_category_code: 2014
    },
    {
      name: "Frango Inteiro",
      ean: "7891001234586",
      primary_category_code: 2013,
      secondary_category_code: 2015
    },
    {
      name: "Peito de Frango",
      ean: "7891001234587",
      primary_category_code: 2013,
      secondary_category_code: 2015
    },
    {
      name: "Salmão",
      ean: "7891001234588",
      primary_category_code: 2016,
      secondary_category_code: 2017
    },
    {
      name: "Tilápia",
      ean: "7891001234589",
      primary_category_code: 2016,
      secondary_category_code: 2017
    },
    {
      name: "Camarão",
      ean: "7891001234590",
      primary_category_code: 2016,
      secondary_category_code: 2018
    },
    {
      name: "Pão de Forma",
      ean: "7891001234591",
      primary_category_code: 2019,
      secondary_category_code: 2020
    },
    {
      name: "Pão Francês",
      ean: "7891001234592",
      primary_category_code: 2019,
      secondary_category_code: 2020
    },
    {
      name: "Bolo de Chocolate",
      ean: "7891001234593",
      primary_category_code: 2019,
      secondary_category_code: 2021
    },
    {
      name: "Bolo de Laranja",
      ean: "7891001234594",
      primary_category_code: 2019,
      secondary_category_code: 2021
    },
    {
      name: "Arroz Branco",
      ean: "7891001234595",
      primary_category_code: 2022,
      secondary_category_code: 2023
    },
    {
      name: "Arroz Integral",
      ean: "7891001234596",
      primary_category_code: 2022,
      secondary_category_code: 2023
    },
    {
      name: "Feijão Preto",
      ean: "7891001234597",
      primary_category_code: 2022,
      secondary_category_code: 2024
    },
    {
      name: "Feijão Carioca",
      ean: "7891001234598",
      primary_category_code: 2022,
      secondary_category_code: 2024
    },
    {
      name: "Amendoim Torrado",
      ean: "7891001234599",
      primary_category_code: 2025,
      secondary_category_code: null
    },
    {
      name: "Pipoca de Micro-ondas",
      ean: "7891001234600",
      primary_category_code: 2025,
      secondary_category_code: null
    },
    {
      name: "Batata Chips",
      ean: "7891001234601",
      primary_category_code: 2025,
      secondary_category_code: null
    },
    {
      name: "Tomate",
      ean: "7891001234602",
      primary_category_code: 2004,
      secondary_category_code: null
    },
    {
      name: "Pepino",
      ean: "7891001234603",
      primary_category_code: 2004,
      secondary_category_code: null
    },
    {
      name: "Cebola",
      ean: "7891001234604",
      primary_category_code: 2004,
      secondary_category_code: null
    },
    {
      name: "Beterraba",
      ean: "7891001234605",
      primary_category_code: 2004,
      secondary_category_code: 2006
    },
    {
      name: "Abóbora",
      ean: "7891001234606",
      primary_category_code: 2004,
      secondary_category_code: 2006
    },
    {
      name: "Abacate",
      ean: "7891001234607",
      primary_category_code: 2001,
      secondary_category_code: 2003
    },
    {
      name: "Morango",
      ean: "7891001234608",
      primary_category_code: 2001,
      secondary_category_code: null
    },
    {
      name: "Abacaxi",
      ean: "7891001234609",
      primary_category_code: 2001,
      secondary_category_code: 2003
    },
    {
      name: "Goiaba",
      ean: "7891001234610",
      primary_category_code: 2001,
      secondary_category_code: 2003
    },
    {
      name: "Melancia",
      ean: "7891001234611",
      primary_category_code: 2001,
      secondary_category_code: 2003
    },
    {
      name: "Queijo Coalho",
      ean: "7891001234612",
      primary_category_code: 2007,
      secondary_category_code: 2009
    },
    {
      name: "Iogurte Natural",
      ean: "7891001234613",
      primary_category_code: 2007,
      secondary_category_code: null
    },
    {
      name: "Requeijão",
      ean: "7891001234614",
      primary_category_code: 2007,
      secondary_category_code: 2009
    },
    {
      name: "Sorvete de Chocolate",
      ean: "7891001234615",
      primary_category_code: 2007,
      secondary_category_code: null
    },
    {
      name: "Sorvete de Baunilha",
      ean: "7891001234616",
      primary_category_code: 2007,
      secondary_category_code: null
    },
    {
      name: "Biscoito de Polvilho",
      ean: "7891001234617",
      primary_category_code: 2025,
      secondary_category_code: null
    },
    {
      name: "Bolacha de Água e Sal",
      ean: "7891001234618",
      primary_category_code: 2025,
      secondary_category_code: null
    },
    {
      name: "Rosquinha Doce",
      ean: "7891001234619",
      primary_category_code: 2025,
      secondary_category_code: null
    },
    {
      name: "Pão de Queijo",
      ean: "7891001234620",
      primary_category_code: 2019,
      secondary_category_code: 2020
    },
    {
      name: "Croissant",
      ean: "7891001234621",
      primary_category_code: 2019,
      secondary_category_code: 2020
    },
    {
      name: "Torrada Integral",
      ean: "7891001234622",
      primary_category_code: 2019,
      secondary_category_code: 2020
    },
    {
      name: "Granola",
      ean: "7891001234623",
      primary_category_code: 2022,
      secondary_category_code: null
    },
    {
      name: "Cereal Matinal",
      ean: "7891001234624",
      primary_category_code: 2022,
      secondary_category_code: null
    },
    {
      name: "Farinha de Trigo",
      ean: "7891001234625",
      primary_category_code: 2022,
      secondary_category_code: null
    },
    {
      name: "Farinha de Mandioca",
      ean: "7891001234626",
      primary_category_code: 2022,
      secondary_category_code: null
    },
    {
      name: "Canjica",
      ean: "7891001234627",
      primary_category_code: 2022,
      secondary_category_code: null
    },
    {
      name: "Manteiga",
      ean: "7891001234628",
      primary_category_code: 2007,
      secondary_category_code: null
    },
    {
      name: "Creme de Leite",
      ean: "7891001234629",
      primary_category_code: 2007,
      secondary_category_code: null
    },
    {
      name: "Leite Condensado",
      ean: "7891001234630",
      primary_category_code: 2007,
      secondary_category_code: null
    },
    {
      name: "Ervilha Congelada",
      ean: "7891001234631",
      primary_category_code: 2004,
      secondary_category_code: null
    },
    {
      name: "Brócolis",
      ean: "7891001234632",
      primary_category_code: 2004,
      secondary_category_code: null
    },
    {
      name: "Milho Verde",
      ean: "7891001234633",
      primary_category_code: 2004,
      secondary_category_code: null
    },
    {
      name: "Palmito",
      ean: "7891001234634",
      primary_category_code: 2004,
      secondary_category_code: null
    },
    {
      name: "Couve-flor",
      ean: "7891001234635",
      primary_category_code: 2004,
      secondary_category_code: null
    },
    {
      name: "Açaí na Tigela",
      ean: "7891001234636",
      primary_category_code: 2001,
      secondary_category_code: 2003
    },
    {
      name: "Pêssego",
      ean: "7891001234637",
      primary_category_code: 2001,
      secondary_category_code: null
    },
    {
      name: "Amêndoas",
      ean: "7891001234638",
      primary_category_code: 2025,
      secondary_category_code: null
    },
    {
      name: "Castanha-do-Pará",
      ean: "7891001234639",
      primary_category_code: 2025,
      secondary_category_code: null
    },
    {
      name: "Suco de Maracujá",
      ean: "7891001234640",
      primary_category_code: 2010,
      secondary_category_code: 2012
    },
    {
      name: "Água de Coco",
      ean: "7891001234641",
      primary_category_code: 2010,
      secondary_category_code: 2012
    },
    {
      name: "Cerveja Pilsen",
      ean: "7891001234642",
      primary_category_code: 2010,
      secondary_category_code: null
    },
    {
      name: "Chá Verde",
      ean: "7891001234643",
      primary_category_code: 2010,
      secondary_category_code: null
    },
    {
      name: "Coxinha de Frango",
      ean: "7891001234644",
      primary_category_code: 2025,
      secondary_category_code: null
    },
    {
      name: "Kibe",
      ean: "7891001234645",
      primary_category_code: 2025,
      secondary_category_code: null
    },
    {
      name: "Pudim de Leite",
      ean: "7891001234646",
      primary_category_code: 2019,
      secondary_category_code: 2021
    },
    {
      name: "Bolo de Fubá",
      ean: "7891001234647",
      primary_category_code: 2019,
      secondary_category_code: 2021
    },
    {
      name: "Mousse de Maracujá",
      ean: "7891001234648",
      primary_category_code: 2019,
      secondary_category_code: 2021
    },
    {
      name: "Torta de Limão",
      ean: "7891001234649",
      primary_category_code: 2019,
      secondary_category_code: 2021
    },
    {
      name: "Bolinho de Bacalhau",
      ean: "7891001234650",
      primary_category_code: 2019,
      secondary_category_code: 2021
    },
    {
      name: "Sopa de Legumes",
      ean: "7891001234651",
      primary_category_code: 2004,
      secondary_category_code: null
    },
    {
      name: "Frango Desfiado",
      ean: "7891001234652",
      primary_category_code: 2013,
      secondary_category_code: 2015
    },
    {
      name: "Linguiça Calabresa",
      ean: "7891001234653",
      primary_category_code: 2013,
      secondary_category_code: 2014
    },
    {
      name: "Costela de Porco",
      ean: "7891001234654",
      primary_category_code: 2013,
      secondary_category_code: 2014
    },
    {
      name: "Hambúrguer de Soja",
      ean: "7891001234655",
      primary_category_code: 2025,
      secondary_category_code: null
    },
    {
      name: "Batata Doce",
      ean: "7891001234656",
      primary_category_code: 2004,
      secondary_category_code: 2006
    },
    {
      name: "Tomate Cereja",
      ean: "7891001234657",
      primary_category_code: 2004,
      secondary_category_code: null
    },
    {
      name: "Cenoura Baby",
      ean: "7891001234658",
      primary_category_code: 2004,
      secondary_category_code: 2006
    },
    {
      name: "Alho",
      ean: "7891001234659",
      primary_category_code: 2004,
      secondary_category_code: null
    },
    {
      name: "Nabo",
      ean: "7891001234660",
      primary_category_code: 2004,
      secondary_category_code: 2006
    },
    {
      name: "Geléia de Morango",
      ean: "7891001234661",
      primary_category_code: 2025,
      secondary_category_code: null
    },
    {
      name: "Feijão Branco",
      ean: "7891001234662",
      primary_category_code: 2022,
      secondary_category_code: 2024
    },
    {
      name: "Farofa Pronta",
      ean: "7891001234663",
      primary_category_code: 2022,
      secondary_category_code: null
    },
    {
      name: "Biscoito Recheado",
      ean: "7891001234664",
      primary_category_code: 2025,
      secondary_category_code: null
    },
    {
      name: "Molho de Tomate",
      ean: "7891001234665",
      primary_category_code: 2004,
      secondary_category_code: null
    },
    {
      name: "Biscoito Integral",
      ean: "7891001234666",
      primary_category_code: 2025,
      secondary_category_code: null
    },
    {
      name: "Queijo Provolone",
      ean: "7891001234667",
      primary_category_code: 2007,
      secondary_category_code: 2009
    },
    {
      name: "Iogurte Grego",
      ean: "7891001234668",
      primary_category_code: 2007,
      secondary_category_code: null
    },
    {
      name: "Sardinha",
      ean: "7891001234669",
      primary_category_code: 2016,
      secondary_category_code: 2017
    },
    {
      name: "Polvo",
      ean: "7891001234670",
      primary_category_code: 2016,
      secondary_category_code: 2018
    },
    {
      name: "Lula",
      ean: "7891001234671",
      primary_category_code: 2016,
      secondary_category_code: 2018
    },
    {
      name: "Bolacha Recheada",
      ean: "7891001234672",
      primary_category_code: 2025,
      secondary_category_code: null
    },
    {
      name: "Pão Sírio",
      ean: "7891001234673",
      primary_category_code: 2019,
      secondary_category_code: 2020
    },
    {
      name: "Café Solúvel",
      ean: "7891001234674",
      primary_category_code: 2010,
      secondary_category_code: null
    },
    {
      name: "Aveia em Flocos",
      ean: "7891001234675",
      primary_category_code: 2022,
      secondary_category_code: null
    },
    {
      name: "Pipoca Doce",
      ean: "7891001234676",
      primary_category_code: 2025,
      secondary_category_code: null
    },
    {
      name: "Sopa de Feijão",
      ean: "7891001234677",
      primary_category_code: 2004,
      secondary_category_code: null
    },
    {
      name: "Suco de Caju",
      ean: "7891001234678",
      primary_category_code: 2010,
      secondary_category_code: 2012
    },
    {
      name: "Suco de Manga",
      ean: "7891001234679",
      primary_category_code: 2010,
      secondary_category_code: 2012
    },
    {
      name: "Frango à Passarinho",
      ean: "7891001234680",
      primary_category_code: 2013,
      secondary_category_code: 2015
    },
    {
      name: "Empanado de Frango",
      ean: "7891001234681",
      primary_category_code: 2013,
      secondary_category_code: 2015
    },
    {
      name: "Queijo Minas",
      ean: "7891001234682",
      primary_category_code: 2007,
      secondary_category_code: 2009
    },
    {
      name: "Mel",
      ean: "7891001234683",
      primary_category_code: 2025,
      secondary_category_code: null
    },
    {
      name: "Torrada com Ervas",
      ean: "7891001234684",
      primary_category_code: 2019,
      secondary_category_code: 2020
    },
    {
      name: "Pão de Batata",
      ean: "7891001234685",
      primary_category_code: 2019,
      secondary_category_code: 2020
    },
    {
      name: "Biscoito Maisena",
      ean: "7891001234686",
      primary_category_code: 2025,
      secondary_category_code: null
    },
    {
      name: "Cereal de Milho",
      ean: "7891001234687",
      primary_category_code: 2022,
      secondary_category_code: null
    },
    {
      name: "Barra de Cereal",
      ean: "7891001234688",
      primary_category_code: 2025,
      secondary_category_code: null
    },
    {
      name: "Chips de Banana",
      ean: "7891001234689",
      primary_category_code: 2025,
      secondary_category_code: null
    },
    {
      name: "Frango Empanado",
      ean: "7891001234690",
      primary_category_code: 2013,
      secondary_category_code: 2015
    },
    {
      name: "Caldo de Galinha",
      ean: "7891001234691",
      primary_category_code: 2004,
      secondary_category_code: null
    },
    {
      name: "Queijo Prato",
      ean: "7891001234692",
      primary_category_code: 2007,
      secondary_category_code: 2009
    },
    {
      name: "Feijão Verde",
      ean: "7891001234693",
      primary_category_code: 2022,
      secondary_category_code: 2024
    },
    {
      name: "Iogurte de Morango",
      ean: "7891001234694",
      primary_category_code: 2007,
      secondary_category_code: null
    },
    {
      name: "Granola com Mel",
      ean: "7891001234695",
      primary_category_code: 2022,
      secondary_category_code: null
    },
    {
      name: "Macarrão Integral",
      ean: "7891001234696",
      primary_category_code: 2022,
      secondary_category_code: null
    },
    {
      name: "Tapioca",
      ean: "7891001234697",
      primary_category_code: 2022,
      secondary_category_code: null
    },
    {
      name: "Farinha de Rosca",
      ean: "7891001234698",
      primary_category_code: 2022,
      secondary_category_code: null
    },
    {
      name: "Coxinha de Charque",
      ean: "7891001234699",
      primary_category_code: 2025,
      secondary_category_code: null
    },
    {
      name: "Sopa Instantânea",
      ean: "7891001234700",
      primary_category_code: 2004,
      secondary_category_code: null
    },
    {
      name: "Caju",
      ean: "7891001234701",
      primary_category_code: 2001,
      secondary_category_code: 2003
    },
    {
      name: "Coco",
      ean: "7891001234702",
      primary_category_code: 2001,
      secondary_category_code: 2003
    },
    {
      name: "Pitaya",
      ean: "7891001234703",
      primary_category_code: 2001,
      secondary_category_code: 2003
    },
    {
      name: "Carambola",
      ean: "7891001234704",
      primary_category_code: 2001,
      secondary_category_code: 2003
    },
    {
      name: "Ameixa",
      ean: "7891001234705",
      primary_category_code: 2001,
      secondary_category_code: null
    },
    {
      name: "Pera",
      ean: "7891001234706",
      primary_category_code: 2001,
      secondary_category_code: null
    },
    {
      name: "Kiwi",
      ean: "7891001234707",
      primary_category_code: 2001,
      secondary_category_code: 2003
    },
    {
      name: "Romã",
      ean: "7891001234708",
      primary_category_code: 2001,
      secondary_category_code: null
    },
    {
      name: "Cereja",
      ean: "7891001234709",
      primary_category_code: 2001,
      secondary_category_code: null
    },
    {
      name: "Uva Passa",
      ean: "7891001234710",
      primary_category_code: 2001,
      secondary_category_code: null
    },
    {
      name: "Aspargos",
      ean: "7891001234711",
      primary_category_code: 2004,
      secondary_category_code: null
    },
    {
      name: "Alcachofra",
      ean: "7891001234712",
      primary_category_code: 2004,
      secondary_category_code: null
    },
    {
      name: "Rabanete",
      ean: "7891001234713",
      primary_category_code: 2004,
      secondary_category_code: 2006
    },
    {
      name: "Chuchu",
      ean: "7891001234714",
      primary_category_code: 2004,
      secondary_category_code: 2006
    },
    {
      name: "Inhame",
      ean: "7891001234715",
      primary_category_code: 2004,
      secondary_category_code: 2006
    },
    {
      name: "Quiabo",
      ean: "7891001234716",
      primary_category_code: 2004,
      secondary_category_code: 2005
    },
    {
      name: "Abobrinha",
      ean: "7891001234717",
      primary_category_code: 2004,
      secondary_category_code: 2006
    },
    {
      name: "Brotos de Bambu",
      ean: "7891001234718",
      primary_category_code: 2004,
      secondary_category_code: null
    },
    {
      name: "Couve-Rábano",
      ean: "7891001234719",
      primary_category_code: 2004,
      secondary_category_code: null
    },
    {
      name: "Cebola Roxa",
      ean: "7891001234720",
      primary_category_code: 2004,
      secondary_category_code: null
    },
    {
      name: "Leite Fermentado",
      ean: "7891001234721",
      primary_category_code: 2007,
      secondary_category_code: null
    },
    {
      name: "Iogurte de Baunilha",
      ean: "7891001234722",
      primary_category_code: 2007,
      secondary_category_code: null
    },
    {
      name: "Creme de Ricota",
      ean: "7891001234723",
      primary_category_code: 2007,
      secondary_category_code: 2009
    },
    {
      name: "Queijo Gorgonzola",
      ean: "7891001234724",
      primary_category_code: 2007,
      secondary_category_code: 2009
    },
    {
      name: "Queijo Cottage",
      ean: "7891001234725",
      primary_category_code: 2007,
      secondary_category_code: 2009
    },
    {
      name: "Leite de Coco",
      ean: "7891001234726",
      primary_category_code: 2007,
      secondary_category_code: null
    },
    {
      name: "Refrigerante de Laranja",
      ean: "7891001234727",
      primary_category_code: 2010,
      secondary_category_code: 2011
    },
    {
      name: "Refrigerante de Limão",
      ean: "7891001234728",
      primary_category_code: 2010,
      secondary_category_code: 2011
    },
    {
      name: "Água com Gás",
      ean: "7891001234729",
      primary_category_code: 2010,
      secondary_category_code: null
    },
    {
      name: "Suco Detox Verde",
      ean: "7891001234730",
      primary_category_code: 2010,
      secondary_category_code: 2012
    },
    {
      name: "Chá de Camomila",
      ean: "7891001234731",
      primary_category_code: 2010,
      secondary_category_code: null
    },
    {
      name: "Chá Preto",
      ean: "7891001234732",
      primary_category_code: 2010,
      secondary_category_code: null
    },
    {
      name: "Cerveja IPA",
      ean: "7891001234733",
      primary_category_code: 2010,
      secondary_category_code: null
    },
    {
      name: "Linguiça Toscana",
      ean: "7891001234734",
      primary_category_code: 2013,
      secondary_category_code: 2014
    },
    {
      name: "Carne Moída",
      ean: "7891001234735",
      primary_category_code: 2013,
      secondary_category_code: 2014
    },
    {
      name: "Bisteca Suína",
      ean: "7891001234736",
      primary_category_code: 2013,
      secondary_category_code: 2014
    },
    {
      name: "Filé de Tilápia",
      ean: "7891001234737",
      primary_category_code: 2016,
      secondary_category_code: 2017
    },
    {
      name: "Bacalhau Salgado",
      ean: "7891001234738",
      primary_category_code: 2016,
      secondary_category_code: 2017
    },
    {
      name: "Anéis de Lula",
      ean: "7891001234739",
      primary_category_code: 2016,
      secondary_category_code: 2018
    },
    {
      name: "Sardinha em Óleo",
      ean: "7891001234740",
      primary_category_code: 2016,
      secondary_category_code: 2017
    },
    {
      name: "Baguete",
      ean: "7891001234741",
      primary_category_code: 2019,
      secondary_category_code: 2020
    },
    {
      name: "Brioche",
      ean: "7891001234742",
      primary_category_code: 2019,
      secondary_category_code: 2020
    },
    {
      name: "Pastel de Belém",
      ean: "7891001234743",
      primary_category_code: 2019,
      secondary_category_code: 2021
    },
    {
      name: "Croissant de Chocolate",
      ean: "7891001234744",
      primary_category_code: 2019,
      secondary_category_code: 2021
    },
    {
      name: "Pudim de Coco",
      ean: "7891001234745",
      primary_category_code: 2019,
      secondary_category_code: 2021
    },
    {
      name: "Rosca de Canela",
      ean: "7891001234746",
      primary_category_code: 2019,
      secondary_category_code: 2021
    },
    {
      name: "Cuscuz",
      ean: "7891001234747",
      primary_category_code: 2022,
      secondary_category_code: null
    },
    {
      name: "Macarrão de Arroz",
      ean: "7891001234748",
      primary_category_code: 2022,
      secondary_category_code: null
    },
    {
      name: "Quinoa",
      ean: "7891001234749",
      primary_category_code: 2022,
      secondary_category_code: null
    },
    {
      name: "Sagu",
      ean: "7891001234750",
      primary_category_code: 2022,
      secondary_category_code: null
    },
    {
      name: "Amendoim Japonês",
      ean: "7891001234751",
      primary_category_code: 2025,
      secondary_category_code: null
    },
    {
      name: "Castanha de Caju",
      ean: "7891001234752",
      primary_category_code: 2025,
      secondary_category_code: null
    },
    {
      name: "Biscoito de Coco",
      ean: "7891001234753",
      primary_category_code: 2025,
      secondary_category_code: null
    },
    {
      name: "Pipoca Sabor Queijo",
      ean: "7891001234754",
      primary_category_code: 2025,
      secondary_category_code: null
    },
    {
      name: "Bolinho de Cenoura",
      ean: "7891001234755",
      primary_category_code: 2019,
      secondary_category_code: 2021
    },
    {
      name: "Muffin de Banana",
      ean: "7891001234756",
      primary_category_code: 2019,
      secondary_category_code: 2021
    },
    {
      name: "Cupcake de Morango",
      ean: "7891001234757",
      primary_category_code: 2019,
      secondary_category_code: 2021
    },
    {
      name: "Pizza Congelada",
      ean: "7891001234758",
      primary_category_code: 2025,
      secondary_category_code: null
    },
    {
      name: "Sopa de Abóbora",
      ean: "7891001234759",
      primary_category_code: 2004,
      secondary_category_code: null
    },
    {
      name: "Caldo Verde",
      ean: "7891001234760",
      primary_category_code: 2004,
      secondary_category_code: null
    },
    {
      name: "Bolinho de Milho",
      ean: "7891001234761",
      primary_category_code: 2019,
      secondary_category_code: 2021
    },
    {
      name: "Coxinha Vegana",
      ean: "7891001234762",
      primary_category_code: 2025,
      secondary_category_code: null
    },
    {
      name: "Empanada",
      ean: "7891001234763",
      primary_category_code: 2025,
      secondary_category_code: null
    },
    {
      name: "Panetone",
      ean: "7891001234764",
      primary_category_code: 2019,
      secondary_category_code: 2021
    },
    {
      name: "Torrada de Grãos",
      ean: "7891001234765",
      primary_category_code: 2019,
      secondary_category_code: 2020
    },
    {
      name: "Waffle",
      ean: "7891001234766",
      primary_category_code: 2019,
      secondary_category_code: 2020
    },
    {
      name: "Crepe Congelado",
      ean: "7891001234767",
      primary_category_code: 2019,
      secondary_category_code: 2021
    },
    {
      name: "Frios Sortidos",
      ean: "7891001234768",
      primary_category_code: 2007,
      secondary_category_code: 2009
    },
    {
      name: "Molho Barbecue",
      ean: "7891001234769",
      primary_category_code: 2004,
      secondary_category_code: null
    },
    {
      name: "Patê de Atum",
      ean: "7891001234770",
      primary_category_code: 2016,
      secondary_category_code: 2017
    },
    {
      name: "Patê de Frango",
      ean: "7891001234771",
      primary_category_code: 2013,
      secondary_category_code: 2015
    },
    {
      name: "Snack de Ervilha",
      ean: "7891001234772",
      primary_category_code: 2025,
      secondary_category_code: null
    },
    {
      name: "Barrinha Proteica",
      ean: "7891001234773",
      primary_category_code: 2025,
      secondary_category_code: null
    },
    {
      name: "Chips de Maçã",
      ean: "7891001234774",
      primary_category_code: 2025,
      secondary_category_code: null
    },
    {
      name: "Chips de Coco",
      ean: "7891001234775",
      primary_category_code: 2025,
      secondary_category_code: null
    },
    {
      name: "Granola com Frutas",
      ean: "7891001234776",
      primary_category_code: 2022,
      secondary_category_code: null
    },
    {
      name: "Farinha de Centeio",
      ean: "7891001234777",
      primary_category_code: 2022,
      secondary_category_code: null
    },
    {
      name: "Farinha de Grão de Bico",
      ean: "7891001234778",
      primary_category_code: 2022,
      secondary_category_code: null
    },
    {
      name: "Biscoito Sem Glúten",
      ean: "7891001234779",
      primary_category_code: 2025,
      secondary_category_code: null
    },
    {
      name: "Chocolate Quente",
      ean: "7891001234780",
      primary_category_code: 2010,
      secondary_category_code: null
    },
    {
      name: "Achocolatado em Pó",
      ean: "7891001234781",
      primary_category_code: 2010,
      secondary_category_code: null
    },
    {
      name: "Macarrão de Milho",
      ean: "7891001234782",
      primary_category_code: 2022,
      secondary_category_code: null
    },
    {
      name: "Leite de Amêndoas",
      ean: "7891001234783",
      primary_category_code: 2007,
      secondary_category_code: null
    },
    {
      name: "Leite de Aveia",
      ean: "7891001234784",
      primary_category_code: 2007,
      secondary_category_code: null
    },
    {
      name: "Queijo Cheddar",
      ean: "7891001234785",
      primary_category_code: 2007,
      secondary_category_code: 2009
    },
    {
      name: "Queijo Brie",
      ean: "7891001234786",
      primary_category_code: 2007,
      secondary_category_code: 2009
    },
    {
      name: "Queijo Camembert",
      ean: "7891001234787",
      primary_category_code: 2007,
      secondary_category_code: 2009
    },
    {
      name: "Sorvete Vegano",
      ean: "7891001234788",
      primary_category_code: 2007,
      secondary_category_code: null
    },
    {
      name: "Creme de Leite Fresco",
      ean: "7891001234789",
      primary_category_code: 2007,
      secondary_category_code: null
    },
    {
      name: "Geleia de Uva",
      ean: "7891001234790",
      primary_category_code: 2025,
      secondary_category_code: null
    },
    {
      name: "Molho de Alho",
      ean: "7891001234791",
      primary_category_code: 2004,
      secondary_category_code: null
    },
    {
      name: "Molho Pesto",
      ean: "7891001234792",
      primary_category_code: 2004,
      secondary_category_code: null
    },
    {
      name: "Tapioca com Coco",
      ean: "7891001234793",
      primary_category_code: 2022,
      secondary_category_code: null
    },
    {
      name: "Brownie",
      ean: "7891001234794",
      primary_category_code: 2019,
      secondary_category_code: 2021
    },
    {
      name: "Bolo de Cenoura com Cobertura",
      ean: "7891001234795",
      primary_category_code: 2019,
      secondary_category_code: 2021
    },
    {
      name: "Pão Multigrãos",
      ean: "7891001234796",
      primary_category_code: 2019,
      secondary_category_code: 2020
    }
  ];

const suppliers = [
    {
        cnpj: "12345678000100",
        code: 3001,
        location: { type: "Point", coordinates: [-46.633308, -23.550520] },
        address: "Avenida Paulista, 1000",
        state: "SP",
        city: "3550308"
    },
    {
        cnpj: "98765432000199",
        code: 3002,
        location: { type: "Point", coordinates: [-47.921820, -15.826691] },
        address: "Quadra 1, Bloco A",
        state: "DF",
        city: "5300108"
    },
    {
        cnpj: "45678912000188",
        code: 3003,
        location: { type: "Point", coordinates: [-38.501305, -12.971399] },
        address: "Rua das Flores, 300",
        state: "BA",
        city: "2927408"
    },
    {
        cnpj: "32165498000177",
        code: 3004,
        location: { type: "Point", coordinates: [-38.543370, -3.717220] },
        address: "Avenida Beira Mar, 1500",
        state: "CE",
        city: "2304400"
    },
    {
        cnpj: "65498721000166",
        code: 3005,
        location: { type: "Point", coordinates: [-43.172896, -22.906847] },
        address: "Rua dos Artistas, 123",
        state: "RJ",
        city: "3304557"
    }
];

const places = [
    {
        name: "Loja Centro SP",
        location: { type: "Point", coordinates: [-46.633308, -23.550520] },
        cnpj: "12345678000100",
        address: "Avenida Paulista, 1000",
        state: "SP",
        city: "3550308"
    },
    {
        name: "Loja Norte RJ",
        location: { type: "Point", coordinates: [-43.172896, -22.906847] },
        cnpj: "22345678000100",
        address: "Rua das Flores, 200",
        state: "RJ",
        city: "3304557"
    },
    {
        name: "Loja Sul BA",
        location: { type: "Point", coordinates: [-38.501305, -12.971399] },
        cnpj: "32345678000100",
        address: "Rua da Bahia, 150",
        state: "BA",
        city: "2927408"
    },
    {
        name: "Loja Leste DF",
        location: { type: "Point", coordinates: [-47.921820, -15.826691] },
        cnpj: "42345678000100",
        address: "Quadra 2, Bloco B",
        state: "DF",
        city: "5300108"
    },
    {
        name: "Loja Oeste CE",
        location: { type: "Point", coordinates: [-38.543370, -3.717220] },
        cnpj: "52345678000100",
        address: "Rua Beira Mar, 1500",
        state: "CE",
        city: "2304400"
    },
    {
        name: "Loja Central PA",
        location: { type: "Point", coordinates: [-48.502372, -1.455020] },
        cnpj: "62345678000100",
        address: "Praça da Sé, 100",
        state: "PA",
        city: "1501402"
    },
    {
        name: "Loja Zona Sul AM",
        location: { type: "Point", coordinates: [-60.021731, -3.119028] },
        cnpj: "72345678000100",
        address: "Rua Manaus, 500",
        state: "AM",
        city: "1302603"
    },
    {
        name: "Loja Zona Oeste MG",
        location: { type: "Point", coordinates: [-43.935238, -19.924502] },
        cnpj: "82345678000100",
        address: "Avenida Afonso Pena, 600",
        state: "MG",
        city: "3106200"
    },
    {
        name: "Loja Zona Norte PR",
        location: { type: "Point", coordinates: [-49.271272, -25.429596] },
        cnpj: "92345678000100",
        address: "Rua das Oliveiras, 300",
        state: "PR",
        city: "4106902"
    },
    {
        name: "Loja Nordeste PE",
        location: { type: "Point", coordinates: [-34.877545, -8.047562] },
        cnpj: "102345678000100",
        address: "Rua Recife, 250",
        state: "PE",
        city: "2611606"
    },
    {
        name: "Galpão Centro SP",
        location: { type: "Point", coordinates: [-46.633308, -23.550520] },
        cnpj: "112345678000100",
        address: "Rua dos Galpões, 50",
        state: "SP",
        city: "3550308"
    },
    {
        name: "Galpão Industrial RJ",
        location: { type: "Point", coordinates: [-43.172896, -22.906847] },
        cnpj: "122345678000100",
        address: "Avenida Industrial, 900",
        state: "RJ",
        city: "3304557"
    },
    {
        name: "Galpão Norte BA",
        location: { type: "Point", coordinates: [-38.501305, -12.971399] },
        cnpj: "132345678000100",
        address: "Rua dos Comerciantes, 80",
        state: "BA",
        city: "2927408"
    },
    {
        name: "Galpão Leste DF",
        location: { type: "Point", coordinates: [-47.921820, -15.826691] },
        cnpj: "142345678000100",
        address: "Área de Carga, 300",
        state: "DF",
        city: "5300108"
    },
    {
        name: "Galpão Oeste CE",
        location: { type: "Point", coordinates: [-38.543370, -3.717220] },
        cnpj: "152345678000100",
        address: "Rua do Porto, 1200",
        state: "CE",
        city: "2304400"
    },
    {
        name: "Galpão Central PA",
        location: { type: "Point", coordinates: [-48.502372, -1.455020] },
        cnpj: "162345678000100",
        address: "Rodovia Belém, 45",
        state: "PA",
        city: "1501402"
    },
    {
        name: "Galpão Zona Norte AM",
        location: { type: "Point", coordinates: [-60.021731, -3.119028] },
        cnpj: "172345678000100",
        address: "Avenida Amazônia, 1000",
        state: "AM",
        city: "1302603"
    },
    {
        name: "Galpão Zona Sul MG",
        location: { type: "Point", coordinates: [-43.935238, -19.924502] },
        cnpj: "182345678000100",
        address: "Rua do Comércio, 700",
        state: "MG",
        city: "3106200"
    },
    {
        name: "Galpão Zona Oeste PR",
        location: { type: "Point", coordinates: [-49.271272, -25.429596] },
        cnpj: "192345678000100",
        address: "Rua Industrial, 400",
        state: "PR",
        city: "4106902"
    },
    {
        name: "Galpão Nordeste PE",
        location: { type: "Point", coordinates: [-34.877545, -8.047562] },
        cnpj: "202345678000100",
        address: "Avenida Recife, 750",
        state: "PE",
        city: "2611606"
    }
];

db.createCollection("categories");
db.getCollection("categories").createIndex({ code: 1 });

db.getCollection("categories")
    .bulkWrite(
        categories.map((category) => ({
            updateOne: {
                filter: { code: category.code },
                update: { $set: category },
                upsert: true
            }
        }))
    );

db.createCollection("products");
db.getCollection("products").createIndex({ "ean": 1 });
db.getCollection("products").createIndex({ "category.primary.code": 1 });
db.getCollection("products").createIndex({ "category.secondary.code": 1 });

products
    .map((product) => ([
        product,
        db.getCollection("categories").findOne({ code: product.primary_category_code }),
        db.getCollection("categories").findOne({ code: product.secondary_category_code })
    ]))
    .map(([product, primaryCategory, secondaryCategory]) => ({
        name: product.name,
        ean: product.ean,
        category: {
            primary: {
                code: primaryCategory?.code || product.primary_category_code,
                name: primaryCategory?.name || "Categoria não encontrada"
            },
            secondary: {
                code: secondaryCategory?.code || product.secondary_category_code,
                name: secondaryCategory?.name || "Categoria não encontrada"
            }
        }
    }))
    .map((productDocument) => {
        db.getCollection("products").updateOne(
            { ean: productDocument.ean },
            { $set: productDocument },
            { upsert: true }
        );

        print(`Produto '${productDocument.name}' inserido ou atualizado com sucesso!`);
    });

db.createCollection("suppliers");
db.getCollection("suppliers").createIndex({ code: 1 });
db.getCollection("suppliers").createIndex({ cnpj: 1 });
db.getCollection("suppliers").createIndex({ location: "2dsphere" });

suppliers.map((supplier) => {
    db.getCollection("suppliers").updateOne(
        { cnpj: supplier.cnpj },
        { $set: supplier },
        { upsert: true }
    );
    print(`Fornecedor '${supplier.code}' inserido ou atualizado com sucesso!`);
});

db.createCollection("places");
db.getCollection("places").createIndex({ cnpj: 1 });
db.getCollection("places").createIndex({ location: "2dsphere" });


places.map((place) => {
    db.getCollection("places").updateOne(
        { cnpj: place.cnpj },
        { $set: place },
        { upsert: true }
    );

    print(`Place '${place.name}' inserido ou atualizado com sucesso!`);
});

