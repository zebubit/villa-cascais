/* ============================================================
   VILLA CASCAIS — FONTE ÚNICA DE VERDADE DO CARDÁPIO
   ------------------------------------------------------------
   Este é o ÚNICO lugar com preço. O cardápio (cardapio.html) e a
   página de pedido (pedido.html) leem daqui. Nunca duplicar preço
   noutro arquivo: foi assim que o Mangiare quase saiu com duas
   tabelas diferentes.

   Para reajustar: mude o campo "p". Só isso.

   Campo "entrega" (opcional, só as EXCEÇÕES precisam declarar):
     ausente = o prato sai para entrega/retirada (padrão)
     false   = só no salão, não aparece na página de pedido

   ⚠️ HOJE NENHUM PRATO ESTÁ BLOQUEADO — é demonstração.
   QUEM DECIDE O QUE SAI DE CASA É O CHEF SÉRGIO, não a Zebubit.
   Para bloquear um prato, basta acrescentar  entrega:false  nele.
   Sugestão a levar para ele: pratos grelhados na hora e gratinados
   (bacalhaus 501/503, polvo 453, robalo 463, salmões 461/462,
   carré 455) chegam mal em viagem de 20 minutos. Arrozes, massas,
   bolinhos, feijões e frios viajam bem.
   ============================================================ */

