export const yearChartData = [
        {
            id:1,
            ano: 2010,
            totalPublicacoes: 48,
            totalPublicacoesTematica: 0,
        },
        {
            id:2,
            ano: 2011,
            totalPublicacoes: 124,
            totalPublicacoesTematica: 0,
        },
        {
            id:3,
            ano: 2012,
            totalPublicacoes: 154,
            totalPublicacoesTematica: 0,
        },
        {
            id:4,
            ano: 2013,
            totalPublicacoes: 160,
            totalPublicacoesTematica: 0,
        },
        {
            id:5,
            ano: 2014,
            totalPublicacoes: 211,
            totalPublicacoesTematica: 0,
        },
        {
            id:6,
            ano: 2015,
            totalPublicacoes: 249,
            totalPublicacoesTematica: 0,
        },
        {
            id:7,
            ano: 2016,
            totalPublicacoes: 287,
            totalPublicacoesTematica: 0,
        },
        {
            id:8,
            ano: 2017,
            totalPublicacoes: 398,
            totalPublicacoesTematica: 0,
        },
        {
            id:9,
            ano: 2018,
            totalPublicacoes: 407,
            totalPublicacoesTematica: 0,
        },
        {
            id:10,
            ano: 2019,
            totalPublicacoes: 612,
            totalPublicacoesTematica: 22,
        },
        {
            id:11,
            ano: 2020,
            totalPublicacoes: 768,
            totalPublicacoesTematica: 28,
        },
        {
            id:12,
            ano: 2021,
            totalPublicacoes: 1238,
            totalPublicacoesTematica: 36,
        },
        {
            id:13,
            ano: 2022,
            totalPublicacoes: 836,
            totalPublicacoesTematica: 22,
        },
];

export const columnsYearChart = [
    {
      field: "ano",
      headerName: "Ano",
      type: "text",
      headerAlign: "left",
      align: "left",
      flex: 1,
    },
    {
      field: "totalPublicacoes",
      headerName: "Total de Publicações",
      type: "number",
      headerAlign: "left",
      align: "left",
      flex: 1,
    },
    {
        field: "totalPublicacoesTematica",
        headerName: "Total de Publicações Temática",
        type: "number",
        headerAlign: "left",
        align: "left",
        flex: 1,
    },

];

export const categoryChartData = [
    {
        id: 1,
        categoria: "Fora do Escopo",
        total: 20,
        porcentagem: 18.52,
    },
    {
        id: 2,
        categoria: "Análise de Dados",
        total: 44,
        porcentagem: 40.74,
    },
    {
        id: 3,
        categoria: "Projeto",
        total: 39,
        porcentagem: 36.11,
    },
    {
        id: 4,
        categoria: "Programa",
        total: 15,
        porcentagem: 13.89,
    },
    {
        id: 5,
        categoria: "Ferramenta",
        total: 10,
        porcentagem: 9.26,
    }
];

export const categoryColumns = [
    {
        field: "categoria",
        headerName: "Categoria",
        type: "text",
        headerAlign: "left",
        align: "left",
        flex: 1,
    },
    {
        field: "total",
        headerName: "Total",
        type: "number",
        headerAlign: "left",
        align: "left",
        flex: 1,
    },
    {
        field: "porcentagem",
        headerName: "Porcentagem (%)",
        type: "number",
        headerAlign: "left",
        align: "left",
        flex: 1,
    },
];

export const eventChartData = [
    {
        ano: 2019,
        evento:{
            CB: 0,
            EDUCOMP: 0,
            LATINOWARE: 0,
            SBES: 0,
            SBGAMES: 0,
            SBIE: 0,
            SBSI: 0,
            SEMIEDU: 0,
            WEI: 0,
            WIE: 0,
            WIT: 22,
            RBIE: 0,
        },
        total: 22,
    },
    {
        ano: 2020,
        evento:{
            CB: 0,
            EDUCOMP: 0,
            LATINOWARE: 0,
            SBES: 0,
            SBGAMES: 0,
            SBIE: 0,
            SBSI: 0,
            SEMIEDU: 0,
            WEI: 2,
            WIE: 1,
            WIT: 25,
            RBIE: 0,
        },
        total: 28,
    },
    {
        ano: 2021,
        evento:{
            CB: 0,
            EDUCOMP: 2,
            LATINOWARE: 0,
            SBES: 1,
            SBGAMES: 1,
            SBIE: 0,
            SBSI: 0,
            SEMIEDU: 1,
            WEI: 0,
            WIE: 1,
            WIT: 29,
            RBIE: 1,
        },
        total: 36,
    },
    {
        ano: 2022,
        evento:{
            CB: 1,
            EDUCOMP: 0,
            LATINOWARE: 1,
            SBES: 3,
            SBGAMES: 0,
            SBIE: 1,
            SBSI: 1,
            SEMIEDU: 0,
            WEI: 0,
            WIE: 2,
            WIT: 13,
            RBIE: 0,
        },
        total: 22,
    },
];

