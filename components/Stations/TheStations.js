const Stations = {


  // LINHA 1 AZUL
  'tucuruvi': {
    'id': 'tucuruvi',
    'name': 'Tucuruvi',
    'lines': [ 'one_blue' ],
    'location': {
      'latitude': -23.4805106,
      'longitude': -46.603704,
    }
  },
  'parada_inglesa': {
    'id': 'parada_inglesa',
    'name': 'Parada Inglesa',
    'lines': [ 'one_blue' ],
    'location': {
      'latitude': -23.4870042,
      'longitude': -46.6088369,
    }
  },
  'jd_sao_paulo': {
    'id': 'jd_sao_paulo',
    'name': 'Jardim São Paulo\nAyrton Senna',
    'lines': [ 'one_blue' ],
    'location': {
      'latitude': -23.4923435,
      'longitude': -46.6165091,
    }
  },
  'santana': {
    'id': 'santana',
    'name': 'Santana',
    'lines': [ 'one_blue' ],
    'location': {
      'latitude': -23.5026194,
      'longitude': -46.6251473,
    }
  },
  'carandiru': {
    'id': 'carandiru',
    'name': 'Carandiru',
    'lines': [ 'one_blue' ],
    'location': {
      'latitude': -23.509648,
      'longitude': -46.624735,
    }
  },
  'tiete': {
    'id': 'tiete',
    'name': 'Portuguesa\nTietê',
    'lines': [ 'one_blue' ],
    'location': {
      'latitude': -23.5162486,
      'longitude': -46.6254846,
    }
  },
  'armenia': {
    'id': 'armenia',
    'name': 'Armênia',
    'lines': [ 'one_blue' ],
    'location': {
      'latitude': -23.525473,
      'longitude': -46.6293215,
    }
  },
  'tiradentes': {
    'id': 'tiradentes',
    'name': 'Tiradentes',
    'lines': [ 'one_blue' ],
    'location': {
      'latitude': -23.5311768,
      'longitude': -46.6319588,
    }
  },
  'luz': {
    'id': 'luz',
    'name': 'Luz',
    'lines': [ 'one_blue', 'three_red', 'seven_ruby', 'eleven_coral' ],
    'location': [
      { // Linha 1 Azul
        'latitude': -23.53711242,
        'longitude': -46.63363427,
      },
      { // CPTM
        'latitude': -23.53507139,
        'longitude': -46.63530529
      },
      { // Linha 4 Amarela
        'latitude': -23.5366435,
        'longitude': -46.6343448
      }
    ]
  },
  'sao_bento': {
    'id': 'sao_bento',
    'name': 'São Bento',
    'lines': [ 'one_blue' ],
    'location': {
      'latitude': -23.54437964,
      'longitude': -46.63412377,
    }
  },
  'se': {
    'id': 'se',
    'name': 'Sé',
    'lines': [ 'one_blue', 'three_red' ],
    'location': {
      'latitude': -23.5500191,
      'longitude': -46.6333613,
    }
  },
  'liberdade': {
    'id': 'liberdade',
    'name': 'Liberdade',
    'lines': [ 'one_blue' ],
    'location': {
      'latitude': -23.5551298,
      'longitude': -46.6359353,
    }
  },
  'sao_joaquim': {
    'id': 'sao_joaquim',
    'name': 'São Joaquim',
    'lines': [ 'one_blue' ],
    'location': {
      'latitude': -23.5617728,
      'longitude': -46.6387765,
    }
  },
  'vergueiro': {
    'id': 'vergueiro',
    'name': 'Vergueiro',
    'lines': [ 'one_blue' ],
    'location': {
      'latitude': -23.5688687,
      'longitude': -46.6399259,
    }
  },
  'paraiso': {
    'id': 'paraiso',
    'name': 'Paraíso',
    'lines': [ 'one_blue', 'two_green' ],
    'location': {
      'latitude': -23.5753809,
      'longitude': -46.6407623,
    }
  },
  'ana_rosa': {
    'id': 'ana_rosa',
    'name': 'Ana Rosa',
    'lines': [ 'one_blue', 'two_green' ],
    'location': {
      'latitude': -23.5815472,
      'longitude': -46.638648,
    }
  },
  'vila_mariana': {
    'id': 'vila_mariana',
    'name': 'Vila Mariana',
    'lines': [ 'one_blue' ],
    'location': {
      'latitude': -23.5895201,
      'longitude': -46.6344394,
    }
  },
  'santa_cruz': {
    'id': 'santa_cruz',
    'name': 'Santa Cruz',
    'lines': [ 'one_blue' ],
    'location': {
      'latitude': -23.5987912,
      'longitude': -46.6366592,
    }
  },
  'praca_da_arvore': {
    'id': 'praca_da_arvore',
    'name': 'Praça da Árvore',
    'lines': [ 'one_blue' ],
    'location': {
      'latitude': -23.610495,
      'longitude': -46.6379302,
    }
  },
  'saude': {
    'id': 'saude',
    'name': 'Saúde',
    'lines': [ 'one_blue' ],
    'location': {
      'latitude': -23.6185685,
      'longitude': -46.6394187,
    }
  },
  'sao_judas': {
    'id': 'sao_judas',
    'name': 'São Judas',
    'lines': [ 'one_blue' ],
    'location': {
      'latitude': -23.6255986,
      'longitude': -46.6408359,
    }
  },
  'conceicao': {
    'id': 'conceicao',
    'name': 'Conceição',
    'lines': [ 'one_blue' ],
    'location': {
      'latitude': -23.63532688,
      'longitude': -46.6409108,
    }
  },
  'jabaquara': {
    'id': 'jabaquara',
    'name': 'Jabaquara',
    'lines': [ 'one_blue' ],
    'location': {
      'latitude': -23.6466444,
      'longitude': -46.641047,
    }
  },



  // LINHA 2 VERDE
  'vila_madalena': {
    'id': 'vila_madalena',
    'name': 'Vila Madalena',
    'lines': [ 'two_green' ],
    'location': {
      'latitude': -23.5466949,
      'longitude': -46.690973,
    }
  },
  'sumare': {
    'id': 'sumare',
    'name': 'Sumaré',
    'lines': [ 'two_green' ],
    'location': {
      'latitude': -23.5508534,
      'longitude': -46.6780704,
    }
  },
  'clinicas': {
    'id': 'clinicas',
    'name': 'Clinicas',
    'lines': [ 'two_green' ],
    'location': [
      { // Entrada
        'latitude': -23.5542766,
        'longitude': -46.670716,
      },
      { // Estação
        'latitude': 23.5555172,
        'longitude': -46.6720729
      }
    ]
  },
  'consolacao': {
    'id': 'consolacao',
    'name': 'Consolação',
    'lines': [ 'two_green' ],
    'location': {
      'latitude': -23.5577357,
      'longitude': -46.660912,
    }
  },
  'trianon_masp': {
    'id': 'trianon_masp',
    'name': 'Trianon\nMasp',
    'lines': [ 'two_green' ],
    'location': {
      'latitude': -23.5636678,
      'longitude': -46.6538148,
    }
  },
  'brigadeiro': {
    'id': 'brigadeiro',
    'name': 'Brigadeiro',
    'lines': [ 'two_green' ],
    'location': {
      'latitude': -23.5682954,
      'longitude': -46.6479653,
    }
  },
  'chacara_klabin': {
    'id': 'chacara_klabin',
    'name': 'Chácara Klabin',
    'lines': [ 'two_green' ],
    'location': {
      'latitude': -23.5924272,
      'longitude': -46.6304114,
    }
  },
  'santos_imigrantes': {
    'id': 'santos_imigrantes',
    'name': 'Santos Imigrantes',
    'lines': [ 'two_green' ],
    'location': {
      'latitude': -23.5959027,
      'longitude': -46.6207716,
    }
  },
  'alto_do_ipiranga': {
    'id': 'alto_do_ipiranga',
    'name': 'Alto do Ipiranga',
    'lines': [ 'two_green' ],
    'location': {
      'latitude': -23.6020027,
      'longitude': -46.6124887,
    }
  },
  'sacoma': {
    'id': 'sacoma',
    'name': 'Sacomã',
    'lines': [ 'two_green' ],
    'location': {
      'latitude': -23.601608,
      'longitude': -46.603047,
    }
  },
  'tamanduatei': {
    'id': 'tamanduatei',
    'name': 'Tamanduateí',
    'lines': [ 'two_green', 'ten_turquoise' ],
    'location': {
      'latitude': -23.59293138,
      'longitude': -46.58954245,
    }
  },
  'vila_prudente': {
    'id': 'vila_prudente',
    'name': 'Vila Prudente',
    'lines': [ 'two_green' ],
    'location': {
      'latitude': -23.5843897,
      'longitude': -46.5819115,
    }
  },



  // LINHA 3 VERMELHA
  'palmeiras_barra_funda': {
    'id': 'palmeiras_barra_funda',
    'name': 'Palmeiras\nBarra Funda',
    'lines': [ 'three_red', 'seven_ruby', 'eight_diamond' ],
    'location': {
      'latitude': -23.5254261,
      'longitude': -46.667444,
    }
  },
  'marechal_deodoro': {
    'id': 'marechal_deodoro',
    'name': 'Marechal Deodoro',
    'lines': [ 'three_red' ],
    'location': {
      'latitude': -23.53399992,
      'longitude': -46.65592996,
    }
  },
  'santa_cecilia': {
    'id': 'santa_cecilia',
    'name': 'Santa Cecilia',
    'lines': [ 'three_red' ],
    'location': {
      'latitude': -23.5391724,
      'longitude': -46.649338,
    }
  },
  'republica': {
    'id': 'republica',
    'name': 'República',
    'lines': [ 'three_red', 'four_yellow' ],
    'location': [
      { // Linha 3 Vermelha
        'latitude': -23.5436127,
        'longitude': -46.6434096,
      },
      { // Linha 4 Amarela
        'latitude': -23.54506015,
        'longitude': -46.64304681
      }
    ]
  },
  'anhangabau': {
    'id': 'anhangabau',
    'name': 'Anhangabaú',
    'lines': [ 'three_red' ],
    'location': {
      'latitude': -23.54793748,
      'longitude': -46.63922751,
    }
  },
  'pedro_ii': {
    'id': 'pedro_ii',
    'name': 'Pedro II',
    'lines': [ 'three_red' ],
    'location': {
      'latitude': -23.5497075,
      'longitude': -46.6259157,
    }
  },
  'bras': {
    'id': 'bras',
    'name': 'Brás',
    'lines': [ 'three_red', 'ten_turquoise', 'eleven_coral', 'twelve_sapphire' ],
    'location': [
      { // Metro
        'latitude': -23.5478851,
        'longitude': -46.6158887,
      },
      { // Metro
        'latitude': -23.5438502,
        'longitude': -46.617061
      }
    ]
  },
  'bresser_mooca': {
    'id': 'bresser_mooca',
    'name': 'Breeser\nMooca',
    'lines': [ 'three_red' ],
    'location': {
      'latitude': -23.5463811,
      'longitude': -46.6072386,
    }
  },
  'belem': {
    'id': 'belem',
    'name': 'Belém',
    'lines': [ 'three_red' ],
    'location': {
      'latitude': -23.542508,
      'longitude': -46.5896568,
    }
  },
  'tatuape': {
    'id': 'tatuape',
    'name': 'Tatuapé',
    'lines': [ 'three_red', 'eleven_coral', 'twelve_sapphire' ],
    'location': {
      'latitude': -23.5402842,
      'longitude': -46.5765834,
    }
  },
  'carrao': {
    'id': 'carrao',
    'name': 'Carrão',
    'lines': [ 'three_red' ],
    'location': {
      'latitude': -23.5378792,
      'longitude': -46.5643957,
    }
  },
  'penha': {
    'id': 'penha',
    'name': 'Penha',
    'lines': [ 'three_red' ],
    'location': {
      'latitude': -23.5335143,
      'longitude': -46.5425909,
    }
  },
  'vila_matilde': {
    'id': 'vila_matilde',
    'name': 'Vila Matilde',
    'lines': [ 'three_red' ],
    'location': {
      'latitude': -23.5318801,
      'longitude': -46.5308878,
    }
  },
  'guilhermina_esperanca': {
    'id': 'guilhermina_esperanca',
    'name': 'Guilhermina\nEsperança',
    'lines': [ 'three_red' ],
    'location': {
      'latitude': -23.5293636,
      'longitude': -46.5167569,
    }
  },
  'patriarca': {
    'id': 'patriarca',
    'name': 'Patriarca',
    'lines': [ 'three_red' ],
    'location': {
      'latitude': -23.5311445,
      'longitude': -46.5014442,
    }
  },
  'artur_alvim': {
    'id': 'artur_alvim',
    'name': 'Artur Alvim',
    'lines': [ 'three_red' ],
    'location': {
      'latitude': -23.5405303,
      'longitude': -46.4843341,
    }
  },
  'corinthians_itaquera': {
    'id': 'corinthians_itaquera',
    'name': 'Corinthians\nItaquera',
    'lines': [ 'three_red', 'eleven_coral' ],
    'location': {
      'latitude': -23.5422745,
      'longitude': -46.4710881,
    }
  },


  // LINHA 4 AMARELA
  'higienopolis_mackenzie': {
    'id': 'higienopolis_mackenzie',
    'name': 'Higienópolis\nMackenzie',
    'lines': [ 'four_yellow' ],
    'location': {
      'latitude': -23.549032,
      'longitude': -46.652303,
    }
  },
  'paulista': {
    'id': 'paulista',
    'name': 'Paulista',
    'lines': [ 'four_yellow' ],
    'location': {
      'latitude': -23.5552763,
      'longitude': -46.6620388,
    }
  },
  'fradique_coutinho': {
    'id': 'fradique_coutinho',
    'name': 'Fradique Coutinho',
    'lines': [ 'four_yellow' ],
    'location': {
      'latitude': -23.5661066,
      'longitude': -46.6842743,
    }
  },
  'faria_lima': {
    'id': 'faria_lima',
    'name': 'Faria Lima',
    'lines': [ 'four_yellow' ],
    'location': {
      'latitude': -23.5671303,
      'longitude': -46.6938042,
    }
  },
  'pinheiros': {
    'id': 'pinheiros',
    'name': 'Pinheiros',
    'lines': [ 'four_yellow', 'nine_emerald' ],
    'location': {
      'latitude': -23.566443,
      'longitude': -46.7030236,
    }
  },
  'butanta': {
    'id': 'butanta',
    'name': 'Butantã',
    'lines': [ 'four_yellow' ],
    'location': {
      'latitude': -23.5718286,
      'longitude': -46.7080804,
    }
  },


  // LINHA 11 CORAL
  'dom_bosco': {
    'id': 'dom_bosco',
    'name': 'Dom Bosco',
    'lines': [ 'eleven_coral' ],
    'location': {
      'latitude': -23.5418182,
      'longitude': -46.4481043,
    }
  },
  'jose_bonifacio': {
    'id': 'jose_bonifacio',
    'name': 'José Bonifácio',
    'lines': [ 'eleven_coral' ],
    'location': {
      'latitude': -23.5391389,
      'longitude': -46.4316873,
    }
  },
  'guaianazes': {
    'id': 'guaianazes',
    'name': 'Guaianazes',
    'lines': [ 'eleven_coral' ],
    'location': {
      'latitude': -23.5422638,
      'longitude': -46.4156039,
    }
  },
  'antonio_gianetti_neto': {
    'id': 'antonio_gianetti_neto',
    'name': 'Antonio Gianetti Neto',
    'lines': [ 'eleven_coral' ],
    'location': {
      'latitude': -23.554384,
      'longitude': -46.383661,
    }
  },
  'ferraz_de_vasconcelos': {
    'id': 'ferraz_de_vasconcelos',
    'name': 'Ferraz de Vasconcelos',
    'lines': [ 'eleven_coral' ],
    'location': {
      'latitude': -23.5407523,
      'longitude': -46.3682243,
    }
  },
  'poa': {
    'id': 'poa',
    'name': 'Poá',
    'lines': [ 'eleven_coral' ],
    'location': {
      'latitude': -23.5254012,
      'longitude': -46.3435945,
    }
  },
  'calmon_viana': {
    'id': 'calmon_viana',
    'name': 'Calmon Viana',
    'lines': [ 'eleven_coral' ],
    'location': {
      'latitude': -23.5252875,
      'longitude': -46.3331517,
    }
  },
  'suzano': {
    'id': 'suzano',
    'name': 'Suzano',
    'lines': [ 'eleven_coral' ],
    'location': {
      'latitude': -23.5342288,
      'longitude': -46.3079137,
    }
  },
  'jundiapeba': {
    'id': 'jundiapeba',
    'name': 'Jundiapeba',
    'lines': [ 'eleven_coral' ],
    'location': {
      'latitude': -23.5428769,
      'longitude': -46.258026,
    }
  },
  'braz_cubas': {
    'id': 'braz_cubas',
    'name': 'Braz Cubas',
    'lines': [ 'eleven_coral' ],
    'location': {
      'latitude': -23.5363135,
      'longitude': -46.2252028,
    }
  },
  'mogi_das_cruzes': {
    'id': 'mogi_das_cruzes',
    'name': 'Mogi das Cruzes',
    'lines': [ 'eleven_coral' ],
    'location': {
      'latitude': -23.52124,
      'longitude': -46.196781,
    }
  },
  'estudantes': {
    'id': 'estudantes',
    'name': 'Estudantes',
    'lines': [ 'eleven_coral' ],
    'location': {
      'latitude': -23.5154228,
      'longitude': -46.1839589,
    }
  },
}

export default Stations;
