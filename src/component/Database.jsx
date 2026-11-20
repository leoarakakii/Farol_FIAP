export const dataSets= {
    provas: [
        { id: 1, name: 'ENEM 2025', slug: 'ENEM 2025',  questoesNum: 90 },
        { id: 2, name: 'ENEM 2024', slug: 'ENEM 2024',  questoesNum: 90 },
        { id: 3, name: 'ENEM 2023', slug: 'ENEM 2023',  questoesNum: 90 },
        { id: 4, name: 'ENEM 2022', slug: 'ENEM 2022',  questoesNum: 90 },
        { id: 5, name: 'ENEM 2021', slug: 'ENEM 2021',  questoesNum: 90 },
    ],
    conteudos: [
        {
            id: 'example-content-algebra',
            title: 'Introdução à Álgebra: expressões e equações',
            type: 'video',
            category: 'Matemática',
            subcategory: 'Álgebra',
            subcategory2: 'Conjuntos',
            status: 'pending',
            link: 'placeholder.com',
            tags: ['matemática', 'álgebra', 'equações'],
            createdAt: '2026-01-15T12:00:00.000Z',
        },
    ],
    materias: [
        {
            id: 1,
            name: 'Matemática',
            slug: 'Matemática',
            color: '#C7D2FE',
            category: 'Matemática',
            subcategories: [
                { name: 'Álgebra', specialties: ['Conjuntos', 'Lógica matemática', 'Teoria dos números', 'Grupo de Álgebra não comutativa', 'Álgebra comutativa', 'Geometria algébrica'] },
                { name: 'Análise', specialties: ['Análise complexa', 'Análise funcional', 'Análise funcional não linear'] },
                { name: 'Equações', specialties: ['Equações diferenciais ordinárias', 'Equações diferenciais parciais', 'Equações diferenciais funcionais'] },
                { name: 'Geometria e Topologia', specialties: ['Geometria diferencial', 'Topologia algébrica', 'Topologia das variedades', 'Teoria das singularidades e das catástrofes', 'Teoria das folheações'] },
                { name: 'Matemática aplicada', specialties: ['Física matemática', 'Análise numérica', 'Matemática discreta e combinatória'] },
            ],
        },
        {
            id: 2,
            name: 'Probabilidade e Estatística',
            slug: 'Probabilidade e Estatística',
            color: '#BBF7D0',
            category: 'Probabilidade e Estatística',
            subcategories: [
                { name: 'Probabilidade', specialties: ['Teoria geral e fundamentos da probabilidade', 'Teoria geral e processos estocásticos', 'Teoremas de limite', 'Processos markovianos', 'Análise estocástica', 'Processos estocásticos especiais'] },
                { name: 'Estatística', specialties: ['Fundamentos da estatística', 'Inferência paramétrica', 'Inferência não paramétrica', 'Inferência em processos estocásticos', 'Análise multivariada', 'Regressão e correlação', 'Planejamento de experimentos', 'Análise de dados', 'Probabilidade e estatística aplicadas'] },
            ],
        },
        {
            id: 3,
            name: 'Ciência da Computação',
            slug: 'Ciência da Computação',
            color: '#DDD6FE',
            category: 'Ciência da Computação',
            subcategories: [
                { name: 'Teoria da computação', specialties: ['Computabilidade e modelos de computação', 'Linguagens formais e autômatos', 'Análise de algoritmos e complexidade de computação', 'Lógicas e semântica de programas'] },
                { name: 'Matemática da computação', specialties: ['Matemática simbólica', 'Modelos analíticos e de simulação'] },
                { name: 'Metodologia e técnicas da computação', specialties: ['Linguagens de programação', 'Engenharia de software', 'Banco de dados', 'Sistemas de informação', 'Processamento gráfico'] },
                { name: 'Sistemas de computação', specialties: ['Hardware', 'Arquitetura de sistemas de computação', 'Software básico', 'Teleinformática'] },
            ],
        },
        {
            id: 4,
            name: 'Astronomia',
            slug: 'Astronomia',
            color: '#BAE6FD',
            category: 'Astronomia',
            subcategories: [
                { name: 'Astronomia de posição e mecânica celeste', specialties: ['Astronomia fundamental', 'Astronomia dinâmica'] },
                { name: 'Astrofísica estelar', specialties: ['Astrofísica do meio interestelar', 'Meio interestelar', 'Nebulosa'] },
                { name: 'Astrofísica extragaláctica', specialties: ['Galáxias', 'Aglomerados de galáxias', 'Quasares', 'Cosmologia'] },
                { name: 'Sistema planetário', specialties: ['Física solar', 'Movimento da Terra'] },
                { name: 'Astronomia observacional e espacial', specialties: ['Astronomia ótica', 'Radioastronomia', 'Astronomia espacial', 'Processamento de dados astronômicos'] },
            ],
        },
        {
            id: 5,
            name: 'Física',
            slug: 'Física',
            color: '#FBCFE8',
            category: 'Física',
            subcategories: [
                { name: 'Física geral', specialties: ['Métodos matemáticos da Física', 'Física clássica e quântica: mecânica e campos', 'Relatividade e gravitação', 'Física estatística e termodinâmica', 'Metrologia, técnicas de laboratório e instrumentação'] },
                { name: 'Áreas clássicas de fenomenologia e suas aplicações', specialties: ['Eletricidade e magnetismo', 'Ótica', 'Acústica', 'Reologia', 'Dinâmica dos fluidos'] },
                { name: 'Física nuclear', specialties: ['Física das partículas elementares e campos', 'Teoria geral de partículas e campos', 'Raios cósmicos', 'Reações e propriedades de partículas', 'Estrutura nuclear', 'Radioatividade', 'Reações nucleares e espalhamento'] },
                { name: 'Física atômica e molecular', specialties: ['Física atômica', 'Física molecular', 'Estrutura eletrônica de átomos e moléculas', 'Espectros atômicos e moleculares', 'Processos de colisão e interações de átomos e moléculas'] },
                { name: 'Física dos fluidos, plasmas e descargas elétricas', specialties: ['Cinética e transporte de fluidos', 'Propriedades físicas dos gases', 'Física de plasmas e descargas elétricas'] },
                { name: 'Física da matéria condensada', specialties: ['Propriedades mecânicas, acústicas e térmicas', 'Cristalografia', 'Estrutura de líquidos e sólidos', 'Dinâmica da rede e estatística de cristais', 'Equilíbrio e transições de fases', 'Superfícies e interfaces', 'Estados eletrônicos', 'Supercondutividade', 'Materiais magnéticos e dielétricos', 'Magnetismo'] },
            ],
        },
        {
            id: 6,
            name: 'Química',
            slug: 'Química',
            color: '#FEF3C7',
            category: 'Química',
            subcategories: [
                { name: 'Química orgânica', specialties: ['Estrutura química, conformação e estereoquímica', 'Síntese orgânica', 'Físico-química orgânica', 'Fotoquímica orgânica', 'Química dos produtos naturais', 'Evolução, sistemática e ecologia química', 'Polímeros e coloides'] },
                { name: 'Química inorgânica', specialties: ['Campos de coordenação', 'Não-metais e seus compostos', 'Compostos organometálicos', 'Determinação de estruturas de compostos inorgânicos', 'Fotoquímica inorgânica', 'Química bio-inorgânica'] },
                { name: 'Físico-química', specialties: ['Cinética química e catálise', 'Eletroquímica', 'Espectroscopia', 'Química de interfaces', 'Química do estado condensado', 'Química nuclear e radioquímica', 'Química teórica', 'Termodinâmica química'] },
                { name: 'Química analítica', specialties: ['Separação', 'Métodos óticos de análise', 'Eletroanalítica', 'Gravimetria', 'Titimetria', 'Instrumentação analítica', 'Análise de traços e química ambiental'] },
            ],
        },
        {
            id: 7,
            name: 'Geociências',
            slug: 'Geociências',
            color: '#FECACA',
            category: 'Geociências',
            subcategories: [
                { name: 'Geologia', specialties: ['Mineralogia', 'Petrologia', 'Geoquímica', 'Geologia regional', 'Geotectônica', 'Geocronologia', 'Cartografia geológica', 'Metalogenia', 'Hidrogeologia', 'Prospecção mineral', 'Sedimentologia', 'Paleontologia estratigráfica', 'Estratigrafia', 'Geologia ambiental'] },
                { name: 'Geofísica', specialties: ['Geomagnetismo', 'Sismologia', 'Geotermia e fluxo térmico', 'Propriedades físicas das rochas', 'Geofísica nuclear', 'Sensoriamento remoto', 'Aeronomia', 'Instrumentação geofísica', 'Geofísica aplicada', 'Gravimetria'] },
                { name: 'Meteorologia', specialties: ['Meteorologia dinâmica', 'Meteorologia sinótica', 'Meteorologia física', 'Química da atmosfera', 'Instrumentação meteorológica', 'Climatologia', 'Micrometeorologia', 'Sensoriamento remoto da atmosfera', 'Meteorologia aplicada'] },
                { name: 'Geodésia', specialties: ['Geodésia física', 'Geodésia geométrica', 'Geodésia celeste', 'Fotogrametria', 'Cartografia'] },
                { name: 'Geografia física', specialties: ['Geomorfologia', 'Climatologia geográfica', 'Pedologia', 'Hidrogeografia', 'Geoecologia', 'Fotogeografia', 'Geocartografia'] },
                { name: 'Oceanografia', specialties: ['Oceanografia física', 'Oceanografia química', 'Oceanografia geológica', 'Variáveis e movimentos da água do mar', 'Interação do oceano com o leito marinho e a atmosfera', 'Sedimentologia marinha', 'Geofísica e geoquímica marinhas'] },
            ],
        },
        {
            id: 8,
            name: 'Ciências Biológicas',
            slug: 'Ciências Biológicas',
            color: '#A7F3D0',
            category: 'Ciências Biológicas',
            subcategories: [
                { name: 'Biologia', specialties: ['Genética', 'Genética quantitativa', 'Genética molecular', 'Mutagênese', 'Morfologia', 'Citologia e biologia celular', 'Embriologia', 'Histologia', 'Anatomia humana e animal', 'Fisiologia', 'Neurofisiologia', 'Fisiologia renal', 'Cinesiologia', 'Bioquímica', 'Proteínas', 'Lipídeos', 'Biologia molecular', 'Enzimologia', 'Biofísica molecular e celular'] },
                { name: 'Farmacologia', specialties: ['Farmacocinética', 'Etnofarmacologia', 'Toxicologia'] },
                { name: 'Imunologia', specialties: ['Imunoquímica', 'Imunogenética'] },
                { name: 'Microbiologia', specialties: ['Virologia', 'Bacteriologia', 'Micologia'] },
                { name: 'Parasitologia', specialties: ['Protozooses', 'Helmintoses', 'Ectoparasitoses'] },
                { name: 'Ecologia', specialties: ['Ecossistemas', 'Ecologia aplicada'] },
                { name: 'Oceanografia biológica', specialties: [] },
                { name: 'Botânica', specialties: ['Paleobotânica', 'Morfologia vegetal', 'Anatomia vegetal', 'Palinologia', 'Fisiologia vegetal', 'Fitogeografia'] },
                { name: 'Zoologia', specialties: ['Paleozoologia', 'Comportamento animal', 'Taxonomia'] },
            ],
        },
        {
            id: 9,
            name: 'Engenharias',
            slug: 'Engenharias',
            color: '#FDE68A',
            category: 'Engenharias',
            subcategories: [
                { name: 'Engenharia civil', specialties: [] },
                { name: 'Engenharia sanitária', specialties: [] },
                { name: 'Engenharia de transportes', specialties: [] },
                { name: 'Engenharia de minas', specialties: [] },
                { name: 'Engenharia de materiais', specialties: [] },
                { name: 'Engenharia química', specialties: [] },
                { name: 'Engenharia nuclear', specialties: [] },
                { name: 'Engenharia mecânica', specialties: [] },
                { name: 'Engenharia de produção', specialties: [] },
                { name: 'Engenharia naval e oceânica', specialties: [] },
                { name: 'Engenharia aeroespacial', specialties: [] },
                { name: 'Engenharia elétrica', specialties: [] },
                { name: 'Engenharia biomédica', specialties: [] },
            ],
        },
        {
            id: 10,
            name: 'Ciências da Saúde',
            slug: 'Ciências da Saúde',
            color: '#CFFAFE',
            category: 'Ciências da Saúde',
            subcategories: [
                { name: 'Medicina', specialties: ['Clínica médica', 'Angiologia', 'Dermatologia', 'Alergologia', 'Cancerologia', 'Hematologia', 'Endocrinologia', 'Neurologia', 'Pediatria', 'Cardiologia', 'Gastroenterologia', 'Pneumologia', 'Nefrologia', 'Reumatologia', 'Ginecologia e obstetrícia', 'Fisiatria', 'Oftalmologia', 'Ortopedia', 'Cirurgia', 'Psiquiatria'] },
                { name: 'Odontologia', specialties: ['Ortodontia', 'Odontopediatria', 'Periodontia', 'Endodontia', 'Radiologia odontológica'] },
                { name: 'Farmácia', specialties: ['Farmacotecnia', 'Farmacognosia', 'Bromatologia'] },
                { name: 'Enfermagem', specialties: [] },
                { name: 'Nutrição', specialties: ['Dietética', 'Desnutrição e desenvolvimento fisiológico'] },
                { name: 'Saúde coletiva', specialties: ['Epidemiologia', 'Saúde pública', 'Medicina preventiva'] },
                { name: 'Fonoaudiologia', specialties: [] },
                { name: 'Fisioterapia e terapia ocupacional', specialties: [] },
                { name: 'Educação física', specialties: [] },
            ],
        },
        {
            id: 11,
            name: 'Ciências Agrárias',
            slug: 'Ciências Agrárias',
            color: '#D9F99D',
            category: 'Ciências Agrárias',
            subcategories: [
                { name: 'Agronomia', specialties: ['Ciência do solo', 'Gênese, morfologia e classificação dos solos', 'Fitopatologia', 'Fitotecnia', 'Manejo', 'Agrometeorologia'] },
                { name: 'Engenharia florestal', specialties: ['Silvicultura', 'Dendrologia', 'Florestamento e reflorestamento', 'Dendrometria', 'Hidrologia florestal'] },
                { name: 'Engenharia agrícola', specialties: ['Irrigação', 'Drenagem'] },
                { name: 'Zootecnia', specialties: [] },
                { name: 'Medicina veterinária', specialties: [] },
                { name: 'Aquicultura', specialties: ['Maricultura', 'Carcinocultura', 'Piscicultura'] },
                { name: 'Engenharia de pesca', specialties: [] },
                { name: 'Engenharia de alimentos', specialties: [] },
            ],
        },
        {
            id: 12,
            name: 'Ciências Sociais Aplicadas',
            slug: 'Ciências Sociais Aplicadas',
            color: '#E9D5FF',
            category: 'Ciências Sociais Aplicadas',
            subcategories: [
                { name: 'Direito', specialties: ['Teoria do direito', 'Teoria geral do processo', 'História do direito', 'Filosofia do direito', 'Direito público', 'Direito tributário', 'Direito penal', 'Direito processual penal e civil', 'Direito constitucional', 'Direito administrativo', 'Direito internacional público e privado', 'Direito civil', 'Direito comercial', 'Direito do trabalho'] },
                { name: 'Administração', specialties: ['Administração de empresas', 'Mercadologia', 'Administração pública'] },
                { name: 'Ciências contábeis', specialties: [] },
                { name: 'Economia', specialties: ['História do pensamento econômico', 'Contabilidade nacional', 'Economia matemática', 'Inflação', 'Economia internacional', 'Capital humano', 'Economia regional'] },
                { name: 'Arquitetura e urbanismo', specialties: ['Paisagismo'] },
                { name: 'Demografia', specialties: [] },
                { name: 'Biblioteconomia', specialties: [] },
                { name: 'Arquivologia', specialties: [] },
                { name: 'Museologia', specialties: [] },
                { name: 'Comunicação', specialties: ['Teoria da comunicação', 'Jornalismo e editoração', 'Rádio e televisão', 'Relações públicas e propaganda'] },
                { name: 'Serviço social', specialties: [] },
                { name: 'Desenho industrial', specialties: [] },
                { name: 'Turismo', specialties: [] },
            ],
        },
        {
            id: 13,
            name: 'Ciências Humanas',
            slug: 'Ciências Humanas',
            color: '#DBEAFE',
            category: 'Ciências Humanas',
            subcategories: [
                { name: 'Filosofia', specialties: ['História da filosofia', 'Metafísica', 'Lógica', 'Ética', 'Epistemologia'] },
                { name: 'Sociologia', specialties: [] },
                { name: 'Antropologia', specialties: [] },
                { name: 'Arqueologia', specialties: [] },
                { name: 'História', specialties: ['História antiga e medieval', 'História moderna e contemporânea', 'História da América', 'História dos Estados Unidos', 'História do Brasil', 'História das religiões'] },
                { name: 'Geografia', specialties: ['Geografia humana', 'Geografia urbana', 'Geografia econômica', 'Geografia política', 'Regionalização'] },
                { name: 'Psicologia', specialties: ['Psicologia experimental', 'Psicobiologia', 'Psicologia social', 'Psicologia cognitiva', 'Psicologia das religiões'] },
                { name: 'Educação', specialties: ['Filosofia, história, sociologia e psicologia da educação', 'Política educacional', 'Currículo', 'Educação especial'] },
                { name: 'Ciências das religiões', specialties: ['Licenciatura', 'Bacharelado'] },
                { name: 'Ciência política', specialties: ['Teoria política', 'Estado e governo', 'Políticas públicas', 'Política internacional', 'Relações internacionais'] },
                { name: 'Teologia', specialties: ['Teologia moral', 'Teologia sistemática', 'Teologia pastoral'] },
            ],
        },
        {
            id: 14,
            name: 'Linguística, Letras e Artes',
            slug: 'Linguística, Letras e Artes',
            color: '#FED7AA',
            category: 'Linguística, Letras e Artes',
            subcategories: [
                { name: 'Linguística', specialties: ['Teoria linguística e análise linguística', 'Fisiologia da linguagem', 'Linguística histórica', 'Sociolinguística e dialetologia', 'Psicolinguística', 'Linguística aplicada'] },
                { name: 'Letras', specialties: ['Língua portuguesa', 'Línguas estrangeiras modernas', 'Línguas clássicas', 'Línguas indígenas'] },
                { name: 'Teoria literária', specialties: ['Literatura brasileira', 'Literaturas vernáculas', 'Literaturas estrangeiras modernas', 'Literaturas clássicas', 'Literatura comparada'] },
                { name: 'Artes', specialties: ['Fundamentos e crítica das artes', 'Teoria da arte', 'História da arte', 'Crítica da arte', 'Artes plásticas', 'Pintura', 'Desenho', 'Gravura', 'Escultura', 'Cerâmica', 'Tecelagem', 'Música', 'Dança', 'Teatro', 'Fotografia', 'Cinema', 'Artes do vídeo', 'Educação artística'] },
            ],
        },
    ]
}

