module.exports = {
  ENVIRONMENT: process.env.NODE_ENV || "development",
  PORT: process.env.PORT || "8196",
  HOST: process.env.HOST || "localhost",
  PROTOCOL: "http",
  UIPORT:"8195",
  users: {},
  sessionid: undefined,
  csrftoken:undefined,
  profiles: [],
  locations: [],
  tags: [],
  cube:{},
  seta:[
    'tourism_portugal_',
    'betongallery',
    'zoomarine_algarve_oficial'
    // 'continente',
    // 'meoinstagram',
    // 'nos',
    // 'lidlportugal',
    // 'prozisportugal',
    // 'algarvetourism',
    // 'visitportugal',
    // 'ualg_universidadedoalgarve',
    // 'zoomarine_algarve_oficial'
  ],
  setb:[
    'irantourism.me',
    'iran_tourism.info',
    'tourism108'
    // 'mynetbarg',
    // 'kiagallery',
    // 'iran_.attractions',
    // 'irancell',
    // 'digikalacom',
    // 'bamilocom',
    // 'iran_tourism_official',
    // 'irantourism.me',
    // 'iran_tourism.info'
  ],
  default_form_data: {
    username: "HoumanProject",
    tag: "branding",
    location: "faro",
    query: "university algarve",
    shortcode: "BvZ7xQpl8Vd",
    count: 100
  },
  // NOTICE: PLEASE DELETE ALL DB FILES INSIDE DATA FOLDER BEFORE CHANGING VERSIONING
  versioning: false
};
