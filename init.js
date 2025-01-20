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

const purchase_orders = [
  {
    supplier_code: 3001,
    product_ean: "7891001234578",
    sold_at: "2023-10-01T12:00:00",
    expired_at: "2024-03-01T12:00:00",
    quantity: 80,
    price_by_unit: 15
  },
  {
    supplier_code: 3002,
    product_ean: "7891001234611",
    sold_at: "2023-09-15T14:30:00",
    expired_at: "2024-02-15T14:30:00",
    quantity: 50,
    price_by_unit: 12
  },
  {
    supplier_code: 3003,
    product_ean: "7891001234644",
    sold_at: "2023-08-10T09:00:00",
    expired_at: "2024-01-10T09:00:00",
    quantity: 120,
    price_by_unit: 25
  },
  {
    supplier_code: 3004,
    product_ean: "7891001234666",
    sold_at: "2023-07-20T11:45:00",
    expired_at: "2024-01-20T11:45:00",
    quantity: 95,
    price_by_unit: 20
  },
  {
    supplier_code: 3005,
    product_ean: "7891001234581",
    sold_at: "2023-06-05T10:30:00",
    expired_at: "2024-01-05T10:30:00",
    quantity: 110,
    price_by_unit: 19
  },
  {
    supplier_code: 3006,
    product_ean: "7891001234656",
    sold_at: "2023-08-01T15:00:00",
    expired_at: "2024-02-01T15:00:00",
    quantity: 130,
    price_by_unit: 16
  },
  {
    supplier_code: 3007,
    product_ean: "7891001234711",
    sold_at: "2023-09-12T12:15:00",
    expired_at: "2024-03-12T12:15:00",
    quantity: 75,
    price_by_unit: 18
  },
  {
    supplier_code: 3008,
    product_ean: "7891001234767",
    sold_at: "2023-07-25T14:45:00",
    expired_at: "2024-02-25T14:45:00",
    quantity: 200,
    price_by_unit: 10
  },
  {
    supplier_code: 3009,
    product_ean: "7891001234616",
    sold_at: "2023-06-15T10:00:00",
    expired_at: "2024-01-15T10:00:00",
    quantity: 140,
    price_by_unit: 13
  },
  {
    supplier_code: 3010,
    product_ean: "7891001234654",
    sold_at: "2023-11-05T13:30:00",
    expired_at: "2024-05-05T13:30:00",
    quantity: 170,
    price_by_unit: 22
  },
  {
    supplier_code: 3001,
    product_ean: "7891001234600",
    sold_at: "2023-09-10T15:45:00",
    expired_at: "2024-03-10T15:45:00",
    quantity: 90,
    price_by_unit: 14
  },
  {
    supplier_code: 3002,
    product_ean: "7891001234686",
    sold_at: "2023-07-20T08:30:00",
    expired_at: "2024-01-20T08:30:00",
    quantity: 150,
    price_by_unit: 17
  },
  {
    supplier_code: 3003,
    product_ean: "7891001234776",
    sold_at: "2023-06-25T14:00:00",
    expired_at: "2024-02-25T14:00:00",
    quantity: 80,
    price_by_unit: 20
  },
  {
    supplier_code: 3004,
    product_ean: "7891001234651",
    sold_at: "2023-08-15T11:00:00",
    expired_at: "2024-02-15T11:00:00",
    quantity: 60,
    price_by_unit: 23
  },
  {
    supplier_code: 3005,
    product_ean: "7891001234626",
    sold_at: "2023-10-01T09:45:00",
    expired_at: "2024-04-01T09:45:00",
    quantity: 50,
    price_by_unit: 16
  },
  {
    supplier_code: 3006,
    product_ean: "7891001234665",
    sold_at: "2023-09-05T12:15:00",
    expired_at: "2024-03-05T12:15:00",
    quantity: 200,
    price_by_unit: 15
  },
  {
    supplier_code: 3007,
    product_ean: "7891001234591",
    sold_at: "2023-06-10T10:30:00",
    expired_at: "2024-01-10T10:30:00",
    quantity: 100,
    price_by_unit: 12
  },
  {
    supplier_code: 3008,
    product_ean: "7891001234610",
    sold_at: "2023-08-30T14:45:00",
    expired_at: "2024-02-28T14:45:00",
    quantity: 75,
    price_by_unit: 19
  },
  {
    supplier_code: 3009,
    product_ean: "7891001234721",
    sold_at: "2023-07-05T11:00:00",
    expired_at: "2024-01-05T11:00:00",
    quantity: 120,
    price_by_unit: 11
  },
  {
    supplier_code: 3010,
    product_ean: "7891001234769",
    sold_at: "2023-10-20T13:15:00",
    expired_at: "2024-04-20T13:15:00",
    quantity: 60,
    price_by_unit: 18
  },
  {
    supplier_code: 3001,
    product_ean: "7891001234644",
    sold_at: "2023-09-25T15:30:00",
    expired_at: "2024-03-25T15:30:00",
    quantity: 90,
    price_by_unit: 14
  },
  {
    supplier_code: 3002,
    product_ean: "7891001234771",
    sold_at: "2023-08-15T11:45:00",
    expired_at: "2024-02-15T11:45:00",
    quantity: 170,
    price_by_unit: 21
  },
  {
    supplier_code: 3003,
    product_ean: "7891001234589",
    sold_at: "2023-07-30T10:15:00",
    expired_at: "2024-01-30T10:15:00",
    quantity: 140,
    price_by_unit: 17
  },
  {
    supplier_code: 3004,
    product_ean: "7891001234656",
    sold_at: "2023-06-20T09:30:00",
    expired_at: "2024-01-20T09:30:00",
    quantity: 80,
    price_by_unit: 12
  },
  {
    supplier_code: 3005,
    product_ean: "7891001234671",
    sold_at: "2023-08-10T15:00:00",
    expired_at: "2024-02-10T15:00:00",
    quantity: 60,
    price_by_unit: 13
  },
  {
    supplier_code: 3006,
    product_ean: "7891001234642",
    sold_at: "2023-09-01T08:45:00",
    expired_at: "2024-03-01T08:45:00",
    quantity: 75,
    price_by_unit: 22
  },
  {
    supplier_code: 3007,
    product_ean: "7891001234678",
    sold_at: "2023-07-15T13:30:00",
    expired_at: "2024-01-15T13:30:00",
    quantity: 150,
    price_by_unit: 25
  },
  {
    supplier_code: 3008,
    product_ean: "7891001234796",
    sold_at: "2023-06-05T12:00:00",
    expired_at: "2024-02-05T12:00:00",
    quantity: 90,
    price_by_unit: 16
  },
  {
    supplier_code: 3009,
    product_ean: "7891001234614",
    sold_at: "2023-08-01T14:15:00",
    expired_at: "2024-02-01T14:15:00",
    quantity: 80,
    price_by_unit: 19
  },
  {
    supplier_code: 3010,
    product_ean: "7891001234720",
    sold_at: "2023-09-12T10:30:00",
    expired_at: "2024-03-12T10:30:00",
    quantity: 140,
    price_by_unit: 11
  },
  {
    supplier_code: 3001,
    product_ean: "7891001234627",
    sold_at: "2023-07-01T15:00:00",
    expired_at: "2024-01-01T15:00:00",
    quantity: 60,
    price_by_unit: 17
  },
  {
    supplier_code: 3002,
    product_ean: "7891001234658",
    sold_at: "2023-08-25T08:45:00",
    expired_at: "2024-02-25T08:45:00",
    quantity: 100,
    price_by_unit: 10
  },
  {
    supplier_code: 3003,
    product_ean: "7891001234749",
    sold_at: "2023-10-20T14:30:00",
    expired_at: "2024-04-20T14:30:00",
    quantity: 50,
    price_by_unit: 14
  },
  {
    supplier_code: 3004,
    product_ean: "7891001234696",
    sold_at: "2023-06-15T12:15:00",
    expired_at: "2024-02-15T12:15:00",
    quantity: 120,
    price_by_unit: 15
  },
  {
    supplier_code: 3005,
    product_ean: "7891001234581",
    sold_at: "2023-09-05T09:30:00",
    expired_at: "2024-03-05T09:30:00",
    quantity: 90,
    price_by_unit: 13
  },
  {
    supplier_code: 3006,
    product_ean: "7891001234659",
    sold_at: "2023-08-10T11:15:00",
    expired_at: "2024-02-10T11:15:00",
    quantity: 140,
    price_by_unit: 21
  },
  {
    supplier_code: 3007,
    product_ean: "7891001234781",
    sold_at: "2023-07-20T13:00:00",
    expired_at: "2024-01-20T13:00:00",
    quantity: 75,
    price_by_unit: 18
  },
  {
    supplier_code: 3008,
    product_ean: "7891001234731",
    sold_at: "2023-09-25T15:30:00",
    expired_at: "2024-03-25T15:30:00",
    quantity: 170,
    price_by_unit: 20
  },
  {
    supplier_code: 3009,
    product_ean: "7891001234665",
    sold_at: "2023-10-15T14:00:00",
    expired_at: "2024-04-15T14:00:00",
    quantity: 50,
    price_by_unit: 23
  },
  {
    supplier_code: 3010,
    product_ean: "7891001234770",
    sold_at: "2023-08-01T12:30:00",
    expired_at: "2024-02-01T12:30:00",
    quantity: 60,
    price_by_unit: 16
  },
  {
    supplier_code: 3001,
    product_ean: "7891001234599",
    sold_at: "2023-09-05T15:45:00",
    expired_at: "2024-03-05T15:45:00",
    quantity: 140,
    price_by_unit: 19
  },
  {
    supplier_code: 3002,
    product_ean: "7891001234716",
    sold_at: "2023-07-15T14:15:00",
    expired_at: "2024-01-15T14:15:00",
    quantity: 200,
    price_by_unit: 10
  },
  {
    supplier_code: 3003,
    product_ean: "7891001234611",
    sold_at: "2023-06-01T10:30:00",
    expired_at: "2024-02-01T10:30:00",
    quantity: 90,
    price_by_unit: 13
  },
  {
    supplier_code: 3004,
    product_ean: "7891001234696",
    sold_at: "2023-10-20T09:45:00",
    expired_at: "2024-04-20T09:45:00",
    quantity: 50,
    price_by_unit: 15
  },
  {
    supplier_code: 3005,
    product_ean: "7891001234677",
    sold_at: "2023-08-25T12:15:00",
    expired_at: "2024-02-25T12:15:00",
    quantity: 140,
    price_by_unit: 14
  },
  {
    supplier_code: 3006,
    product_ean: "7891001234651",
    sold_at: "2023-07-10T11:30:00",
    expired_at: "2024-01-10T11:30:00",
    quantity: 75,
    price_by_unit: 22
  },
  {
    supplier_code: 3007,
    product_ean: "7891001234665",
    sold_at: "2023-09-12T14:45:00",
    expired_at: "2024-03-12T14:45:00",
    quantity: 120,
    price_by_unit: 12
  },
  {
    supplier_code: 3008,
    product_ean: "7891001234686",
    sold_at: "2023-06-15T15:30:00",
    expired_at: "2024-02-15T15:30:00",
    quantity: 60,
    price_by_unit: 20
  },
  {
    supplier_code: 3009,
    product_ean: "7891001234746",
    sold_at: "2023-08-01T10:15:00",
    expired_at: "2024-02-01T10:15:00",
    quantity: 75,
    price_by_unit: 18
  },
  {
    supplier_code: 3010,
    product_ean: "7891001234626",
    sold_at: "2023-09-10T13:30:00",
    expired_at: "2024-03-10T13:30:00",
    quantity: 200,
    price_by_unit: 14
  },
  {
    supplier_code: 3001,
    product_ean: "7891001234766",
    sold_at: "2023-10-05T09:00:00",
    expired_at: "2024-04-05T09:00:00",
    quantity: 90,
    price_by_unit: 16
  },
  {
    supplier_code: 3002,
    product_ean: "7891001234677",
    sold_at: "2023-07-20T12:45:00",
    expired_at: "2024-01-20T12:45:00",
    quantity: 140,
    price_by_unit: 11
  },
  {
    supplier_code: 3003,
    product_ean: "7891001234716",
    sold_at: "2023-08-30T14:00:00",
    expired_at: "2024-02-28T14:00:00",
    quantity: 80,
    price_by_unit: 25
  },
  {
    supplier_code: 3004,
    product_ean: "7891001234744",
    sold_at: "2023-09-12T11:15:00",
    expired_at: "2024-03-12T11:15:00",
    quantity: 60,
    price_by_unit: 17
  },
  {
    supplier_code: 3005,
    product_ean: "7891001234609",
    sold_at: "2023-07-05T13:30:00",
    expired_at: "2024-01-05T13:30:00",
    quantity: 75,
    price_by_unit: 18
  },
  {
    supplier_code: 3006,
    product_ean: "7891001234711",
    sold_at: "2023-08-20T14:45:00",
    expired_at: "2024-02-20T14:45:00",
    quantity: 90,
    price_by_unit: 13
  },
  {
    supplier_code: 3007,
    product_ean: "7891001234776",
    sold_at: "2023-10-01T12:30:00",
    expired_at: "2024-04-01T12:30:00",
    quantity: 60,
    price_by_unit: 21
  },
  {
    supplier_code: 3008,
    product_ean: "7891001234788",
    sold_at: "2023-06-15T10:15:00",
    expired_at: "2024-02-15T10:15:00",
    quantity: 170,
    price_by_unit: 14
  },
  {
    supplier_code: 3009,
    product_ean: "7891001234581",
    sold_at: "2023-09-20T11:30:00",
    expired_at: "2024-03-20T11:30:00",
    quantity: 140,
    price_by_unit: 16
  },
  {
    supplier_code: 3010,
    product_ean: "7891001234765",
    sold_at: "2023-07-01T15:00:00",
    expired_at: "2024-01-01T15:00:00",
    quantity: 200,
    price_by_unit: 10
  },
  {
    supplier_code: 3001,
    product_ean: "7891001234696",
    sold_at: "2023-11-10T10:00:00",
    expired_at: "2024-05-10T10:00:00",
    quantity: 120,
    price_by_unit: 18
  },
  {
    supplier_code: 3002,
    product_ean: "7891001234611",
    sold_at: "2023-09-25T14:30:00",
    expired_at: "2024-03-25T14:30:00",
    quantity: 75,
    price_by_unit: 12
  },
  {
    supplier_code: 3003,
    product_ean: "7891001234654",
    sold_at: "2023-10-05T09:00:00",
    expired_at: "2024-04-05T09:00:00",
    quantity: 150,
    price_by_unit: 20
  },
  {
    supplier_code: 3004,
    product_ean: "7891001234786",
    sold_at: "2023-06-10T08:30:00",
    expired_at: "2024-01-10T08:30:00",
    quantity: 95,
    price_by_unit: 14
  },
  {
    supplier_code: 3005,
    product_ean: "7891001234711",
    sold_at: "2023-08-01T13:15:00",
    expired_at: "2024-02-01T13:15:00",
    quantity: 60,
    price_by_unit: 21
  },
  {
    supplier_code: 3006,
    product_ean: "7891001234601",
    sold_at: "2023-07-15T15:45:00",
    expired_at: "2024-01-15T15:45:00",
    quantity: 110,
    price_by_unit: 19
  },
  {
    supplier_code: 3007,
    product_ean: "7891001234664",
    sold_at: "2023-11-20T12:30:00",
    expired_at: "2024-05-20T12:30:00",
    quantity: 140,
    price_by_unit: 10
  },
  {
    supplier_code: 3008,
    product_ean: "7891001234765",
    sold_at: "2023-10-01T10:30:00",
    expired_at: "2024-04-01T10:30:00",
    quantity: 170,
    price_by_unit: 13
  },
  {
    supplier_code: 3009,
    product_ean: "7891001234610",
    sold_at: "2023-08-12T15:00:00",
    expired_at: "2024-02-12T15:00:00",
    quantity: 50,
    price_by_unit: 16
  },
  {
    supplier_code: 3010,
    product_ean: "7891001234622",
    sold_at: "2023-09-01T11:45:00",
    expired_at: "2024-03-01T11:45:00",
    quantity: 75,
    price_by_unit: 25
  },
  {
    supplier_code: 3001,
    product_ean: "7891001234578",
    sold_at: "2023-10-10T09:15:00",
    expired_at: "2024-04-10T09:15:00",
    quantity: 60,
    price_by_unit: 18
  },
  {
    supplier_code: 3002,
    product_ean: "7891001234644",
    sold_at: "2023-07-30T12:00:00",
    expired_at: "2024-01-30T12:00:00",
    quantity: 90,
    price_by_unit: 15
  },
  {
    supplier_code: 3003,
    product_ean: "7891001234696",
    sold_at: "2023-08-05T14:30:00",
    expired_at: "2024-02-05T14:30:00",
    quantity: 200,
    price_by_unit: 23
  },
  {
    supplier_code: 3004,
    product_ean: "7891001234711",
    sold_at: "2023-06-20T11:30:00",
    expired_at: "2024-01-20T11:30:00",
    quantity: 140,
    price_by_unit: 19
  },
  {
    supplier_code: 3005,
    product_ean: "7891001234767",
    sold_at: "2023-07-25T10:45:00",
    expired_at: "2024-01-25T10:45:00",
    quantity: 110,
    price_by_unit: 17
  },
  {
    supplier_code: 3006,
    product_ean: "7891001234644",
    sold_at: "2023-08-15T13:15:00",
    expired_at: "2024-02-15T13:15:00",
    quantity: 75,
    price_by_unit: 22
  },
  {
    supplier_code: 3007,
    product_ean: "7891001234654",
    sold_at: "2023-09-05T09:30:00",
    expired_at: "2024-03-05T09:30:00",
    quantity: 120,
    price_by_unit: 11
  },
  {
    supplier_code: 3008,
    product_ean: "7891001234796",
    sold_at: "2023-11-01T14:00:00",
    expired_at: "2024-05-01T14:00:00",
    quantity: 50,
    price_by_unit: 14
  },
  {
    supplier_code: 3009,
    product_ean: "7891001234696",
    sold_at: "2023-09-10T10:00:00",
    expired_at: "2024-03-10T10:00:00",
    quantity: 140,
    price_by_unit: 18
  },
  {
    supplier_code: 3010,
    product_ean: "7891001234731",
    sold_at: "2023-08-25T08:30:00",
    expired_at: "2024-02-25T08:30:00",
    quantity: 170,
    price_by_unit: 12
  },
  {
    supplier_code: 3001,
    product_ean: "7891001234786",
    sold_at: "2023-06-01T15:45:00",
    expired_at: "2024-01-01T15:45:00",
    quantity: 100,
    price_by_unit: 13
  },
  {
    supplier_code: 3002,
    product_ean: "7891001234716",
    sold_at: "2023-09-15T10:30:00",
    expired_at: "2024-03-15T10:30:00",
    quantity: 90,
    price_by_unit: 21
  },
  {
    supplier_code: 3003,
    product_ean: "7891001234788",
    sold_at: "2023-10-20T12:15:00",
    expired_at: "2024-04-20T12:15:00",
    quantity: 75,
    price_by_unit: 19
  },
  {
    supplier_code: 3004,
    product_ean: "7891001234765",
    sold_at: "2023-08-12T13:00:00",
    expired_at: "2024-02-12T13:00:00",
    quantity: 60,
    price_by_unit: 25
  },
  {
    supplier_code: 3005,
    product_ean: "7891001234651",
    sold_at: "2023-09-25T11:30:00",
    expired_at: "2024-03-25T11:30:00",
    quantity: 120,
    price_by_unit: 10
  },
  {
    supplier_code: 3006,
    product_ean: "7891001234599",
    sold_at: "2023-07-01T14:45:00",
    expired_at: "2024-01-01T14:45:00",
    quantity: 50,
    price_by_unit: 16
  },
  {
    supplier_code: 3007,
    product_ean: "7891001234581",
    sold_at: "2023-06-10T09:15:00",
    expired_at: "2024-01-10T09:15:00",
    quantity: 200,
    price_by_unit: 14
  },
  {
    supplier_code: 3008,
    product_ean: "7891001234796",
    sold_at: "2023-08-05T12:30:00",
    expired_at: "2024-02-05T12:30:00",
    quantity: 75,
    price_by_unit: 20
  },
  {
    supplier_code: 3009,
    product_ean: "7891001234622",
    sold_at: "2023-09-12T10:45:00",
    expired_at: "2024-03-12T10:45:00",
    quantity: 150,
    price_by_unit: 17
  },
  {
    supplier_code: 3010,
    product_ean: "7891001234731",
    sold_at: "2023-06-30T11:30:00",
    expired_at: "2024-01-30T11:30:00",
    quantity: 60,
    price_by_unit: 19
  },
  {
    supplier_code: 3001,
    product_ean: "7891001234654",
    sold_at: "2023-07-15T12:15:00",
    expired_at: "2024-01-15T12:15:00",
    quantity: 90,
    price_by_unit: 22
  },
  {
    supplier_code: 3002,
    product_ean: "7891001234600",
    sold_at: "2023-09-01T10:00:00",
    expired_at: "2024-03-01T10:00:00",
    quantity: 170,
    price_by_unit: 15
  },
  {
    supplier_code: 3003,
    product_ean: "7891001234686",
    sold_at: "2023-08-20T14:30:00",
    expired_at: "2024-02-20T14:30:00",
    quantity: 50,
    price_by_unit: 13
  },
  {
    supplier_code: 3004,
    product_ean: "7891001234786",
    sold_at: "2023-06-05T15:15:00",
    expired_at: "2024-01-05T15:15:00",
    quantity: 140,
    price_by_unit: 18
  },
  {
    supplier_code: 3005,
    product_ean: "7891001234581",
    sold_at: "2023-09-15T13:30:00",
    expired_at: "2024-03-15T13:30:00",
    quantity: 75,
    price_by_unit: 16
  },
  {
    supplier_code: 3006,
    product_ean: "7891001234696",
    sold_at: "2023-08-01T10:15:00",
    expired_at: "2024-02-01T10:15:00",
    quantity: 60,
    price_by_unit: 14
  },
  {
    supplier_code: 3007,
    product_ean: "7891001234765",
    sold_at: "2023-07-25T11:45:00",
    expired_at: "2024-01-25T11:45:00",
    quantity: 120,
    price_by_unit: 20
  },
  {
    supplier_code: 3008,
    product_ean: "7891001234716",
    sold_at: "2023-09-05T08:45:00",
    expired_at: "2024-03-05T08:45:00",
    quantity: 90,
    price_by_unit: 11
  },
  {
    supplier_code: 3009,
    product_ean: "7891001234767",
    sold_at: "2023-08-12T13:30:00",
    expired_at: "2024-02-12T13:30:00",
    quantity: 140,
    price_by_unit: 17
  },
  {
    supplier_code: 3010,
    product_ean: "7891001234731",
    sold_at: "2023-10-01T14:45:00",
    expired_at: "2024-04-01T14:45:00",
    quantity: 200,
    price_by_unit: 25
  },
  {
    supplier_code: 3001,
    product_ean: "7891001234788",
    sold_at: "2023-09-15T10:00:00",
    expired_at: "2024-03-15T10:00:00",
    quantity: 140,
    price_by_unit: 22
  },
  {
    supplier_code: 3002,
    product_ean: "7891001234796",
    sold_at: "2023-07-20T11:00:00",
    expired_at: "2024-01-20T11:00:00",
    quantity: 170,
    price_by_unit: 18
  },
  {
    supplier_code: 3003,
    product_ean: "7891001234765",
    sold_at: "2023-08-25T14:30:00",
    expired_at: "2024-02-25T14:30:00",
    quantity: 60,
    price_by_unit: 12
  },
  {
    supplier_code: 3004,
    product_ean: "7891001234611",
    sold_at: "2023-10-15T12:15:00",
    expired_at: "2024-04-15T12:15:00",
    quantity: 75,
    price_by_unit: 19
  },
  {
    supplier_code: 3005,
    product_ean: "7891001234651",
    sold_at: "2023-06-10T13:45:00",
    expired_at: "2024-01-10T13:45:00",
    quantity: 90,
    price_by_unit: 13
  },
  {
    supplier_code: 3006,
    product_ean: "7891001234599",
    sold_at: "2023-07-05T15:00:00",
    expired_at: "2024-01-05T15:00:00",
    quantity: 140,
    price_by_unit: 11
  },
  {
    supplier_code: 3007,
    product_ean: "7891001234686",
    sold_at: "2023-08-15T10:15:00",
    expired_at: "2024-02-15T10:15:00",
    quantity: 50,
    price_by_unit: 23
  },
  {
    supplier_code: 3008,
    product_ean: "7891001234622",
    sold_at: "2023-09-10T14:45:00",
    expired_at: "2024-03-10T14:45:00",
    quantity: 170,
    price_by_unit: 15
  },
  {
    supplier_code: 3009,
    product_ean: "7891001234796",
    sold_at: "2023-10-01T08:30:00",
    expired_at: "2024-04-01T08:30:00",
    quantity: 60,
    price_by_unit: 14
  },
  {
    supplier_code: 3010,
    product_ean: "7891001234711",
    sold_at: "2023-08-05T10:30:00",
    expired_at: "2024-02-05T10:30:00",
    quantity: 75,
    price_by_unit: 18
  },
  {
    supplier_code: 3001,
    product_ean: "7891001234654",
    sold_at: "2023-09-15T11:45:00",
    expired_at: "2024-03-15T11:45:00",
    quantity: 90,
    price_by_unit: 10
  },
  {
    supplier_code: 3002,
    product_ean: "7891001234581",
    sold_at: "2023-10-05T14:00:00",
    expired_at: "2024-04-05T14:00:00",
    quantity: 120,
    price_by_unit: 25
  },
  {
    supplier_code: 3003,
    product_ean: "7891001234731",
    sold_at: "2023-06-25T12:15:00",
    expired_at: "2024-01-25T12:15:00",
    quantity: 50,
    price_by_unit: 19
  },
  {
    supplier_code: 3004,
    product_ean: "7891001234599",
    sold_at: "2023-09-12T15:30:00",
    expired_at: "2024-03-12T15:30:00",
    quantity: 140,
    price_by_unit: 17
  },
  {
    supplier_code: 3005,
    product_ean: "7891001234788",
    sold_at: "2023-07-20T09:45:00",
    expired_at: "2024-01-20T09:45:00",
    quantity: 110,
    price_by_unit: 13
  },
  {
    supplier_code: 3006,
    product_ean: "7891001234796",
    sold_at: "2023-08-01T14:15:00",
    expired_at: "2024-02-01T14:15:00",
    quantity: 170,
    price_by_unit: 16
  },
  {
    supplier_code: 3007,
    product_ean: "7891001234622",
    sold_at: "2023-07-05T13:00:00",
    expired_at: "2024-01-05T13:00:00",
    quantity: 90,
    price_by_unit: 18
  },
  {
    supplier_code: 3008,
    product_ean: "7891001234765",
    sold_at: "2023-10-01T11:30:00",
    expired_at: "2024-04-01T11:30:00",
    quantity: 60,
    price_by_unit: 14
  },
  {
    supplier_code: 3009,
    product_ean: "7891001234696",
    sold_at: "2023-06-12T10:15:00",
    expired_at: "2024-01-12T10:15:00",
    quantity: 75,
    price_by_unit: 22
  },
  {
    supplier_code: 3010,
    product_ean: "7891001234644",
    sold_at: "2023-08-25T12:45:00",
    expired_at: "2024-02-25T12:45:00",
    quantity: 140,
    price_by_unit: 19
  },
  {
    supplier_code: 3001,
    product_ean: "7891001234721",
    sold_at: "2023-09-15T10:30:00",
    expired_at: "2024-03-15T10:30:00",
    quantity: 80,
    price_by_unit: 12
  },
  {
    supplier_code: 3002,
    product_ean: "7891001234644",
    sold_at: "2023-07-25T09:15:00",
    expired_at: "2024-01-25T09:15:00",
    quantity: 60,
    price_by_unit: 15
  },
  {
    supplier_code: 3003,
    product_ean: "7891001234622",
    sold_at: "2023-08-05T11:30:00",
    expired_at: "2024-02-05T11:30:00",
    quantity: 75,
    price_by_unit: 19
  },
  {
    supplier_code: 3004,
    product_ean: "7891001234771",
    sold_at: "2023-09-01T14:15:00",
    expired_at: "2024-03-01T14:15:00",
    quantity: 200,
    price_by_unit: 17
  },
  {
    supplier_code: 3005,
    product_ean: "7891001234599",
    sold_at: "2023-06-10T13:45:00",
    expired_at: "2024-01-10T13:45:00",
    quantity: 100,
    price_by_unit: 14
  },
  {
    supplier_code: 3006,
    product_ean: "7891001234716",
    sold_at: "2023-10-20T12:00:00",
    expired_at: "2024-04-20T12:00:00",
    quantity: 140,
    price_by_unit: 18
  },
  {
    supplier_code: 3007,
    product_ean: "7891001234786",
    sold_at: "2023-07-15T15:30:00",
    expired_at: "2024-01-15T15:30:00",
    quantity: 90,
    price_by_unit: 22
  },
  {
    supplier_code: 3008,
    product_ean: "7891001234765",
    sold_at: "2023-08-25T11:45:00",
    expired_at: "2024-02-25T11:45:00",
    quantity: 120,
    price_by_unit: 16
  },
  {
    supplier_code: 3009,
    product_ean: "7891001234600",
    sold_at: "2023-09-12T10:00:00",
    expired_at: "2024-03-12T10:00:00",
    quantity: 50,
    price_by_unit: 13
  },
  {
    supplier_code: 3010,
    product_ean: "7891001234731",
    sold_at: "2023-06-30T09:45:00",
    expired_at: "2024-01-30T09:45:00",
    quantity: 170,
    price_by_unit: 20
  },
  {
    supplier_code: 3001,
    product_ean: "7891001234665",
    sold_at: "2023-07-01T14:30:00",
    expired_at: "2024-01-01T14:30:00",
    quantity: 60,
    price_by_unit: 25
  },
  {
    supplier_code: 3002,
    product_ean: "7891001234651",
    sold_at: "2023-08-20T12:15:00",
    expired_at: "2024-02-20T12:15:00",
    quantity: 75,
    price_by_unit: 21
  },
  {
    supplier_code: 3003,
    product_ean: "7891001234796",
    sold_at: "2023-10-01T10:15:00",
    expired_at: "2024-04-01T10:15:00",
    quantity: 90,
    price_by_unit: 12
  },
  {
    supplier_code: 3004,
    product_ean: "7891001234644",
    sold_at: "2023-09-25T08:30:00",
    expired_at: "2024-03-25T08:30:00",
    quantity: 140,
    price_by_unit: 19
  },
  {
    supplier_code: 3005,
    product_ean: "7891001234622",
    sold_at: "2023-07-15T13:00:00",
    expired_at: "2024-01-15T13:00:00",
    quantity: 110,
    price_by_unit: 14
  },
  {
    supplier_code: 3006,
    product_ean: "7891001234581",
    sold_at: "2023-08-05T11:45:00",
    expired_at: "2024-02-05T11:45:00",
    quantity: 60,
    price_by_unit: 18
  },
  {
    supplier_code: 3007,
    product_ean: "7891001234599",
    sold_at: "2023-09-10T12:30:00",
    expired_at: "2024-03-10T12:30:00",
    quantity: 50,
    price_by_unit: 17
  },
  {
    supplier_code: 3008,
    product_ean: "7891001234611",
    sold_at: "2023-06-20T14:00:00",
    expired_at: "2024-01-20T14:00:00",
    quantity: 200,
    price_by_unit: 23
  },
  {
    supplier_code: 3009,
    product_ean: "7891001234686",
    sold_at: "2023-08-10T09:00:00",
    expired_at: "2024-02-10T09:00:00",
    quantity: 140,
    price_by_unit: 15
  },
  {
    supplier_code: 3010,
    product_ean: "7891001234767",
    sold_at: "2023-10-15T13:15:00",
    expired_at: "2024-04-15T13:15:00",
    quantity: 90,
    price_by_unit: 14
  },
  {
    supplier_code: 3001,
    product_ean: "7891001234771",
    sold_at: "2023-09-20T14:30:00",
    expired_at: "2024-03-20T14:30:00",
    quantity: 170,
    price_by_unit: 10
  },
  {
    supplier_code: 3002,
    product_ean: "7891001234788",
    sold_at: "2023-07-05T09:30:00",
    expired_at: "2024-01-05T09:30:00",
    quantity: 120,
    price_by_unit: 18
  },
  {
    supplier_code: 3003,
    product_ean: "7891001234711",
    sold_at: "2023-08-25T10:00:00",
    expired_at: "2024-02-25T10:00:00",
    quantity: 60,
    price_by_unit: 14
  },
  {
    supplier_code: 3004,
    product_ean: "7891001234731",
    sold_at: "2023-09-15T11:45:00",
    expired_at: "2024-03-15T11:45:00",
    quantity: 140,
    price_by_unit: 25
  },
  {
    supplier_code: 3005,
    product_ean: "7891001234786",
    sold_at: "2023-06-01T13:30:00",
    expired_at: "2024-01-01T13:30:00",
    quantity: 75,
    price_by_unit: 22
  },
  {
    supplier_code: 3006,
    product_ean: "7891001234765",
    sold_at: "2023-10-05T12:00:00",
    expired_at: "2024-04-05T12:00:00",
    quantity: 90,
    price_by_unit: 19
  },
  {
    supplier_code: 3007,
    product_ean: "7891001234716",
    sold_at: "2023-07-20T08:45:00",
    expired_at: "2024-01-20T08:45:00",
    quantity: 200,
    price_by_unit: 11
  },
  {
    supplier_code: 3008,
    product_ean: "7891001234651",
    sold_at: "2023-09-01T15:15:00",
    expired_at: "2024-03-01T15:15:00",
    quantity: 110,
    price_by_unit: 16
  },
  {
    supplier_code: 3009,
    product_ean: "7891001234599",
    sold_at: "2023-08-15T12:15:00",
    expired_at: "2024-02-15T12:15:00",
    quantity: 140,
    price_by_unit: 20
  },
  {
    supplier_code: 3010,
    product_ean: "7891001234665",
    sold_at: "2023-09-30T14:45:00",
    expired_at: "2024-03-30T14:45:00",
    quantity: 75,
    price_by_unit: 19
  },
  {
    supplier_code: 3001,
    product_ean: "7891001234696",
    sold_at: "2023-07-10T10:00:00",
    expired_at: "2024-01-10T10:00:00",
    quantity: 120,
    price_by_unit: 13
  },
  {
    supplier_code: 3002,
    product_ean: "7891001234796",
    sold_at: "2023-08-01T14:30:00",
    expired_at: "2024-02-01T14:30:00",
    quantity: 100,
    price_by_unit: 14
  },
  {
    supplier_code: 3003,
    product_ean: "7891001234581",
    sold_at: "2023-09-05T13:00:00",
    expired_at: "2024-03-05T13:00:00",
    quantity: 60,
    price_by_unit: 18
  },
  {
    supplier_code: 3004,
    product_ean: "7891001234600",
    sold_at: "2023-07-20T11:45:00",
    expired_at: "2024-01-20T11:45:00",
    quantity: 90,
    price_by_unit: 22
  },
  {
    supplier_code: 3005,
    product_ean: "7891001234622",
    sold_at: "2023-08-30T10:30:00",
    expired_at: "2024-02-28T10:30:00",
    quantity: 200,
    price_by_unit: 12
  },
  {
    supplier_code: 3006,
    product_ean: "7891001234731",
    sold_at: "2023-09-15T12:45:00",
    expired_at: "2024-03-15T12:45:00",
    quantity: 140,
    price_by_unit: 17
  },
  {
    supplier_code: 3007,
    product_ean: "7891001234765",
    sold_at: "2023-10-01T11:00:00",
    expired_at: "2024-04-01T11:00:00",
    quantity: 50,
    price_by_unit: 21
  },
  {
    supplier_code: 3008,
    product_ean: "7891001234686",
    sold_at: "2023-08-05T09:45:00",
    expired_at: "2024-02-05T09:45:00",
    quantity: 170,
    price_by_unit: 14
  },
  {
    supplier_code: 3009,
    product_ean: "7891001234767",
    sold_at: "2023-07-25T12:15:00",
    expired_at: "2024-01-25T12:15:00",
    quantity: 140,
    price_by_unit: 16
  },
  {
    supplier_code: 3010,
    product_ean: "7891001234651",
    sold_at: "2023-06-15T10:15:00",
    expired_at: "2024-01-15T10:15:00",
    quantity: 75,
    price_by_unit: 23
  },
  {
    supplier_code: 3001,
    product_ean: "7891001234711",
    sold_at: "2023-09-20T14:00:00",
    expired_at: "2024-03-20T14:00:00",
    quantity: 90,
    price_by_unit: 18
  },
  {
    supplier_code: 3002,
    product_ean: "7891001234599",
    sold_at: "2023-08-25T13:30:00",
    expired_at: "2024-02-25T13:30:00",
    quantity: 60,
    price_by_unit: 20
  },
  {
    supplier_code: 3003,
    product_ean: "7891001234788",
    sold_at: "2023-07-15T15:15:00",
    expired_at: "2024-01-15T15:15:00",
    quantity: 75,
    price_by_unit: 13
  },
  {
    supplier_code: 3004,
    product_ean: "7891001234771",
    sold_at: "2023-08-05T14:45:00",
    expired_at: "2024-02-05T14:45:00",
    quantity: 110,
    price_by_unit: 14
  },
  {
    supplier_code: 3005,
    product_ean: "7891001234600",
    sold_at: "2023-09-12T11:15:00",
    expired_at: "2024-03-12T11:15:00",
    quantity: 140,
    price_by_unit: 18
  },
  {
    supplier_code: 3006,
    product_ean: "7891001234644",
    sold_at: "2023-06-30T09:00:00",
    expired_at: "2024-01-30T09:00:00",
    quantity: 200,
    price_by_unit: 19
  },
  {
    supplier_code: 3007,
    product_ean: "7891001234716",
    sold_at: "2023-10-10T12:45:00",
    expired_at: "2024-04-10T12:45:00",
    quantity: 140,
    price_by_unit: 10
  },
  {
    supplier_code: 3008,
    product_ean: "7891001234796",
    sold_at: "2023-09-20T14:30:00",
    expired_at: "2024-03-20T14:30:00",
    quantity: 90,
    price_by_unit: 16
  },
  {
    supplier_code: 3009,
    product_ean: "7891001234622",
    sold_at: "2023-07-05T13:45:00",
    expired_at: "2024-01-05T13:45:00",
    quantity: 140,
    price_by_unit: 14
  },
  {
    supplier_code: 3010,
    product_ean: "7891001234731",
    sold_at: "2023-08-15T15:00:00",
    expired_at: "2024-02-15T15:00:00",
    quantity: 75,
    price_by_unit: 19
  },
  {
    supplier_code: 3001,
    product_ean: "7891001234765",
    sold_at: "2023-09-25T10:30:00",
    expired_at: "2024-03-25T10:30:00",
    quantity: 110,
    price_by_unit: 17
  },
  {
    supplier_code: 3002,
    product_ean: "7891001234651",
    sold_at: "2023-08-10T09:15:00",
    expired_at: "2024-02-10T09:15:00",
    quantity: 60,
    price_by_unit: 18
  },
  {
    supplier_code: 3003,
    product_ean: "7891001234665",
    sold_at: "2023-07-20T10:00:00",
    expired_at: "2024-01-20T10:00:00",
    quantity: 90,
    price_by_unit: 25
  },
  {
    supplier_code: 3004,
    product_ean: "7891001234711",
    sold_at: "2023-10-01T12:00:00",
    expired_at: "2024-04-01T12:00:00",
    quantity: 140,
    price_by_unit: 22
  },
  {
    supplier_code: 3005,
    product_ean: "7891001234786",
    sold_at: "2023-09-10T09:45:00",
    expired_at: "2024-03-10T09:45:00",
    quantity: 50,
    price_by_unit: 19
  },
  {
    supplier_code: 3006,
    product_ean: "7891001234716",
    sold_at: "2023-06-05T15:15:00",
    expired_at: "2024-01-05T15:15:00",
    quantity: 75,
    price_by_unit: 17
  },
  {
    supplier_code: 3007,
    product_ean: "7891001234599",
    sold_at: "2023-08-25T14:00:00",
    expired_at: "2024-02-25T14:00:00",
    quantity: 140,
    price_by_unit: 11
  },
  {
    supplier_code: 3008,
    product_ean: "7891001234796",
    sold_at: "2023-09-15T12:30:00",
    expired_at: "2024-03-15T12:30:00",
    quantity: 90,
    price_by_unit: 13
  },
  {
    supplier_code: 3009,
    product_ean: "7891001234767",
    sold_at: "2023-07-30T13:45:00",
    expired_at: "2024-01-30T13:45:00",
    quantity: 60,
    price_by_unit: 14
  },
  {
    supplier_code: 3010,
    product_ean: "7891001234644",
    sold_at: "2023-08-01T15:30:00",
    expired_at: "2024-02-01T15:30:00",
    quantity: 140,
    price_by_unit: 18
  }
];