export const ConteudoTipos = [
  { value: 'artigo', label: 'Artigo' },
  { value: 'video', label: 'Vídeo' },
  { value: 'podcast', label: 'Podcast' },
  { value: 'curso', label: 'Curso' },
  { value: 'ebook', label: 'E-book' },
];

export const Categorias = dataSets.materias.map((materia) => ({
  value: materia.slug,
  label: materia.name,
  subcategorias: materia.subcategories.map((subcategoria) => ({
    value: subcategoria.name,
    label: subcategoria.name,
    subcategorias2: subcategoria.specialties.map((item) => ({
      value: item,
      label: item,
    })),
  })),
}));

const enem2025CommonAnswers = 'E C D C E B C E C A E C A E B C B C B E B A B A B D E B C E D A B C A B A D D C E D E C A D C E E D C A D B D E B B A C D D E C B A D A B B C A B A C E E D D B C B C E A'.split(' ');
const toAnswerOption = (letter) => `opcao${letter.charCodeAt(0) - 64}`;

export const ENEM2025AnswerKey = {
  english: ['D', 'D', 'D', 'E', 'A', ...enem2025CommonAnswers].map(toAnswerOption),
  spanish: ['B', 'A', 'D', 'D', 'C', ...enem2025CommonAnswers].map(toAnswerOption),
};

