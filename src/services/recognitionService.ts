import { BottleResult, WhiskyBottle } from '../types';

// Full whisky dataset from the spreadsheet
const whiskyBottles: WhiskyBottle[] = [
  {
    id: "164",
    name: "Blanton's Original Single Barrel",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 74.99,
    abv: 46.5
  },
  {
    id: "2848",
    name: "Eagle Rare 10 Year",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 39.99,
    abv: 45.0
  },
  {
    id: "4984",
    name: "E.H. Taylor, Jr. Small Batch",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 44.99,
    abv: 50.0
  },
  {
    id: "466",
    name: "Buffalo Trace",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 26.99,
    abv: 45.0
  },
  {
    id: "158",
    name: "Weller Antique 107",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 56.35,
    abv: 53.5
  },
  {
    id: "2803",
    name: "Weller Special Reserve",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 29.49,
    abv: 45.0
  },
  {
    id: "1586",
    name: "Weller 12 Year The Original Wheated Bourbon",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 159.99,
    abv: 45.0
  },
  {
    id: "2993",
    name: "Stagg Jr.",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 49.46,
    abv: 67.2
  },
  {
    id: "4662",
    name: "Henry McKenna 10 Year",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 60.49,
    abv: 50.0
  },
  {
    id: "409",
    name: "Weller Full Proof",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 61.99,
    abv: 57.0
  },
  {
    id: "5120",
    name: "E.H. Taylor, Jr. Single Barrel",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 73.76,
    abv: 50.0
  },
  {
    id: "13266",
    name: "Heaven Hill Bottled In Bond 7 Year",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 47.74,
    abv: 50.0
  },
  {
    id: "13089",
    name: "Elijah Craig Toasted Barrel",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 49.72,
    abv: 47.0
  },
  {
    id: "150",
    name: "1792 Full Proof",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 45.92,
    abv: 62.5
  },
  {
    id: "159",
    name: "Blanton's Gold Edition",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 119.99,
    abv: 51.5
  },
  {
    id: "4905",
    name: "Elmer T. Lee",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 56.66,
    abv: 45.0
  },
  {
    id: "1296",
    name: "Knob Creek 12 Year",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 61.99,
    abv: 50.0
  },
  {
    id: "1805",
    name: "Sazerac Rye Whiskey",
    producer: null,
    type: "Rye",
    region: null,
    age: null,
    price: 28.73,
    abv: 45.0
  },
  {
    id: "1816",
    name: "Wild Turkey Rare Breed",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 46.03,
    abv: 58.4
  },
  {
    id: "2336",
    name: "Woodford Reserve Double Oaked",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 57.99,
    abv: 45.2
  },
  {
    id: "1522",
    name: "Russell's Reserve 10 Year",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 45.99,
    abv: 45.0
  },
  {
    id: "263",
    name: "Old Forester 1920 Prohibition Style",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 59.33,
    abv: 57.5
  },
  {
    id: "3088",
    name: "Rock Hill Farms Bourbon",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 54.14,
    abv: 50.0
  },
  {
    id: "4589",
    name: "Weller C.Y.P.B.",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 49.17,
    abv: 47.5
  },
  {
    id: "4742",
    name: "Old Grand Dad 114",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 30.75,
    abv: 57.0
  },
  {
    id: "15946",
    name: "Smoke Wagon Uncut Unfiltered Bourbon",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 64.99,
    abv: 58.0
  },
  {
    id: "2839",
    name: "Caribou Crossing",
    producer: null,
    type: "Canadian Whisky",
    region: null,
    age: null,
    price: 49.96,
    abv: 40.0
  },
  {
    id: "2193",
    name: "Evan Williams Bottled in Bond White Label",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 17.02,
    abv: 50.0
  },
  {
    id: "1643",
    name: "1792 Small Batch",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 30.3,
    abv: 46.85
  },
  {
    id: "1165",
    name: "Four Roses Single Barrel Straight Bourbon",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 56.64,
    abv: 60.0
  },
  {
    id: "3655",
    name: "Angel's Envy",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 49.2,
    abv: 43.3
  },
  {
    id: "4952",
    name: "Elijah Craig 18 Year Single Barrel",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 136.4,
    abv: 45.0
  },
  {
    id: "1587",
    name: "Willett Pot Still Reserve Bourbon",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 52.21,
    abv: 47.0
  },
  {
    id: "4792",
    name: "Elijah Craig Small Batch",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 27.78,
    abv: 47.0
  },
  {
    id: "1821",
    name: "Russell’s Reserve Single Barrel",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 57.4,
    abv: 55.0
  },
  {
    id: "355",
    name: "Baker's 7 Year 107 Proof",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 61.08,
    abv: 53.5
  },
  {
    id: "12843",
    name: "Blanton's Straight from the Barrel",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 149.98,
    abv: 63.35
  },
  {
    id: "2214",
    name: "Old Forester 1910 Old Fine Whiskey",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 53.62,
    abv: 46.5
  },
  {
    id: "1211",
    name: "Old Rip Van Winkle 10 Year",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 129.99,
    abv: 53.5
  },
  {
    id: "16078",
    name: "Russell's Reserve 13 Years Bourbon",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 109.97,
    abv: 57.4
  },
  {
    id: "1074",
    name: "Early Times Bottled In Bond",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 24.01,
    abv: 50.0
  },
  {
    id: "1282",
    name: "Willett Family Estate Small Batch Rye 4 Year",
    producer: null,
    type: "Rye",
    region: null,
    age: null,
    price: 60.58,
    abv: 55.0
  },
  {
    id: "873",
    name: "Weller Special Reserve",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 53.28,
    abv: 45.0
  },
  {
    id: "1629",
    name: "Michter's US1 Kentucky Straight Bourbon",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 41.82,
    abv: 45.5
  },
  {
    id: "3574",
    name: "1792 Bottled In Bond",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 41.64,
    abv: 50.0
  },
  {
    id: "1510",
    name: "Booker's Bourbon",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 86.86,
    abv: 64.6
  },
  {
    id: "3300",
    name: "Pappy Van Winkle 15 Year Family Reserve",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 131.64,
    abv: 53.5
  },
  {
    id: "33209",
    name: "Russell’s Reserve 15 Year",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 249.99,
    abv: 58.6
  },
  {
    id: "2879",
    name: "1792 Sweet Wheat Bourbon",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 37.34,
    abv: 45.6
  },
  {
    id: "3819",
    name: "1792 Single Barrel",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 41.35,
    abv: 49.3
  },
  {
    id: "21319",
    name: "Traveller Whiskey",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 39.97,
    abv: 45.0
  },
  {
    id: "3660",
    name: "Woodford Reserve Bourbon",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 36.62,
    abv: 45.2
  },
  {
    id: "4739",
    name: "Colonel E.H. Taylor Barrel Proof - Batch 6",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 70.78,
    abv: 64.05
  },
  {
    id: "4245",
    name: "Larceny Barrel Proof",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 52.74,
    abv: 64.0
  },
  {
    id: "4448",
    name: "Weller Single Barrel",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 55.95,
    abv: 48.5
  },
  {
    id: "477",
    name: "George T. Stagg 2009 Release",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 99.98,
    abv: 70.7
  },
  {
    id: "4762",
    name: "Jack Daniel's Single Barrel Barrel Proof",
    producer: null,
    type: "Whiskey",
    region: null,
    age: null,
    price: 64.18,
    abv: 64.0
  },
  {
    id: "4255",
    name: "Blade and Bow Bourbon",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 48.82,
    abv: 45.5
  },
  {
    id: "620",
    name: "Buffalo Trace",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 49.54,
    abv: 45.0
  },
  {
    id: "4373",
    name: "Four Roses Small Batch Select",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 59.98,
    abv: 52.0
  },
  {
    id: "3671",
    name: "E.H. Taylor, Jr. Straight Rye",
    producer: null,
    type: "Rye",
    region: null,
    age: null,
    price: 79.99,
    abv: 50.0
  },
  {
    id: "4708",
    name: "Wild Turkey 101",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 25.4,
    abv: 50.5
  },
  {
    id: "519",
    name: "Pappy Van Winkle 23 Year Family Reserve",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 321.64,
    abv: 47.8
  },
  {
    id: "15947",
    name: "Smoke Wagon Small Batch Bourbon",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 45.99,
    abv: 50.0
  },
  {
    id: "15966",
    name: "Knob Creek 9 Year",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 34.99,
    abv: 50.0
  },
  {
    id: "13668",
    name: "Maker's Mark 101",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 39.97,
    abv: 50.5
  },
  {
    id: "1702",
    name: "High West A Midwinter Night's Dram Act 4 Scene 5",
    producer: null,
    type: "Rye",
    region: null,
    age: null,
    price: 105.97,
    abv: 49.3
  },
  {
    id: "3959",
    name: "William Larue Weller - 2009",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 104.14,
    abv: 67.4
  },
  {
    id: "4002",
    name: "Michter's 10 Year Single Barrel Bourbon 2020 Bottling",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 189.99,
    abv: 47.2
  },
  {
    id: "987",
    name: "Widow Jane 10 Year Straight Bourbon",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 59.99,
    abv: 45.5
  },
  {
    id: "13584",
    name: "Jack Daniel's Single Barrel Rye Barrel Proof",
    producer: null,
    type: "Rye",
    region: null,
    age: null,
    price: 67.47,
    abv: 65.15
  },
  {
    id: "3694",
    name: "Van Winkle 12 Year Special Reserve Lot",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 799.99,
    abv: 45.2
  },
  {
    id: "1641",
    name: "Wild Turkey Kentucky Spirit Single Barrel",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 57.2,
    abv: 50.5
  },
  {
    id: "17951",
    name: "Penelope Architect",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 62.48,
    abv: 52.0
  },
  {
    id: "144",
    name: "Elijah Craig Barrel Proof Batch A119",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 69.98,
    abv: 67.1
  },
  {
    id: "3773",
    name: "Four Roses Small Batch",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 33.42,
    abv: 45.0
  },
  {
    id: "1269",
    name: "Maker's Mark 46",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 25.99,
    abv: 47.0
  },
  {
    id: "18530",
    name: "Knob Creek 18 Year Limited Edition",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 163.31,
    abv: 50.0
  },
  {
    id: "2755",
    name: "Maker's Mark Bourbon",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 21.99,
    abv: 45.0
  },
  {
    id: "17318",
    name: "Jack Daniel's 10 Year",
    producer: null,
    type: "Whiskey",
    region: null,
    age: null,
    price: 84.95,
    abv: 48.5
  },
  {
    id: "3651",
    name: "Eagle Rare 10 Year",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 60.75,
    abv: 45.0
  },
  {
    id: "14150",
    name: "1792 Aged Twelve Years",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 51.46,
    abv: 48.3
  },
  {
    id: "3731",
    name: "Michter's US1 Toasted Sour Mash",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 45.7,
    abv: 0.5
  },
  {
    id: "3674",
    name: "Bulleit Bourbon",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 28.36,
    abv: 45.0
  },
  {
    id: "20691",
    name: "Elijah Craig Barrel Proof C923",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 72.48,
    abv: 66.5
  },
  {
    id: "1217",
    name: "Joseph Magnus Cigar Blend Bourbon",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 173.33,
    abv: 58.0
  },
  {
    id: "1966",
    name: "Jack Daniel's Sinatra Select",
    producer: null,
    type: "Whiskey",
    region: null,
    age: null,
    price: 156.13,
    abv: 45.0
  },
  {
    id: "20783",
    name: "Larceny Barrel Proof Batch C923",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 59.99,
    abv: 63.2
  },
  {
    id: "17248",
    name: "Benchmark Full Proof",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 21.47,
    abv: 62.5
  },
  {
    id: "21356",
    name: "Old Forester 1924 10 Year",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 114.97,
    abv: 50.0
  },
  {
    id: "3775",
    name: "Yellowstone Select",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 37.08,
    abv: 46.5
  },
  {
    id: "46254",
    name: "Wild Turkey Jimmy Russell 70th Anniversary",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 49.99,
    abv: 50.5
  },
  {
    id: "2969",
    name: "Old Ezra 7 Year Barrel Strength",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 49.24,
    abv: 58.5
  },
  {
    id: "4299",
    name: "Jack Daniel's Single Barrel Select",
    producer: null,
    type: "Whiskey",
    region: null,
    age: null,
    price: 48.14,
    abv: 47.0
  },
  {
    id: "1046",
    name: "Double Eagle Very Rare",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 1944.94,
    abv: 45.0
  },
  {
    id: "17358",
    name: "Jack Daniel's Coy Hill Single Barrel",
    producer: null,
    type: "Whiskey",
    region: null,
    age: null,
    price: 69.99,
    abv: 74.0
  },
  {
    id: "16960",
    name: "Basil Hayden Toast",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 51.63,
    abv: 40.0
  },
  {
    id: "2533",
    name: "Knob Creek 9 Year Single Barrel Reserve",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 55.1,
    abv: 60.0
  },
  {
    id: "803",
    name: "Redwood Empire Pipe Dream",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 40.64,
    abv: 45.0
  },
  {
    id: "3755",
    name: "Angel's Envy Rye",
    producer: null,
    type: "Rye",
    region: null,
    age: null,
    price: 95.69,
    abv: 50.0
  },
  {
    id: "19547",
    name: "Jack Daniel’s 12 Year Tennessee Whiskey #1",
    producer: null,
    type: "Whiskey",
    region: null,
    age: null,
    price: 82.48,
    abv: 53.5
  },
  {
    id: "16681",
    name: "Blanton's Black",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 199.99,
    abv: 40.0
  },
  {
    id: "2706",
    name: "Elijah Craig Barrel Proof Batch B519",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 62.48,
    abv: 62.5
  },
  {
    id: "4776",
    name: "Pappy Van Winkle 20 Year Family Reserve",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 218.31,
    abv: 45.2
  },
  {
    id: "1708",
    name: "Bowman Brothers Small Batch",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 31.35,
    abv: 45.0
  },
  {
    id: "2849",
    name: "Hancock's President's Reserve Bourbon",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 51.64,
    abv: 44.45
  },
  {
    id: "2769",
    name: "Old Forester 1897 Bottled In Bond",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 46.99,
    abv: 50.0
  },
  {
    id: "5194",
    name: "Michter's US1 Kentucky Straight Rye",
    producer: null,
    type: "Rye",
    region: null,
    age: null,
    price: 43.01,
    abv: 42.4
  },
  {
    id: "3317",
    name: "Michter's Limited Release Toasted Barrel Bourbon",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 70.66,
    abv: 45.7
  },
  {
    id: "15948",
    name: "Smoke Wagon Bourbon",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 29.99,
    abv: 46.0
  },
  {
    id: "4948",
    name: "Thomas H Handy",
    producer: null,
    type: "Rye",
    region: null,
    age: null,
    price: 103.54,
    abv: 64.75
  },
  {
    id: "2353",
    name: "Knob Creek 15 Year Batch KC001",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 113.3,
    abv: 50.0
  },
  {
    id: "3958",
    name: "Basil Hayden's Bourbon",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 38.95,
    abv: 40.0
  },
  {
    id: "4450",
    name: "Buffalo Trace",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 31.77,
    abv: 45.0
  },
  {
    id: "17176",
    name: "Peerless Double Oak Bourbon",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 88.97,
    abv: 54.5
  },
  {
    id: "7140",
    name: "Buffalo Trace Bourbon Cream",
    producer: null,
    type: "Liqueurs",
    region: null,
    age: null,
    price: 20.97,
    abv: 15.0
  },
  {
    id: "14409",
    name: "Widow Jane Decadence",
    producer: null,
    type: "Whiskey",
    region: null,
    age: null,
    price: 84.97,
    abv: 45.5
  },
  {
    id: "1462",
    name: "Larceny",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 25.81,
    abv: 46.0
  },
  {
    id: "4576",
    name: "Michter's Single Barrel Rye 10 Year",
    producer: null,
    type: "Rye",
    region: null,
    age: null,
    price: 158.6,
    abv: 46.5
  },
  {
    id: "429",
    name: "Old Forester Statesman",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 52.87,
    abv: 47.5
  },
  {
    id: "1663",
    name: "Redbreast 12 Year Old Single Pot Still",
    producer: null,
    type: "Irish Whiskey",
    region: null,
    age: null,
    price: 66.08,
    abv: 40.0
  },
  {
    id: "21689",
    name: "Crown Royal Blackberry",
    producer: null,
    type: "Canadian Whisky",
    region: null,
    age: null,
    price: 33.95,
    abv: 35.0
  },
  {
    id: "16484",
    name: "Calumet Farm 15 Year Single Rack Black",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 129.98,
    abv: 52.5
  },
  {
    id: "4598",
    name: "Weller Antique 107",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 99.99,
    abv: 53.5
  },
  {
    id: "15985",
    name: "George Dickel 15 Year Single Barrel",
    producer: null,
    type: "Whiskey",
    region: null,
    age: null,
    price: 59.97,
    abv: 52.5
  },
  {
    id: "17021",
    name: "Little Book Chapter 5: The Invitation",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 124.97,
    abv: 58.5
  },
  {
    id: "4486",
    name: "John J. Bowman Single Barrel 10 Year",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 49.15,
    abv: 50.0
  },
  {
    id: "1636",
    name: "Russell’s Reserve Private Barrel Selection Single Barrel",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 56.99,
    abv: 55.0
  },
  {
    id: "220",
    name: "Noah's Mill",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 63.83,
    abv: 57.15
  },
  {
    id: "3941",
    name: "Michter's US1 Unblended American Whiskey",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 44.98,
    abv: 41.5
  },
  {
    id: "4593",
    name: "Kentucky Owl Confiscated",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 124.97,
    abv: 48.2
  },
  {
    id: "1924",
    name: "Old Tub",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 22.23,
    abv: 50.0
  },
  {
    id: "2594",
    name: "Eagle Rare 17 Year",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 103.54,
    abv: 45.0
  },
  {
    id: "14147",
    name: "Blanton's",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 31.99,
    abv: 46.5
  },
  {
    id: "19806",
    name: "John J. Bowman Single Barrel Limited Edition",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 50.0,
    abv: 50.0
  },
  {
    id: "2476",
    name: "Old Grand Dad Bonded",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 23.66,
    abv: 50.0
  },
  {
    id: "19971",
    name: "Penelope 5 Year Toasted Barrel",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 69.98,
    abv: 50.0
  },
  {
    id: "1800",
    name: "Bomberger Small Batch Straight Bourbon",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 91.98,
    abv: 54.0
  },
  {
    id: "19503",
    name: "Ben Holladay Soft Red Wheat Bottled in Bond",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 59.97,
    abv: 50.0
  },
  {
    id: "38465",
    name: "Maker's Mark Wood Finish Series The Heart Release 2024",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 75.0,
    abv: 55.85
  },
  {
    id: "495",
    name: "Maker's Mark Cask Strength",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 49.73,
    abv: 56.6
  },
  {
    id: "19526",
    name: "Maker's Mark 2023 Wood Finishing Series BEP",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 67.47,
    abv: 55.0
  },
  {
    id: "16613",
    name: "Barrell Seagrass Rye Whiskey",
    producer: null,
    type: "Rye",
    region: null,
    age: null,
    price: 87.46,
    abv: 59.2
  },
  {
    id: "3860",
    name: "Jack Daniel's",
    producer: null,
    type: "Whiskey",
    region: null,
    age: null,
    price: 24.21,
    abv: 40.0
  },
  {
    id: "966",
    name: "New Riff Bourbon Single Barrel",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 52.49,
    abv: 49.0
  },
  {
    id: "3249",
    name: "Wild Turkey Rare Breed Barrel Proof Rye",
    producer: null,
    type: "Rye",
    region: null,
    age: null,
    price: 57.48,
    abv: 58.0
  },
  {
    id: "1133",
    name: "Uncle Nearest 1856",
    producer: null,
    type: "Whiskey",
    region: null,
    age: null,
    price: 55.88,
    abv: 50.0
  },
  {
    id: "18070",
    name: "Blood Oath Pact No. 8",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 124.97,
    abv: 49.3
  },
  {
    id: "18184",
    name: "Jack Daniel's Bonded",
    producer: null,
    type: "Whiskey",
    region: null,
    age: null,
    price: 33.97,
    abv: 50.0
  },
  {
    id: "17898",
    name: "Weller Special Reserve",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 29.99,
    abv: 45.0
  },
  {
    id: "2291",
    name: "Wild Turkey Longbranch 8 Year",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 37.54,
    abv: 43.0
  },
  {
    id: "21106",
    name: "Stagg - 23C",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 59.99,
    abv: 62.5
  },
  {
    id: "2831",
    name: "New Riff Bourbon",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 39.98,
    abv: 50.0
  },
  {
    id: "633",
    name: "Michter's Barrel Strength Rye Whiskey",
    producer: null,
    type: "Rye",
    region: null,
    age: null,
    price: 79.02,
    abv: 55.9
  },
  {
    id: "2549",
    name: "Crown Royal Peach",
    producer: null,
    type: "Canadian Whisky",
    region: null,
    age: null,
    price: 29.61,
    abv: 35.0
  },
  {
    id: "3997",
    name: "Redwood Empire Lost Monarch",
    producer: null,
    type: "Whiskey",
    region: null,
    age: null,
    price: 40.97,
    abv: 45.0
  },
  {
    id: "18508",
    name: "Willett Wheated 8 Year",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 249.99,
    abv: 54.0
  },
  {
    id: "41273",
    name: "Stagg Batch 24A",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 65.0,
    abv: 63.8
  },
  {
    id: "17450",
    name: "Benchmark Single Barrel",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 24.97,
    abv: 47.5
  },
  {
    id: "21242",
    name: "George T. Stagg 2023 Release",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 124.97,
    abv: 67.5
  },
  {
    id: "893",
    name: "Old Forester 86 Proof",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 21.25,
    abv: 43.0
  },
  {
    id: "16682",
    name: "Blanton's Red",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 199.99,
    abv: 46.5
  },
  {
    id: "17397",
    name: "Old Fitzgerald 8 Year - Spring 2021",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 84.99,
    abv: 50.0
  },
  {
    id: "17632",
    name: "Elijah Craig Barrel Proof Batch A122",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 69.97,
    abv: 60.5
  },
  {
    id: "17435",
    name: "Knob Creek 12 Year Cask Strength ",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 94.79,
    abv: 60.5
  },
  {
    id: "435",
    name: "Crown Royal",
    producer: null,
    type: "Canadian Whisky",
    region: null,
    age: null,
    price: 25.72,
    abv: 40.0
  },
  {
    id: "17247",
    name: "Benchmark Bonded",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 19.97,
    abv: 50.0
  },
  {
    id: "15984",
    name: "Old Forester 150th Anniversary",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 150.0,
    abv: 63.5
  },
  {
    id: "670",
    name: "Coopers' Craft Barrel Reserve",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 32.22,
    abv: 50.0
  },
  {
    id: "1579",
    name: "Basil Hayden's 10 Year",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 67.48,
    abv: 40.0
  },
  {
    id: "15989",
    name: "Maker's Mark 2021 Wood Finishing Series FAE-01",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 59.57,
    abv: 55.5
  },
  {
    id: "17068",
    name: "Still Austin Cask Strength Bourbon",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 64.99,
    abv: 58.0
  },
  {
    id: "5131",
    name: "Jack Daniel's Single Barrel Barrel Proof",
    producer: null,
    type: "Whiskey",
    region: null,
    age: null,
    price: 33.97,
    abv: 64.0
  },
  {
    id: "19626",
    name: "Bardstown Origin Series Bottled in Bond",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 49.97,
    abv: 50.0
  },
  {
    id: "1419",
    name: "Isaac Bowman Port Barrel Finish Bourbon",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 39.3,
    abv: 46.0
  },
  {
    id: "16161",
    name: "Blood Oath Pact No. 7",
    producer: null,
    type: "Whiskey",
    region: null,
    age: null,
    price: 99.99,
    abv: 49.3
  },
  {
    id: "17210",
    name: "Penelope Toasted Series",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 69.97,
    abv: 56.0
  },
  {
    id: "18235",
    name: "Calumet Farm 16 year Single Rack Black",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 129.99,
    abv: 53.0
  },
  {
    id: "19720",
    name: "Green River Wheated Sour Mash",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 35.0,
    abv: 45.0
  },
  {
    id: "17213",
    name: "Blue Run High Rye Bourbon",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 97.47,
    abv: 55.5
  },
  {
    id: "15965",
    name: "Penelope Bourbon Four Grain",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 37.47,
    abv: 40.0
  },
  {
    id: "4588",
    name: "Rowan's Creek 12 Year",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 48.81,
    abv: 50.05
  },
  {
    id: "1736",
    name: "Bulleit Bourbon Barrel Strength",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 50.14,
    abv: 59.7
  },
  {
    id: "2159",
    name: "Old Forester 100",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 23.59,
    abv: 50.0
  },
  {
    id: "18396",
    name: "Ben Holladay Bottled in Bond Bourbon",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 59.98,
    abv: 50.0
  },
  {
    id: "17138",
    name: "Remus Repeal Reserve V",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 90.0,
    abv: 50.0
  },
  {
    id: "18712",
    name: "Elijah Craig Barrel Proof Batch C922",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 69.97,
    abv: 62.5
  },
  {
    id: "184",
    name: "Belle Meade Cask Strength Reserve Bourbon",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 56.69,
    abv: 54.0
  },
  {
    id: "859",
    name: "Monkey Shoulder",
    producer: null,
    type: "Scotch",
    region: null,
    age: null,
    price: 33.89,
    abv: 43.0
  },
  {
    id: "286",
    name: "Buffalo Trace Kosher Wheat 7 Year",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 39.99,
    abv: 47.0
  },
  {
    id: "21466",
    name: "James E. Pepper Barrel Proof Bourbon",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 64.99,
    abv: 52.7
  },
  {
    id: "19559",
    name: "Redwood Empire Pipe Dream Cask Strength",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 70.0,
    abv: 58.5
  },
  {
    id: "17089",
    name: "Woodford Reserve Master's Collection Batch Proof 128.3",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 130.0,
    abv: 64.0
  },
  {
    id: "3123",
    name: "Jameson Irish Whiskey Triple Distilled",
    producer: null,
    type: "Irish Whiskey",
    region: null,
    age: null,
    price: 28.69,
    abv: 40.0
  },
  {
    id: "3205",
    name: "Rabbit Hole Dareringer Sherry Bourbon Cask",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 71.45,
    abv: 46.5
  },
  {
    id: "3265",
    name: "Crown Royal Salted Caramel",
    producer: null,
    type: "Canadian Whisky",
    region: null,
    age: null,
    price: 28.14,
    abv: 35.0
  },
  {
    id: "3152",
    name: "George Dickel Bottled in Bond Tennessee Whiskey 13 Year",
    producer: null,
    type: "Whiskey",
    region: null,
    age: null,
    price: 40.3,
    abv: 50.0
  },
  {
    id: "18233",
    name: "Elijah Craig Barrel Proof Batch B522",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 72.47,
    abv: 60.5
  },
  {
    id: "2331",
    name: "Eagle Rare 10 Year",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 17.63,
    abv: 45.0
  },
  {
    id: "17293",
    name: "Booker’s Bourbon 2021-04 Noe Strangers Batch",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 89.99,
    abv: 62.0
  },
  {
    id: "2086",
    name: "Knob Creek Smoked Maple",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 34.68,
    abv: 45.0
  },
  {
    id: "4575",
    name: "E.H. Taylor, Jr. 18 Year Marriage",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 69.99,
    abv: 50.0
  },
  {
    id: "17153",
    name: "Maker's Mark 2021 Wood Finishing Series FAE-02",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 62.47,
    abv: 54.5
  },
  {
    id: "19790",
    name: "Penelope Bourbon Cooper Series - Valencia",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 89.99,
    abv: 49.0
  },
  {
    id: "2147",
    name: "High West Campfire",
    producer: null,
    type: "Whiskey",
    region: null,
    age: null,
    price: 69.0,
    abv: 46.0
  },
  {
    id: "20831",
    name: "Booker's Bourbon 2023-03 Mighty Fine Batch",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 89.99,
    abv: 61.0
  },
  {
    id: "17688",
    name: "Old Forester Rye Barrel Strength Single Barrel",
    producer: null,
    type: "Rye",
    region: null,
    age: null,
    price: 79.99,
    abv: 64.05
  },
  {
    id: "17894",
    name: "Castle & Key Small Batch Bourbon",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 49.99,
    abv: 49.0
  },
  {
    id: "15967",
    name: "Horse Soldier Bourbon",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 53.47,
    abv: 43.0
  },
  {
    id: "17446",
    name: "Penelope Bourbon Rosé Cask Finish",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 67.47,
    abv: 47.0
  },
  {
    id: "841",
    name: "Peerless Bourbon Small Batch",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 72.99,
    abv: 53.5
  },
  {
    id: "17211",
    name: "Blue Note Juke Joint Whiskey Uncut Unfiltered",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 49.99,
    abv: 61.0
  },
  {
    id: "21010",
    name: "Booker’s Bourbon 2023-04 - The Storyteller Batch",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 109.0,
    abv: 63.5
  },
  {
    id: "20005",
    name: "Booker's 7 Year Apprentice Batch - 2023",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: NaN,
    abv: 62.75
  },
  {
    id: "2581",
    name: "WhistlePig 6 Year Piggyback Rye",
    producer: null,
    type: "Rye",
    region: null,
    age: null,
    price: 47.48,
    abv: 48.3
  },
  {
    id: "4783",
    name: "Woodford Reserve Double Oaked",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 66.99,
    abv: 45.2
  },
  {
    id: "17054",
    name: "Buffalo Trace Kosher Bourbon Rye Recipe",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 39.99,
    abv: 47.0
  },
  {
    id: "4813",
    name: "Maker's Mark 46 Cask Strength",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 58.97,
    abv: 55.0
  },
  {
    id: "19151",
    name: "Stagg - Batch #18",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 70.0,
    abv: 65.5
  },
  {
    id: "19975",
    name: "Elijah Craig Barrel Proof Batch B523",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 72.47,
    abv: 62.0
  },
  {
    id: "17355",
    name: "Penelope Bourbon Barrel Strength Four Grain Batch 8",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 64.99,
    abv: 57.5
  },
  {
    id: "17802",
    name: "Stagg Jr. - Batch #17",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 53.3,
    abv: 64.35
  },
  {
    id: "48400",
    name: "Stagg 24B",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: NaN,
    abv: 63.9
  },
  {
    id: "3286",
    name: "High West Double Rye",
    producer: null,
    type: "Rye",
    region: null,
    age: null,
    price: 37.38,
    abv: 46.0
  },
  {
    id: "18354",
    name: "Booker’s Bourbon 2022-02 Lumberyard Batch",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 89.99,
    abv: 62.0
  },
  {
    id: "17630",
    name: "Kentucky Owl St. Patrick's Edition",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 134.98,
    abv: 50.0
  },
  {
    id: "1948",
    name: "Old Forester Single Barrel 100 Proof",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 71.63,
    abv: 50.0
  },
  {
    id: "3838",
    name: "Joseph Magnus Straight Bourbon",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 91.48,
    abv: 50.0
  },
  {
    id: "19879",
    name: "Stagg - 22A",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 80.0,
    abv: 66.0
  },
  {
    id: "19819",
    name: "Larceny Barrel Proof Batch B523",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 59.0,
    abv: 62.2
  },
  {
    id: "4033",
    name: "Pikesville Rye Whiskey",
    producer: null,
    type: "Rye",
    region: null,
    age: null,
    price: 50.87,
    abv: 55.0
  },
  {
    id: "3365",
    name: "Jefferson’s Reserve Very Old Kentucky Straight Bourbon Very Small Batch",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 54.24,
    abv: 45.1
  },
  {
    id: "13955",
    name: "Rabbit Hole Cavehill",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 59.97,
    abv: 47.5
  },
  {
    id: "19502",
    name: "Ben Holladay Soft Red Wheat Rickhouse Proof",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 74.99,
    abv: 60.05
  },
  {
    id: "2019",
    name: "Bulleit Bourbon 10 Year",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 45.99,
    abv: 45.6
  },
  {
    id: "592",
    name: "Lagavulin 16 Year",
    producer: null,
    type: "Single Malt Scotch Whisky",
    region: null,
    age: null,
    price: 102.22,
    abv: 43.0
  },
  {
    id: "3454",
    name: "Elijah Craig Straight Rye Whiskey",
    producer: null,
    type: "Rye",
    region: null,
    age: null,
    price: 32.3,
    abv: 47.0
  },
  {
    id: "2034",
    name: "Mellow Corn Bottled In Bond",
    producer: null,
    type: "Whiskey",
    region: null,
    age: null,
    price: 17.51,
    abv: 50.0
  },
  {
    id: "17221",
    name: "Redwood Empire Grizzly Beast Straight Bourbon Bottled in Bond",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 79.99,
    abv: 50.0
  },
  {
    id: "18778",
    name: "Remus Repeal Reserve VI",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 109.99,
    abv: 50.0
  },
  {
    id: "4427",
    name: "Old Forester 1870 Original Batch",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 40.91,
    abv: 45.0
  },
  {
    id: "18768",
    name: "Maker’s Mark 2022 Wood Finishing Series BRT-02",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 62.47,
    abv: 54.5
  },
  {
    id: "17776",
    name: "Green River Bourbon DSP-KY-10",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 34.99,
    abv: 45.0
  },
  {
    id: "19848",
    name: "Blood Oath Pact No.9",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 134.97,
    abv: 49.0
  },
  {
    id: "3181",
    name: "Yamazaki 12 Year",
    producer: null,
    type: "Japanese Whisky",
    region: null,
    age: null,
    price: 134.15,
    abv: 43.0
  },
  {
    id: "3560",
    name: "I.W. Harper 15 Year",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 75.0,
    abv: 43.0
  },
  {
    id: "4581",
    name: "Basil Hayden's Dark Rye",
    producer: null,
    type: "Rye",
    region: null,
    age: null,
    price: 43.38,
    abv: 40.0
  },
  {
    id: "16674",
    name: "Old Fitzgerald 16 Year",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 155.69,
    abv: 50.0
  },
  {
    id: "20574",
    name: "Little Book Chapter 7: In Retrospect",
    producer: null,
    type: "Whiskey",
    region: null,
    age: null,
    price: 159.98,
    abv: 59.0
  },
  {
    id: "19465",
    name: "Larceny Barrel Proof A123",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 59.99,
    abv: 63.0
  },
  {
    id: "19529",
    name: "Stagg Batch 22B",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 55.0,
    abv: 65.0
  },
  {
    id: "18185",
    name: "Jack Daniel’s Triple Mash",
    producer: null,
    type: "Whiskey",
    region: null,
    age: null,
    price: 36.48,
    abv: 50.0
  },
  {
    id: "17181",
    name: "Booker’s Bourbon 2021-03 Bardstown Batch",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 89.99,
    abv: 63.5
  },
  {
    id: "18517",
    name: "Little Book Chapter 6: To The Finish",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 124.97,
    abv: 58.7
  },
  {
    id: "21024",
    name: "Stagg 127.8 Proof",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 60.0,
    abv: 63.9
  },
  {
    id: "3793",
    name: "High West American Prairie Bourbon",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 36.82,
    abv: 46.0
  },
  {
    id: "17246",
    name: "Benchmark Top Floor",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 17.47,
    abv: 43.0
  },
  {
    id: "18355",
    name: "Smoke Wagon Uncut the Younger",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 46.99,
    abv: 57.5
  },
  {
    id: "16693",
    name: "Hibiki Japanese Harmony",
    producer: null,
    type: "Blended Whisky",
    region: null,
    age: null,
    price: 87.47,
    abv: 43.0
  },
  {
    id: "18767",
    name: "Maker’s Mark 2022 Wood Finishing Series BRT-01",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 62.47,
    abv: 54.5
  },
  {
    id: "2428",
    name: "Bib & Tucker 6 Year Small Batch Bourbon",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 51.08,
    abv: 46.0
  },
  {
    id: "14239",
    name: "Ezra Brooks Cask Strength",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 52.46,
    abv: 60.0
  },
  {
    id: "17151",
    name: "Rebel Cask Strength Single Barrel",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 55.97,
    abv: 60.0
  },
  {
    id: "19540",
    name: "Bardstown Origin Series Bourbon",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 46.64,
    abv: 48.0
  },
  {
    id: "13347",
    name: "Sagamore Spirit Rye Double Oak",
    producer: null,
    type: "Rye",
    region: null,
    age: null,
    price: 59.97,
    abv: 48.3
  },
  {
    id: "16367",
    name: "Kirkland Signature Bottled-in-Bond Bourbon Barton 1792",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 36.0,
    abv: 50.0
  },
  {
    id: "17309",
    name: "Elijah Craig Barrel Proof Batch C921",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 69.97,
    abv: 60.0
  },
  {
    id: "16893",
    name: "Bardstown Fusion Series No. 5",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 59.99,
    abv: 47.5
  },
  {
    id: "19779",
    name: "Evan Williams Single Barrel Vintage 2015",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 55.0,
    abv: 43.5
  },
  {
    id: "17164",
    name: "Widow Jane Lucky Thirteen",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 90.0,
    abv: 49.5
  },
  {
    id: "50056",
    name: "George T Stagg - 2024",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 150.0,
    abv: 68.05
  },
  {
    id: "3000",
    name: "Uncle Nearest 1884 Small Batch",
    producer: null,
    type: "Whiskey",
    region: null,
    age: null,
    price: 46.1,
    abv: 45.0
  },
  {
    id: "34570",
    name: "Green River Full Proof",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 50.0,
    abv: 58.65
  },
  {
    id: "2329",
    name: "Buffalo Trace White Dog Mash 1",
    producer: null,
    type: "Whiskey",
    region: null,
    age: null,
    price: 16.65,
    abv: 62.5
  },
  {
    id: "3086",
    name: "Baker's 13 Year Single Barrel",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 100.0,
    abv: 53.5
  },
  {
    id: "1580",
    name: "Colonel E.H. Taylor Amaranth",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 68.03,
    abv: 50.0
  },
  {
    id: "297",
    name: "Old Elk Blended Straight Bourbon",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 52.0,
    abv: 44.0
  },
  {
    id: "3867",
    name: "Blanton's",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 8.81,
    abv: 46.5
  },
  {
    id: "1547",
    name: "Johnnie Walker Blue Label",
    producer: null,
    type: "Scotch",
    region: null,
    age: null,
    price: 222.18,
    abv: 40.0
  },
  {
    id: "18104",
    name: "Weller 12 Year 1 Liter",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 54.47,
    abv: 45.0
  },
  {
    id: "17177",
    name: "Wilderness Trail Small Batch Bourbon",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 62.99,
    abv: 50.0
  },
  {
    id: "2256",
    name: "Buffalo Trace",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 14.27,
    abv: 45.0
  },
  {
    id: "521",
    name: "Legent Bourbon Whiskey",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 44.97,
    abv: 47.0
  },
  {
    id: "20607",
    name: "Penelope Rio Batch 2",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 94.98,
    abv: 49.0
  },
  {
    id: "19499",
    name: "Booker’s 2023-01 Charlie’s Batch",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 89.99,
    abv: 63.5
  },
  {
    id: "4476",
    name: "Michter's Toasted Barrel Strength Rye Whiskey",
    producer: null,
    type: "Rye",
    region: null,
    age: null,
    price: 62.66,
    abv: 60.0
  },
  {
    id: "12902",
    name: "Calumet Farm 14 Year",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 119.96,
    abv: 48.1
  },
  {
    id: "18939",
    name: "Booker's Bourbon 2022-03 Kentucky Tea Batch",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 85.59,
    abv: 63.5
  },
  {
    id: "19851",
    name: "Maker’s Mark French Oaked No. 46 Cask Strength 23-01",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 65.0,
    abv: 55.0
  },
  {
    id: "18084",
    name: "Blue Run 13 Year Old",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 88.31,
    abv: 47.5
  },
  {
    id: "18718",
    name: "WhistlePig 6 Year Piggyback Bourbon",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 49.97,
    abv: 50.0
  },
  {
    id: "281",
    name: "Jefferson's Ocean Aged At Sea Voyage 17",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 50.24,
    abv: 45.0
  },
  {
    id: "2311",
    name: "Redwood Empire Emerald Giant",
    producer: null,
    type: "Rye",
    region: null,
    age: null,
    price: 40.64,
    abv: 45.0
  },
  {
    id: "33325",
    name: "Elijah Craig Barrel Proof - Batch B524",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 69.95,
    abv: 65.3
  },
  {
    id: "3617",
    name: "Blue Note Bourbon",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 49.99,
    abv: 46.5
  },
  {
    id: "12112",
    name: "Fortaleza Blanco Tequila",
    producer: null,
    type: "Tequila",
    region: null,
    age: null,
    price: 48.41,
    abv: 40.0
  },
  {
    id: "19816",
    name: "Russell's Reserve Bourbon Single Rickhouse",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 250.0,
    abv: 56.0
  },
  {
    id: "19546",
    name: "Wild Turkey 12 Year",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 199.99,
    abv: 50.5
  },
  {
    id: "3281",
    name: "Benchmark No. 8",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 11.13,
    abv: 40.0
  },
  {
    id: "17299",
    name: "Frey Ranch Bourbon",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 49.99,
    abv: 45.0
  },
  {
    id: "44955",
    name: "Bardstown Origin Series Wheated Bourbon",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 49.99,
    abv: 53.0
  },
  {
    id: "21291",
    name: "Old Fitzgerald 8 Year - Fall 2023",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 109.97,
    abv: 50.0
  },
  {
    id: "16486",
    name: "New Riff Bourbon Single Barrel Barrel Proof",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 55.14,
    abv: 55.0
  },
  {
    id: "15987",
    name: "Alberta Premium Cask Strength",
    producer: null,
    type: "Rye",
    region: null,
    age: null,
    price: 72.45,
    abv: 66.0
  },
  {
    id: "1584",
    name: "Chicken Cock Straight Bourbon",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 61.47,
    abv: 45.0
  },
  {
    id: "17040",
    name: "Horse Soldier Barrel Strength",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 85.97,
    abv: 57.5
  },
  {
    id: "17328",
    name: "Elmer T Lee Commemorative Edition",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 49.99,
    abv: 46.5
  },
  {
    id: "28079",
    name: "Elmer T. Lee Sour Mash",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 39.99,
    abv: 45.0
  },
  {
    id: "17925",
    name: "Basil Hayden Subtle Smoke",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 52.47,
    abv: 40.0
  },
  {
    id: "13667",
    name: "Barrell Dovetail",
    producer: null,
    type: "Whiskey",
    region: null,
    age: null,
    price: 87.46,
    abv: 62.6
  },
  {
    id: "17924",
    name: "Heaven Hill 17 Year Heritage Collection 2022 Release",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 274.99,
    abv: 59.0
  },
  {
    id: "27454",
    name: "Woodford Reserve Master's Collection Batch Proof 121.2",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 129.99,
    abv: 60.6
  },
  {
    id: "19807",
    name: "Stagg - 23A",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 69.99,
    abv: 65.0
  },
  {
    id: "17542",
    name: "Rebel 10 Year Single Barrel",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 74.25,
    abv: 50.0
  },
  {
    id: "16602",
    name: "Sam Houston Bourbon 15 Year",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 129.99,
    abv: 51.5
  },
  {
    id: "17319",
    name: "Benchmark Select Casks Small Batch",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 17.47,
    abv: 45.0
  },
  {
    id: "147",
    name: "Four Roses Bourbon",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 22.42,
    abv: 40.0
  },
  {
    id: "2316",
    name: "Old Elk Wheated Bourbon",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 67.2,
    abv: 46.0
  },
  {
    id: "18075",
    name: "Larceny Barrel Proof Batch A122",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 49.99,
    abv: 62.2
  },
  {
    id: "17921",
    name: "Old Fitzgerald 17 Year",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 109.99,
    abv: 50.0
  },
  {
    id: "16680",
    name: "Evan Williams 12 Year Red Label",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 130.0,
    abv: 50.5
  },
  {
    id: "542",
    name: "Green Spot",
    producer: null,
    type: "Irish Whiskey",
    region: null,
    age: null,
    price: 66.19,
    abv: 40.0
  },
  {
    id: "16791",
    name: "Colonel E.H. Taylor Warehouse C",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 73.97,
    abv: 50.0
  },
  {
    id: "21257",
    name: "Colonel E.H. Taylor Barrel Proof Batch 12",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 78.97,
    abv: 65.5
  },
  {
    id: "3040",
    name: "Suntory Toki Japanese Whiskey",
    producer: null,
    type: "Japanese Whisky",
    region: null,
    age: null,
    price: 35.36,
    abv: 43.0
  },
  {
    id: "48189",
    name: "Larceny Barrel Proof C924",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 64.99,
    abv: 62.55
  },
  {
    id: "4838",
    name: "Jack Daniel's Single Barrel Rye",
    producer: null,
    type: "Rye",
    region: null,
    age: null,
    price: 48.86,
    abv: 47.0
  },
  {
    id: "20014",
    name: "Woodford Reserve Master’s Collection Batch Proof 124.7",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 139.97,
    abv: 62.0
  },
  {
    id: "2697",
    name: "Johnny Drum Private Stock 15 Year",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 42.03,
    abv: 50.5
  },
  {
    id: "4414",
    name: "Redbreast 12 Year Cask Strength",
    producer: null,
    type: "Irish Whiskey",
    region: null,
    age: null,
    price: 83.17,
    abv: 57.7
  },
  {
    id: "17214",
    name: "Horse Soldier Small Batch",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 71.73,
    abv: 47.5
  },
  {
    id: "1142",
    name: "Buffalo Trace Kosher Rye 7 Year",
    producer: null,
    type: "Rye",
    region: null,
    age: null,
    price: 39.99,
    abv: 47.0
  },
  {
    id: "21036",
    name: "Bardstown Discovery Series No. 11",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 139.97,
    abv: 59.05
  },
  {
    id: "4083",
    name: "Laphroaig 10 Year",
    producer: null,
    type: "Scotch",
    region: null,
    age: null,
    price: 54.82,
    abv: 43.0
  },
  {
    id: "25363",
    name: "Woodford Reserve Derby 150 2024 Release",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 54.99,
    abv: 45.2
  },
  {
    id: "3142",
    name: "Old Forester Rye",
    producer: null,
    type: "Rye",
    region: null,
    age: null,
    price: 24.85,
    abv: 50.0
  },
  {
    id: "18228",
    name: "Larceny Barrel Proof Batch B522",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 59.99,
    abv: 61.9
  },
  {
    id: "17223",
    name: "Blanton's Special Reserve",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 49.99,
    abv: 40.0
  },
  {
    id: "1388",
    name: "Gentleman Jack",
    producer: null,
    type: "Whiskey",
    region: null,
    age: null,
    price: 31.09,
    abv: 40.0
  },
  {
    id: "634",
    name: "Murray Hill Club Bourbon",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 107.48,
    abv: 51.5
  },
  {
    id: "40819",
    name: "Eagle Rare",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 42.99,
    abv: 45.0
  },
  {
    id: "269",
    name: "Old Fitzgerald 13 Year",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 132.48,
    abv: 50.0
  },
  {
    id: "34488",
    name: "Little Book Chapter 8: Path Not Taken",
    producer: null,
    type: "Whiskey",
    region: null,
    age: null,
    price: 160.0,
    abv: 59.1
  },
  {
    id: "48300",
    name: "Elijah Craig Barrel Proof C924",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 75.0,
    abv: 64.5
  },
  {
    id: "23515",
    name: "Four Roses Single Barrel",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 45.99,
    abv: 50.0
  },
  {
    id: "16679",
    name: "Heaven Hill Old Style Bourbon 6 Year",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 12.99,
    abv: 45.0
  },
  {
    id: "2685",
    name: "Blackened",
    producer: null,
    type: "Whiskey",
    region: null,
    age: null,
    price: 49.22,
    abv: 45.0
  },
  {
    id: "13361",
    name: "Brother's Bond Bourbon",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 39.39,
    abv: 40.0
  },
  {
    id: "5155",
    name: "Rittenhouse Rye",
    producer: null,
    type: "Rye",
    region: null,
    age: null,
    price: 24.95,
    abv: 50.0
  },
  {
    id: "5196",
    name: "High West Bourye",
    producer: null,
    type: "Whiskey",
    region: null,
    age: null,
    price: 80.58,
    abv: 46.0
  },
  {
    id: "42342",
    name: "Heaven Hill Grain to Glass Kentucky Straight Bourbon Whiskey",
    producer: null,
    type: "NaN",
    region: null,
    age: null,
    price: 99.99,
    abv: 53.5
  },
  {
    id: "1807",
    name: "Woodford Reserve Wheat",
    producer: null,
    type: "Rye",
    region: null,
    age: null,
    price: 37.98,
    abv: 45.2
  },
  {
    id: "18004",
    name: "Orphan Barrel Fabel and Folly",
    producer: null,
    type: "Whiskey",
    region: null,
    age: null,
    price: 149.97,
    abv: 45.0
  },
  {
    id: "1066",
    name: "Jack Daniel's No. 27 Gold Maple Wood Finish",
    producer: null,
    type: "Whiskey",
    region: null,
    age: null,
    price: 95.75,
    abv: 40.0
  },
  {
    id: "3518",
    name: "Russell's Reserve Single Barrel Rye",
    producer: null,
    type: "Rye",
    region: null,
    age: null,
    price: 64.66,
    abv: 52.0
  },
  {
    id: "786",
    name: "Bulleit 95 Rye",
    producer: null,
    type: "Rye",
    region: null,
    age: null,
    price: 28.97,
    abv: 45.0
  },
  {
    id: "678",
    name: "WhistlePig 12 Year Old World",
    producer: null,
    type: "Rye",
    region: null,
    age: null,
    price: 124.99,
    abv: 43.0
  },
  {
    id: "16796",
    name: "Crown Royal XR Extra Rare 18 Year",
    producer: null,
    type: "Canadian Whisky",
    region: null,
    age: null,
    price: 137.47,
    abv: 40.0
  },
  {
    id: "4510",
    name: "Jefferson's Kentucky Straight Bourbon Whiskey Very Small Batch",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 34.47,
    abv: 41.0
  },
  {
    id: "46500",
    name: "Angel’s Envy Triple Oak",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 75.0,
    abv: 46.0
  },
  {
    id: "16485",
    name: "Lux Row Limited Edition Whiskey 12 Year",
    producer: null,
    type: "Whiskey",
    region: null,
    age: null,
    price: 149.99,
    abv: 59.0
  },
  {
    id: "2287",
    name: "Nikka Whisky From The Barrel",
    producer: null,
    type: "Whiskey",
    region: null,
    age: null,
    price: 69.95,
    abv: 51.4
  },
  {
    id: "11035",
    name: "Tito's Handmade Vodka",
    producer: null,
    type: "Vodka",
    region: null,
    age: null,
    price: 19.64,
    abv: 40.0
  },
  {
    id: "19556",
    name: "Kentucky Owl Takumi Edition",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 142.48,
    abv: 50.0
  },
  {
    id: "1130",
    name: "WhistlePig 10 Year Straight Rye",
    producer: null,
    type: "Rye",
    region: null,
    age: null,
    price: 82.45,
    abv: 50.0
  },
  {
    id: "18883",
    name: "Barrell Vantage",
    producer: null,
    type: "Whiskey",
    region: null,
    age: null,
    price: 87.46,
    abv: 57.0
  },
  {
    id: "2363",
    name: "W.B. Saffell",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 49.97,
    abv: 53.5
  },
  {
    id: "18708",
    name: "High West Midwinter Nights Dram Act 10 Scene 1: The Encore",
    producer: null,
    type: "Rye",
    region: null,
    age: null,
    price: 150.0,
    abv: 49.5
  },
  {
    id: "17063",
    name: "Yellowstone Limited Edition 2021",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 99.99,
    abv: 50.5
  },
  {
    id: "4857",
    name: "Bernheim Original Kentucky Straight Wheat Whiskey",
    producer: null,
    type: "Whiskey",
    region: null,
    age: null,
    price: 29.9,
    abv: 45.0
  },
  {
    id: "2028",
    name: "Jack Daniel's Single Barrel Eric Church",
    producer: null,
    type: "Whiskey",
    region: null,
    age: null,
    price: 54.97,
    abv: 47.0
  },
  {
    id: "993",
    name: "High West Rendezvous Rye",
    producer: null,
    type: "Rye",
    region: null,
    age: null,
    price: 68.7,
    abv: 46.0
  },
  {
    id: "18110",
    name: "Evan Williams Single Barrel Vintage 2012",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 28.75,
    abv: 43.3
  },
  {
    id: "19594",
    name: "Thirteenth Colony Distilleries Southern Bourbon Whiskey",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 35.0,
    abv: 47.5
  },
  {
    id: "2753",
    name: "WhistlePig 10 Year Single Barrel",
    producer: null,
    type: "Rye",
    region: null,
    age: null,
    price: 88.94,
    abv: 58.9
  },
  {
    id: "2973",
    name: "Knob Creek Rye",
    producer: null,
    type: "Rye",
    region: null,
    age: null,
    price: 34.38,
    abv: 50.0
  },
  {
    id: "2592",
    name: "Barrell Bourbon Single Barrel",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 98.56,
    abv: 60.0
  },
  {
    id: "41054",
    name: "Heaven Hill: Grain to Glass - Wheated Bourbon",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 99.0,
    abv: 60.5
  },
  {
    id: "858",
    name: "Ezra Brooks Distiller's Collection",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 38.31,
    abv: 53.5
  },
  {
    id: "17158",
    name: "Blue Note Crossroads",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 40.99,
    abv: 50.0
  },
  {
    id: "651",
    name: "Willett Pot Still Reserve Bourbon",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 112.49,
    abv: 47.0
  },
  {
    id: "5029",
    name: "Noble Oak Double Oak Bourbon",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 33.11,
    abv: 45.0
  },
  {
    id: "20575",
    name: "Old Fitzgerald 10 Year",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 144.98,
    abv: 50.0
  },
  {
    id: "2833",
    name: "Basil Hayden's Bourbon",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 21.92,
    abv: 40.0
  },
  {
    id: "4709",
    name: "Woodinville Straight Bourbon",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 39.17,
    abv: 45.0
  },
  {
    id: "32083",
    name: "Blood Oath Pact No. 10",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 129.99,
    abv: 49.3
  },
  {
    id: "18138",
    name: "Booker's Bourbon 2022-01 Ronnie’s Batch",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 89.99,
    abv: 62.0
  },
  {
    id: "17611",
    name: "Widow Jane The Vaults 15 Year",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 224.98,
    abv: 49.5
  },
  {
    id: "27160",
    name: "Larceny Barrel Proof A124",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 59.99,
    abv: 62.1
  },
  {
    id: "53003",
    name: "Stagg 24C",
    producer: null,
    type: "NaN",
    region: null,
    age: null,
    price: 65.0,
    abv: 64.45
  },
  {
    id: "19883",
    name: "Evan Williams Bottled in Bond Green Label",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 15.0,
    abv: 50.0
  },
  {
    id: "17905",
    name: "Angel's Envy Rye Caribbean Rum Cask",
    producer: null,
    type: "Rye",
    region: null,
    age: null,
    price: 74.99,
    abv: 50.0
  },
  {
    id: "18440",
    name: "Heaven’s Door Decade Series 10 Year Release 1",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 99.0,
    abv: 50.0
  },
  {
    id: "2192",
    name: "Sazerac Rye 18 Year",
    producer: null,
    type: "Rye",
    region: null,
    age: null,
    price: 104.13,
    abv: 45.0
  },
  {
    id: "726",
    name: "Macallan 12 Year Double Cask",
    producer: null,
    type: "Scotch",
    region: null,
    age: null,
    price: 64.77,
    abv: 43.0
  },
  {
    id: "4789",
    name: "Rabbit Hole Heigold",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 62.47,
    abv: 47.5
  },
  {
    id: "18521",
    name: "Frank August Small Batch Bourbon",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 68.99,
    abv: 50.0
  },
  {
    id: "16248",
    name: "Kirkland Signature Small Batch",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 27.99,
    abv: 46.0
  },
  {
    id: "27294",
    name: "Booker’s  Springfield Batch 2024-01",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 90.0,
    abv: 62.25
  },
  {
    id: "20206",
    name: "Larceny Small Batch",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 27.49,
    abv: 46.0
  },
  {
    id: "3616",
    name: "Skrewball Peanut Butter Whiskey",
    producer: null,
    type: "Whiskey",
    region: null,
    age: null,
    price: 29.77,
    abv: 35.0
  },
  {
    id: "39325",
    name: "Booker's 7 Year The Beam House Batch - 2024",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 95.99,
    abv: 62.3
  },
  {
    id: "17378",
    name: "Elijah Craig Barrel Proof Batch B521",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 69.97,
    abv: 59.0
  },
  {
    id: "4496",
    name: "Jefferson's Reserve Twin Oak Barrel",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 78.83,
    abv: 45.1
  },
  {
    id: "19147",
    name: "Jack Daniel’s Twice Barreled Special Release 2022 American Single Malt Finished in Oloroso Sherry Casks",
    producer: null,
    type: "Whiskey",
    region: null,
    age: null,
    price: 70.0,
    abv: 53.65
  },
  {
    id: "48295",
    name: "Booker’s Bourbon 2024-03",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 99.99,
    abv: 65.15
  },
  {
    id: "39943",
    name: "Heaven Hill Grain to Glass-Rye",
    producer: null,
    type: "Whiskey",
    region: null,
    age: null,
    price: 99.0,
    abv: 61.6
  },
  {
    id: "16050",
    name: "Garrison Brothers Balmorhea Bourbon",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 168.16,
    abv: 57.5
  },
  {
    id: "567",
    name: "Woodford Reserve Rye",
    producer: null,
    type: "Rye",
    region: null,
    age: null,
    price: 36.34,
    abv: 45.2
  },
  {
    id: "49176",
    name: "Penelope Estate Collection Private Select 9 Year",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 79.99,
    abv: 50.6
  },
  {
    id: "14303",
    name: "Elijah Craig Barrel Proof Batch C917",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 62.48,
    abv: 65.5
  },
  {
    id: "13891",
    name: "Blue Spot 7 Year Batch 3",
    producer: null,
    type: "Whisky",
    region: null,
    age: null,
    price: 109.99,
    abv: 58.9
  },
  {
    id: "17399",
    name: "Elijah Craig Barrel Proof Batch A121",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 69.97,
    abv: 62.0
  },
  {
    id: "1286",
    name: "Shenk's Homestead Sour Mash Whiskey 2022 Release",
    producer: null,
    type: "Whiskey",
    region: null,
    age: null,
    price: 99.97,
    abv: 45.5
  },
  {
    id: "3208",
    name: "The Balvenie Double Wood 12 year",
    producer: null,
    type: "Single Malt Scotch Whisky",
    region: null,
    age: null,
    price: 65.96,
    abv: 43.0
  },
  {
    id: "17862",
    name: "Evan Williams Single Barrel Vintage 2013",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 28.75,
    abv: 43.3
  },
  {
    id: "17064",
    name: "Jack Daniel's Bottled in Bond",
    producer: null,
    type: "Whiskey",
    region: null,
    age: null,
    price: 37.99,
    abv: 50.0
  },
  {
    id: "1786",
    name: "Knob Creek Single Barrel Rye",
    producer: null,
    type: "Rye",
    region: null,
    age: null,
    price: 54.77,
    abv: 57.5
  },
  {
    id: "11663",
    name: "Clase Azul Reposado",
    producer: null,
    type: "Tequila",
    region: null,
    age: null,
    price: 122.7,
    abv: 40.0
  },
  {
    id: "20692",
    name: "Maker's Mark Cellar Aged 2023 Release",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 159.98,
    abv: 57.5
  },
  {
    id: "17101",
    name: "Booker's 6 Year Tagalong Batch - 2021",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 90.0,
    abv: 63.95
  },
  {
    id: "16879",
    name: "Still Austin Bourbon The Musician",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 45.99,
    abv: 49.0
  },
  {
    id: "43333",
    name: "Shenks Homstead Sour Mash Whiskey - 2024 Release",
    producer: null,
    type: "Whiskey",
    region: null,
    age: null,
    price: 169.0,
    abv: 45.6
  },
  {
    id: "12408",
    name: "Don Julio 1942",
    producer: null,
    type: "Tequila",
    region: null,
    age: null,
    price: 142.46,
    abv: 40.0
  },
  {
    id: "13979",
    name: "Old Fitzgerald 14 Year - Fall 2020",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 132.48,
    abv: 50.0
  },
  {
    id: "3097",
    name: "Elijah Craig 23 Year Single Barrel",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 199.98,
    abv: 45.0
  },
  {
    id: "4622",
    name: "Hibiki Harmony",
    producer: null,
    type: "Whiskey",
    region: null,
    age: null,
    price: 79.99,
    abv: 43.0
  },
  {
    id: "16502",
    name: "George Remus Straight Bourbon Whiskey",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 39.96,
    abv: 47.0
  },
  {
    id: "413",
    name: "Evan Williams Black Label",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 13.98,
    abv: 43.0
  },
  {
    id: "3956",
    name: "Belle Meade Bourbon",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 48.72,
    abv: 45.2
  },
  {
    id: "20813",
    name: "2XO American Oak Oak Series Kentucky Straight Bourbon",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 49.96,
    abv: 46.0
  },
  {
    id: "1693",
    name: "Very Old Barton 6 Year 100 Proof",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 13.95,
    abv: 50.0
  },
  {
    id: "1753",
    name: "Chattanooga Whiskey Experimental Single Barrel 75",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 48.99,
    abv: 51.0
  },
  {
    id: "18439",
    name: "Four Roses Single Barrel Barrel Proof OESV",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 80.0,
    abv: 55.0
  },
  {
    id: "17547",
    name: "Larceny Barrel Proof Batch C921",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 49.99,
    abv: 61.3
  },
  {
    id: "46347",
    name: "Jack Daniel's Coy Hill Barrelhouse 8 2024 Special Release Single Barrel Whiskey",
    producer: null,
    type: "Whiskey",
    region: null,
    age: null,
    price: 79.99,
    abv: 67.5
  },
  {
    id: "19658",
    name: "Old Elk Cigar Cut",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 124.98,
    abv: 55.3
  },
  {
    id: "1730",
    name: "Old Fitzgerald 15 Year",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 149.97,
    abv: 50.0
  },
  {
    id: "2419",
    name: "Crown Royal Regal Apple",
    producer: null,
    type: "Canadian Whisky",
    region: null,
    age: null,
    price: 26.7,
    abv: 35.0
  },
  {
    id: "6462",
    name: "Hendrick's Gin",
    producer: null,
    type: "Gins",
    region: null,
    age: null,
    price: 37.97,
    abv: 44.0
  },
  {
    id: "15345",
    name: "King Of Kentucky",
    producer: null,
    type: "Whiskey",
    region: null,
    age: null,
    price: 249.99,
    abv: 62.9
  },
  {
    id: "2670",
    name: "Michter's Limited Release Toasted Barrel Strength",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 79.15,
    abv: 55.0
  },
  {
    id: "4859",
    name: "Tincup American Whiskey 10 Year",
    producer: null,
    type: "Whiskey",
    region: null,
    age: null,
    price: 52.46,
    abv: 42.0
  },
  {
    id: "145",
    name: "Barrell Bourbon Infinite Barrel Project",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 64.41,
    abv: 65.0
  },
  {
    id: "4864",
    name: "Glenfiddich Single Malt Scotch Whiskey 12 Years",
    producer: null,
    type: "Scotch",
    region: null,
    age: null,
    price: 49.59,
    abv: 40.0
  },
  {
    id: "19569",
    name: "Redwood Empire Lost Monarch Cask Strength",
    producer: null,
    type: "Whiskey",
    region: null,
    age: null,
    price: 70.0,
    abv: 58.5
  },
  {
    id: "17420",
    name: "Elijah Craig 1991 20 Year Single Barrel #42",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 159.99,
    abv: 45.0
  },
  {
    id: "363",
    name: "Jim Beam Double Oak",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 22.9,
    abv: 43.0
  },
  {
    id: "1297",
    name: "Russell's Reserve 6 Years Rye",
    producer: null,
    type: "Rye",
    region: null,
    age: null,
    price: 41.26,
    abv: 45.0
  },
  {
    id: "17126",
    name: "Old Bardstown Bottled in Bond",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 19.99,
    abv: 50.0
  },
  {
    id: "17354",
    name: "George Dickel x Leopold Brothers Collaboration",
    producer: null,
    type: "Whiskey",
    region: null,
    age: null,
    price: 109.98,
    abv: 50.0
  },
  {
    id: "2128",
    name: "Balvenie 14 Year Caribbean Cask",
    producer: null,
    type: "Scotch",
    region: null,
    age: null,
    price: 83.95,
    abv: 43.0
  },
  {
    id: "45695",
    name: "Little Book The Infinite I 2024",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 199.99,
    abv: 60.0
  },
  {
    id: "18872",
    name: "Old Forester Birthday Bourbon 2022",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 149.99,
    abv: 48.0
  },
  {
    id: "2433",
    name: "Glenlivet 12 Year",
    producer: null,
    type: "Scotch",
    region: null,
    age: null,
    price: 48.53,
    abv: 40.0
  },
  {
    id: "18356",
    name: "Stagg Jr. Batch 15",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 53.3,
    abv: 65.55
  },
  {
    id: "16995",
    name: "Bardstown Discovery Series No. 5",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 134.97,
    abv: 52.35
  },
  {
    id: "16458",
    name: "Castle & Key Restoration Rye",
    producer: null,
    type: "Rye",
    region: null,
    age: null,
    price: 42.99,
    abv: 51.5
  },
  {
    id: "34209",
    name: "Larceny Barrel Proof - Batch B524",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 59.95,
    abv: 62.7
  },
  {
    id: "20519",
    name: "Jack Daniel’s Twice Barreled Tennessee Rye 2023 Special Release",
    producer: null,
    type: "Rye",
    region: null,
    age: null,
    price: 69.97,
    abv: 50.0
  },
  {
    id: "17389",
    name: "Redwood Empire Rocket Top BIB Rye",
    producer: null,
    type: "Rye",
    region: null,
    age: null,
    price: 69.99,
    abv: 50.0
  },
  {
    id: "4631",
    name: "Evan Williams Single Barrel Vintage 1988",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 28.68,
    abv: 43.0
  },
  {
    id: "5151",
    name: "Bulleit 12 Year Rye",
    producer: null,
    type: "Rye",
    region: null,
    age: null,
    price: 51.63,
    abv: 46.0
  },
  {
    id: "19555",
    name: "Redwood Empire Emerald Giant Cask Strength",
    producer: null,
    type: "Rye",
    region: null,
    age: null,
    price: 70.0,
    abv: 58.5
  },
  {
    id: "17264",
    name: "New Riff 6 Year Malted Rye",
    producer: null,
    type: "Rye",
    region: null,
    age: null,
    price: 59.99,
    abv: 50.0
  },
  {
    id: "3562",
    name: "Van Winkle Family Reserve 13 Year Rye",
    producer: null,
    type: "Rye",
    region: null,
    age: null,
    price: 134.89,
    abv: 47.8
  },
  {
    id: "44603",
    name: "Maker's Mark Cellar Aged 2024 Release",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 174.99,
    abv: 59.65
  },
  {
    id: "19812",
    name: "George T. Stagg 2022 Release",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 99.0,
    abv: 69.35
  },
  {
    id: "3884",
    name: "Johnnie Walker Black Label",
    producer: null,
    type: "Scotch",
    region: null,
    age: null,
    price: 38.82,
    abv: 40.0
  },
  {
    id: "22361",
    name: "Elijah Craig Barrel Proof A124",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 74.99,
    abv: 59.5
  },
  {
    id: "17261",
    name: "Wild Turkey Master's Keep One",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 177.49,
    abv: 50.5
  },
  {
    id: "20518",
    name: "RD One Bourbon Brazilian Amburana Wood Finish",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 69.99,
    abv: 55.0
  },
  {
    id: "21216",
    name: "Basil Hayden's 10 Year Bourbon",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 52.48,
    abv: 40.0
  },
  {
    id: "28334",
    name: "Redwood Empire Screaming Titan",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 89.99,
    abv: 48.0
  },
  {
    id: "17356",
    name: "Woodford Reserve Five-Malt Stouted Mash - 2021",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 129.99,
    abv: 45.2
  },
  {
    id: "20824",
    name: "Shenk’s Homestead Sour Mash Whiskey 2023 Release",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 109.98,
    abv: 45.5
  },
  {
    id: "5208",
    name: "Ancient Age",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 11.89,
    abv: 40.0
  },
  {
    id: "1533",
    name: "J.T.S. Brown BIB Bourbon",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 14.31,
    abv: 50.0
  },
  {
    id: "14242",
    name: "Wild Turkey 101 Rye",
    producer: null,
    type: "Rye",
    region: null,
    age: null,
    price: 26.97,
    abv: 50.5
  },
  {
    id: "18042",
    name: "Stagg Jr. - Batch #16",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 53.3,
    abv: 65.5
  },
  {
    id: "4723",
    name: "Jameson Black Barrel",
    producer: null,
    type: "Irish Whiskey",
    region: null,
    age: null,
    price: 39.16,
    abv: 40.0
  },
  {
    id: "18002",
    name: "Evan Williams Single Barrel Vintage 2014",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 28.75,
    abv: 43.3
  },
  {
    id: "149",
    name: "Woodford Reserve Double Oaked",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 29.39,
    abv: 45.2
  },
  {
    id: "2371",
    name: "Old Grand Dad",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 17.79,
    abv: 40.0
  },
  {
    id: "3213",
    name: "Breckenridge Bourbon Whiskey",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 44.08,
    abv: 43.0
  },
  {
    id: "46278",
    name: "Old Forester Birthday Bourbon 2024",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 199.99,
    abv: 53.5
  },
  {
    id: "3672",
    name: "Angel's Envy Cask Strength",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 218.73,
    abv: 59.65
  },
  {
    id: "32717",
    name: "Jim Beam Black 7 Year",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 25.0,
    abv: 45.0
  },
  {
    id: "42831",
    name: "Bomberger’s Declaration 2024 Release",
    producer: null,
    type: "NaN",
    region: null,
    age: null,
    price: NaN,
    abv: 54.0
  },
  {
    id: "19466",
    name: "Peerless Double Oak Rye",
    producer: null,
    type: "Rye",
    region: null,
    age: null,
    price: 114.99,
    abv: 55.0
  },
  {
    id: "17156",
    name: "George Remus Single Barrel",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 54.99,
    abv: 60.95
  },
  {
    id: "17900",
    name: "Smoke Wagon Straight Bourbon Halloween Edition",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 39.99,
    abv: 46.0
  },
  {
    id: "19223",
    name: "Old Fitzgerald 19 Year - Fall 2022",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 239.97,
    abv: 50.0
  },
  {
    id: "1355",
    name: "Nikka Coffey Grain Japanese Whisky",
    producer: null,
    type: "Japanese Whisky",
    region: null,
    age: null,
    price: 70.92,
    abv: 45.0
  },
  {
    id: "17500",
    name: "Yellowstone Select Landmark Edition",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 39.97,
    abv: 46.5
  },
  {
    id: "19811",
    name: "Penelope Double Cask Finish - Rio",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 90.0,
    abv: 49.0
  },
  {
    id: "20648",
    name: "Penelope Barrel Strength Private Select - 4 Grain - 9 Yr",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 79.98,
    abv: 54.5
  },
  {
    id: "13581",
    name: "Four Roses 2020 Limited Edition Small Batch OESV",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 174.97,
    abv: 55.7
  },
  {
    id: "12152",
    name: "Fortaleza Reposado Tequila",
    producer: null,
    type: "NaN",
    region: null,
    age: null,
    price: 57.95,
    abv: 40.0
  },
  {
    id: "17644",
    name: "Knob Creek 9 Year",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 44.99,
    abv: 50.0
  },
  {
    id: "20789",
    name: "Lux Row Four Grain Double Single Barrel",
    producer: null,
    type: "Bourbon",
    region: null,
    age: null,
    price: 79.97,
    abv: 57.5
  },
];
interface MatchResult {
  score: number;
  bottle: WhiskyBottle;
}

