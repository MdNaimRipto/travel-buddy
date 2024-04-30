export interface ILocation {
  destination: {
    label: string;
    value: string;
  };
  areas: Array<{
    label: string;
    value: string;
  }>;
}

export const locations: ILocation[] = [
  {
    destination: {
      label: "Cox's Bazar",
      value: "cox'sBazar",
    },
    areas: [
      { label: "Cox's Bazar Sea Beach", value: "coxsBazarSeaBeach" },
      { label: "Kolatoli Beach", value: "kolatoliBeach" },
      { label: "Sugandha Beach", value: "sugandhaBeach" },
      { label: "Inani Beach", value: "inaniBeach" },
      { label: "Himchari", value: "himchari" },
      { label: "Laboni Beach", value: "laboniBeach" },
      { label: "Marine Drive", value: "marineDrive" },
      { label: "Kalatoli Point", value: "kalatoliPoint" },
      { label: "Hotel Motel Zone", value: "hotelMotelZone" },
      { label: "Ramu", value: "ramu" },
    ],
  },
  {
    destination: {
      label: "Sundarban",
      value: "sundarban",
    },
    areas: [
      { label: "Khulna City", value: "khulnaCity" },
      { label: "Mongla Port", value: "monglaPort" },
      { label: "Dhangmari Forest Station", value: "dhangmariForestStation" },
      { label: "Kotka Wildlife Sanctuary", value: "kotkaWildlifeSanctuary" },
      { label: "Hiron Point", value: "hironPoint" },
      { label: "Sundarbans Gateway", value: "sundarbansGateway" },
      { label: "Karamjal Wildlife Centre", value: "karamjalWildlifeCentre" },
      { label: "Katka Beach", value: "katkaBeach" },
      { label: "Dublar Char", value: "dublarChar" },
      { label: "Shoronkhola", value: "shoronkhola" },
    ],
  },
  {
    destination: {
      label: "Sylhet",
      value: "sylhet",
    },
    areas: [
      { label: "Sylhet City Center", value: "sylhetCityCenter" },
      { label: "Moulvibazar Town", value: "moulvibazarTown" },
      { label: "Srimangal Town", value: "srimangalTown" },
      { label: "Ratargul Swamp Forest", value: "ratargulSwampForest" },
      { label: "Jaflong", value: "jaflong" },
      { label: "Lalakhal", value: "lalakhal" },
      { label: "Tea Garden Road", value: "teaGardenRoad" },
      { label: "Bichnakandi", value: "bichnakandi" },
      { label: "Barlekha", value: "barlekha" },
      { label: "Jaintapur", value: "jaintapur" },
    ],
  },
  {
    destination: {
      label: "Saint Martin",
      value: "saintMartin",
    },
    areas: [
      {
        label: "Saint Martin's Island Beach",
        value: "saintMartinsIslandBeach",
      },
      { label: "East Beach", value: "eastBeach" },
      { label: "West Beach", value: "westBeach" },
      { label: "Shahpori Island", value: "shahporiIsland" },
      { label: "Chera Dwip", value: "cheraDwip" },
      { label: "Moubon", value: "moubon" },
      { label: "Fisherman's community", value: "fishermansCommunity" },
      { label: "Narikel Jinjira", value: "narikelJinjira" },
      { label: "Coconut Garden", value: "coconutGarden" },
      { label: "Kakrajan", value: "kakrajan" },
    ],
  },
  {
    destination: {
      label: "Rangamati",
      value: "rangamati",
    },
    areas: [
      { label: "Rangamati City Center", value: "rangamatiCityCenter" },
      { label: "Hanging Bridge", value: "hangingBridge" },
      { label: "Kaptai Lake", value: "kaptaiLake" },
      { label: "Rajban Vihara", value: "rajbanVihara" },
      { label: "Shuvolong", value: "shuvolong" },
      { label: "Chakma Rajbari", value: "chakmaRajbari" },
      { label: "Shuvolong Waterfall", value: "shuvolongWaterfall" },
      { label: "Tuk Tuk Eco Village", value: "tukTukEcoVillage" },
      { label: "Subholong", value: "subholong" },
      { label: "Borkol Parjatan", value: "borkolParjatan" },
    ],
  },
  {
    destination: {
      label: "Bandarban",
      value: "bandarban",
    },
    areas: [
      { label: "Bandarban Town", value: "bandarbanTown" },
      { label: "Nilgiri Hill", value: "nilgiriHill" },
      { label: "Boga Lake", value: "bogaLake" },
      { label: "Nilachal", value: "nilachal" },
      { label: "Meghla Tourist Complex", value: "meghlaTouristComplex" },
      { label: "Nilgiri Resort", value: "nilgiriResort" },
      { label: "Shoilo Propat", value: "shoiloPropat" },
      { label: "Ruma Bazaar", value: "rumaBazaar" },
      { label: "Nafakhum Waterfall", value: "nafakhumWaterfall" },
      { label: "Sangu River", value: "sanguRiver" },
    ],
  },
  {
    destination: {
      label: "Kuakata",
      value: "kuakata",
    },
    areas: [
      { label: "Kuakata Sea Beach", value: "kuakataSeaBeach" },
      { label: "Latachapli Beach", value: "latachapliBeach" },
      { label: "Gangamati Reserved Forest", value: "gangamatiReservedForest" },
      { label: "Misripara Buddhist Temple", value: "misriparaBuddhistTemple" },
      { label: "Lebur Char", value: "leburChar" },
      { label: "Fatrar Char", value: "fatrarChar" },
      { label: "Kuakata Parjatan", value: "kuakataParjatan" },
      { label: "Alipur Beach", value: "alipurBeach" },
      { label: "Kathaltali Beach", value: "kathaltaliBeach" },
      { label: "Jhaubon", value: "jhaubon" },
    ],
  },
  {
    destination: {
      label: "Paharpur",
      value: "paharpur",
    },
    areas: [
      {
        label: "Paharpur Buddhist Monastery",
        value: "paharpurBuddhistMonastery",
      },
      { label: "Naogaon Town", value: "naogaonTown" },
      { label: "Mahasthan Garh", value: "mahasthanGarh" },
      {
        label: "Behula Lakshindar Basor Ghar",
        value: "behulaLakshindarBasorGhar",
      },
      { label: "Jagaddal Vihara", value: "jagaddalVihara" },
      { label: "Mohasthangarh Museum", value: "mohasthangarhMuseum" },
      { label: "Porshuram Palace", value: "porshuramPalace" },
      { label: "Shalbon Bihar", value: "shalbonBihar" },
      { label: "Bhairab River", value: "bhairabRiver" },
      { label: "Naogaon Parjatan Motel", value: "naogaonParjatanMotel" },
    ],
  },
  {
    destination: {
      label: "Mahasthangarh",
      value: "mahasthangarh",
    },
    areas: [
      { label: "Bogra City Center", value: "bograCityCenter" },
      { label: "Mahasthangarh Museum", value: "mahasthangarhMuseum" },
      { label: "Govinda Bhita Temple", value: "govindaBhitaTemple" },
      { label: "Vasu Bihar", value: "vasuBihar" },
      { label: "Mahasthangarh Fort", value: "mahasthangarhFort" },
      {
        label: "Mazar of Shah Sultan Balkhi",
        value: "mazarOfShahSultanBalkhi",
      },
      { label: "Shalban Bihar", value: "shalbanBihar" },
      { label: "Rokhia Jame Mosque", value: "rokhiaJameMosque" },
      { label: "Kamalaksha River", value: "kamalakshaRiver" },
      { label: "Dharmasagar", value: "dharmasagar" },
    ],
  },
  {
    destination: {
      label: "Lalbagh Fort",
      value: "lalbaghFort",
    },
    areas: [
      { label: "Old Dhaka City Center", value: "oldDhakaCityCenter" },
      { label: "Lalbagh Fort Road", value: "lalbaghFortRoad" },
      { label: "Ahsan Manzil", value: "ahsanManzil" },
      { label: "Armenian Church", value: "armenianChurch" },
      { label: "Star Mosque", value: "starMosque" },
      { label: "Chawk Bazar", value: "chawkBazar" },
      { label: "Shankhari Bazar", value: "shankhariBazar" },
      { label: "Sadarghat", value: "sadarghat" },
      {
        label: "Khan Mohammad Mridha Mosque",
        value: "khanMohammadMridhaMosque",
      },
      { label: "Buriganga River", value: "burigangaRiver" },
    ],
  },
  {
    destination: {
      label: "Sajek",
      value: "sajek",
    },
    areas: [
      { label: "Sajek Valley Resort Area", value: "sajekValleyResortArea" },
      { label: "Konglak Para", value: "konglakPara" },
      { label: "Ruilui Para", value: "ruiluiPara" },
      { label: "Hazachora Waterfall", value: "hazachoraWaterfall" },
      { label: "Konglak Hills", value: "konglakHills" },
    ],
  },
];