const ENEM2025QuestionData = [
    { id: 1, slug: 'Questão 1', respostaCorreta: ENEM2025AnswerKey.english[0], tags: ['Halloween', 'indígena', 'racismo', 'apropriação cultural'], pergunta: [
        {questao: ['Glory Ames, from the White Earth reservation, is frustrated that despite the presence of several indigenous reservations near Moorhead, local Halloween stores still feature a western section with costumes such as “pow wow princess”.',
      'Even worse, despite a long-running debate about racism and cultural appropriation, often prompted by backlash against celebrities and politicians for donning offensive costumes, people continue to wear such costumes. Last Halloween, Ames spotted a photo on Instagram of a girl dressed as a Native American with a bullet in her forehead. She immediately reported it to the social media platform and had it removed. “They blatantly take certain aspects of our culture, race, religion, and use it for their advantage and ignore the people living it”, said Ames.',
      'LIU, M. C. M. Disponível em: www.washingtonpost.com. Acesso em: 12 maio 2024 (adaptado).',
      'Ao abordar um aspecto da celebração do Halloween, esse texto tem por objetivo']},
        {opcao1: 'denunciar a violência contra crianças indígenas.'},
        {opcao2: 'descrever costumes tradicionais em celebrações indígenas.'},
        {opcao3: 'valorizar as vestimentas características dos povos originários.'},
        {opcao4: 'criticar a exploração indevida de elementos da identidade indígena.'},
        {opcao5: 'sugerir ações de combate ao preconceito contra os povos originários'},
        ],
    },
    { id: 2, slug: 'Questão 2', respostaCorreta: ENEM2025AnswerKey.english[1], pergunta: [
        {questao: 'My idea of philosophy is that if it is not relevant to human problems, if it does not tell us how we can go about eradicating some of the misery in this world, then it is not worth the name of philosophy. I think Socrates made a very profound statement when he asserted that philosophy is to teach us proper living. In this day and age “proper living” means liberation from the urgent problems of poverty, economic necessity and indoctrination, mental oppression. DAVIS, A. Lectures on Liberation. Washington: Smithsonian Libraries, 1971 (adaptado). Nesse texto, ao discorrer sobre a relevância da filosofia, a escritora Angela Davis tem por objetivo'},
        {opcao1: 'criticá-la pela restrição temática.'},
        {opcao2: 'vinculá-la ao universo acadêmico.'},
        {opcao3: 'afastá-la da abordagem socrática.'},
        {opcao4: 'aproximá-la dos problemas sociais.'},
        {opcao5: 'responsabilizá-la pela pobreza humana.'},
        ]
    },
    { id: 3, slug: 'Questão 3', respostaCorreta: ENEM2025AnswerKey.english[2], pergunta: [
        {questao: ['Remember the sky that you were born under, know each of the star’s stories. Remember the moon, know who she is. Remember the sun’s birth at dawn. [...] Remember your birth, how your mother struggled to give you form and breath [...] Remember the earth whose skin you are: red earth, black earth, yellow earth, white earth brown earth, we are earth. Remember the plants, trees, animal life who all have their tribes, their families, their histories, too [...] Remember you are all people and all people are you. Remember you are this universe and this universe is you. Remember all is in motion, is growing, is you. HARJO, J. She Had Some Horses. Londres: W. Norton & Company, 1983 (fragmento). Nesse poema, de uma autora de ascendência indígena, o eu lírico ressalta a']},
        {opcao1: 'potência dos astros celestes.'},
        {opcao2: 'origem das plantas e dos animais.'},
        {opcao3: 'importância do apego à terra natal.'},
        {opcao4: 'relação entre seres humanos e natureza.'},
        {opcao5: 'conexão entre o tempo real e o tempo imaginário.'},
        ] 
    },
    {
    id: 4,
    slug: 'Questão 4',
    respostaCorreta: ENEM2025AnswerKey.english[3],
    pergunta: [
      {
        questao: [
          "It is true that all children are special, simply because they are children. But most adults are not special, and children end up as adults pretty quickly. Life then can be difficult and even disappointing. The shock of this may account for the emergence of the “snowflake generation” of university students, who are so delicate they can’t handle controversial ideas being put forward in their lectures. The roots of this fragility run deep in modern culture. So, an approach of the world that states: “Life is wonderful, you’re special and, if you are a good boy/girl, life will be amazing forever” is not a message designed to aid bouncing back from failure or confronting catastrophe. Resilience is not about feeding ego — telling your children how wonderful they are — but strengthening it.",
          "LOTT, T. Disponível em: www.theguardian.com. Acesso em: 10 dez. 2017 (adaptado). Nesse texto, a expressão “snowflake generation” é usada para",
          "abordar obstáculos impostos a universitários.",
          "destacar mensagens de incentivo a estudantes.",
          "estimular ações proativas em situações de emergência.",
          "retratar relações conflituosas em ambiente universitário.",
          "apontar posturas de uma juventude avessa a contrariedades."
        ]
      },
      {opcao1: "A"},
      {opcao2: "B"},
      {opcao3: "C"},
      {opcao4: "D"},
      {opcao5: "E"}
    ]
  },
  {
    id: 6,
    slug: 'Questão 6',
    respostaCorreta: ENEM2025AnswerKey.english[5],
    pergunta: [
      {
        questao: [
          "De próprio punho",
          "A escrita e suas tecnologias sofrem interessantes metamorfoses, numa ciranda que vai do simples bilhete aos originais de um livro",
          "1 Estranhei muito na primeira vez que escutei a expressão “de próprio punho”. Parecia 2 que eu ia bater em alguém. Não era bem o caso. Foi numa situação bancária, dessas bem 3 burocráticas, e eu devia escrever algo bem breve, mas com minhas mãos. Na verdade, 4 o que importava era a autenticidade da minha caligrafia, que à época ainda era mais 5 fluente e firme. Depois dos teclados de computador, ela rateia bastante. Minha letra, 6 hoje, tem uma espécie de alternância: dia sim, dia não, trêmula e firme, forte e fraca, 7 mais rotunda e mais cheia de arestas.",
          "É claro que já escrevi muito mais de próprio punho ou, numa palavra mais bonita,",
          "manuscrevi (prefiro a mão ao punho, embora ele também seja usado na tarefa). Mas isso",
          "não é um feito individual. Em larga medida, é social. Muita gente sente o mesmo que",
          "eu, isto é, escreve bem menos usando as mãos, ou melhor, empregando algum tipo de 12 tecnologia (lápis, caneta etc.) para escrever com grafite ou tinta ou giz ou carvão ou 13 sangue e o que mais. É importante lembrar que ainda há gente que não sabe escrever",
          "14 neste país, neste planeta, mas muita gente sabe e tem um combo de tecnologias mais 15 ou menos à disposição para isso. Sou dessas pessoas privilegiadas que têm várias",
          "possibilidades, e uma delas nunca deixou de ser o uso das minhas mãos. Ainda hoje,",
          "são elas que batucam meu teclado de computador ou que tocam suavemente duas ou",
          "três telas sensíveis. Mas não expressam mais a minha letra. No lugar, aparecem Times",
          "New Roman, Arial, Calibri e mais uma centena de “letras” à minha escolha. Eu e Deus 20 e o mundo.",
          "21 A despeito desse rol de chances e ferramentas para escrever, o manuscrito nunca 22 deixou de pintar aqui e ali, muitas vezes como obrigação. Na escola, por exemplo, até 23 hoje ele é soberano. No Enem também. Curioso, não? Fico pensando em que espaços",
          "24 e ocasiões ainda uso minha letra. Olhando ao redor, na minha casa, minha letra está 25 em espaços muito delimitados e específicos: bilhetes. Eles estão principalmente na",
          "26 cozinha, em especial na porta da geladeira, a fim de manter a comunicação com meus 27 coabitantes, sempre muito esquecidos ou relapsos. Mas também há bilhetes em post its",
          "28 na minha mesa do escritório, textinhos em garranchos por meio dos quais me comunico 29 comigo mesma, a evitar um comportamento esquecido e relapso.",
          "No escritório, costumo ser mais suave comigo mesma, mas também muito mais",
          "lacônica, a ponto de nem eu me entender, se passar o tempo. Em todos os casos vai",
          "minha letra, menos e mais redonda, a lápis e a tinta azul, em post its rosa-choque, colados 33 precariamente, e todos com destino à lixeira, em breve. Justo porque eles funcionam",
          "como lembretes de tarefas e coisas que devem ser vencidas e, claro, substituídas por",
          "outras, num fluxo infinito, às vezes ansiogênico, com que a maioria dos adultos (e mais 36 ainda as adultas) precisa conviver.",
          "As formas de escrever mudam, as necessidades também, e o resultado é um elenco",
          "complexo, em que nada dispensa nada, a depender da tarefa ou da importância das coisas",
          "ou de suas funções, claro. A escrita e suas tecnologias incríveis vão se reposicionando,",
          "mudando de status, numa ciranda interessante e importante que pode ser vista à luz de",
          "certa diversidade que encontra suas oportunidades e seus efeitos, aqui e ali. Não adianta 42 muito pensar sempre como se tudo fosse excludente. Estão aí minha farta comunicação",
          "por bilhetes, minha gaveta alegre de post its de toda cor, esperando para serem usados,",
          "e o cheque do cartório, em que quase tudo já é digital. “Do punho ao pixel” não é uma 45 frase filosoficamente correta. O negócio é mais “o punho e o pixel”.",
          "RIBEIRO, A. E. Disponível em: https://rascunho.com.br. Acesso em: 16 jan. 2024 (adaptado).",
          "No que diz respeito ao gênero bilhete, a autora dessa crônica",
          "ressalta a formalidade na comunicação com as pessoas de sua convivência.",
          "critica a ansiedade causada pela velocidade da comunicação.",
          "expressa a obrigatoriedade de concisão nas anotações.",
          "questiona a prática da escrita de próprio punho. E apresenta a diversidade de usos no cotidiano."
        ]
      },
      {opcao1: "A"},
      {opcao2: "B"},
      {opcao3: "C"},
      {opcao4: "D"},
      {opcao5: "E"}
    ]
  },
  {
    id: 7,
    slug: 'Questão 7',
    respostaCorreta: ENEM2025AnswerKey.english[6],
    pergunta: [
      {
        questao: [
          "O elemento que caracteriza esse texto como uma crônica é a",
          "defesa das opiniões da autora sobre um tema de interesse coletivo.",
          "exposição sobre o uso de tecnologias nas práticas de escrita atuais.",
          "abordagem de fatos do contexto pessoal em uma perspectiva reflexiva.",
          "utilização de recursos linguísticos para a interlocução direta com o leitor.",
          "apresentação de acontecimentos segundo a ordem de sucessão no tempo."
        ]
      },
      {opcao1: "A"},
      {opcao2: "B"},
      {opcao3: "C"},
      {opcao4: "D"},
      {opcao5: "E"}
    ]
  },
  {
    id: 8,
    slug: 'Questão 8',
    respostaCorreta: ENEM2025AnswerKey.english[7],
    pergunta: [
      {
        questao: [
          "Nesse texto, o que caracteriza a escrita “de próprio punho” é a letra manuscrita, enquanto a escrita digital é ilustrada pelo(a)",
          "utilização de tecnologias diversificadas.",
          "desenvolvimento de novos recursos de escrita.",
          "possibilidade de interações mediadas por telas.",
          "diversidade de fontes tipográficas que estão disponíveis.",
          "delimitação dos espaços onde a produção textual ocorre."
        ]
      },
      {opcao1: "A"},
      {opcao2: "B"},
      {opcao3: "C"},
      {opcao4: "D"},
      {opcao5: "E"}
    ]
  },
  {
    id: 9,
    slug: 'Questão 9',
    respostaCorreta: ENEM2025AnswerKey.english[8],
    pergunta: [
      {
        questao: [
          "A autora conclui que as novas tecnologias de escrita",
          "evoluem para facilitar a vida cotidiana.",
          "alcançam diferentes realidades sociais.",
          "coexistem com outras já estabelecidas.",
          "promovem maior agilidade na comunicação.",
          "surgem nos contextos em que são necessárias."
        ]
      },
      {opcao1: "A"},
      {opcao2: "B"},
      {opcao3: "C"},
      {opcao4: "D"},
      {opcao5: "E"}
    ]
  },
  {
    id: 10,
    slug: 'Questão 10',
    respostaCorreta: ENEM2025AnswerKey.english[9],
    pergunta: [
      {
        questao: [
          "O recurso linguístico usado para marcar a síntese da opinião da autora sobre a temática desenvolvida foi o(a)",
          "emprego da primeira pessoa em “Estranhei muito na primeira vez que escutei a expressão ‘de próprio punho’”. (l. 1)",
          "utilização de locução adverbial em “Na verdade, o que importava era a autenticidade da minha caligrafia”. (l. 3-4)",
          "uso de pronome possessivo em “Minha letra, hoje, tem uma espécie de alternância”. (l. 5-6)",
          "adoção de termo autorreflexivo em “No escritório, costumo ser mais suave comigo mesma”. (l. 30)",
          "substituição da expressão “Do punho ao pixel” (l. 44) pela expressão “o punho e o pixel”. (l. 45)"
        ]
      },
      {opcao1: "A"},
      {opcao2: "B"},
      {opcao3: "C"},
      {opcao4: "D"},
      {opcao5: "E"}
    ]
  },
  {
    id: 11,
    slug: 'Questão 11',
    respostaCorreta: ENEM2025AnswerKey.english[10],
    pergunta: [
      {
        questao: [
          "— Vejo, disse ele com algum acanhamento, que o doutor não é nenhum pé-rapado, mas nunca é bom facilitar... Minha filha Nocência fez 18 anos pelo Natal, e é rapariga que pela feição parece moça de cidade, muito ariscazinha de modos, mas bonita e boa deveras... Coitada, foi criada sem mãe, e aqui nestes fundões. [...]",
          "— Ora muito que bem, continuou Pereira caindo aos poucos na habitual garrulice, quando vi a menina tomar corpo, tratei logo de casá-la.",
          "— Ah! é casada? perguntou Cirino.",
          "— Isto é, é e não é. A coisa está apalavrada. Por aqui costuma labutar no costeio do gado para São Paulo um homem de mãocheia, que talvez o sr. conheça... o Manecão Doca...",
          "— Não, respondeu Cirino abanando a cabeça.",
          "— Pois isso é um homem às direitas, desempenado e trabucador como ele só... fura estes sertões todos e vem tangendo pontes de gado que metem pasmo. Também dizem que tem bichado muito e ajuntado cobre grosso, o que é possível, porque não é gastador nem dado a mulheres. Uma feita que estava aqui de pousada... olhe, mesmo neste lugar onde estava mecê inda agorinha, falei-lhe em casamento... isto é, dei-lhe uns toques... porque os pais devem tomar isso a si para bem de suas famílias; não acha?",
          "— Boa dúvida, aprovou Cirino, dou-lhe toda a razão; era do seu dever.",
          "TAUNAY, A. d’E. Inocência. Disponível em: www.dominiopublico.gov.br. Acesso em: 29 fev. 2024.",
          "Nesse trecho, ao se referir à sua filha, o pai de Inocência reproduz os ideais românticos, presentes na",
          "A valorização do ambiente rural na formação moral da mulher. B figura decorativa da mulher ante o protagonismo masculino.",
          "equivalência de origem social para a harmonia do casal.",
          "importância do dote como condição para o casamento. E aura de mistério sobre a identidade da jovem."
        ]
      },
      {opcao1: "A"},
      {opcao2: "B"},
      {opcao3: "C"},
      {opcao4: "D"},
      {opcao5: "E"}
    ]
  },
  {
    id: 12,
    slug: 'Questão 12',
    respostaCorreta: ENEM2025AnswerKey.english[11],
    pergunta: [
      {
        questao: [
          "O Ministério do Esporte no Brasil lançou o programa Maré Inclusiva, em 2024, ano dos Jogos Paralímpicos de Paris. Esse programa visa ampliar as oportunidades para pessoas com deficiência que desejam praticar o surf. O parasurf é a prática do surf adaptada para permitir que pessoas com deficiência pratiquem o esporte em todas as suas categorias, modalidades e manifestações. Para a Secretaria Nacional do Paradesporto, a iniciativa é mais do que um programa de esporte, é uma iniciativa que busca transformar vidas e promover a inclusão por meio do parasurf, criando um legado de igualdade e respeito.",
          "Disponível em: www.gov.br/esporte. Acesso em: 6 set. 2024 (adaptado).",
          "De acordo com esse texto, o programa voltado ao estímulo da prática do parasurf evidencia a",
          "adesão de diferentes países a programas inclusivos.",
          "preocupação política em atender a demandas paralímpicas. C importância de uma política pública esportiva para a inclusão. D eficiência das iniciativas de inclusão em megaeventos esportivos.",
          "E escassez de investimento em práticas corporais de aventura na natureza."
        ]
      },
      {opcao1: "A"},
      {opcao2: "B"},
      {opcao3: "C"},
      {opcao4: "D"},
      {opcao5: "E"}
    ]
  },
  {
    id: 13,
    slug: 'Questão 13',
    respostaCorreta: ENEM2025AnswerKey.english[12],
    pergunta: [
      {
        questao: [
          "Art. 26-A. Nos estabelecimentos de ensino fundamental e médio, oficiais e particulares, torna-se obrigatório o ensino sobre História e Cultura Afro-Brasileira.",
          "§ 1º O conteúdo programático a que se refere o caput deste artigo incluirá o estudo da História da África e dos Africanos, a luta dos negros no Brasil, a cultura negra brasileira e o negro na formação da sociedade nacional, resgatando a contribuição do povo negro nas áreas social, econômica e política pertinentes à História do Brasil.",
          "§ 2º Os conteúdos referentes à História e Cultura Afro-Brasileira serão ministrados no âmbito de todo o currículo escolar, em especial nas áreas de Educação Artística e de Literatura e História Brasileiras.",
          "BRASIL. Lei n. 10 639/2003. Disponível em: www.gov.br/planalto.",
          "Acesso em: 5 maio 2024. O emprego da norma-padrão é justificado nesse texto",
          "pela especialização de seu público-alvo.",
          "pela relevância cultural de seu conteúdo.",
          "pelos contextos pedagógicos em que circula.",
          "pela importância para os grupos étnico-raciais.",
          "pelas características do gênero a que pertence."
        ]
      },
      {opcao1: "A"},
      {opcao2: "B"},
      {opcao3: "C"},
      {opcao4: "D"},
      {opcao5: "E"}
    ]
  },
  {
    id: 15,
    slug: 'Questão 15',
    respostaCorreta: ENEM2025AnswerKey.english[14],
    pergunta: [
      {
        questao: [
          "O retrato como gênero da pintura ocidental ficou vinculado às elites, tornando invisíveis as populações que não faziam parte do círculo dominante. Num país de tradição escravocrata e colonizado por europeus como o Brasil, pouquíssimas pessoas negras e indígenas foram retratadas em pintura, e menos ainda identificadas com seus nomes nos retratos. Daí a importância, para a história da arte e para a história brasileira, dos retratos de Dalton Paula.",
          "Disponível em: www.masp.org.br. Acesso em: 5 maio 2024 (adaptado).",
          "Ao dar protagonismo a Zeferina e a João de Deus Nascimento, o artista Dalton Paula evidencia que a(s)",
          "A arte pode promover formas de afirmação de identidade social. B comunidades periféricas passam a adquirir o gênero retrato.",
          "personagens retratadas simbolizam a sociedade brasileira.",
          "pintura funciona como instrumento de ascensão social. E imagens tradicionais preservam memórias afetivas."
        ]
      },
      {opcao1: "A"},
      {opcao2: "B"},
      {opcao3: "C"},
      {opcao4: "D"},
      {opcao5: "E"}
    ]
  },
  {
    id: 16,
    slug: 'Questão 16',
    respostaCorreta: ENEM2025AnswerKey.english[15],
    pergunta: [
      {
        questao: [
          "Símbolos",
          "Eu e tu, ante a noite e o amplo desdobramento do mar, fero, a estourar de encontro à rocha nua... Um símbolo descubro aqui, neste momento esta rocha, este mar... a minha vida e a tua.",
          "O mar vem, o mar vai, nele há o gesto violento de quem maltrata e, após, se arrepende e recua.",
          "Como compreendo bem da rocha o sentimento!",
          "São muito iguais, por certo, a minha mágoa e a sua.",
          "Contemplo neste quadro a nossa triste vida; tu és dúbio mar que, na sua inconsciência, tem carinhos de amor e fúrias de demência!",
          "Eu sou a dor estanque, a dor empedernida, sou rocha a emergir de um côncavo de areia, imóvel, muda, isenta e alheia ao mar, alheia.",
          "MACHADO, G. Poesia completa. Rio de Janeiro: Cátedra/MEC, 1978.",
          "Nesse soneto, os traços da estética simbolista são resgatados pelo eu lírico ao",
          "rejeitar as emoções de “amor” e “mágoa”.",
          "expressar a dubiedade do olhar sobre o outro.",
          "representar o “eu” e o “tu” como sujeitos volúveis.",
          "associar a sua inconsciência a elementos da natureza.",
          "metaforizar o conflito amoroso nas imagens de “mar” e “rocha”."
        ]
      },
      {opcao1: "A"},
      {opcao2: "B"},
      {opcao3: "C"},
      {opcao4: "D"},
      {opcao5: "E"}
    ]
  },
  {
    id: 17,
    slug: 'Questão 17',
    respostaCorreta: ENEM2025AnswerKey.english[16],
    pergunta: [
      {
        questao: [
          "Antes do inverno chegar.",
          "Ela tinha olhinhos brilhantes. Os mesmos de antes. Antes da fome. Antes das 17 mudanças de cidade. Dos sete filhos e dos muitos anos de trabalho dentro e fora de casa.",
          "Ela fazia ambrosia, bolo de fubá e pedacinhos de queijo. Antes do inverno, ela plantava flores novas e diferentes para nos esperar nas próximas férias de verão.",
          "Ela tinha o jeito de menina. Menina sapeca, correndo na grama seca do cerrado. O mesmo jeito de antes. Antes do marido (e mesmo com o marido). Antes do cansaço dos anos. Antes da dureza do trato com a terra.",
          "Ela tinha histórias. Compridas, curtas, divertidas e verdadeiras. Mas isso foi antes. Antes das lembranças se bagunçarem feito bolas coloridas de Natal esperando para serem montadas na árvore.",
          "Eu era sua neta. Antes do Alzheimer chegar, eu era sua neta. Mas ela é e sempre será minha avó.",
          "PERSON, C. R. Borboletas no estômago: porque às vezes o título precisa ser adolescente e clichê, já que a vida exige sermos tão adultos. São Paulo: Ed. das Autoras, 2021.",
          "A narradora, ao resgatar memórias da história de vida da avó, faz uso recorrente da locução “antes de”. Esse termo colabora para a progressão temática na medida em que",
          "relaciona eventos ocorridos simultaneamente.",
          "estabelece uma comparação entre as lembranças.",
          "ressalta fatos que ressignificam o momento presente.",
          "sinaliza uma sequência que denota ações consecutivas.",
          "apresenta uma explicação para as memórias resgatadas."
        ]
      },
      {opcao1: "A"},
      {opcao2: "B"},
      {opcao3: "C"},
      {opcao4: "D"},
      {opcao5: "E"}
    ]
  },
  {
    id: 18,
    slug: 'Questão 18',
    respostaCorreta: ENEM2025AnswerKey.english[17],
    pergunta: [
      {
        questao: [
          "Com 20 anos de experiência no futebol de alto rendimento, Marina, ex-jogadora da seleção brasileira de futebol, salienta que, por trás do espetáculo apresentado nas mídias, com mensagens de motivação e superação, o esporte não é tão inclusivo assim. “É esta análise que devemos fazer: aqueles atletas que estão ali estão trazendo uma alta performance a partir dos seus limites”, explica. Para a profissional, é preciso analisar com cautela “a ideia romântica que a mídia passa para os telespectadores”. A realidade é muito mais dura do que as imagens espetaculosas que principalmente a televisão busca transmitir para a audiência. “Por trás existe um ser humano, a gente não pode nunca esquecer isso. Aquela pessoa treinou insistentemente para estar ali, durante meses, semanas e temporadas. Duas vezes ao dia, de duas a quatro horas”, pondera Marina. Atualmente, as crianças e os jovens vislumbram o sucesso profissional e a boa-vida financeira de poucos atletas que se destacam e estampam os meios de comunicação. Tudo parece ser muito mais fácil do que realmente é quando apenas as conquistas são mostradas.",
          "ROSOLEN, N. Disponível em: www.uninter.com. Acesso em: 10 maio 2024 (adaptado). Nesse texto, a visão crítica de uma ex-atleta de futebol revela que",
          "os meios de comunicação invisibilizam as dificuldades presentes no esporte.",
          "o treinamento atlético de alto nível é desestimulante para os indivíduos.",
          "o trabalho contínuo é desvalorizado no contexto esportivo profissional.",
          "as ações de incentivo financeiro a jovens atletas são precárias. E as publicações da mídia esportiva rotulam atletas iniciantes."
        ]
      },
      {opcao1: "A"},
      {opcao2: "B"},
      {opcao3: "C"},
      {opcao4: "D"},
      {opcao5: "E"}
    ]
  },
  {
    id: 19,
    slug: 'Questão 19',
    respostaCorreta: ENEM2025AnswerKey.english[18],
    pergunta: [
      {
        questao: [
          "No predomínio das mulheres pretas brasileiras nos Jogos Olímpicos de 2024, uma coisa chamou a atenção no pódio: elas valorizam a parte psicológica. As duas medalhistas de ouro, a judoca Beatriz Souza e a ginasta Rebeca Andrade, ressaltam, em várias entrevistas, a importância da saúde mental. Em uma dessas entrevistas, Rebeca sinaliza: “Acho que não é só sobre vencer a Simone, é sobre vencer a mim mesma. A minha briga está na minha cabeça, não está com outras pessoas. Para conseguir fazer as minhas apresentações, preciso controlar a minha cabeça, o meu corpo, e essa é a briga”. Na mesma linha, a skatista Rayssa Leal exalta a necessidade da terapia, e a Seleção Brasileira de Futebol de Mulheres tem o suporte psicológico como reforço no treinamento.",
          "Disponível em: https://iclnoticias.com.br.",
          "Acesso em: 18 set. 2024 (adaptado).",
          "Nesse texto, as atletas brasileiras defendem o(a)",
          "investimento na modernização de equipamentos.",
          "subordinação do treinamento físico ao mental.",
          "estímulo à competição entre adversárias.",
          "aprimoramento da expressão corporal. E importância da saúde emocional."
        ]
      },
      {opcao1: "A"},
      {opcao2: "B"},
      {opcao3: "C"},
      {opcao4: "D"},
      {opcao5: "E"}
    ]
  },
  {
    id: 20,
    slug: 'Questão 20',
    respostaCorreta: ENEM2025AnswerKey.english[19],
    pergunta: [
      {
        questao: [
          "A característica fundamental no aprendizado das práticas rituais nos candomblés é o processo iniciático e participante. Durante o período de reclusão em terreiros ou rocas, o iniciado passa por uma série de ritos esotéricos (banhos rituais, raspagem da cabeça etc.), ao mesmo tempo em que começa a adquirir um complexo código de símbolos materiais (substâncias, folhas, frutos, raízes etc.) e de gestos associados a um repertório linguístico específico das cerimônias que se desenrolam nos contextos sagrados em geral e em cada terreiro em particular.",
          "Esse repertório linguístico, genericamente chamado de “língua de santo” na Bahia, compreende uma terminologia religiosa operacional, de caráter mágico-semântico e de aparente forma portuguesa, mas que repousa sobre sistemas lexicais de diferentes línguas africanas que provavelmente foram faladas no Brasil escravocrata, vindo a constituir uma língua ritual, que se acredita pertencer à nação do vodum, do orixá ou do inquice, e não a determinada nação africana política atual.",
          "Disponível em: https://periodicos.ufba.br. Acesso em: 21 jan. 2024 (adaptado).",
          "A “língua de santo” tem sua importância para o patrimônio linguístico brasileiro por",
          "apresentar uma carga semântica mítica.",
          "conservar elementos dos falares dos escravizados.",
          "resgatar expressões portuguesas do período colonial.",
          "decodificar o ritual religioso dos nossos antepassados.",
          "favorecer a compreensão do léxico africano contemporâneo."
        ]
      },
      {opcao1: "A"},
      {opcao2: "B"},
      {opcao3: "C"},
      {opcao4: "D"},
      {opcao5: "E"}
    ]
  },
  {
    id: 21,
    slug: 'Questão 21',
    respostaCorreta: ENEM2025AnswerKey.english[20],
    pergunta: [
      {
        questao: [
          "O meu medo é entrar na faculdade e tirar zero eu que nunca fui bom de matemática fraco no inglês eu que nunca gostei de química geografia e português o que é que eu faço agora hein mãe não sei. [...]",
          "O meu medo é a vida piorar e eu não conseguir arranjar emprego nem de faxineiro nem de porteiro nem de ajudante de pedreiro e o pessoal dizer que o governo já fez o que pôde já pôde o que fez já deu a sua cota de participação hein mãe não sei.",
          "O meu medo é que mesmo com diploma debaixo do braço andando por aí desiludido e desempregado o policial me olhe de cara feia e eu acabe fazendo uma burrice sei lá uma besteira será que eu vou ter direito a uma cela especial hein mãe não sei.",
          "FREIRE, M. Contos negreiros. Rio de Janeiro: Record, 2005.",
          "Nesse texto, a reiteração dos medos e das angústias do narrador exprime",
          "inseguranças sobre o futuro familiar.",
          "dilemas resultantes de seu fracasso escolar.",
          "incertezas centradas em sua condição social.",
          "hesitações em relação à sua formação profissional.",
          "preocupações com as políticas públicas assistenciais."
        ]
      },
      {opcao1: "A"},
      {opcao2: "B"},
      {opcao3: "C"},
      {opcao4: "D"},
      {opcao5: "E"}
    ]
  },
  {
    id: 25,
    slug: 'Questão 25',
    respostaCorreta: ENEM2025AnswerKey.english[24],
    pergunta: [
      {
        questao: [
          "Passando por aqui para lembrar algumas palavras, frases e expressões que nos infernizaram em 2023. Inclusive passando por aqui. Se você for proativo, vai achar que é o novo normal. Estarão na sua zona de conforto. Mas, se for reativo como eu, vai achar que é uma narrativa que precisa ser ressignificada.",
          "É uma questão de empatia. É sobre entregar um discurso mais robusto e empoderado. Sei bem que não tenho lugar de fala para harmonizar certos pontos fora da curva e que preciso aplicar toda a minha resiliência para fazer um realinhamento. O nível de fitness está hoje num sarrafo muito alto.",
          "O fato é que acho cringe essas falas fora da caixinha. Aliás, falar cringe já é meio cringe. Preciso usar a superação para me reinventar e entender que resenha não tem mais a ver com futebol, é qualquer papo, desde que latente.",
          "Pensando bem, não é tão difícil. Frases feitas são aquelas que entram por um ouvido e saem pelo outro sem um estágio intermediário no cérebro. A boca fala por conta própria, dispensando-nos de pensar. E não tem problema nisso. Ou as ditas frases se incorporam à língua ou morrem e nascem outras. A língua é assim. Simples assim.",
          "CASTRO, R. Disponível em: www1.folha.uol.com.br. Acesso em: 3 fev. 2024 (adaptado). Nesse texto, a estratégia empregada para criticar a constante exposição a palavras, frases e expressões automatizadas é o(a)",
          "menção feita à efemeridade de alguns usos linguísticos aleatórios.",
          "subjetividade marcada pela reflexão que se desenvolve em primeira pessoa.",
          "efeito estilístico da repetição intencional da palavra “assim” no último parágrafo.",
          "sedução sugerida pelo envolvimento direto do leitor marcado nos usos de “você” e “sua”.",
          "humor gerado pelo uso das estruturas linguísticas que são objeto da reflexão desenvolvida."
        ]
      },
      {opcao1: "A"},
      {opcao2: "B"},
      {opcao3: "C"},
      {opcao4: "D"},
      {opcao5: "E"}
    ]
  },
  {
    id: 28,
    slug: 'Questão 28',
    respostaCorreta: ENEM2025AnswerKey.english[27],
    pergunta: [
      {
        questao: [
          "Pequenino morto",
          "Tange o sino, tange, numa voz de choro, Numa voz de choro... tão desconsolado... No caixão dourado, como em berço de ouro, Pequenino, levam-te dormindo... Acorda! Olha que te levam para o mesmo lado De onde o sino tange numa voz de choro... Pequenino, acorda!",
          "Que caminho triste, e que viagem! Alas",
          "De ciprestes negros a gemer no vento; Tanta boca aberta de famintas valas",
          "A pedir que as fartem, a esperar que as encham...",
          "Pequenino, acorda! Recupera o alento, Foge da cobiça dessas fundas valas A pedir que as encham.",
          "CARVALHO, V. Poemas e canções. Rio de Janeiro: Saraiva, 1962 (fragmento).",
          "Nesse fragmento do poema, o sentimento de luto adquire contornos expressivos e é intensificado pela",
          "descrição da paisagem de um cemitério.",
          "recusa do eu lírico à irreversibilidade da morte.",
          "sonoridade dos versos produzida pela pontuação.",
          "religiosidade evocada como forma de fortalecimento.",
          "impressão de sonho na construção da estrutura poética."
        ]
      },
      {opcao1: "A"},
      {opcao2: "B"},
      {opcao3: "C"},
      {opcao4: "D"},
      {opcao5: "E"}
    ]
  },
  {
    id: 29,
    slug: 'Questão 29',
    respostaCorreta: ENEM2025AnswerKey.english[28],
    pergunta: [
      {
        questao: [
          "Só entende os corações desse lugar quem mergulha nesse mar a perder de vista e recoberto de cana caiana, cana fita, cana roxa, cana-de-macaco, açúcar, melado, rapadura, aguardente, fumo, mandioca, quiabos, pimentas, moendas, frutas, fruta-pão, sobrados, senzalas, tachos, casa de purgar. Um reino dentro de outro, com tudo o que se tem direito: reis, rainhas, príncipes e princesas, bobos da corte, cortesãos, conselheiros e escravos, muitos escravos. […]",
          "A corte do massapé, como qualquer outra na história da humanidade, fazia tudo para não deixar escapar nenhum mísero grão dos seus domínios para quem estivesse de fora do seu apertado círculo. Os nomes se repetiam de pai para filho, para sobrinho, para netos e bisnetos, de forma concêntrica e repetitiva, para que não pairasse nenhuma dúvida de que são todos da mesma parentela. As farinhas todas num mesmo saco brasonado.",
          "CRUZ, E. A. Água de barrela. Rio de Janeiro: Malê, 2018.",
          "Nesse fragmento, o narrador enumera o resultado do trabalho com a terra, o qual, no contexto em que aparece,",
          "espelha a permanência dos privilégios de classe.",
          "oferece um panorama da população do campo.",
          "mostra os benefícios da fartura na agricultura.",
          "defende a importância da atividade coletiva. E valoriza o trabalho ao longo das gerações."
        ]
      },
      {opcao1: "A"},
      {opcao2: "B"},
      {opcao3: "C"},
      {opcao4: "D"},
      {opcao5: "E"}
    ]
  },
  {
    id: 30,
    slug: 'Questão 30',
    respostaCorreta: ENEM2025AnswerKey.english[29],
    pergunta: [
      {
        questao: [
          "Uruku",
          "Urucum",
          "Rocou",
          "(Bixa orellana)",
          "Moju, dono da água, não gosta do cheiro de urucum. Mani’ojarã, dono da mandioca, e os donos das outras plantas cultivadas também não. Eles não suportam. Por isso, os Wajãpi se untam de urucum, deixam o rosto vermelho e se perfumam com seu aroma agradável. Além disso, os seres agressores, os jarã (donos) e os espíritos terrestres, gostam do cheiro dos fluidos humanos, do sangue, do suor. Então, o urucum os dissimula, protegendo as pessoas que vão caçar, caminhar pela floresta, que estão sendo perturbadas por espíritos em sonhos ou que estão em resguardo, como os doentes. O seu uso é tão cotidiano que os Wajãpi o plantam na aldeia, para ter sempre pertinho. Como o urucum não tem jarã, não tem problema nenhum em arrancar e usar para pintar.",
          "STRAPPAZZON, A. I.; SIGOLO, R. P. Jardins da história: medicinas indígenas. Recife: ObservaPICS, 2022.",
          "Esse verbete contribui para a preservação do patrimônio linguístico nacional, pois apresenta uma",
          "explicação de um rito medicinal do povo Wajãpi.",
          "definição de um termo na perspectiva ancestral indígena.",
          "relação de equivalência entre vocábulos de diferentes línguas indígenas.",
          "atualização de saberes tradicionais dos povos indígenas brasileiros. E descrição das propriedades científicas de plantas silvestres."
        ]
      },
      {opcao1: "A"},
      {opcao2: "B"},
      {opcao3: "C"},
      {opcao4: "D"},
      {opcao5: "E"}
    ]
  },
  {
    id: 32,
    slug: 'Questão 32',
    respostaCorreta: ENEM2025AnswerKey.english[31],
    pergunta: [
      {
        questao: [
          "Muitos pensam que narrativa curta é sinônimo de conto, perdendo de vista gêneros que, por tradição ruim, continuam à margem da nobreza. Acontece que o conto tem uma densidade específica, centrando-se na exemplaridade de um instante da condição humana, sem que essa exemplaridade se refira à valoração moral, já que uma grande mazela pode muito bem exemplificar uma das nossas faces. A crônica não tem essa característica. Conservou a marca do registro circunstancial feito por narrador-repórter que relata um fato para muitos leitores que formam um público determinado.",
          "Mas que público é esse? Sendo a crônica uma soma de jornalismo e literatura (daí a imagem do narrador-repórter), dirige-se a uma classe que tem preferência pelo jornal em que ela é publicada, o que significa uma espécie de censura ou, pelo menos, de limitação: a ideologia do veículo corresponde ao interesse dos seus consumidores, direcionados pelos proprietários dos periódicos e/ou pelos editores-chefes da redação. Ocorre ainda o limite de espaço, uma vez que a página comporta várias matérias, o que impõe a cada uma delas um número restrito de laudas, obrigando o redator a explorar, da maneira mais econômica possível, o pequeno espaço de que dispõe. É dessa economia que nasce sua riqueza estrutural.",
          "SÁ, J. A crônica. São Paulo: Ática, 1987 (adaptado).",
          "De acordo com esse texto, o aspecto tecnológico que influencia a composição do gênero crônica advém da",
          "conexão ideológica.",
          "densidade temática.",
          "ênfase no público leitor.",
          "apresentação de uma moral.",
          "restrição espacial do suporte."
        ]
      },
      {opcao1: "A"},
      {opcao2: "B"},
      {opcao3: "C"},
      {opcao4: "D"},
      {opcao5: "E"}
    ]
  },
  {
    id: 35,
    slug: 'Questão 35',
    respostaCorreta: ENEM2025AnswerKey.english[34],
    pergunta: [
      {
        questao: [
          "Margot Robbie foi criticada por “não ser bonita o suficiente” para interpretar a Barbie. Recentemente, Paolla Oliveira foi chamada de gorda. Só fico pensando o que serei eu com mais de 50 (também no peso), com a minha aparência comum. O corpo da mulher vive um reality show permanente: é sempre vigiado e fiscalizado, como se fosse domínio público. A mulher que não atender aos estereótipos está sujeita a sofrer penalidades básicas, como distúrbios, obsessões, medo do próprio corpo e, é claro, dietas à base de rúcula. “A dieta é o sedativo político mais potente na história das mulheres”, escreveu Naomi Wolf, em 1991. A regra é não haver singularidade, mascarar a passagem do tempo, imobilizar a beleza (já imaginou como isso seria enfadonho?). O mandamento é obedecer às regras sociais do bom comportamento corporal, “como deve ser”, não nos atos, mas na forma.",
          "KORICH, B. S. Disponível em: www1.folha.uol.com.br. Acesso em: 22 jan. 2024 (adaptado).",
          "Nesse texto, para introduzir a ideia de que a fiscalização permanente sobre o corpo afeta todas as mulheres, a autora",
          "faz um comentário sobre sua própria imagem.",
          "destaca avaliações particulares entre parênteses.",
          "cita um formato de programa influente no segmento da beleza.",
          "utiliza declaração de uma jornalista como argumento de autoridade.",
          "enumera críticas à aparência de mulheres consideradas padrões de beleza."
        ]
      },
      {opcao1: "A"},
      {opcao2: "B"},
      {opcao3: "C"},
      {opcao4: "D"},
      {opcao5: "E"}
    ]
  },
  {
    id: 36,
    slug: 'Questão 36',
    respostaCorreta: ENEM2025AnswerKey.english[35],
    pergunta: [
      {
        questao: [
          "I: o nome do filme é roupa suja ... eu assisti na minha casa ... com minha mãe ... tinha um ... o filme era sobre um homem que colocaram ... trocaram as bolsas ... daí o homem levou uma bolsa cheia de dinheiro sem ele saber que na mala dele ... pensando que era dele mas era errada ... quando ele chegou onde ele ia trabalhar ... tinha uma moça tentando abrir a porta pra fazer entrevista com uns cantores lá que tinham ... daí ele perguntou ... “você tá tentando abrir a porta?”... daí ele ... “não ... não” ... daí ele disse ... “ah ... tá ... sim” ... daí ela ... “é ... e quero fazer uma entrevista” ... daí ele disse ... “você quer entrar ... então pode entrar” ... daí entraram ... daí ficaram lá ... quando ela entrou e queria fazer a entrevista um homem num deixou ... daí a mulher pegou ... subiu onde o homem tava trabalhando ... rapaz né ... onde ele tava trabalhando e ficou lá e dando o show ...",
          "CUNHA, M. A. F. Corpus discurso & gramática: a língua falada e escrita na cidade de Natal. Disponível em: https://deg.uff.br.",
          "Acesso em: 4 dez. 2024 (adaptado).",
          "Nesse texto, a repetição da forma “daí” revela",
          "a necessidade de adequação ao interlocutor.",
          "a origem regional do locutor.",
          "a escolaridade do falante.",
          "uma estratégia presente na linguagem oral.",
          "uma ênfase em determinadas partes do discurso."
        ]
      },
      {opcao1: "A"},
      {opcao2: "B"},
      {opcao3: "C"},
      {opcao4: "D"},
      {opcao5: "E"}
    ]
  },
  {
    id: 37,
    slug: 'Questão 37',
    respostaCorreta: ENEM2025AnswerKey.english[36],
    pergunta: [
      {
        questao: [
          "TEXTO I Os Doze Trabalhos de Hércules",
          "Hércules é uma figura lendária da mitologia greco-romana. Ele é frequentemente retratado como um herói de força sobre-humana e coragem, filho de Zeus, o rei dos deuses, e Alcmena, uma mulher mortal. O episódio mais conhecido de Hércules é a realização dos Doze Trabalhos.",
          "Esses trabalhos são impostos a ele como uma forma de expiação pelos crimes cometidos durante um acesso de loucura, causado pela deusa Hera, esposa de Zeus. Os Doze Trabalhos são: matar o Leão de Nemeia; matar a Hidra de Lerna; capturar a corça de Cerineia; capturar o javali de Erimanto; limpar os estábulos de Áugias; matar as aves do lago Estínfalo; matar o touro de Creta; capturar os cavalos de Diomedes; roubar o cinturão de Hipólita, a rainha das Amazonas; capturar o gado de Gerião; capturar os pomos de ouro do Jardim das Hespérides; capturar o cão de Hades, Cérbero.",
          "HERTEL, R. Mitologia. Disponível em: https://osmelhoreslivros.com.br. Acesso em: 4 jun. 2025 (adaptado).",
          "TEXTO II Os Doze Trabalhos",
          "O que lhe faltava de estudo lhe sobrava de boa vontade e inteligência. No escritório improvisado na salinha da casa, anunciava seus serviços de bombeiro hidráulico e eletricista. Nas horas vagas entregava panfletos e lavava carros. Quando a cidade fervia com alguma festa, postava-se à entrada vendendo cerveja. Se fosse algum show infantil, cocadas. Aos sábados, era pedreiro e, aos domingos, conservava um jardim de uma mansão, além de tratar da piscina e dos cachorros. Nas férias, abrigava-se na fazenda dos donos da mansão, onde trabalhava como caseiro e motorista. Seu nome: João Antonio da Silva. Mas pode chamar de Hércules.",
          "FERREIRA, G. V. Os doze trabalhos. Disponível em: www.minicontos.com.br. Acesso em: 15 jul. 2015 (adaptado).",
          "A comparação entre os textos I e II indica que o(a)",
          "intertextualidade com o mito apresentado no Texto I é um recurso presente no Texto II.",
          "narração de fatos do Texto II sintetiza os acontecimentos retratados no Texto I.",
          "vocabulário empregado no Texto II é ancorado em conhecimento literário.",
          "tema do trabalho como reparação é abordado em ambos os textos. E marcação temporal no passado predomina em ambos os textos."
        ]
      },
      {opcao1: "A"},
      {opcao2: "B"},
      {opcao3: "C"},
      {opcao4: "D"},
      {opcao5: "E"}
    ]
  },
  {
    id: 38,
    slug: 'Questão 38',
    respostaCorreta: ENEM2025AnswerKey.english[37],
    pergunta: [
      {
        questao: [
          "1 O mais assustador do meteoro que cruzou o céu da Sibéria e explodiu no ar como 2 várias bombas atômicas é que ele chegou sem ser anunciado. Com todas as atenções 3 voltadas para o outro asteroide, o que passou de raspão, o asteroide da Sibéria entrou pela 4 porta dos fundos sem ser detectado. A desculpa é que era pequeno demais para chamar a 5 atenção e por isso os alarmes não funcionaram. Nossa ilusão, até agora, era que qualquer 6 detrito espacial que se aproximasse de nós seria identificado e rotulado, e sua trajetória 7 calculada até o último milímetro com grande antecedência, o que nos daria tempo para 8 preparar o espírito — ou usar nossos cartões de crédito até o limite — no caso da colisão 9 com a Terra ser inevitável.",
          "VERISSIMO, L. F. Disponível em: www.estadao.com.br. Acesso em: 1 mar. 2013.",
          "Com base na organização coesiva desse texto, o(a)",
          "oração “que passou de raspão” (l. 3) refere-se ao “meteoro que cruzou o céu da Sibéria” (l. 1).",
          "expressão “sua trajetória” (l. 6) refere-se ao elemento textual “qualquer detrito espacial” (l. 5-6).",
          "palavra “isso” (l. 5) remete ao segmento textual posterior “os alarmes não funcionaram” (l. 5).",
          "pronome “o” em “o que nos daria tempo” (l. 7) remete a “ou usar nossos cartões de crédito” (l. 8). E fragmento “o asteroide da Sibéria” (l. 3) introduz um elemento novo no texto."
        ]
      },
      {opcao1: "A"},
      {opcao2: "B"},
      {opcao3: "C"},
      {opcao4: "D"},
      {opcao5: "E"}
    ]
  },
  {
    id: 39,
    slug: 'Questão 39',
    respostaCorreta: ENEM2025AnswerKey.english[38],
    pergunta: [
      {
        questao: [
          "Do rádio ao podcast",
          "Desde a disseminação do rádio no Brasil, entre as décadas de 1920 e 1930, principalmente no governo de Getúlio Vargas, as pessoas passaram a dedicar uma parte de seu dia para escutar notícias, novelas, músicas e eventos esportivos em aparelhos de som. O radiojornalismo, por sua vez, teve seu pontapé inicial durante a Revolução Constitucionalista (1932) e se desenvolveu durante a Segunda Guerra Mundial (1939-1945).",
          "Quando a TV surgiu, esperava-se que o rádio fosse totalmente substituído, porém ele se manteve em alta, pois o sinal de televisão não cobria todos os lugares, diferentemente do rádio. Com o surgimento da internet, dos smartphones e de outros dispositivos móveis, o rádio foi incorporado a essas novas tecnologias até o desenvolvimento da web rádio e do podcast, mostrando-se um meio de comunicação versátil e democrático na área jornalística.",
          "Para um pesquisador da Universidade Federal de Uberlândia (UFU), o rádio não se tornou obsoleto, visto que não deixou de ser consumido e se reinventou com o tempo. “O podcast é uma continuação, uma evolução natural do rádio”, opina.",
          "ALVES, A.; ALVES, C. Disponível em: https://comunica.ufu.br. Acesso em: 19 abr. 2024 (adaptado). Ao abordar a trajetória dos meios de comunicação, esse texto propõe uma reflexão sobre a",
          "tecnologia digital e seus desdobramentos no desenvolvimento da televisão.",
          "evolução da tecnologia digital com o predomínio do podcast sobre o rádio.",
          "permanência do rádio e sua evolução por meio da tecnologia digital.",
          "influência da televisão sobre os programas de radiojornalismo. E interferência da tecnologia digital nas interações humanas."
        ]
      },
      {opcao1: "A"},
      {opcao2: "B"},
      {opcao3: "C"},
      {opcao4: "D"},
      {opcao5: "E"}
    ]
  },
  {
    id: 40,
    slug: 'Questão 40',
    respostaCorreta: ENEM2025AnswerKey.english[39],
    pergunta: [
      {
        questao: [
          "Desenvolvendo-se nesse meio, é natural que Celina, filha mais velha de D. Adozinda, tivesse seus pequenos flirts com alguns desses rapazes, muito íntimos da casa e trazendo-lhe da cidade presentes de doces, de balas de ovo, de jornais ilustrados ou de frutas.",
          "As irmãs mais novas iam ao colégio; ela ficava, enchendo o tempo com uns crochês vagarosos, costuras leves, a leitura dos folhetins dos jornais; e o Gilberto, que raramente saía, andava sempre ao seu lado, muito caído por esse tipo um pouco mórbido de menina anêmica [...].",
          "O Gilberto não valia nada, mas quem sabe se apareceria outro, simplório e sincero como ele? E a filha, com os seus dezessete anos, começava a embaraçá-la um pouco, nesse difícil papel de virgem numa casa de pensão, cheia de rapazes. Ora, o melhor era esperar, dar tempo ao tempo... E o Gilberto e a Celina continuaram a namorar-se, ele cândido, ela dúbia; enquanto o Coronel Juvenato, que deixara a mulher em Sobral para tratar de uma concessão rendosa com os políticos do Rio, ia agora monopolizando, como protetor mais importante, as alegres visitas matinais da viúva, que já lhe levava sempre o café — mas sem flores colhidas no jardim, ainda rociadas de orvalho, porque o cearense não dava para essas coisas de poesia. Era rápido, prático, e não admitia bobagens. Por isso, todos os sábados à noite, ele dizia a D. Adozinda com um tremor lúbrico nas banhas moles da face, os olhinhos vivos pestanejando:",
          "— A senhora não se esqueça que amanhã é domingo... Leve-me cedo o café, hein?... que eu tenho de ir à missa...",
          "— Pois não, pois não, Coronel! fique descansado — respondia a viúva do Ferreira, muito atenciosamente, tirando-lhe umas caspas da gola do paletó, com a mão repolhuda.",
          "Os outros hóspedes riam-se à socapa; e no domingo o café não faltava, bem cedinho...",
          "DOLORES, C. A luta. Rio de Janeiro: Ímã, s.d.",
          "Nesse trecho, ao explorar a descrição como recurso que demarca impressões e pontos de vista, o narrador cria uma ambiência sugestiva do(a)",
          "escárnio relacionado à degradação moral dos indivíduos.",
          "cenário urbano marcado por condições de insalubridade.",
          "persistência do sentimentalismo explorado pelos folhetins.",
          "prática do enriquecimento ilícito visto nas grandes cidades.",
          "desigualdade de gênero acentuada pela baixa escolarização."
        ]
      },
      {opcao1: "A"},
      {opcao2: "B"},
      {opcao3: "C"},
      {opcao4: "D"},
      {opcao5: "E"}
    ]
  },
  {
    id: 42,
    slug: 'Questão 42',
    respostaCorreta: ENEM2025AnswerKey.english[41],
    pergunta: [
      {
        questao: [
          "TRADUZINDO O JURIDIQUÊS",
          "“Denego a liminar pleiteada na exordial, inobstante Proposta de emenda à Constituição 269 de 2013. Aplica-se após a oitiva da parte adversa e da dilação probatória aos Governadores e Prefeitos o Regime Geral de Previdência possa lograr alcançar um outro epílogo para o deslinde Social, vedada a concessão graciosa, após o término do da quaestio sub examine.”mandato, de vantagem pecuniária, verba de representação, pensão ou subsídio.",
          "TRADUÇãO",
          "TRADUÇãO",
          "Não atendo, por ora, a liminar requerida na petição inicial, ainda que possa chegar a uma outra conclusão Torna-se proibido pagar benefícios vitalícios para após ouvir a outra parte e avaliar as provas produzidas.ex-prefeitos e ex-governadores.",
          "Superinteressante, n. 322, ago. 2013 (adaptado). Nesse texto, contribui para a construção da ironia a tradução das passagens escritas em “juridiquês” para uma variedade",
          "padrão, que alcança o público em geral.",
          "histórica, que registra a evolução das leis.",
          "coloquial, que reproduz as relações sociais cotidianas.",
          "erudita, que resgata a origem latina da língua portuguesa.",
          "técnica, que facilita a circulação de informações no sistema judiciário."
        ]
      },
      {opcao1: "A"},
      {opcao2: "B"},
      {opcao3: "C"},
      {opcao4: "D"},
      {opcao5: "E"}
    ]
  },
  {
    id: 43,
    slug: 'Questão 43',
    respostaCorreta: ENEM2025AnswerKey.english[42],
    pergunta: [
      {
        questao: [
          "Em 1995, os Jenipapo-Kanindé quebraram a tradição da sucessão masculina e nomearam Maria de Lourdes da Conceição Alves como sua líder. Desde então, a Cacique Pequena guia o povo em grandes batalhas pelo direito a terra, educação, saúde e cidadania. Hoje, a anciã de 73 anos prepara duas filhas para lhe sucederem quando ela “tombar e pai Tupã a levar”.",
          "Hoje, 129 famílias do município de Aquiraz são reconhecidas pela Fundação Nacional dos Povos Indígenas (Funai) como indígenas, principal luta de Pequena para o seu povo desde o início. “Em 1995, fui a Brasília e tive a oportunidade de conversar com o presidente da Funai. Pedi que mandasse o povo dele na aldeia para fazer o estudo da nossa mãe-terra e de nós”. Dois anos depois, vieram os antropólogos, que concluíram: “Nós era índio sim!”, diz ela.",
          "Há cerca de oito anos, Pequena adoeceu e ficou entre a vida e a morte. Nesse momento, precisou escolher, entre os 16 filhos, quem assumiria sua missão quando partisse. Reunida, a família decidiu sobre a sucessão. “Disseram que, como eu era a primeira cacique mulher do Ceará, acharam melhor eu colocar duas filhas”.",
          "Disponível em: www.sesc-ce.com.br. Acesso em: 15 set. 2024 (adaptado).",
          "Ao abordar a realidade da etnia Jenipapo-Kanindé, essa reportagem cumpre uma função social quando destaca o(a)",
          "quantidade de famílias indígenas em Aquiraz.",
          "força da tradição nas comunidades indígenas.",
          "estudo sobre a demarcação das terras indígenas.",
          "protagonismo feminino na linha sucessória desse povo.",
          "reconhecimento dessa comunidade pelo governo brasileiro."
        ]
      },
      {opcao1: "A"},
      {opcao2: "B"},
      {opcao3: "C"},
      {opcao4: "D"},
      {opcao5: "E"}
    ]
  },
  {
    id: 44,
    slug: 'Questão 44',
    respostaCorreta: ENEM2025AnswerKey.english[43],
    pergunta: [
      {
        questao: [
          "Porque ler para crianças é um ato de amor",
          "Parece que, com o avanço da tecnologia, os livros têm enfrentado cada vez mais concorrência. Por isso, é nossa função lembrar a importância da leitura em todas as fases da vida, mas principalmente na primeira infância (entre 0 e 5 anos), quando o desenvolvimento das crianças acontece de forma mais intensa.",
          "O ato de ler com uma criança ou ler para ela vai muito além de apenas aproveitar uma história em conjunto. É um laço de amorosidade, porque oferece a ela ferramentas que vão ajudála a crescer forte e independente.",
          "Se você precisa de uma motivação extra para entrar nessa rede de incentivo, fique ligado nos motivos a seguir. Adotar esse hábito em casa:",
          "– cria um laço emocional com a criança;",
          "– ajuda no desenvolvimento das capacidades cognitivas;3 – ensina sobre o mundo;",
          "4 – incentiva o processamento de informações e a imaginação.",
          "Disponível em: www.huffpost.com.br. Acesso em: 22 maio 2018 (adaptado).",
          "Para persuadir o interlocutor sobre a importância de ler para as crianças, esse texto recorre à estratégia de",
          "propor uma condição aos pais, pelo emprego da conjunção “se”.",
          "relativizar a opinião apresentada pelo autor, com o uso de “Parece que”.",
          "empregar uma linguagem metafórica, com o uso da expressão “laço de amorosidade”.",
          "enumerar razões pertinentes a esse ato, como no exemplo “ensina sobre o mundo”.",
          "implicar o autor do texto como corresponsável pela campanha, pelo uso de “é nossa função”."
        ]
      },
      {opcao1: "A"},
      {opcao2: "B"},
      {opcao3: "C"},
      {opcao4: "D"},
      {opcao5: "E"}
    ]
  },
  {
    id: 46,
    slug: 'Questão 46',
    respostaCorreta: ENEM2025AnswerKey.english[45],
    pergunta: [
      {
        questao: [
          "Macedônia do Norte",
          "Acordo entra em vigor e país muda oficialmente de nome",
          "Entrou em vigor, em 2019, o acordo que determina a mudança de nome da Macedônia para Macedônia do Norte. A troca põe fim — ao menos por enquanto — no impasse entre essa antiga república da Iugoslávia e a vizinha Grécia. O governo grego se opunha ao uso do nome Macedônia pelo novo país vizinho porque a Grécia tem uma província no norte com o mesmo nome. Por causa desse impasse, a Grécia bloqueou as negociações de adesão de seu vizinho à União Europeia. Depois de negociações, as duas partes chegaram a um acordo.",
          "Disponível em: https://g1.globo.com. Acesso em: 7 nov. 2021 (adaptado). Para o país originado da antiga Iugoslávia, a mudança de nome é uma estratégia política para",
          "criar a moeda própria.",
          "proteger a cultura local.",
          "subjugar a minoria étnica.",
          "expandir o território nacional.",
          "intensificar a integração regional."
        ]
      },
      {opcao1: "A"},
      {opcao2: "B"},
      {opcao3: "C"},
      {opcao4: "D"},
      {opcao5: "E"}
    ]
  },
  {
    id: 48,
    slug: 'Questão 48',
    respostaCorreta: ENEM2025AnswerKey.english[47],
    pergunta: [
      {
        questao: [
          "A credulidade dos ouvintes aumenta o descaramento do narrador, e o descaramento deste conquista-lhes a credulidade. A eloquência, quando levada a seu patamar mais alto, deixa pouco lugar à razão ou à reflexão, mas, dirigindo-se inteiramente à imaginação e aos afetos, cativa os ouvintes condescendentes e subjuga-lhes o entendimento.",
          "HUME, D. Uma investigação sobre o entendimento humano e sobre os princípios da moral. São Paulo: Edunesp, 2003. No contexto do século XVIII, o autor propõe uma reflexão radical acerca da arte da eloquência, restringindo-a ao",
          "sistema de crenças, conforme a proposta kantiana de objetividade do conhecimento.",
          "campo dos absolutos, semelhante ao entendimento medieval dos Universais.",
          "domínio da lógica, consoante a compreensão aristotélica nos Analíticos.",
          "paradigma da racionalidade, alinhado ao modelo cartesiano de método. E âmbito da persuasão, análogo às críticas platônicas aos sofistas."
        ]
      },
      {opcao1: "A"},
      {opcao2: "B"},
      {opcao3: "C"},
      {opcao4: "D"},
      {opcao5: "E"}
    ]
  },
  {
    id: 51,
    slug: 'Questão 51',
    respostaCorreta: ENEM2025AnswerKey.english[50],
    pergunta: [
      {
        questao: [
          "Sinal fechado",
          "Olá, como vai?",
          "Eu vou indo e você, tudo bem?",
          "Tudo bem, eu vou indo, correndo Pegar meu lugar no futuro, e você? Tudo bem, eu vou indo em busca De um sono tranquilo, quem sabe?",
          "Quanto tempo...",
          "Pois é, quanto tempo... Me perdoe a pressa",
          "É a alma dos nossos negócios...",
          "Oh, não tem de que Eu também só ando a cem Quando é que você telefona?",
          "Precisamos nos ver por aí Pra semana, prometo, Talvez nos vejamos, quem sabe? Quanto tempo...",
          "Pois é, quanto tempo...",
          "Tanta coisa que eu tinha a dizer",
          "Mas eu sumi na poeira das ruas",
          "Eu também tenho algo a dizer",
          "Mas me foge a lembrança",
          "Por favor, telefone, eu preciso beber Alguma coisa rapidamente Pra semana...",
          "O sinal...",
          "Eu procuro você...",
          "Vai abrir! Vai abrir!",
          "Prometo, não esqueço",
          "Por favor, não esqueça Não esqueço, não esqueço Adeus...",
          "PAULINHO DA VIOLA. Foi um rio que passou em minha vida. Rio de Janeiro: Odeon, 1970.",
          "A letra da canção apresenta a permanência de uma situação da vida cotidiana ao destacar a diminuição do comportamento competitivo. importância da memória coletiva. redução da mobilidade urbana. efemeridade dos vínculos de afetividade. obsolescência dos meios de comunicação."
        ]
      },
      {opcao1: "A"},
      {opcao2: "B"},
      {opcao3: "C"},
      {opcao4: "D"},
      {opcao5: "E"}
    ]
  },
  {
    id: 52,
    slug: 'Questão 52',
    respostaCorreta: ENEM2025AnswerKey.english[51],
    pergunta: [
      {
        questao: [
          "Não há consenso em torno do nome dado à pandemia, tendo, desde o seu início, sido chamada de gripe espanhola provavelmente por causa da desinformação em torno da notícia sobre sua origem. Uma das hipóteses deriva da neutralidade espanhola na Primeira Guerra Mundial e a consequente liberdade de imprensa naquele país, maior do que nos demais países envolvidos no conflito. Hoje existe o consenso entre virologistas e epidemiologistas de que o vírus da gripe não se originou na Espanha. Entretanto, dificilmente essa pandemia deixará de ser conhecida como gripe espanhola.",
          "KLAJMAN, C. A gripe sob a ótica da história ecológica. História Revista, n. 3, set.-dez. 2015 (adaptado).",
          "De acordo com o texto, a denominação recebida pela pandemia do começo do século XX foi determinada pelo(a)",
          "A precariedade dos conhecimentos da medicina militar. B retaliação da tríplice aliança aos soldados desertores.",
          "controle dos relatos oriundos de campos de batalha.",
          "emprego de armas biológicas em confrontos transnacionais.",
          "circulação de refugiados contaminados em áreas conflagradas."
        ]
      },
      {opcao1: "A"},
      {opcao2: "B"},
      {opcao3: "C"},
      {opcao4: "D"},
      {opcao5: "E"}
    ]
  },
  {
    id: 53,
    slug: 'Questão 53',
    respostaCorreta: ENEM2025AnswerKey.english[52],
    pergunta: [
      {
        questao: [
          "TEXTO I",
          "A partir do século IV, com os imperadores ditos cristãos, o teatro e a dança foram condenados. O batismo era recusado aos que atuavam no circo ou na pantomima. E em 398, no Concílio de Cartago, os que iam ao teatro nos dias santos foram excomungados.",
          "DINIZ, T.; SANTOS, G. História da dança. Disponível em: www.uel.br.",
          "Acesso em: 18 out. 2023.",
          "TEXTO II",
          "A dança no ato litúrgico cumpre tanto um papel de adoração quanto mercadológico. Não à toa há aceitação, expansão e investimento nessa prática percebida massivamente pela ampla divulgação principalmente nas redes sociais. A expansão e ampliação por via de festivais, aulas, cursos, palestras etc. consolida a criação de um mercado específico para esse público. SANTOS, Z. Dança gospel. Salvador: UFBA, 2021.",
          "A percepção sobre a dança e a cultura corporal apresenta aspectos relacionados, respectivamente, a",
          "segregação social e intolerância eclesiástica.",
          "rituais eucarísticos e sacramentos da Igreja.",
          "transe individual e progresso intelectual.",
          "penitência pessoal e juramento coletivo. E dogmatismo religioso e adesão de fiéis."
        ]
      },
      {opcao1: "A"},
      {opcao2: "B"},
      {opcao3: "C"},
      {opcao4: "D"},
      {opcao5: "E"}
    ]
  },
  {
    id: 54,
    slug: 'Questão 54',
    respostaCorreta: ENEM2025AnswerKey.english[53],
    pergunta: [
      {
        questao: [
          "A ideia de êxodo urbano assume ares caricaturais. Pega a mais reduzida parte da pirâmide social e projeta para todos seus desejos defensivos. Se o êxodo urbano for compreendido como aquisição de uma segunda residência, então não estamos, de fato, falando de êxodo, mas da reversão de um excedente de renda de uma pequena fração da elite para as franjas metropolitanas. Se o êxodo urbano for compreendido como retorno aos municípios menos povoados, então não estamos, de fato, falando de êxodo urbano, mas de um movimento de migração de pessoas cuja estabilidade no emprego e a elevada renda lhes permitem simular, nas ilhas urbanas do interior agropecuário, a vida urbana metropolitana.",
          "ARRAIS, T. A. O distópico êxodo urbano. Revista e, n. 11, maio 2021 (adaptado).",
          "A crítica apresentada no texto evidencia uma dinâmica socioespacial marcada pela",
          "valorização de tradições rurais.",
          "redução de plantações agrícolas.",
          "estagnação de atividades comerciais.",
          "precariedade de infraestruturas rodoviárias.",
          "seletividade de deslocamentos populacionais."
        ]
      },
      {opcao1: "A"},
      {opcao2: "B"},
      {opcao3: "C"},
      {opcao4: "D"},
      {opcao5: "E"}
    ]
  },
  {
    id: 55,
    slug: 'Questão 55',
    respostaCorreta: ENEM2025AnswerKey.english[54],
    pergunta: [
      {
        questao: [
          "A “invenção” dessa nova anatomia política não deve ser entendida como uma descoberta súbita. Mas como uma multiplicidade de processos muitas vezes mínimos, de origens diferentes, de localizações esparsas, que se recordam, que se repetem, ou se imitam, apoiam-se uns sobre os outros e esboçam aos poucos a fachada de um método geral. Encontramo-los em funcionamento nos colégios, muito cedo; mais tarde, nas escolas primárias, no espaço hospitalar e na organização militar. FOUCAULT, M. Vigiar e punir. Petrópolis: Vozes, 2011.",
          "O texto indica o seguinte aspecto da disciplina como ferramenta política:",
          "Expansão das técnicas de suplício.",
          "Judicialização das relações de poder.",
          "Dissolução das distinções de nobreza.",
          "Capilarização das práticas de controle.",
          "Espetacularização das medidas de penitência."
        ]
      },
      {opcao1: "A"},
      {opcao2: "B"},
      {opcao3: "C"},
      {opcao4: "D"},
      {opcao5: "E"}
    ]
  },
  {
    id: 56,
    slug: 'Questão 56',
    respostaCorreta: ENEM2025AnswerKey.english[55],
    pergunta: [
      {
        questao: [
          "Por séculos, o Rio Reno tem sido uma rota de navegação confiável, ajudando a criar gigantes fabris ao longo de suas margens. No entanto, esses dias parecem estar no fim, pois o nível da água tem diminuído regularmente, o que impede a navegação fluvial do final do verão até o outono. Isso mostra como a crise climática atinge as economias dos países ricos.",
          "Disponível em: www.estadao.com.br. Acesso em: 10 ago. 2023 (adaptado).",
          "Qual é o efeito econômico do problema ambiental apresentado no texto?",
          "Supressão da extração de minério.",
          "Intensificação da atividade de pesca.",
          "Encarecimento da logística de transporte.",
          "Inviabilização da agricultura de subsistência.",
          "Sucateamento da indústria de transformação."
        ]
      },
      {opcao1: "A"},
      {opcao2: "B"},
      {opcao3: "C"},
      {opcao4: "D"},
      {opcao5: "E"}
    ]
  },
  {
    id: 57,
    slug: 'Questão 57',
    respostaCorreta: ENEM2025AnswerKey.english[56],
    pergunta: [
      {
        questao: [
          "Dos 10 aos 15 anos de idade, Virgínia adorava acompanhar seu pai, aos domingos, naquela sinestésica Feira de São Cristóvão (RJ), talvez por ser o maior elo que ela experimentava com o mundo exterior à sua casa e, visto assim e agora, tão íntimo e próximo de algo que ela ainda não sabia, mas que seria, no futuro, a sua própria casa: a Paraíba. Dona Didi costurava, sob medida, camisas sociais, bermudas, shorts, vestidos, saias, sempre em casa e rodeada pelos quatro filhos pequenos do casal, desdobrando-se para dar conta de toda a responsabilidade sem trégua que isso demandava.",
          "PASSOS, M. C. P. et al. apud SCARELI, G. A máquina de costura e os fios da memória. Revista Brasileira de Pesquisa (Auto) Biográfica, n. 18, maio-ago. 2021 (adaptado).",
          "Os itinerários afetivos e socioespaciais mencionados no texto associam-se à vida dos personagens por apresentarem",
          "histórias conectadas e recordações do lugar.",
          "direitos trabalhistas e produção industrial.",
          "preconceitos linguísticos e dinâmicas territoriais.",
          "lembranças fabris e discriminação dos operários.",
          "experiências profissionais e segregação regional."
        ]
      },
      {opcao1: "A"},
      {opcao2: "B"},
      {opcao3: "C"},
      {opcao4: "D"},
      {opcao5: "E"}
    ]
  },
  {
    id: 58,
    slug: 'Questão 58',
    respostaCorreta: ENEM2025AnswerKey.english[57],
    pergunta: [
      {
        questao: [
          "Em 1872, havia mais de 1 milhão de votantes, correspondentes a 13% da população livre. Em 1886, votaram nas eleições parlamentares pouco mais de 100 mil eleitores, ou 0,8% da população total. Houve um corte de quase 90% do eleitorado. O dado é chocante, sobretudo se lembrarmos que a tendência de todos os países europeus da época era na direção de ampliar os direitos políticos. O mais grave é que esse retrocesso foi duradouro. A Proclamação da República não alterou o quadro.",
          "CARVALHO, J. M. Cidadania no Brasil. Rio de Janeiro: Civilização Brasileira, 2002 (adaptado).",
          "De acordo com o texto, a participação no processo eleitoral brasileiro após a Reforma de 1881 sofreu uma variação que se explica pela",
          "restrição de gênero.",
          "exclusão de imigrantes.",
          "comprovação de domicílio.",
          "exigência da alfabetização.",
          "obrigatoriedade do sufrágio."
        ]
      },
      {opcao1: "A"},
      {opcao2: "B"},
      {opcao3: "C"},
      {opcao4: "D"},
      {opcao5: "E"}
    ]
  },
  {
    id: 59,
    slug: 'Questão 59',
    respostaCorreta: ENEM2025AnswerKey.english[58],
    pergunta: [
      {
        questao: [
          "Pela falta de chuvas, a geração de energia eólica, solar e térmica atingiu níveis recordes em agosto de 2021, quando as hidrelétricas ficaram com cerca de 50% do total. Para um professor da Universidade Federal da Bahia, essa queda não é uma surpresa. “Não aconteceu de uma hora para outra. Se olharmos o mapa do Brasil, um dos grandes provedores de água é a Floresta Amazônica. Se você diminui a floresta, diminui a quantidade de água que vai para a atmosfera”, explica.",
          "BORGES, T. O fantasma do apagão. Disponível em:",
          "www.correio24horas.com.br. Acesso em: 9 out. 2021 (adaptado).",
          "De acordo com o texto, a dificuldade na produção de energia é causada pela alteração da(s)",
          "variável em pesquisas meteorológicas.",
          "paisagem em locais estratégicos.",
          "demandas em regiões industriais.",
          "metas em acordos climáticos. E geologia em áreas naturais."
        ]
      },
      {opcao1: "A"},
      {opcao2: "B"},
      {opcao3: "C"},
      {opcao4: "D"},
      {opcao5: "E"}
    ]
  },
  {
    id: 60,
    slug: 'Questão 60',
    respostaCorreta: ENEM2025AnswerKey.english[59],
    pergunta: [
      {
        questao: [
          "Adam Smith via o açougueiro e o padeiro não só como indivíduos buscando seus interesses financeiros, mas como pessoas moralmente motivadas dentro de uma sociedade. A base da moral era a empatia e o julgamento, instaurando uma distinção entre o que queremos fazer e o que sentimos que devemos fazer.",
          "COLLIER, P. O futuro do capitalismo. Porto Alegre: LP&M, 2019.",
          "O texto defende uma motivação capitalista para o campo dos negócios, na qual o lucro se mostra associado à",
          "consolidação do poder político.",
          "procura de satisfação subjetiva.",
          "estruturação do monopólio comercial.",
          "percepção de responsabilidade ética.",
          "conquista do reconhecimento público."
        ]
      },
      {opcao1: "A"},
      {opcao2: "B"},
      {opcao3: "C"},
      {opcao4: "D"},
      {opcao5: "E"}
    ]
  },
  {
    id: 61,
    slug: 'Questão 61',
    respostaCorreta: ENEM2025AnswerKey.english[60],
    pergunta: [
      {
        questao: [
          "O corpo de cidadãos é o poder supremo dos Estados. A supremacia pode residir ou num homem, ou na minoria, ou em todos. Sempre que o Um, ou a Minoria, ou Todos governam, tendo em vista o bem-estar comum, essas constituições são justas; mas se procuram apenas o benefício de uma das partes, seja ela o Um, a Minoria ou Todos, estabelece-se um desvio.",
          "ARISTÓTELES. Política. São Paulo: Nova Cultural, 2000.",
          "No excerto encontra-se a base da teoria clássica das três formas de governo representadas pela tirania, oligarquia e república. burocracia, autarquia e império. ditadura, autocracia e anarquia. plutocracia, tecnocracia e demagogia. monarquia, aristocracia e democracia."
        ]
      },
      {opcao1: "A"},
      {opcao2: "B"},
      {opcao3: "C"},
      {opcao4: "D"},
      {opcao5: "E"}
    ]
  },
  {
    id: 62,
    slug: 'Questão 62',
    respostaCorreta: ENEM2025AnswerKey.english[61],
    pergunta: [
      {
        questao: [
          "Para que a utopia nasça, é preciso duas condições. A primeira é a forte sensação de que o mundo não está funcionando adequadamente e deve ter seus fundamentos revistos para que se reajuste. A segunda condição é a existência de uma confiança no potencial humano à altura da tarefa de reformar o mundo, a crença de que nós, seres humanos, podemos fazê-lo, sendo capazes de perceber o que está errado com o mundo, o que precisa ser modificado, quais são os pontos problemáticos, e ter força e coragem para extirpá-los.",
          "BAUMAN, Z. apud OLIVEIRA, D. Bauman: para que a utopia renasça, é preciso confiar no potencial humano. Revista Cult, jan. 2017.",
          "De acordo com o autor, qual é a função da utopia no contexto das transformações sociais?",
          "Habilitar memórias afetivas.",
          "Apontar alternativas possíveis.",
          "Legitimar experiências pretéritas.",
          "Perpetuar paradigmas científicos.",
          "Empreender soluções conclusivas."
        ]
      },
      {opcao1: "A"},
      {opcao2: "B"},
      {opcao3: "C"},
      {opcao4: "D"},
      {opcao5: "E"}
    ]
  },
  {
    id: 64,
    slug: 'Questão 64',
    respostaCorreta: ENEM2025AnswerKey.english[63],
    pergunta: [
      {
        questao: [
          "Em toda a sua carreira política, Getúlio Vargas sempre contara com o seu talento pessoal de persuasão e poder de manipulação. Agora, porém, seus amigos começavam a perceber que ele parecia envelhecido e cansado. A principal figura da oposição, concordavam eles, era o belicoso jornalista Carlos Lacerda. Se ao menos pudessem “removê-lo” do cenário político, talvez Vargas se salvasse da situação. Esses seguidores decidiram tomar o assunto em suas próprias mãos com o atentado da Rua Tonelero.",
          "SKDIMORE, T. Brasil: de Getúlio a Castelo. Rio de Janeiro: Paz e Terra, 2003 (adaptado). Nesse contexto, a ação dos aliados de Getúlio Vargas teve como consequência imediata o(a)",
          "intensificação dos ataques do grupo udenista.",
          "intervenção dos sindicatos no conflito partidário.",
          "mobilização da sociedade na defesa do governo.",
          "abandono da censura aos meios de comunicação.",
          "apoio dos parlamentares aos candidatos oposicionistas."
        ]
      },
      {opcao1: "A"},
      {opcao2: "B"},
      {opcao3: "C"},
      {opcao4: "D"},
      {opcao5: "E"}
    ]
  },
  {
    id: 65,
    slug: 'Questão 65',
    respostaCorreta: ENEM2025AnswerKey.english[64],
    pergunta: [
      {
        questao: [
          "O que eu queria ter sido",
          "Um nome para o que sou, importa muito pouco. Importa o que eu gostaria de ser. O que eu gostaria de ser era uma lutadora. Quero dizer, uma pessoa que luta pelo bem dos outros. Isso desde pequena eu quis. Por que foi o destino me levando a escrever o que já escrevi, em vez de também desenvolver em mim a qualidade de lutadora que eu tinha? Em pequena, minha família por brincadeira chamava-me de “a protetora dos animais”. Porque bastava acusarem uma pessoa para eu imediatamente defendê-la. E eu sentia o drama social com tanta intensidade que vivia de coração perplexo diante das grandes injustiças a que são submetidas as chamadas classes menos privilegiadas.",
          "LISPECTOR, C. Aprendendo a viver. Rio de Janeiro: Rocco Digital, 2013.",
          "A reflexão contida no texto faz referência aos pressupostos de uma doutrina ética representada pelo",
          "estado eudaimônico.",
          "referencial hedonista.",
          "pensamento altruísta.",
          "movimento antiespecista.",
          "comportamento pragmático."
        ]
      },
      {opcao1: "A"},
      {opcao2: "B"},
      {opcao3: "C"},
      {opcao4: "D"},
      {opcao5: "E"}
    ]
  },
  {
    id: 66,
    slug: 'Questão 66',
    respostaCorreta: ENEM2025AnswerKey.english[65],
    pergunta: [
      {
        questao: [
          "Independência de pensamento, autonomia e direito à oposição política estão perdendo sua função crítica básica numa sociedade que parece cada vez mais capaz de atender às necessidades dos indivíduos através da forma pela qual é organizada. Nas condições de um padrão de vida crescente, o não conformismo com o próprio sistema parece socialmente inútil, principalmente quando acarreta desvantagens econômicas e políticas tangíveis e ameaça o funcionamento suave do todo.",
          "MARCUSE, H. Ideologia da sociedade industrial. Rio de Janeiro: Zahar, 1969.",
          "Qual é a característica da sociedade industrial do século XX apresentada no texto?",
          "Gestão integrada.",
          "Relativismo moral.",
          "Desobediência civil.",
          "Realidade unidimensional.",
          "Desenvolvimento tecnológico."
        ]
      },
      {opcao1: "A"},
      {opcao2: "B"},
      {opcao3: "C"},
      {opcao4: "D"},
      {opcao5: "E"}
    ]
  },
  {
    id: 67,
    slug: 'Questão 67',
    respostaCorreta: ENEM2025AnswerKey.english[66],
    pergunta: [
      {
        questao: [
          "Do ponto de vista administrativo e judicial, a desapropriação da fazenda Cabaceiras, localizada na região sul do estado do Pará, é a primeira da história motivada pelo desrespeito à função social de um imóvel rural, como prevê a Constituição Federal de 1988, em decorrência da exploração de “trabalho em condições análogas à escravidão”. Na realidade, essa desapropriação não se deu apenas pela ocorrência de relações de trabalho extremamente degradantes, mas também pelas graves infrações ambientais verificadas na fazenda — o que também configura um ataque à função social da terra, de acordo com os preceitos constitucionais.",
          "BARROS, C. J. A conquista da fazenda Cabaceiras. Disponível em: www.agb.org.br. Acesso em: 15 maio 2023.",
          "O texto considera a promoção da justiça como um mecanismo de",
          "manutenção da ordem agrária.",
          "legitimação da propriedade privada.",
          "hegemonia das classes dominantes.",
          "revisão das desigualdades econômicas.",
          "homogeneização da distribuição fundiária."
        ]
      },
      {opcao1: "A"},
      {opcao2: "B"},
      {opcao3: "C"},
      {opcao4: "D"},
      {opcao5: "E"}
    ]
  },
  {
    id: 69,
    slug: 'Questão 69',
    respostaCorreta: ENEM2025AnswerKey.english[68],
    pergunta: [
      {
        questao: [
          "A difusão pelos cônegos do ideal apostólico, bem como a influência dos eremitas e dos pregadores errantes que na sua esteira propagavam temas evangélicos, contribuíram para fazer nascer, entre os fiéis, o desejo de se erguerem ao nível espiritual do clero e de obterem a sua salvação, sem que para isso tivessem de renunciar ao seu estado. Pela primeira vez, a Igreja entreabria as portas da graça em benefício da totalidade dos fiéis, colocando, como única condição, a sua partida para o Oriente, a fim de aí lutarem contra os inimigos de Cristo.",
          "VAUCHEZ, A. A espiritualidade da Idade Média Ocidental, séc. VIII-XIII. Lisboa: Estampa, 1995.",
          "Conforme o texto, no imaginário dos fiéis cristãos do período medieval, a salvação era alcançada por meio das palavras escritas. práticas litúrgicas. ações voluntárias. ideias messiânicas. celebrações coletivas."
        ]
      },
      {opcao1: "A"},
      {opcao2: "B"},
      {opcao3: "C"},
      {opcao4: "D"},
      {opcao5: "E"}
    ]
  },
  {
    id: 70,
    slug: 'Questão 70',
    respostaCorreta: ENEM2025AnswerKey.english[69],
    pergunta: [
      {
        questao: [
          "Nos Estados Unidos, um hotel perto de um parque foi engolido por uma enorme cratera. E não é a primeira vez que esse tipo de incidente acontece na Flórida. Em minutos, uma ala inteira do hotel era engolida pela cratera de 30 metros de diâmetro e cinco de profundidade. O diretor do resort em Clermont, perto dos parques temáticos da Flórida, diz que o prédio tinha 15 anos, e que até então o solo nunca havia apresentado problemas. Os afundamentos são um fenômeno comum na Flórida por causa das formações de calcário e argila no subsolo, mas às vezes chuvas fortes, ou a drenagem do solo para construção, acabam contribuindo para o surgimento desses buracos.",
          "Disponível em: http://g1.globo.com. Acesso em: 10 dez. 2024 (adaptado). A situação de desmoronamento do solo descrita no texto origina-se da",
          "cristalização da estrutura geológica.",
          "ação do intemperismo químico.",
          "recomposição da mata ciliar.",
          "acumulação de sedimentos orgânicos.",
          "impermeabilização da superfície ocupada."
        ]
      },
      {opcao1: "A"},
      {opcao2: "B"},
      {opcao3: "C"},
      {opcao4: "D"},
      {opcao5: "E"}
    ]
  },
  {
    id: 71,
    slug: 'Questão 71',
    respostaCorreta: ENEM2025AnswerKey.english[70],
    pergunta: [
      {
        questao: [
          "Moradores de Berlim protestaram contra a demolição de um trecho do muro que dividiu a cidade durante quase três décadas. Tratado como patrimônio cultural e histórico da cidade, o East Side Gallery, repleto de grafites emblemáticos, está na mira de uma construtora que pretende levantar um condomínio de luxo às margens do Rio Spree, que corta a cidade.",
          "ALMEIDA, R. Alemães impedem demolição de último trecho original do muro de Berlim. Disponível em: http://operamundi.uol.com.br. Acesso em: 2 fev. 2021 (adaptado). A demolição do símbolo histórico mencionado representa uma",
          "violação da memória coletiva.",
          "alteração das fronteiras políticas.",
          "adesão à arquitetura neoclássica.",
          "negação das influências orientais.",
          "reorganização da mobilidade urbana."
        ]
      },
      {opcao1: "A"},
      {opcao2: "B"},
      {opcao3: "C"},
      {opcao4: "D"},
      {opcao5: "E"}
    ]
  },
  {
    id: 72,
    slug: 'Questão 72',
    respostaCorreta: ENEM2025AnswerKey.english[71],
    pergunta: [
      {
        questao: [
          "TEXTO I",
          "Em conjunto: todo e não todo, unido e separado, em consonância e em dissonância. De todos um e de um todos. (Fragmento B10) TEXTO II",
          "Deus é dia-noite, inverno-verão, guerra-paz, saciedade-fome.",
          "(Fragmento B67)",
          "Pré-socráticos. São Paulo: Nova Cultural, 1996.",
          "A característica do pensamento do filósofo Heráclito, registrada nos fragmentos mencionados, é a ênfase na",
          "qualidade imperecível do mundo.",
          "degradação material da natureza.",
          "imobilidade imanente do universo.",
          "distribuição dicotômica do cosmos.",
          "desordem incontornável das coisas."
        ]
      },
      {opcao1: "A"},
      {opcao2: "B"},
      {opcao3: "C"},
      {opcao4: "D"},
      {opcao5: "E"}
    ]
  },
  {
    id: 73,
    slug: 'Questão 73',
    respostaCorreta: ENEM2025AnswerKey.english[72],
    pergunta: [
      {
        questao: [
          "Entre esses preconceitos estava o canibalismo. A prática não era, porém, uma mentira, uma invenção europeia, mas um ritual controlado por regras. Entre os tupis, por exemplo, os guerreiros se sentiam honrados quando morriam em um banquete canibal. Para os europeus, no entanto, comer carne humana era abominável, pois nem mesmo os leões ingeriam seus semelhantes. Portanto, para os conquistadores, o canibalismo era sinônimo de barbarismo e da incapacidade de se autogovernar.",
          "RAMINELLI, R. Canibalismo para alemão ver. In: FIGUEIREDO, L. (Org.). História do Brasil para ocupados. Rio de Janeiro: Casa da Palavra, 2013 (adaptado).",
          "No texto, europeus e ameríndios atribuíram à prática relatada, respectivamente, o significado de",
          "selvageria — empoderamento.",
          "impetuosidade — resistência.",
          "fanatismo — humilhação.",
          "intolerância — violência. E repressão — justiça."
        ]
      },
      {opcao1: "A"},
      {opcao2: "B"},
      {opcao3: "C"},
      {opcao4: "D"},
      {opcao5: "E"}
    ]
  },
  {
    id: 74,
    slug: 'Questão 74',
    respostaCorreta: ENEM2025AnswerKey.english[73],
    pergunta: [
      {
        questao: [
          "Fragmentada em pequenos grupos, fragilizada pela ausência de algum tipo de organização ampla, tendo que carregar o peso do preconceito racial que se transfere do negro para a cultura negra, a religião dos orixás tem poucas chances de se sair melhor na competição — desigual — com outras religiões. Silenciosamente, assistimos hoje a um verdadeiro massacre das religiões afro-brasileiras.",
          "PRANDI, R. O Brasil com axé. Estudos Avançados, n. 52, dez. 2004.",
          "No processo de invisibilização dos cultos afro-brasileiros, o texto associa os seguintes elementos essenciais:",
          "Ausência de soluções partidárias e rejeição da laicidade.",
          "Precariedade de coesão representativa e recusa da alteridade. C Insuficiência de estruturas decisórias e exclusão da dialogicidade. D Inexistência de direitos constitucionais e negação do ecumenismo.",
          "E Efemeridade das relações políticas e debilidade do pertencimento étnico."
        ]
      },
      {opcao1: "A"},
      {opcao2: "B"},
      {opcao3: "C"},
      {opcao4: "D"},
      {opcao5: "E"}
    ]
  },
  {
    id: 75,
    slug: 'Questão 75',
    respostaCorreta: ENEM2025AnswerKey.english[74],
    pergunta: [
      {
        questao: [
          "A partir do século XIX e, principalmente, no século XX, iniciou-se o uso de produtos sintéticos na agricultura. No Brasil, a partir da década de 1960 e, posteriormente, nos anos 1970, os inseticidas ampliam sua fatia no mercado dos defensivos agrícolas.",
          "TROPPMAIR, H. Biogeografia e meio ambiente. Rio de Janeiro: TB, 2012 (adaptado).",
          "Nos espaços agrícolas, a mudança técnica descrita provocou a diminuição da",
          "desagregação de camadas pedológicas.",
          "diversidade de polinizadores naturais.",
          "contaminação de lençóis freáticos.",
          "produtividade da terra cultivada. E ocorrência da erosão laminar."
        ]
      },
      {opcao1: "A"},
      {opcao2: "B"},
      {opcao3: "C"},
      {opcao4: "D"},
      {opcao5: "E"}
    ]
  },
  {
    id: 76,
    slug: 'Questão 76',
    respostaCorreta: ENEM2025AnswerKey.english[75],
    pergunta: [
      {
        questao: [
          "Os direitos do homem constituem uma classe variável, como a história destes últimos séculos demonstra suficientemente. O elenco dos direitos do homem se modificou, e continua a se modificar, com a mudança das condições históricas, ou seja, dos carecimentos e dos interesses, das classes no poder, dos meios disponíveis para a realização dos mesmos, das transformações técnicas. Direitos que foram declarados absolutos no final do século XVIII foram submetidos a radicais limitações nas declarações contemporâneas; direitos que as declarações do século XVIII nem sequer mencionavam, como os direitos sociais, são agora proclamados com grande ostentação nas recentes declarações.",
          "BOBBIO, N. A era dos direitos. Rio de Janeiro: Elsevier, 2004.",
          "Os argumentos apresentados no texto sustentam que os direitos humanos são variáveis porque os considera como",
          "fenômenos espontâneos.",
          "conquistas atemporais.",
          "convenções coletivas.",
          "resquícios religiosos. E imposições políticas."
        ]
      },
      {opcao1: "A"},
      {opcao2: "B"},
      {opcao3: "C"},
      {opcao4: "D"},
      {opcao5: "E"}
    ]
  },
  {
    id: 78,
    slug: 'Questão 78',
    respostaCorreta: ENEM2025AnswerKey.english[77],
    pergunta: [
      {
        questao: [
          "A Roda dos Expostos de Salvador (Bahia) data de 1726 e foi uma das instituições implantadas com o objetivo de acolher e prover um encaminhamento para a criança recém-nascida abandonada. Essa assistência fundamentava-se em práticas caritativas, paternalistas e imediatistas que visavam ao cuidado básico da criança e, especialmente, à salvação da sua alma, via batismo, devido à alta mortalidade.",
          "BORRIONE, R.; CHAVES, A. M. Análise documental e contexto de desenvolvimento. Disponível em: www.scielo.br.",
          "Acesso em: 15 ago. 2013. A instituição apresentada no texto justificava-se pelo(a)",
          "defesa de direitos humanos.",
          "preceito de natureza sociorreligiosa.",
          "reconhecimento de vínculos familiares.",
          "discurso de cunho técnico-científico. E ideologia de caráter abolicionista."
        ]
      },
      {opcao1: "A"},
      {opcao2: "B"},
      {opcao3: "C"},
      {opcao4: "D"},
      {opcao5: "E"}
    ]
  },
  {
    id: 79,
    slug: 'Questão 79',
    respostaCorreta: ENEM2025AnswerKey.english[78],
    pergunta: [
      {
        questao: [
          "A missão dos governantes consiste em promover a felicidade da sociedade, punindo e recompensando. A parte da missão de governo que consiste em punir constitui mais particularmente o objeto da lei penal. A obrigatoriedade ou necessidade de punir uma ação é proporcional à medida que tal ação tende a perturbar a felicidade e à medida que a tendência do referido ato é perniciosa. A felicidade consiste naquilo que já vimos, ou seja, em desfrutar prazeres e em estar isento de dores.",
          "BENTHAM, J. Uma introdução aos princípios da moral e da legislação. São Paulo: Abril Cultural, 1974 (adaptado).",
          "Qual perspectiva de justiça emerge da relação, estabelecida no texto, entre punição e felicidade?",
          "Aplicação de meios para atingir um fim.",
          "Imposição de regras para estabelecer um dever.",
          "Sobreposição de princípios para fundamentar um direito.",
          "Criação de parâmetros para reconhecer uma prescrição. E Elaboração de convenções para referendar um costume."
        ]
      },
      {opcao1: "A"},
      {opcao2: "B"},
      {opcao3: "C"},
      {opcao4: "D"},
      {opcao5: "E"}
    ]
  },
  {
    id: 80,
    slug: 'Questão 80',
    respostaCorreta: ENEM2025AnswerKey.english[79],
    pergunta: [
      {
        questao: [
          "Cidade sustentável é o assentamento humano constituído por uma sociedade com consciência de seu papel de agente transformador dos espaços e cuja relação não se dá pela razão natureza-objeto, e sim por uma ação sinérgica entre prudência ecológica, eficiência energética e equidade socioespacial.",
          "ROMERO, M. Frentes do urbano para a construção de indicadores de sustentabilidade intraurbana. Paranoá, n. 4, nov. 2007.",
          "Uma medida pública que contradiz o modelo de cidade exposto no texto é a",
          "coleta seletiva de lixo.",
          "reutilização das águas pluviais. canalização dos cursos hídricos. arborização das avenidas centrais. educação ambiental da comunidade."
        ]
      },
      {opcao1: "A"},
      {opcao2: "B"},
      {opcao3: "C"},
      {opcao4: "D"},
      {opcao5: "E"}
    ]
  },
  {
    id: 81,
    slug: 'Questão 81',
    respostaCorreta: ENEM2025AnswerKey.english[80],
    pergunta: [
      {
        questao: [
          "Em decorrência da naturalização da inferioridade social da mulher e da concepção de justiça do Estado, baseada na igualdade abstratamente concebida, torna-se possível convencer o Estado burguês a conceber e implementar políticas públicas cujo conteúdo se define pela discriminação positiva de mulheres, embora isso aparentemente seja paradoxal.",
          "SAFFIOTI, H.; ALMEIDA, S. S. Violência de gênero, poder e impotência. Rio de Janeiro: Revinter, 1995 (adaptado).",
          "No contexto atual, qual medida atende ao tipo de política pública abordada no texto?",
          "Ampliação do sufrágio universal.",
          "Diminuição da jornada de trabalho.",
          "Extinção do crime de feminicídio.",
          "Redução da licença-maternidade.",
          "Criação de delegacia especializada."
        ]
      },
      {opcao1: "A"},
      {opcao2: "B"},
      {opcao3: "C"},
      {opcao4: "D"},
      {opcao5: "E"}
    ]
  },
  {
    id: 82,
    slug: 'Questão 82',
    respostaCorreta: ENEM2025AnswerKey.english[81],
    pergunta: [
      {
        questao: [
          "A cidade justa é governada pelos filósofos, administrada pelos cientistas, protegida pelos guerreiros e mantida pelos produtores. Cada classe cumprirá sua função para o bem da pólis, racionalmente dirigida pelos filósofos. Em contrapartida, a cidade injusta é aquela onde o governo está nas mãos dos proprietários — que não pensam no bem comum da pólis e lutarão por interesses econômicos particulares.",
          "CHAUÍ, M. Convite à filosofia. São Paulo: Ática, 2000.",
          "O texto apresenta a estrutura de governo da cidade ideal pensada por Platão, que postula uma indissociabilidade entre",
          "cognoscência e relação intersubjetiva.",
          "mitologia e teorias cosmogônicas.",
          "cidadania e primazia da retórica.",
          "moralidade e virtudes cardeais. E ética e exercício do poder."
        ]
      },
      {opcao1: "A"},
      {opcao2: "B"},
      {opcao3: "C"},
      {opcao4: "D"},
      {opcao5: "E"}
    ]
  },
  {
    id: 83,
    slug: 'Questão 83',
    respostaCorreta: ENEM2025AnswerKey.english[82],
    pergunta: [
      {
        questao: [
          "A Impressão Régia do Rio de Janeiro foi criada pelo decreto de 13 de maio de 1808 para dar continuidade à nova sede do império português. A nova tipografia é criada em um momento no qual o projeto de reforma do império se transforma em um projeto de construção de um novo império português na América. Frente às tensões políticas que essa nova situação criava, a tipografia atuou na legitimação e sustentação daquele projeto político.",
          "BARRA, S. H. S. A Impressão Régia do Rio de Janeiro e a colonização dos sertões na construção do novo império português na América (1808-1822). Topoi, n. 31, jul.-dez. 2015 (adaptado).",
          "A função política da tecnologia mencionada no texto favoreceu a nova sede do Império português por",
          "estabelecer as normativas ideológicas aos periódicos.",
          "propagar as diretrizes administrativas às capitanias.",
          "divulgar as conquistas às metrópoles europeias.",
          "integrar as regiões territoriais ao poder central. E difundir as publicações às elites lusitanas."
        ]
      },
      {opcao1: "A"},
      {opcao2: "B"},
      {opcao3: "C"},
      {opcao4: "D"},
      {opcao5: "E"}
    ]
  },
  {
    id: 84,
    slug: 'Questão 84',
    respostaCorreta: ENEM2025AnswerKey.english[83],
    pergunta: [
      {
        questao: [
          "Com o objetivo de auxiliar a prevenção e o combate a incêndios no Cerrado, o Centro de Sensoriamento Remoto da Universidade Federal de Minas Gerais (UFMG) desenvolveu um modelo computacional capaz de prever o comportamento do fogo. Essa tecnologia integra o projeto Monitoramento do Cerrado, do qual também participa o Instituto Nacional de Pesquisas Espaciais (Inpe). O instituto produz e processa dados de satélite sobre focos de calor para determinar a localização de incêndios no bioma. Esses focos são o ponto de ignição para o modelo desenvolvido na UFMG: com base em outros dados, como relevo, ventos, umidade e biomassa seca, a ferramenta estima as áreas com maior risco de incêndio e prevê a intensidade e a direção de propagação do fogo no Cerrado brasileiro.",
          "LAGES, L. Tecnologia antiqueimada. Revista Minas Faz Ciência,",
          "n. 84, dez. 2020 – jan.-fev. 2021 (adaptado).",
          "Em relação à causa ambiental, o uso da tecnologia mencionada indica a",
          "influência da produção orgânica.",
          "relevância da infraestrutura viária.",
          "significância da cosmologia nativa.",
          "importância de pesquisas acadêmicas.",
          "interferência de interesses estrangeiros."
        ]
      },
      {opcao1: "A"},
      {opcao2: "B"},
      {opcao3: "C"},
      {opcao4: "D"},
      {opcao5: "E"}
    ]
  },
  {
    id: 85,
    slug: 'Questão 85',
    respostaCorreta: ENEM2025AnswerKey.english[84],
    pergunta: [
      {
        questao: [
          "TEXTO I",
          "O cinema constituía um encanto indefinível: além do entretenimento delicioso das vidas alheias por meio dos filmes, o pretexto amável para os encontros de olhos, para a mostra dos vestidos, para as tagarelices com as vizinhas de cadeiras.",
          "SETTE, M. Anquinhas e bernardas. São Paulo: Livraria Martins, 1940 (adaptado).",
          "TEXTO II",
          "O pouco caso na seleção dos filmes para serem exibidos nos espetáculos diurnos tem sido causa de inúmeros dissabores sofridos pelos progenitores que levam os seus filhos ao cinema para recreá-los. Em toda parte, tanto nas casas de famílias como nos colégios, só se ouve a petizada falar em fitas, em artistas cinematográficos, nas proezas de William Hart ou nas façanhas de Mutt.",
          "O cinema e a criança. Diário de Pernambuco. 29 ago. 1925 (adaptado). Publicados na primeira metade do século XX, os textos apresentam",
          "conclusões semelhantes sobre o mesmo suporte midiático.",
          "argumentos contrários sobre o mesmo tipo de diversão.",
          "discursos contraditórios sobre a mesma didática escolar.",
          "regras teológicas acerca de um mesmo recurso pedagógico. E justificativas idênticas acerca de um mesmo aspecto cultural."
        ]
      },
      {opcao1: "A"},
      {opcao2: "B"},
      {opcao3: "C"},
      {opcao4: "D"},
      {opcao5: "E"}
    ]
  },
  {
    id: 86,
    slug: 'Questão 86',
    respostaCorreta: ENEM2025AnswerKey.english[85],
    pergunta: [
      {
        questao: [
          "Pesquisa pioneira no Brasil propõe o uso de energia do solo para climatizar edifícios",
          "Pela primeira vez na história, o Brasil terá um prédio que usa energia do solo para climatizar seus ambientes. Uma pesquisa inovadora avaliou o uso das fundações de edifícios como meio para a troca de energia térmica entre o prédio e o subsolo. A energia geotérmica é aquela encontrada dentro da crosta terrestre, seja no solo, nas rochas ou mesmo na água, sendo identificada pela temperatura. Essa energia pode ser transferida para a superfície por processos de troca térmica a partir das fundações da edificação.",
          "Disponível em: https://jornal.usp.br. Acesso em: 7 nov. 2021 (adaptado).",
          "Para o sistema elétrico brasileiro, a expansão de tecnologias como a descrita no texto representa uma tendência de",
          "homogeneização da oferta da matriz produtiva.",
          "ampliação do consumo em unidades residenciais.",
          "redução da pressão sobre as usinas hidrelétricas.",
          "estagnação do consumo em unidades industriais.",
          "superação da necessidade de recursos renováveis."
        ]
      },
      {opcao1: "A"},
      {opcao2: "B"},
      {opcao3: "C"},
      {opcao4: "D"},
      {opcao5: "E"}
    ]
  },
  {
    id: 87,
    slug: 'Questão 87',
    respostaCorreta: ENEM2025AnswerKey.english[86],
    pergunta: [
      {
        questao: [
          "Durante a realeza, e nos primeiros anos republicanos, as leis eram transmitidas oralmente de uma geração para outra. A ausência de uma legislação escrita permitia aos patrícios manipular a justiça conforme seus interesses.",
          "COULANGES, F. A cidade antiga. São Paulo: Martins Fontes, 2000.",
          "A conjuntura sociopolítica da Roma Antiga, conforme apresentada no texto, foi contestada pelos",
          "monarcas, que queriam expandir o código jurídico.",
          "plebeus, que almejavam participar da vida política.",
          "nobres, que desejavam superar a relação de dependência.",
          "camponeses, que aspiravam diminuir a jornada de trabalho.",
          "estrangeiros, que ambicionavam acessar os espaços públicos."
        ]
      },
      {opcao1: "A"},
      {opcao2: "B"},
      {opcao3: "C"},
      {opcao4: "D"},
      {opcao5: "E"}
    ]
  },
  {
    id: 88,
    slug: 'Questão 88',
    respostaCorreta: ENEM2025AnswerKey.english[87],
    pergunta: [
      {
        questao: [
          "Os povos indígenas têm o direito de manter, controlar, proteger e desenvolver seu patrimônio cultural, seus conhecimentos do passado, suas expressões culturais e as manifestações de suas ciências, tecnologias e culturas, compreendidos os recursos humanos e genéticos, as sementes, os medicamentos, o conhecimento das propriedades da fauna e da flora, as transmissões orais, as literaturas, os desenhos, os esportes, os jogos e as artes visuais e interpretativas.",
          "Declaração das Nações Unidas sobre os Direitos dos Povos Indígenas. 107ª Sessão Plenária, 13 de setembro de 2007. Disponível em:",
          "www.un.org. Acesso em: 18 abr. 2015 (adaptado). Os direitos reconhecidos no texto representam a",
          "multiplicidade dos troncos linguísticos.",
          "ampliação das influências externas.",
          "complexidade dos saberes tradicionais.",
          "sofisticação das práticas de sobrevivência.",
          "diversificação da economia de subsistência."
        ]
      },
      {opcao1: "A"},
      {opcao2: "B"},
      {opcao3: "C"},
      {opcao4: "D"},
      {opcao5: "E"}
    ]
  },
  {
    id: 89,
    slug: 'Questão 89',
    respostaCorreta: ENEM2025AnswerKey.english[88],
    pergunta: [
      {
        questao: [
          "TEXTO I",
          "Eu escolhi Bezalel e lhe dei competência e habilidade para fazer todo tipo de trabalho artístico; para fazer desenhos e trabalhar em ouro, prata e bronze; para lapidar e montar pedras preciosas; para entalhar madeira; e para fazer todo tipo de artesanato.",
          "BÍBLIA. Êxodo 31, 2-5. São Paulo: Paulinas, 2005.",
          "TEXTO II",
          "Moisés foi educado em toda a sabedoria dos egípcios e veio a ser poderoso em palavras e obras.",
          "BÍBLIA. Atos 7, 22. São Paulo: Paulinas, 2005.",
          "TEXTO III",
          "Se conhecêsseis a ciência certa, logo renunciarias à ostentação. ALCORÃO. Sura 102, 5. São Paulo: Tangará, 1975.",
          "Escritos em temporalidades diferentes (Antiguidade e Idade Média), os textos sagrados aproximam-se ao mostrar o papel da ciência para o(a)",
          "emergência das universidades e escolas confessionais.",
          "crescimento religioso e movimentos sectários. C avanço da intolerância e rivalidades nacionais.",
          "D preservação das tradições e rituais místicos. E desenvolvimento social e práticas laborais."
        ]
      },
      {opcao1: "A"},
      {opcao2: "B"},
      {opcao3: "C"},
      {opcao4: "D"},
      {opcao5: "E"}
    ]
  },
  {
    id: 90,
    slug: 'Questão 90',
    respostaCorreta: ENEM2025AnswerKey.english[89],
    pergunta: [
      {
        questao: [
          "Em 1914, uma expedição estudantil saiu da Rússia em direção à América do Sul, sendo considerada a segunda campanha científica da Rússia no continente depois da longa viagem do barão Langsdorff pelo interior do Brasil na primeira metade do século XIX. O empreendimento foi enviado pelo Museu de Antropologia e Etnografia de São Petersburgo e integrado por cinco jovens cientistas, sendo dois zoólogos, dois etnógrafos e um antropólogo, cujo objetivo era a coleta de material de valor biológico e etnográfico para compor coleções nas instituições que participaram de seu financiamento. A expedição passou por países como Brasil, Paraguai e Argentina, resultando em amplo material manuscrito e algumas publicações, além dos objetos coletados.",
          "CARNEIRO, L. A. F. A Rússia no Brasil do início do século XX. Rio de Janeiro: Casa de Oswaldo Cruz, 2015 (adaptado).",
          "Além do significado científico, o evento mencionado conectava-se a um projeto nacionalista de caráter",
          "imperialista e colonizador.",
          "militar e disciplinador.",
          "lúdico e filantrópico.",
          "mercantil e predatório. E religioso e humanitário."
        ]
      },
      {opcao1: "A"},
      {opcao2: "B"},
      {opcao3: "C"},
      {opcao4: "D"},
      {opcao5: "E"}
    ]
  }
];