interface ImageAnalysis {
  text: string[];
  visualFeatures: {
    colors: string[];
    shapes: string[];
    logoDetected: boolean;
    labelArea: {
      x: number;
      y: number;
      width: number;
      height: number;
    };
  };
}

const analyzeImage = async (imageData: string): Promise<ImageAnalysis> => {
  // Simulate OCR and feature extraction
  // In production, this would use a real computer vision API
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  // Extract text from the image (simulated)
  const detectedText = imageData.includes('buffalo') 
    ? ['BUFFALO', 'TRACE', 'KENTUCKY', 'STRAIGHT', 'BOURBON']
    : ['UNKNOWN', 'LABEL'];
    
  return {
    text: detectedText,
    visualFeatures: {
      colors: ['amber', 'brown', 'gold'],
      shapes: ['rectangle', 'circle', 'label'],
      logoDetected: true,
      labelArea: {
        x: 100,
        y: 150,
        width: 300,
        height: 400
      }
    }
  };
};

const calculateTextSimilarity = (detectedText: string[], bottleName: string): number => {
  const nameWords = bottleName.toUpperCase().split(' ');
  const detectedWords = detectedText.map(word => word.toUpperCase());
  
  // Calculate word matches with fuzzy matching
  const matchedWords = detectedWords.filter(word => 
    nameWords.some(nameWord => {
      // Exact match
      if (nameWord === word) return true;
      
      // Substring match
      if (nameWord.includes(word) || word.includes(nameWord)) return true;
      
      // Fuzzy match using Levenshtein distance
      return levenshteinDistance(word, nameWord) <= 2;
    })
  );
  
  // Calculate similarity score
  const matchScore = matchedWords.length / Math.max(detectedWords.length, nameWords.length);
  
  return matchScore;
};