export const colecaoData = [
        {
          tipoColecao: "Anais de Eventos",
          totalEventos: 10
        },
        {
          tipoColecao: "Jornais",
          totalEventos: 0
        },
        {
          tipoColecao: "Livros/Capítulos",
          totalEventos: 2
        }
];

export const totalEventos = [
    {
        ano: 2010,
        evento:{
            CB: 0,
            EDUCOMP: 0,
            LATINOWARE: 0,
            SBES: 0,
            SBGAMES: 0,
            SBIE: 0,
            SBSI: 48,
            SEMIEDU: 0,
            WEI: 0,
            WIE: 0,
            WIT: 0,
            RBIE: 0,
        },
        total: 48,
    },
    {
        ano: 2011,
        evento:{
            CB: 0,
            EDUCOMP: 0,
            LATINOWARE: 0,
            SBES: 0,
            SBGAMES: 0,
            SBIE: 0,
            SBSI: 54,
            SEMIEDU: 0,
            WEI: 0,
            WIE: 70,
            WIT: 0,
            RBIE: 0,
        },
        total: 124,
    },
    {
        ano: 2012,
        evento:{
            CB: 0,
            EDUCOMP: 0,
            LATINOWARE: 0,
            SBES: 0,
            SBGAMES: 0,
            SBIE: 0,
            SBSI: 105,
            SEMIEDU: 0,
            WEI: 0,
            WIE: 49,
            WIT: 0,
            RBIE: 0,
        },
        total: 154,
    },
    {
        ano: 2013,
        evento:{
            CB: 0,
            EDUCOMP: 0,
            LATINOWARE: 0,
            SBES: 0,
            SBGAMES: 0,
            SBIE: 0,
            SBSI: 110,
            SEMIEDU: 0,
            WEI: 0,
            WIE: 50,
            WIT: 0,
            RBIE: 0,
        },
        total: 160,
    },
    {
        ano: 2014,
        evento:{
            CB: 0,
            EDUCOMP: 0,
            LATINOWARE: 0,
            SBES: 0,
            SBGAMES: 0,
            SBIE: 0,
            SBSI: 96,
            SEMIEDU: 43,
            WEI: 0,
            WIE: 72,
            WIT: 0,
            RBIE: 0,
        },
        total: 211,
    },
    {
        ano: 2015,
        evento:{
            CB: 0,
            EDUCOMP: 0,
            LATINOWARE: 0,
            SBES: 0,
            SBGAMES: 0,
            SBIE: 0,
            SBSI: 136,
            SEMIEDU: 45,
            WEI: 0,
            WIE: 68,
            WIT: 0,
            RBIE: 0,
        },
        total: 249,
    },
    {
        ano: 2016,
        evento:{
            CB: 0,
            EDUCOMP: 0,
            LATINOWARE: 0,
            SBES: 0,
            SBGAMES: 0,
            SBIE: 0,
            SBSI: 111,
            SEMIEDU: 0,
            WEI: 47,
            WIE: 104,
            WIT: 25,
            RBIE: 0,
        },
        total: 287,
    },
    {
        ano: 2017,
        evento:{
            CB: 86,
            EDUCOMP: 0,
            LATINOWARE: 0,
            SBES: 0,
            SBGAMES: 0,
            SBIE: 0,
            SBSI: 125,
            SEMIEDU: 0,
            WEI: 25,
            WIE: 134,
            WIT: 28,
            RBIE: 0,
        },
        total: 398,
    },
    {
        ano: 2018,
        evento:{
            CB: 81,
            EDUCOMP: 0,
            LATINOWARE: 0,
            SBES: 0,
            SBGAMES: 0,
            SBIE: 0,
            SBSI: 166,
            SEMIEDU: 0,
            WEI: 52,
            WIE: 78,
            WIT: 30,
            RBIE: 0,
        },
        total: 407,
    },
    {
        ano: 2019,
        evento:{
            CB: 88,
            EDUCOMP: 0,
            LATINOWARE: 32,
            SBES: 39,
            SBGAMES: 0,
            SBIE: 0,
            SBSI: 173,
            SEMIEDU: 0,
            WEI: 49,
            WIE: 198,
            WIT:33,
            RBIE: 0,
        },
        total: 612,
    },
    {
        ano: 2020,
        evento:{
            CB: 70,
            EDUCOMP: 0,
            LATINOWARE: 32,
            SBES: 134,
            SBGAMES: 0,
            SBIE: 190,
            SBSI: 152,
            SEMIEDU: 52,
            WEI: 41,
            WIE: 55,
            WIT: 42,
            RBIE: 0,
        },
        total: 768,
    },
    {
        ano: 2021,
        evento:{
            CB: 50,
            EDUCOMP: 78,
            LATINOWARE: 31,
            SBES: 62,
            SBGAMES: 177,
            SBIE: 122,
            SBSI: 159,
            SEMIEDU: 377,
            WEI: 51,
            WIE: 33,
            WIT: 48,
            RBIE: 50,
        },
        total: 1238,
    },
    {
        ano: 2022,
        evento:{
            CB: 55,
            EDUCOMP: 58,
            LATINOWARE: 29,
            SBES: 53,
            SBGAMES: 200,
            SBIE: 128,
            SBSI: 172,
            SEMIEDU: 34,
            WEI: 40,
            WIE: 36,
            WIT: 30,
            RBIE: 1,
        },
        total: 836,
    },
];