const ENEM2025SubjectTags = {
  1: 'Língua Inglesa',
  2: 'Língua Inglesa',
  3: 'Língua Inglesa',
  4: 'Língua Inglesa',
  6: 'Língua Portuguesa',
  7: 'Língua Portuguesa',
  8: 'Língua Portuguesa',
  9: 'Língua Portuguesa',
  10: 'Língua Portuguesa',
  11: 'Literatura',
  12: 'Educação Física',
  13: 'Língua Portuguesa',
  15: 'Artes',
  16: 'Literatura',
  17: 'Língua Portuguesa',
  18: 'Educação Física',
  19: 'Educação Física',
  20: 'Língua Portuguesa',
  21: 'Literatura',
  25: 'Língua Portuguesa',
  28: 'Literatura',
  29: 'Literatura',
  30: 'Língua Portuguesa',
  32: 'Língua Portuguesa',
  35: 'Língua Portuguesa',
  36: 'Língua Portuguesa',
  37: 'Literatura',
  38: 'Língua Portuguesa',
  39: 'Língua Portuguesa',
  40: 'Literatura',
  42: 'Língua Portuguesa',
  43: 'Língua Portuguesa',
  44: 'Língua Portuguesa',
  46: 'Geografia',
  48: 'Filosofia',
  51: 'Sociologia',
  52: 'História',
  53: 'Educação Física',
  54: 'Geografia',
  55: 'Sociologia',
  56: 'Geografia',
  57: 'Geografia',
  58: 'História',
  59: 'Geografia',
  60: 'Filosofia',
  61: 'Ciência Política',
  62: 'Sociologia',
  64: 'História',
  65: 'Filosofia',
  66: 'Sociologia',
  67: 'Geografia',
  69: 'História',
  70: 'Geociências',
  71: 'História',
  72: 'Filosofia',
  73: 'História',
  74: 'Sociologia',
  75: 'Ciências Biológicas',
  76: 'Filosofia',
  78: 'História',
  79: 'Filosofia',
  80: 'Geografia',
  81: 'Sociologia',
  82: 'Filosofia',
  83: 'História',
  84: 'Geografia',
  85: 'Artes',
  86: 'Física',
  87: 'História',
  88: 'Antropologia',
  89: 'História',
  90: 'História',
};