const levenshteinDistance = (a: string, b: string): number => {
  if (a.length === 0) return b.length;
  if (b.length === 0) return a.length;

  const matrix = Array(b.length + 1).fill(null).map(() => Array(a.length + 1).fill(null));

  for (let i = 0; i <= a.length; i++) matrix[0][i] = i;
  for (let j = 0; j <= b.length; j++) matrix[j][0] = j;

  for (let j = 1; j <= b.length; j++) {
    for (let i = 1; i <= a.length; i++) {
      const substitutionCost = a[i - 1] === b[j - 1] ? 0 : 1;
      matrix[j][i] = Math.min(
        matrix[j][i - 1] + 1,
        matrix[j - 1][i] + 1,
        matrix[j - 1][i - 1] + substitutionCost
      );
    }
  }

  return matrix[b.length][a.length];
};

export const recognizeWhiskyBottle = async (imageData: string): Promise<BottleResult> => {
  try {
    const analysis = await analyzeImage(imageData);
    
    const matches: MatchResult[] = whiskyBottles.map(bottle => {
      // Calculate text similarity for bottle name
      const nameScore = calculateTextSimilarity(analysis.text, bottle.name);
      
      // Calculate producer match
      const producerScore = calculateTextSimilarity(analysis.text, bottle.producer);
      
      // Calculate type match
      const typeScore = calculateTextSimilarity(analysis.text, bottle.type);
      
      // Calculate region match if present
      const regionScore = bottle.region ? 
        calculateTextSimilarity(analysis.text, bottle.region) : 
        0;
      
      // Calculate age match if present
      const ageScore = bottle.age && analysis.text.includes(bottle.age) ? 1 : 0;
      
      // Weighted average of different matching criteria
      const totalScore = (
        nameScore * 0.4 + 
        producerScore * 0.3 + 
        typeScore * 0.15 +
        regionScore * 0.1 +
        ageScore * 0.05
      );
      
      return {
        score: totalScore,
        bottle
      };
    });
    
    // Sort by score and get best match
    const bestMatch = matches.sort((a, b) => b.score - a.score)[0];
    
    // Only return match if confidence is high enough (90%)
    if (bestMatch.score >= 0.9) {
      return {
        bottle_name: bestMatch.bottle.name,
        confidence: bestMatch.score,
        matched_label_id: bestMatch.bottle.id,
        timestamp: Date.now()
      };
    }
    
    throw new Error('No confident match found');
  } catch (error) {
    console.error('Recognition error:', error);
    throw error;
  }
};

export const getScanHistory = (): BottleResult[] => {
  try {
    const history = localStorage.getItem('scanHistory');
    return history ? JSON.parse(history) : [];
  } catch (error) {
    console.error('Failed to retrieve scan history:', error);
    return [];
  }
};

export const saveScanResult = (result: BottleResult): void => {
  try {
    const history = getScanHistory();
    const updatedHistory = [
      { ...result, id: `scan_${Date.now()}`, timestamp: Date.now() },
      ...history
    ].slice(0, 20);
    
    localStorage.setItem('scanHistory', JSON.stringify(updatedHistory));
  } catch (error) {
    console.error('Failed to save scan result:', error);
  }
};