const employees = [
  { name: "Lucas Almeida", cpf: "102.345.678-92", role: "Motorista de Entrega" },
  { name: "Renata Souza", cpf: "213.456.789-12", role: "Auxiliar de Logística" },
  { name: "Carlos Silva", cpf: "324.567.890-13", role: "Supervisor de Armazém" },
  { name: "Juliana Mendes", cpf: "435.678.901-14", role: "Coordenadora de Logística" },
  { name: "Rafael Pereira", cpf: "546.789.012-15", role: "Encarregado de Estoque" },
  { name: "Vanessa Gomes", cpf: "657.890.123-16", role: "Analista de Compras" },
  { name: "Tiago Ribeiro", cpf: "768.901.234-17", role: "Conferente de Mercadorias" },
  { name: "Ana Paula Santos", cpf: "879.012.345-18", role: "Auxiliar Administrativo" },
  { name: "João Henrique", cpf: "980.123.456-19", role: "Motorista de Caminhão" },
  { name: "Isabela Nunes", cpf: "091.234.567-20", role: "Assistente de Vendas Internas" },
  { name: "Ricardo Tavares", cpf: "192.345.678-21", role: "Operador de Empilhadeira" },
  { name: "Fernanda Monteiro", cpf: "203.456.789-22", role: "Analista de Transportes" },
  { name: "Fábio Antunes", cpf: "314.567.890-23", role: "Motorista de Entrega" },
  { name: "Camila Duarte", cpf: "425.678.901-24", role: "Auxiliar de Limpeza" },
  { name: "Felipe Costa", cpf: "536.789.012-25", role: "Assistente de Logística" },
  { name: "Larissa Lima", cpf: "647.890.123-26", role: "Conferente de Mercadorias" },
  { name: "Bruno Carvalho", cpf: "758.901.234-27", role: "Analista de Estoque" },
  { name: "Mariana Rocha", cpf: "869.012.345-28", role: "Recepcionista" },
  { name: "Gustavo Martins", cpf: "970.123.456-29", role: "Gerente de Transporte" },
  { name: "Tatiane Silva", cpf: "081.234.567-30", role: "Supervisora de Operações" },
  { name: "Eduardo Franco", cpf: "192.345.678-31", role: "Motorista de Caminhão" },
  { name: "Cíntia Barros", cpf: "203.456.789-32", role: "Coordenadora de Logística" },
  { name: "Adriana Santana", cpf: "314.567.890-33", role: "Auxiliar de Logística" },
  { name: "Roberto Castro", cpf: "425.678.901-34", role: "Supervisor de Frota" },
  { name: "Paula Souza", cpf: "536.789.012-35", role: "Analista de Transporte e Distribuição" },
  { name: "Fernando Lopes", cpf: "647.890.123-36", role: "Motorista de Entrega" },
  { name: "Cláudia Oliveira", cpf: "758.901.234-37", role: "Assistente de Compras" },
  { name: "Diego Matos", cpf: "869.012.345-38", role: "Conferente de Mercadorias" },
  { name: "Rafaela Rezende", cpf: "970.123.456-39", role: "Vendedora Externa" },
  { name: "Maurício Andrade", cpf: "081.234.567-40", role: "Gerente Regional" },
  { name: "Joana Borges", cpf: "192.345.678-41", role: "Recepcionista" },
  { name: "Pedro Assis", cpf: "203.456.789-42", role: "Auxiliar de Estoque" },
  { name: "Elisa Pereira", cpf: "314.567.890-43", role: "Analista de Operações Logísticas" },
  { name: "Marcelo Neves", cpf: "425.678.901-44", role: "Conferente de Estoque" },
  { name: "Helena Machado", cpf: "536.789.012-45", role: "Supervisora de Logística" },
  { name: "Luiz Otávio", cpf: "647.890.123-46", role: "Motorista de Entrega" },
  { name: "Natália Ribeiro", cpf: "758.901.234-47", role: "Assistente de Vendas" },
  { name: "Victor Almeida", cpf: "869.012.345-48", role: "Supervisor de Estoque" },
  { name: "Carolina Dias", cpf: "970.123.456-49", role: "Auxiliar Administrativo" },
  { name: "Daniel Teixeira", cpf: "081.234.567-50", role: "Motorista de Caminhão" },
  { name: "Priscila Nogueira", cpf: "192.345.678-51", role: "Recepcionista" },
  { name: "Igor Mendes", cpf: "203.456.789-52", role: "Analista de Roteirização" },
  { name: "Beatriz Oliveira", cpf: "314.567.890-53", role: "Auxiliar de Armazém" },
  { name: "Sérgio Barbosa", cpf: "425.678.901-54", role: "Motorista de Entrega" },
  { name: "Andressa Matos", cpf: "536.789.012-55", role: "Analista de Frota" },
  { name: "Felipe Nascimento", cpf: "647.890.123-56", role: "Supervisor de Transporte" },
  { name: "Tatiane Vasconcelos", cpf: "758.901.234-57", role: "Coordenadora de Expedição" },
  { name: "Jonas Vieira", cpf: "869.012.345-58", role: "Gerente de Operações Logísticas" },
  { name: "Michele Araújo", cpf: "970.123.456-59", role: "Assistente de Logística" },
  { name: "Thiago Siqueira", cpf: "081.234.567-60", role: "Conferente de Mercadorias" }
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

db.createCollection("purchase_orders");
db.getCollection("purchase_orders").createIndex({ "supplier.code": 1, "sold_at": -1, "expired_at": -1 });
db.getCollection("purchase_orders").createIndex({ "product.ean": 1, "sold_at": -1, "expired_at": -1 });

purchase_orders
    .map((order) => ([
        order,
        db.getCollection("suppliers").findOne({ code: order.supplier_code }),
        db.getCollection("products").findOne({ ean: order.product_ean })
    ]))
    .map(([order, supplier, product]) => ({
        supplier: {
            code: supplier?.code || order.supplier_code,
            cnpj: supplier?.cnpj || "CNPJ não encontrado"
        },
        product: {
            ean: product?.ean || order.product_ean,
            name: product?.name || "Produto não encontrado"
        },
        quantity: order.quantity,
        price_by_unit: order.price_by_unit,
        sold_at: new Date(order.sold_at),
        expired_at: new Date(order.expired_at)
    }))
    .map((purchaseOrderDocument) => {
        db.getCollection("purchase_orders").updateOne(
            {
                "supplier.code": purchaseOrderDocument.supplier.code,
                "product.ean": purchaseOrderDocument.product.ean,
                sold_at: purchaseOrderDocument.sold_at,
                expired_at: purchaseOrderDocument.expired_at
            },
            { $set: purchaseOrderDocument },
            { upsert: true }
        );
    });

db.createCollection("employees");
db.getCollection("employees").createIndex({ cpf: 1 });
db.getCollection("employees").createIndex({ role: 1 });
employees
    .map((employee) => {
        db.getCollection("employees").updateOne(
            { cpf: employee.cpf }, // Condição de identificação
            { $set: employee },    // Atualiza ou insere o documento
            { upsert: true }
        );

        print(`Funcionário '${employee.name}' inserido ou atualizado com sucesso!`);
    });
