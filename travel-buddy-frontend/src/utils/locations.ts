export interface ILocation {
  destination: {
    key: string;
    value: string;
  };
  areas: Array<{
    key: string;
    value: string;
  }>;
}

export const locations: ILocation[] = [
  {
    destination: {
      key: "Cox's Bazar",
      value: "cox'sBazar",
    },
    areas: [
      { key: "Cox's Bazar Sea Beach", value: "coxsBazarSeaBeach" },
      { key: "Kolatoli Beach", value: "kolatoliBeach" },
      { key: "Sugandha Beach", value: "sugandhaBeach" },
      { key: "Inani Beach", value: "inaniBeach" },
      { key: "Himchari", value: "himchari" },
      { key: "Laboni Beach", value: "laboniBeach" },
      { key: "Marine Drive", value: "marineDrive" },
      { key: "Kalatoli Point", value: "kalatoliPoint" },
      { key: "Hotel Motel Zone", value: "hotelMotelZone" },
      { key: "Ramu", value: "ramu" },
    ],
  },
  {
    destination: {
      key: "Sundarban",
      value: "sundarban",
    },
    areas: [
      { key: "Khulna City", value: "khulnaCity" },
      { key: "Mongla Port", value: "monglaPort" },
      { key: "Dhangmari Forest Station", value: "dhangmariForestStation" },
      { key: "Kotka Wildlife Sanctuary", value: "kotkaWildlifeSanctuary" },
      { key: "Hiron Point", value: "hironPoint" },
      { key: "Sundarbans Gateway", value: "sundarbansGateway" },
      { key: "Karamjal Wildlife Centre", value: "karamjalWildlifeCentre" },
      { key: "Katka Beach", value: "katkaBeach" },
      { key: "Dublar Char", value: "dublarChar" },
      { key: "Shoronkhola", value: "shoronkhola" },
    ],
  },
  {
    destination: {
      key: "Sylhet",
      value: "sylhet",
    },
    areas: [
      { key: "Sylhet City Center", value: "sylhetCityCenter" },
      { key: "Moulvibazar Town", value: "moulvibazarTown" },
      { key: "Srimangal Town", value: "srimangalTown" },
      { key: "Ratargul Swamp Forest", value: "ratargulSwampForest" },
      { key: "Jaflong", value: "jaflong" },
      { key: "Lalakhal", value: "lalakhal" },
      { key: "Tea Garden Road", value: "teaGardenRoad" },
      { key: "Bichnakandi", value: "bichnakandi" },
      { key: "Barlekha", value: "barlekha" },
      { key: "Jaintapur", value: "jaintapur" },
    ],
  },
  {
    destination: {
      key: "Saint Martin",
      value: "saintMartin",
    },
    areas: [
      { key: "Saint Martin's Island Beach", value: "saintMartinsIslandBeach" },
      { key: "East Beach", value: "eastBeach" },
      { key: "West Beach", value: "westBeach" },
      { key: "Shahpori Island", value: "shahporiIsland" },
      { key: "Chera Dwip", value: "cheraDwip" },
      { key: "Moubon", value: "moubon" },
      { key: "Fisherman's community", value: "fishermansCommunity" },
      { key: "Narikel Jinjira", value: "narikelJinjira" },
      { key: "Coconut Garden", value: "coconutGarden" },
      { key: "Kakrajan", value: "kakrajan" },
    ],
  },
  {
    destination: {
      key: "Rangamati",
      value: "rangamati",
    },
    areas: [
      { key: "Rangamati City Center", value: "rangamatiCityCenter" },
      { key: "Hanging Bridge", value: "hangingBridge" },
      { key: "Kaptai Lake", value: "kaptaiLake" },
      { key: "Rajban Vihara", value: "rajbanVihara" },
      { key: "Shuvolong", value: "shuvolong" },
      { key: "Chakma Rajbari", value: "chakmaRajbari" },
      { key: "Shuvolong Waterfall", value: "shuvolongWaterfall" },
      { key: "Tuk Tuk Eco Village", value: "tukTukEcoVillage" },
      { key: "Subholong", value: "subholong" },
      { key: "Borkol Parjatan", value: "borkolParjatan" },
    ],
  },
  {
    destination: {
      key: "Bandarban",
      value: "bandarban",
    },
    areas: [
      { key: "Bandarban Town", value: "bandarbanTown" },
      { key: "Nilgiri Hill", value: "nilgiriHill" },
      { key: "Boga Lake", value: "bogaLake" },
      { key: "Nilachal", value: "nilachal" },
      { key: "Meghla Tourist Complex", value: "meghlaTouristComplex" },
      { key: "Nilgiri Resort", value: "nilgiriResort" },
      { key: "Shoilo Propat", value: "shoiloPropat" },
      { key: "Ruma Bazaar", value: "rumaBazaar" },
      { key: "Nafakhum Waterfall", value: "nafakhumWaterfall" },
      { key: "Sangu River", value: "sanguRiver" },
    ],
  },
  {
    destination: {
      key: "Kuakata",
      value: "kuakata",
    },
    areas: [
      { key: "Kuakata Sea Beach", value: "kuakataSeaBeach" },
      { key: "Latachapli Beach", value: "latachapliBeach" },
      { key: "Gangamati Reserved Forest", value: "gangamatiReservedForest" },
      { key: "Misripara Buddhist Temple", value: "misriparaBuddhistTemple" },
      { key: "Lebur Char", value: "leburChar" },
      { key: "Fatrar Char", value: "fatrarChar" },
      { key: "Kuakata Parjatan", value: "kuakataParjatan" },
      { key: "Alipur Beach", value: "alipurBeach" },
      { key: "Kathaltali Beach", value: "kathaltaliBeach" },
      { key: "Jhaubon", value: "jhaubon" },
    ],
  },
  {
    destination: {
      key: "Paharpur",
      value: "paharpur",
    },
    areas: [
      {
        key: "Paharpur Buddhist Monastery",
        value: "paharpurBuddhistMonastery",
      },
      { key: "Naogaon Town", value: "naogaonTown" },
      { key: "Mahasthan Garh", value: "mahasthanGarh" },
      {
        key: "Behula Lakshindar Basor Ghar",
        value: "behulaLakshindarBasorGhar",
      },
      { key: "Jagaddal Vihara", value: "jagaddalVihara" },
      { key: "Mohasthangarh Museum", value: "mohasthangarhMuseum" },
      { key: "Porshuram Palace", value: "porshuramPalace" },
      { key: "Shalbon Bihar", value: "shalbonBihar" },
      { key: "Bhairab River", value: "bhairabRiver" },
      { key: "Naogaon Parjatan Motel", value: "naogaonParjatanMotel" },
    ],
  },
  {
    destination: {
      key: "Mahasthangarh",
      value: "mahasthangarh",
    },
    areas: [
      { key: "Bogra City Center", value: "bograCityCenter" },
      { key: "Mahasthangarh Museum", value: "mahasthangarhMuseum" },
      { key: "Govinda Bhita Temple", value: "govindaBhitaTemple" },
      { key: "Vasu Bihar", value: "vasuBihar" },
      { key: "Mahasthangarh Fort", value: "mahasthangarhFort" },
      { key: "Mazar of Shah Sultan Balkhi", value: "mazarOfShahSultanBalkhi" },
      { key: "Shalban Bihar", value: "shalbanBihar" },
      { key: "Rokhia Jame Mosque", value: "rokhiaJameMosque" },
      { key: "Kamalaksha River", value: "kamalakshaRiver" },
      { key: "Dharmasagar", value: "dharmasagar" },
    ],
  },
  {
    destination: {
      key: "Lalbagh Fort",
      value: "lalbaghFort",
    },
    areas: [
      { key: "Old Dhaka City Center", value: "oldDhakaCityCenter" },
      { key: "Lalbagh Fort Road", value: "lalbaghFortRoad" },
      { key: "Ahsan Manzil", value: "ahsanManzil" },
      { key: "Armenian Church", value: "armenianChurch" },
      { key: "Star Mosque", value: "starMosque" },
      { key: "Chawk Bazar", value: "chawkBazar" },
      { key: "Shankhari Bazar", value: "shankhariBazar" },
      { key: "Sadarghat", value: "sadarghat" },
      { key: "Khan Mohammad Mridha Mosque", value: "khanMohammadMridhaMosque" },
      { key: "Buriganga River", value: "burigangaRiver" },
    ],
  },
  {
    destination: {
      key: "Sajek",
      value: "sajek",
    },
    areas: [
      { key: "Sajek Valley Resort Area", value: "sajekValleyResortArea" },
      { key: "Konglak Para", value: "konglakPara" },
      { key: "Ruilui Para", value: "ruiluiPara" },
      { key: "Hazachora Waterfall", value: "hazachoraWaterfall" },
      { key: "Konglak Hills", value: "konglakHills" },
    ],
  },
];