const MENU=[
{id:'saladas',t:'Saladas',it:[
 {c:'150',n:'Salada Cascais',d:'Folhas verdes, ovo cozido, lascas de bacalhau, cebola roxa, azeitonas portuguesas e grão-de-bico.',p:89},
 {c:'151',n:'Salada de Palmito',d:'Com camarões salteados.',p:139},
 {c:'152',n:'Salada Caesar',d:'Alface americana, croutons, tomate seco, parmesão e molho Caesar.',p:69}
]},
{id:'frias',t:'Entradas Frias',it:[
 {c:'153',n:'Burrata com Camarões ao Pesto',d:'',p:179},
 {c:'154',n:'Burrata com Tomate Confit, Parma e Pesto',d:'',p:119},
 {c:'155',n:'Presunto Parma com Rúcula',d:'',p:129},
 {c:'156',n:'Queijo Cablanca com Geleia de Damasco',d:'',p:129},
 {c:'157',n:'Grana Padano com Mel',d:'',p:119},
 {c:'158',n:'Azeitonas Condimentadas',d:'Com ervas e pimenta calabresa.',p:69},
 {c:'159',n:'Frios Especiais',d:'Salame, copa, ramon, gorgonzola, azeitonas, parmesão, brie e damasco.',p:179},
 {c:'160',n:'Polvo em Vinagrete',d:'Cozido frio com tomate, pimentões, cebola roxa, azeite e limão.',p:139}
]},
{id:'quentes',t:'Entradas Quentes',it:[
 {c:'201',n:'Bolinho de Bacalhau · unidade',d:'Vendido por unidade.',p:25},
 {c:'202',n:'Bolinho de Bacalhau · 8 unidades',d:'Porção com 8 unidades, crocantes por fora e macios por dentro.',p:92,img:'BOLINHO.webp',alt:'Porção de bolinhos de bacalhau dourados'},
 {c:'203',n:'Antipasto Mediterrâneo',d:'Alcachofra, azeitonas, tomate seco, muçarela de búfala, tomate cereja, azeite, pimenta calabresa e cesto de pães.',p:149,img:'PAO.webp',alt:'Cesto de pães artesanais com azeite'},
 {c:'204',n:'Pica-Pau Aperitivo',d:'Lombo e filé mignon com molho de cerveja.',p:119,img:'PREGO.webp',alt:'Fatias de carne servidas em ardósia'},
 {c:'205',n:'Moelas Portuguesas',d:'Cozidas com molho de tomate fresco, vinho tinto e cebola roxa.',p:79},
 {c:'206',n:'Alheira com Batatas Portuguesas e Grelos',d:'Grelhada, com batatas portuguesas e grelos no azeite.',p:89},
 {c:'207',n:'Sardinhas Grelhadas com Broa de Milho',d:'Grelhadas no sal grosso sobre uma fatia de broa regada com azeite.',p:89,img:'SARDINHA.webp',alt:'Sardinhas grelhadas com batatas e salada'},
 {c:'208',n:'Polvo à Galega',d:'Cozido quente com páprica picante, azeite e batata sauté.',p:159,img:'POLVO.webp',alt:'Tentáculo de polvo grelhado'},
 {c:'209',n:'Mexilhões à Bulhão Pato',d:'Cozidos no vinho branco com especiarias, alho, limão e azeite.',p:119,img:'AMEIJOA.webp',alt:'Mexilhões cozidos em caldo com limão'},
 {c:'210',n:'Gambas al Ajillo',d:'Camarões grelhados no alho e óleo.',p:189},
 {c:'211',n:'Bacalhau em Lascas',d:'Com alho, alecrim e um generoso cesto de pães.',p:189}
]},
{id:'arrozes',t:'Arrozes Portugueses',it:[
 {c:'401',n:'Arroz de Polvo',d:'Delicioso e suculento, com polvo, molho demi-glace e especiarias.',p:149},
 {c:'402',n:'Arroz de Bacalhau',d:'Com bacalhau em lascas, base de tomate, brócolis, azeitona e cebola.',p:129},
 {c:'403',n:'Arroz Caldoso de Frutos do Mar',d:'Camarão com casca, camarão sem casca, mexilhões, polvo, vôngole e pérolas de lula.',p:149,img:'CATAPLANA.webp',alt:'Frutos do mar servidos em cataplana de cobre'},
 {c:'404',n:'Arroz de Pato',d:'Coxa de pato desfiada, molho demi-glace, alho-poró, tomate picado, morcela e cebola roxa.',p:98,img:'AROZPATO.webp',alt:'Travessa de arroz de pato gratinado'}
]},
{id:'especiais',t:'Pratos Especiais',it:[
 {c:'451',n:'Coelho Estufado',d:'Molho de tomate fresco com tomilho, bacon e legumes. Acompanha purê de batata rústico.',p:129},
 {c:'452',n:'Coxa de Pato Recheada com Alheira',d:'Purê de ervilhas e molho de maracujá com laranja.',p:129},
 {c:'453',n:'Polvo à Lagareiro',d:'Grelhado com batatas, brócolis, alho e condimentos.',p:169},
 {c:'454',n:'Leitão da Bairrada',d:'Assado, com purê de laranja e salada verde com tomates.',p:98},
 {c:'455',n:'Carré de Borrego',d:'Grelhado com molho de ervas aromáticas. Acompanha purê de ervilhas com hortelã.',p:179}
]},
{id:'peixes',t:'Peixes',it:[
 {c:'461',n:'Salmão com Legumes',d:'Molho de limão e natas, com cenoura, brócolis, pimentão vermelho, batata e tomate uva.',p:119},
 {c:'462',n:'Salmão com Molho de Alecrim',d:'Grelhado e aromatizado com alecrim, acompanhado de arroz de camarão.',p:149},
 {c:'463',n:'Robalo Grelhado com Arroz de Polvo',d:'Ao molho de limão, camarões e manteiga.',p:139,img:'PEIXE.webp',alt:'Peixe preparado em caldeirada portuguesa'},
 {c:'464',n:'Saint Peter à Cascais',d:'Grelhado com creme de espinafre, purê de batata trufado e broa de milho.',p:89}
]},
{id:'bacalhau',t:'Especialidades da Casa',sub:'Os nossos bacalhaus',it:[
 {c:'501',n:'Bacalhau Villa Cascais',d:'Suculento e assado com muito azeite de oliva, batatas, azeitonas e brócolis.',p:179,img:'BACALHAUU.webp',alt:'Lombo de bacalhau grelhado com batatas'},
 {c:'502',n:'Bacalhau à Braga',d:'Frito no azeite, com rodelas de cebola, rodelas de batata, muito azeite e azeitonas.',p:179},
 {c:'503',n:'Bacalhau à Portuguesa',d:'Grelhado com azeite, pimentões, cebola, ovos, batata e azeitonas.',p:179,img:'TIPICAS.webp',alt:'Bacalhau à portuguesa com pimentões'},
 {c:'504',n:'Bacalhau à Zé do Pipo',d:'Em lascas, com purê de batata, azeitonas portuguesas e cebola.',p:149},
 {c:'505',n:'Bacalhau Gratinado nas Natas',d:'Lascas de bacalhau com natas, alho-poró, batata e azeitonas sem caroço.',p:149,img:'BRAS.webp',alt:'Bacalhau gratinado com azeitonas'},
 {c:'506',n:'Bacalhau à Brás',d:'Desfiado com cebolas em azeite, batata artesanal, azeitonas portuguesas e ovos mexidos.',p:149}
],note:'Acompanhamentos para os bacalhaus: arroz de alho e óleo, arroz branco ou arroz de brócolis.'},
{id:'carnes',t:'Carnes Vermelhas',it:[
 {c:'521',n:'Filé Villa Cascais',d:'Grelhado alto, purê de batata trufado, crocante de ramon, legumes e redução de vinho do Porto.',p:119},
 {c:'522',n:'Filé à Portuguesa',d:'Grelhado com molho à base de pimentões, calabresa, azeitonas, cebola, batata portuguesa e arroz de Braga.',p:119},
 {c:'523',n:'Filé à Lisboa',d:'Filé alto grelhado, purê de batata rústico, espinafre, bacon em cubos grandes e cebolas ao vinho.',p:119},
 {c:'524',n:'Beef Ancho Algarve',d:'Grelhado com molho de pimenta verde e batatas com cogumelos salteados.',p:98}
]},
{id:'massas',t:'Massas',it:[
 {c:'555',n:'Penne com Bacalhau nas Natas',d:'Penne grano duro, molho branco, bacalhau em lascas, azeite, cebola, azeitonas pretas sem caroço, natas e parmesão.',p:89},
 {c:'556',n:'Fettuccine com Bacalhau, Alho e Óleo',d:'Fettuccine grano duro, bacalhau em lascas, azeite, alho, alcaparras, tomate seco e azeitonas pretas.',p:129},
 {c:'557',n:'Rigatoni com Frutos do Mar',d:'Rigatoni grano duro, camarão, marisco, polvo, anéis e botões de lula, molho de tomates.',p:139}
]},
{id:'sobremesas',t:'Sobremesas',it:[
 {c:'301',n:'Creme Catalana',d:'Creme de leite, gemas, açúcar, baunilha e raspas de limão siciliano, maçaricado com açúcar.',p:38},
 {c:'302',n:'Pastel de Belém',d:'A tradicional sobremesa portuguesa.',p:11},
 {c:'303',n:'Baba de Camelo',d:'Com amêndoas laminadas e raspas de chocolate.',p:38},
 {c:'304',n:'Serradura',d:'Natas e leite condensado.',p:38},
 {c:'305',n:'Petit Gâteau',d:'Com sorvete e calda de chocolate.',p:38},
 {c:'306',n:'Carajillo 43 Clássico',d:'Licor 43 com café expresso.',p:42},
 {c:'307',n:'Café Expresso',d:'Acompanha pastel de Belém.',p:19}
]},
{id:'bebidas',t:'Bebidas',it:[
 {c:'01',n:'Água com Gás Prata',d:'',p:11},
 {c:'02',n:'Água sem Gás Prata',d:'',p:11},
 {c:'03',n:'Água Porto Real',d:'',p:9},
 {c:'04',n:'Água Pedras Salgadas Portuguesa',d:'Com gás.',p:69},
 {c:'05',n:'Água Perrier com Gás',d:'',p:69},
 {c:'06',n:'Água de Coco',d:'',p:14},
 {c:'07',n:'Refrigerante Lata',d:'',p:11},
 {c:'08',n:'Água Tônica Prata',d:'',p:11},
 {c:'09',n:'Soda Francesa Parisi',d:'',p:69},
 {c:'10',n:'Soda Italiana',d:'Diversos sabores.',p:24},
 {c:'11',n:'Cerveja Corona Long Neck',d:'',p:15},
 {c:'12',n:'Cerveja Heineken Long Neck',d:'',p:12},
 {c:'13',n:'Cerveja Stella Artois sem Glúten',d:'',p:14},
 {c:'14',n:'Red Bull',d:'',p:18}
],sub2:'Sucos Naturais',it2:[
 {c:'15',n:'Suco de Laranja',d:'',p:18},
 {c:'16',n:'Suco de Morango',d:'',p:18},
 {c:'17',n:'Limonada Suíça',d:'',p:18},
 {c:'18',n:'Suco de Abacaxi',d:'',p:14},
 {c:'19',n:'Suco de Maracujá',d:'',p:14},
 {c:'20',n:'Suco de Limão',d:'',p:14}
]},
{id:'drinks',t:'Drinks & Licores',it:[
 {c:'91',n:'Caipirinha de Cachaça',d:'',p:28},
 {c:'92',n:'Caipiroska de Frutas',d:'',p:32},
 {c:'93',n:'Caipiroska Importada',d:'',p:39},
 {c:'94',n:'Saquerita de Frutas',d:'',p:29},
 {c:'95',n:'Negroni',d:'',p:45},
 {c:'96',n:'Bellini',d:'',p:39},
 {c:'97',n:'Mojito',d:'',p:39},
 {c:'98',n:'Martini',d:'',p:28},
 {c:'99',n:'Piña Colada',d:'',p:42},
 {c:'100',n:'Bloody Mary',d:'',p:47},
 {c:'101',n:'Dry Martini',d:'',p:39},
 {c:'102',n:'Gin Tônica Nacional',d:'',p:39},
 {c:'103',n:'Gin Tônica Importado',d:'',p:49},
 {c:'104',n:'Cocktail de Frutas sem Álcool',d:'',p:39},
 {c:'105',n:'Moscow Mule',d:'',p:42},
 {c:'106',n:'Aperol Spritz',d:'',p:42},
 {c:'107',n:'Limoncello Spritz',d:'',p:42}
],sub2:'Licores',it2:[
 {c:'71',n:'Frangélico',d:'',p:35},
 {c:'72',n:'Cointreau',d:'',p:29},
 {c:'73',n:'Flor de Sabugueiro',d:'',p:39},
 {c:'74',n:'Cuarenta y Tres',d:'',p:37},
 {c:'75',n:'Jägermeister',d:'',p:33},
 {c:'76',n:"Sheridan's",d:'',p:35}
]},
{id:'doses',t:'Bebidas em Dose',it:[
 {c:'41',n:'Cachaça 51 Reserva',d:'',p:32},
 {c:'42',n:'Cachaça Mata Velha',d:'',p:32},
 {c:'43',n:'Cognac Macieira',d:'',p:32},
 {c:'44',n:'Gin Tanqueray',d:'',p:38},
 {c:'45',n:'Gin Bombay',d:'',p:35},
 {c:'46',n:'Vodka Absolut',d:'',p:32},
 {c:'47',n:'Tequila Herradura',d:'',p:43},
 {c:'48',n:'Tequila Jose Cuervo',d:'',p:29},
 {c:'49',n:'Cachaça Bagaceira',d:'',p:32},
 {c:'50',n:'Red Label',d:'',p:29},
 {c:'51',n:'Black Label',d:'',p:34},
 {c:'52',n:'Gold Label',d:'',p:55},
 {c:'53',n:'Old Parr',d:'',p:34},
 {c:'54',n:"Jack Daniel's Gentleman",d:'',p:42},
 {c:'55',n:"Jack Daniel's Single Barrel",d:'',p:55},
 {c:'56',n:"Buchanan's",d:'',p:39},
 {c:'57',n:'Macallan 12 Anos',d:'',p:94},
 {c:'58',n:'Blue Label',d:'',p:94},
 {c:'59',n:'Chivas 12',d:'',p:34},
 {c:'60',n:'Campari Dose Dupla',d:'',p:34}
]}
];

/* Deixa disponível tanto para <script> comum quanto para import. */
if (typeof window !== 'undefined') window.MENU = MENU;
if (typeof module !== 'undefined' && module.exports) module.exports = { MENU };