export const ENEM2025 = ENEM2025QuestionData.map((question) => ({
  ...question,
  respostaCorreta: ENEM2025AnswerKey.english[question.id - 1],
  tags: [ENEM2025SubjectTags[question.id], ...(question.tags || [])],
}));

export const ENEM2024 = [
    { id: 10, slug: 'Questão 10', respostaCorreta:'opcao1', pergunta: [
        {questao: 'pergunta?'},
        {opcao1: 'a'},
        {opcao2: 'b'},
        {opcao3: 'c'},
        {opcao4: 'd'},
        {opcao5: 'e'},
        ],
    },
    { id: 11, slug: 'Questão 11', respostaCorreta:'opcao1', pergunta: [
        {questao: 'pergunta?'},
        {opcao1: 'a'},
        {opcao2: 'b'},
        {opcao3: 'c'},
        {opcao4: 'd'},
        {opcao5: 'e'},
        ]
    },
    { id: 12, slug: 'Questão 12', respostaCorreta:'opcao1', pergunta: [
        {questao: 'pergunta?'},
        {opcao1: 'a'},
        {opcao2: 'b'},
        {opcao3: 'c'},
        {opcao4: 'd'},
        {opcao5: 'e'},
        ] 
    },
];

export const ENEM2023 = [
    { id: 1, slug: 'Questão 1', respostaCorreta:'opcao1', pergunta: [
        {questao: 'pergunta?'},
        {opcao1: 'a'},
        {opcao2: 'b'},
        {opcao3: 'c'},
        {opcao4: 'd'},
        {opcao5: 'e'},
        ],
    },
    { id: 2, slug: 'Questão 2', respostaCorreta:'opcao1', pergunta: [
        {questao: 'pergunta?'},
        {opcao1: 'a'},
        {opcao2: 'b'},
        {opcao3: 'c'},
        {opcao4: 'd'},
        {opcao5: 'e'},
        ]
    },
    { id: 3, slug: 'Questão 3', respostaCorreta:'opcao1', pergunta: [
        {questao: 'pergunta?'},
        {opcao1: 'a'},
        {opcao2: 'b'},
        {opcao3: 'c'},
        {opcao4: 'd'},
        {opcao5: 'e'},
        ] 
    },
];

export const ENEM2022 = [
    { id: 1, slug: 'Questão 1', respostaCorreta:'opcao1', pergunta: [
        {questao: 'pergunta?'},
        {opcao1: 'a'},
        {opcao2: 'b'},
        {opcao3: 'c'},
        {opcao4: 'd'},
        {opcao5: 'e'},
        ],
    },
    { id: 2, slug: 'Questão 2', respostaCorreta:'opcao1', pergunta: [
        {questao: 'pergunta?'},
        {opcao1: 'a'},
        {opcao2: 'b'},
        {opcao3: 'c'},
        {opcao4: 'd'},
        {opcao5: 'e'},
        ]
    },
    { id: 3, slug: 'Questão 3', respostaCorreta:'opcao1', pergunta: [
        {questao: 'pergunta?'},
        {opcao1: 'a'},
        {opcao2: 'b'},
        {opcao3: 'c'},
        {opcao4: 'd'},
        {opcao5: 'e'},
        ] 
    },
];

export const questionsByExam = {
  'ENEM 2025': ENEM2025,
  'ENEM 2024': ENEM2024,
  'ENEM 2023': ENEM2023,
  'ENEM 2022': ENEM2022,
};