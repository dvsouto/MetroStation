/**
 * Lista de linha de estaçōes
 */
const LineStations = {
  'one_blue': {
    'id': 'one_blue',
    'name': 'Linha 1 Azul',
    'hex_color': '#4a86e8',
    'stations': [ 'tucuruvi', 'parada_inglesa', 'jd_sao_paulo', 'santana', 'carandiru', 'tiete', 'armenia', 'tiradentes', 'luz', 'sao_bento', 'se', 'liberdade', 'sao_joaquim', 'vergueiro', 'paraiso', 'ana_rosa', 'vila_mariana', 'santa_cruz', 'praca_da_arvore', 'saude', 'sao_judas', 'conceicao', 'jabaquara' ]
  },
  'two_green': {
    'id': 'two_green',
    'name': 'Linha 2 Verde',
    'hex_color': '#009688',
    'stations': [ 'vila_madalena', 'sumare', 'clinicas', 'consolacao', 'trianon_masp', 'brigadeiro', 'paraiso', 'ana_rosa', 'chacara_klabin', 'santos_imigrantes', 'alto_do_ipiranga', 'sacoma', 'tamanduatei', 'vila_prudente' ]
  },
  'three_red': {
    'id': 'three_red',
    'name': 'Linha 3 Vermelha',
    'hex_color': '#A62E2E',
    'stations': [ 'palmeiras_barra_funda', 'marechal_deodoro', 'santa_cecilia', 'republica', 'anhangabau', 'se', 'pedro_ii', 'bras', 'bresser_mooca', 'belem', 'tatuape', 'carrao', 'penha', 'vila_matilde', 'guilhermina_esperanca', 'patriarca', 'artur_alvim', 'corinthians_itaquera' ]
  },
  'four_yellow': {
    'id': 'four_yellow',
    'name': 'Linha 4 Amarela',
    'hex_color': '#ffae00',
    'stations': [ 'luz', 'republica', 'higienopolis_mackenzie', 'paulista', 'fradique_coutinho', 'faria_lima', 'pinheiros', 'butanta' ]
  },
  'five_lilac': {
    'id': 'five_lilac',
    'name': 'Linha 5 Lilás',
    'hex_color': '#d334e5',
    'stations': [ 'capao_redondo', 'campo_limpo', 'vila_das_belezas', 'giovanni_gronchi', 'santo_amaro', 'largo_treze', 'adolfo_pinheiro', 'alto_da_boa_vista', 'borba_gato', 'brooklin', 'eucaliptos', 'moema' ]
  },
  'seven_ruby': {
    'id': 'seven_ruby',
    'name': 'Linha 7 Rubi',
    'hex_color': '#c4274b',
    'stations': [ 'luz', 'palmeiras_barra_funda', 'agua_branca', 'lapa', 'piqueri', 'pirituba', 'vila_clarice', 'jaragua', 'vila_aurora', 'perus', 'caieiras', 'franco_da_rocha', 'baltazar_fidelis', 'francisco_morato', 'botujuru', 'campo_limpo_paulista', 'varzea_paulista', 'jundiai' ]
  },
  'eight_diamond': {
    'id': 'eight_diamond',
    'name': 'Linha 8 Diamante',
    'hex_color': '#d1d1d1',
    'stations': [ 'julio_prestes', 'palmeiras_barra_funda', 'domingos_de_moraes', 'imperatriz_leopoldina', 'presidente_altino', 'osasco', 'comandante_sampaio', 'quitauna', 'general_miguel_costa', 'carapicuiba', 'santa_terezinha', 'antonio_joao', 'barueri', 'jardim_belval', 'jardim_silveira', 'jandira', 'sagrado_coracao', 'engenheiro_cardoso', 'itapevi', 'santa_rita', 'amador_bueno' ]
  },
  'nine_emerald': {
    'id': 'nine_emerald',
    'name': 'Linha 9 Esmeralda',
    'hex_color': '#48f9b5',
    'stations': [ 'osasco', 'presidente_altino', 'ceasa', 'villa_lobos_jaguare', 'cidade_universitaria', 'pinheiros', 'hebraica_reboucas', 'cidade_jardim', 'vila_olimpia', 'berrini', 'morumbi', 'granja_julieta', 'santo_amaro', 'socorro', 'jurubatuba', 'autodromo', 'primavera_interlagos', 'grajau' ]
  },
  'ten_turquoise': {
    'id': 'ten_turquoise',
    'name': 'Linha 10 Turquesa',
    'hex_color': '#2d9b8a',
    'stations': [ 'bras', 'juventus_mooca', 'ipiranga', 'tamanduatei', 'sao_caetano_do_sul', 'utinga', 'prefeito_saladino', 'prefeito_celso_daniel', 'capuava', 'maua', 'guapituba', 'ribeirao_pires', 'rio_grande_da_serra' ]
  },
  'eleven_coral': {
    'id': 'eleven_coral',
    'name': 'Linha 11 Coral',
    'hex_color': '#fb6255',
    'stations': [ 'luz', 'bras', 'tatuape', 'corinthians_itaquera', 'dom_bosco', 'jose_bonifacio', 'guaianazes', 'antonio_gianetti_neto', 'ferraz_de_vasconcelos', 'poa', 'calmon_viana', 'suzano', 'jundiapeba', 'braz_cubas', 'mogi_das_cruzes', 'estudantes' ]
  },
  'twoelve_sapphire': {
    'id': 'twoelve_sapphire',
    'name': 'Linha 12 Safira',
    'hex_color': '#3a437c',
    'stations': [ 'bras', 'tatuape', 'engenheiro_goulart', 'usp_leste', 'comendador_ermelino', 'sao_miguel_paulista', 'jardim_helena', 'itaim_paulista', 'jardim_romano', 'engenheiro_manoel_feio', 'itaquaquecetuba', 'aracare', 'calmon_viana' ]
  },
  'thirteen_jade': {
    'id': 'thirteen_jade',
    'name': 'Linha 13 Jade',
    'hex_color': '#27bc1a',
    'stations': [ 'engenheiro_goulart', 'guarulhos_cecap', 'aeroporto_guarulhos' ]
  },
  'fifteen_silver': {
    'id': 'fifteen_silver',
    'name': 'Linha 15 Prata',
    'hex_color': '#727272',
    'stations': [ 'vila_prudente', 'oratorio', 'sao_lucas', 'camilio_haddad', 'vila_tolstoi', 'vila_uniao' ]
  },
}

export default LineStations;