export const contextData=[
    {
        id:1,
        proposito: "Visibilidade ao tema",
        analiseDados: 6,
        projeto: 5,
        programa: 2,
        ferramenta: 7,
        total: 20,
        porcentagem: 18.52,
    },
    {
        id:2,
        proposito: "Perfil das mulheres",
        analiseDados: 0,
        projeto: 0,
        programa: 0,
        ferramenta: 0,
        total: 0,
        porcentagem: 0,
    },
    {
        id:3,
        proposito: "Fatores de influência",
        analiseDados: 0,
        projeto: 0,
        programa: 0,
        ferramenta: 0,
        total: 0,
        porcentagem: 0,
    },
    {
        id:4,
        proposito: "Fortalecimento, motivação e pertencimento",
        analiseDados: 0,
        projeto: 0,
        programa: 0,
        ferramenta: 0,
        total: 0,
        porcentagem: 0,
    },
    {
        id:5,
        proposito: "Representatividade acadêmica",
        analiseDados: 0,
        projeto: 0,
        programa: 0,
        ferramenta: 0,
        total: 0,
        porcentagem: 0,
    },
    {
        id:6,
        proposito: "Desempenho acadêmico",
        analiseDados: 0,
        projeto: 0,
        programa: 0,
        ferramenta: 0,
        total: 0,
        porcentagem: 0,
    },
    {
        id:7,
        proposito: "Representatividade no mercado",
        analiseDados: 0,
        projeto: 0,
        programa: 0,
        ferramenta: 0,
        total: 0,
        porcentagem: 0,
    },
    {
        id:8,
        proposito: "Desempenho no mercado",
        analiseDados: 0,
        projeto: 0,
        programa: 0,
        ferramenta: 0,
        total: 0,
        porcentagem: 0,
    },
    {
        id:9,
        proposito: "Representatividade na pesquisa",
        analiseDados: 0,
        projeto: 0,
        programa: 0,
        ferramenta: 0,
        total: 0,
        porcentagem: 0,
    },
];

export const contextColumns = [
    {
        field: "proposito",
        headerName: "Propósito do Artigo",
        type: "text",
        headerAlign: "left",
        align: "left",
        flex: 1,
      },
      {
        field: "analiseDados",
        headerName: "Análise de Dados",
        type: "number",
        headerAlign: "left",
        align: "left",
        flex: 1,
      },
      {
          field: "projeto",
          headerName: "Projeto",
          type: "number",
          headerAlign: "left",
          align: "left",
          flex: 1,
      },
      {
        field: "programa",
        headerName: "Programa",
        type: "number",
        headerAlign: "left",
        align: "left",
        flex: 1,
    },
    {
        field: "ferramenta",
        headerName: "Ferramenta",
        type: "number",
        headerAlign: "left",
        align: "left",
        flex: 1,
    },
    {
        field: "total",
        headerName: "Total ",
        type: "number",
        headerAlign: "left",
        align: "left",
    },
    {
        field: "porcentagem",
        headerName: "Porcentagem ",
        type: "number",
        headerAlign: "left",
        align: "left",
    },
];
