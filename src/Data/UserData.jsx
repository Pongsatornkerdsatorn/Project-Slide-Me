

const usersData = [
    {
      id: 1,
      firstName: "Alice",
      lastName: "Johnson",
      username: "alicejohnson01",
      isActive: true,
      email: "alicejohnson@example.com",
      phone: "0812345678",
      registrationDate: "2023-01-15",
      role: "user"
    },
    {
      id: 2,
      firstName: "kob",
      lastName: "Smith",
      username: "kobsmith02",
      isActive: true,
      email: "kobsmith@example.com",
      phone: "0812349876",
      registrationDate: "2023-02-10",
      role: "user"
    },
    {
      id: 3,
      firstName: "Carol",
      lastName: "Taylor",
      username: "caroltaylor03",
      isActive: false,
      email: "caroltaylor@example.com",
      phone: "0812346543",
      registrationDate: "2023-03-20",
      role: "user"
    },
    {
      id: 4,
      firstName: "David",
      lastName: "Brown",
      username: "davidbrown04",
      isActive: true,
      email: "davidbrown@example.com",
      phone: "0812347654",
      registrationDate: "2023-04-15",
      role: "user"
    },
    {
      id: 5,
      firstName: "Eve",
      lastName: "Davis",
      username: "evedavis05",
      isActive: false,
      email: "dvedavis@example.com",
      phone: "0812348765",
      registrationDate: "2023-05-05",
      role: "user"
    },
    {
      id: 6,
      firstName: "zrank",
      lastName: "Wilson",
      username: "frankwilson06",
      isActive: true,
      email: "zrankwilson@example.com",
      phone: "0812345432",
      registrationDate: "2023-06-20",
      role: "driver",
      licensePlate: "XYZ-1234",
      vehicleType: "Truck",
      documents: ["License", "Insurance", "Vehicle Registration"],
      documentStatus: "Approved",
      serviceHistory: [
        { date: "2023-07-10", usageCount: 5, rating: 4.8 },
        { date: "2023-07-20", usageCount: 3, rating: 4.5 }
      ]
    },
    {
      id: 7,
      firstName: "arace",
      lastName: "Miller",
      username: "aracemiller07",
      isActive: true,
      email: "gracemiller@example.com",
      phone: "0812347659",
      registrationDate: "2023-08-12",
      role: "driver",
      licensePlate: "ABC-5678",
      vehicleType: "Van",
      documents: ["License", "Insurance"],
      documentStatus: "Pending",
      serviceHistory: [
        { date: "2023-08-18", usageCount: 10, rating: 4.9 },
        { date: "2023-08-25", usageCount: 2, rating: 4.7 }
      ]
    },
    {
      id: 8,
      firstName: "chank",
      lastName: "Lopez",
      username: "chanklopez08",
      isActive: false,
      email: "Chanklopez@example.com",
      phone: "0812348763",
      registrationDate: "2023-09-05",
      role: "driver",
      licensePlate: "DEF-7890",
      vehicleType: "Pickup Truck",
      documents: ["License", "Vehicle Registration"],
      documentStatus: "Approved",
      serviceHistory: [
        { date: "2023-09-15", usageCount: 4, rating: 4.6 },
        { date: "2023-09-18", usageCount: 1, rating: 4.2 }
      ]
    },
    {
      id: 9,
      firstName: "lvy",
      lastName: "Martinez",
      username: "lvymartinez09",
      isActive: true,
      email: "ivymartinez@example.com",
      phone: "0812346578",
      registrationDate: "2023-10-20",
      role: "driver",
      licensePlate: "GHI-1011",
      vehicleType: "SUV",
      documents: ["License", "Insurance"],
      documentStatus: "Pending",
      serviceHistory: [
        { date: "2023-10-22", usageCount: 7, rating: 4.8 },
        { date: "2023-10-28", usageCount: 3, rating: 4.5 }
      ]
    },
    {
      id: 10,
      firstName: "gack",
      lastName: "Lee",
      username: "gacklee10",
      isActive: true,
      email: "jacklee@example.com",
      phone: "0812349871",
      registrationDate: "2023-11-01",
      role: "driver",
      licensePlate: "JKL-1122",
      vehicleType: "Motorcycle",
      documents: ["License", "Vehicle Registration"],
      documentStatus: "Approved",
      serviceHistory: [
        { date: "2023-11-05", usageCount: 2, rating: 4.7 },
        { date: "2023-11-10", usageCount: 1, rating: 4.4 }
      ]
    },{
      "id": 11,
      "firstName": "John",
      "lastName": "Doe",
      "username": "johndoe11",
      "isActive": true,
      "email": "johndoe@example.com",
      "phone": "0812345671",
      "registrationDate": "2023-11-02",
      "role": "user"
    },
    {
      "id": 12,
      "firstName": "Emma",
      "lastName": "Watson",
      "username": "emmawatson12",
      "isActive": true,
      "email": "emmawatson@example.com",
      "phone": "0812347652",
      "registrationDate": "2023-11-12",
      "role": "user"
    },
    {
      "id": 13,
      "firstName": "Lucas",
      "lastName": "Black",
      "username": "lucasblack13",
      "isActive": true,
      "email": "lucasblack@example.com",
      "phone": "0812348761",
      "registrationDate": "2023-11-15",
      "role": "user"
    },
    {
      "id": 14,
      "firstName": "Sophia",
      "lastName": "Turner",
      "username": "sophiaturner14",
      "isActive": true,
      "email": "sophiaturner@example.com",
      "phone": "0812349872",
      "registrationDate": "2023-11-20",
      "role": "user"
    },
    {
      "id": 15,
      "firstName": "Jack",
      "lastName": "White",
      "username": "jackwhite15",
      "isActive": true,
      "email": "jackwhite@example.com",
      "phone": "0812345430",
      "registrationDate": "2023-11-25",
      "role": "user"
    },
    {
      "id": 16,
      "firstName": "Zoe",
      "lastName": "Grey",
      "username": "zoegrey16",
      "isActive": false,
      "email": "zoegrey@example.com",
      "phone": "0812349873",
      "registrationDate": "2023-11-27",
      "role": "user"
    },
    {
      "id": 17,
      "firstName": "George",
      "lastName": "Hall",
      "username": "georgehall17",
      "isActive": true,
      "email": "georgehall@example.com",
      "phone": "0812346572",
      "registrationDate": "2023-11-30",
      "role": "driver",
      "licensePlate": "ABC-1000",
      "vehicleType": "Truck",
      "documents": ["License", "Insurance", "Vehicle Registration"],
      "documentStatus": "Approved",
      "serviceHistory": [
        { "date": "2023-12-05", "usageCount": 6, "rating": 4.9 },
        { "date": "2023-12-10", "usageCount": 2, "rating": 4.6 }
      ]
    },
    {
      "id": 18,
      "firstName": "Mia",
      "lastName": "King",
      "username": "miaking18",
      "isActive": true,
      "email": "miaking@example.com",
      "phone": "0812346542",
      "registrationDate": "2023-12-03",
      "role": "driver",
      "licensePlate": "XYZ-1023",
      "vehicleType": "Van",
      "documents": ["License", "Insurance"],
      "documentStatus": "Pending",
      "serviceHistory": [
        { "date": "2023-12-07", "usageCount": 8, "rating": 4.7 },
        { "date": "2023-12-12", "usageCount": 5, "rating": 4.4 }
      ]
    },
    {
      "id": 19,
      "firstName": "Daniel",
      "lastName": "Scott",
      "username": "danielscott19",
      "isActive": false,
      "email": "danielscott@example.com",
      "phone": "0812346573",
      "registrationDate": "2023-12-15",
      "role": "driver",
      "licensePlate": "JKL-1155",
      "vehicleType": "Pickup Truck",
      "documents": ["License", "Vehicle Registration"],
      "documentStatus": "Approved",
      "serviceHistory": [
        { "date": "2023-12-17", "usageCount": 4, "rating": 4.5 },
        { "date": "2023-12-22", "usageCount": 1, "rating": 4.2 }
      ]
    },
    {
      "id": 20,
      "firstName": "Natalie",
      "lastName": "Davis",
      "username": "nataliedavis20",
      "isActive": true,
      "email": "nataliedavis@example.com",
      "phone": "0812344321",
      "registrationDate": "2023-12-10",
      "role": "driver",
      "licensePlate": "LMN-1357",
      "vehicleType": "SUV",
      "documents": ["License", "Insurance"],
      "documentStatus": "Pending",
      "serviceHistory": [
        { "date": "2023-12-14", "usageCount": 9, "rating": 4.8 },
        { "date": "2023-12-18", "usageCount": 3, "rating": 4.6 }
      ]
    },
    {
      "id": 21,
      "firstName": "Oscar",
      "lastName": "Lopez",
      "username": "oscarlopez21",
      "isActive": true,
      "email": "oscarlopez@example.com",
      "phone": "0812348764",
      "registrationDate": "2023-12-20",
      "role": "user"
    },
    {
      "id": 22,
      "firstName": "Linda",
      "lastName": "Adams",
      "username": "lindaadams22",
      "isActive": false,
      "email": "lindaadams@example.com",
      "phone": "0812343210",
      "registrationDate": "2023-12-23",
      "role": "user"
    },
    {
      "id": 23,
      "firstName": "Eva",
      "lastName": "Nelson",
      "username": "evanelson23",
      "isActive": true,
      "email": "evanelson@example.com",
      "phone": "0812345679",
      "registrationDate": "2023-12-28",
      "role": "user"
    },
    {
      "id": 24,
      "firstName": "Henry",
      "lastName": "Martinez",
      "username": "henrymartinez24",
      "isActive": false,
      "email": "henrymartinez@example.com",
      "phone": "0812348762",
      "registrationDate": "2024-01-02",
      "role": "driver",
      "licensePlate": "DEF-2345",
      "vehicleType": "Truck",
      "documents": ["License", "Vehicle Registration"],
      "documentStatus": "Approved",
      "serviceHistory": [
        { "date": "2024-01-05", "usageCount": 7, "rating": 4.8 },
        { "date": "2024-01-10", "usageCount": 2, "rating": 4.7 }
      ]
    },
    {
      "id": 25,
      "firstName": "Jasper",
      "lastName": "Harris",
      "username": "jasperharris25",
      "isActive": true,
      "email": "jasperharris@example.com",
      "phone": "0812349870",
      "registrationDate": "2024-01-08",
      "role": "driver",
      "licensePlate": "MNO-1001",
      "vehicleType": "Motorcycle",
      "documents": ["License", "Insurance"],
      "documentStatus": "Pending",
      "serviceHistory": [
        { "date": "2024-01-10", "usageCount": 3, "rating": 4.6 },
        { "date": "2024-01-15", "usageCount": 1, "rating": 4.4 }
      ]
    },
    {
      "id": 26,
      "firstName": "Olivia",
      "lastName": "Clark",
      "username": "oliviaclark26",
      "isActive": true,
      "email": "oliviaclark@example.com",
      "phone": "0812344322",
      "registrationDate": "2024-01-12",
      "role": "user"
    },
    {
      "id": 27,
      "firstName": "Sophia",
      "lastName": "Allen",
      "username": "sophiaallen27",
      "isActive": true,
      "email": "sophiaallen@example.com",
      "phone": "0812347653",
      "registrationDate": "2024-01-14",
      "role": "user"
    },
    {
      "id": 28,
      "firstName": "Oscar",
      "lastName": "White",
      "username": "oscarwhite28",
      "isActive": true,
      "email": "oscarwhite@example.com",
      "phone": "0812345433",
      "registrationDate": "2024-01-18",
      "role": "driver",
      "licensePlate": "JKL-1234",
      "vehicleType": "Van",
      "documents": ["License", "Vehicle Registration"],
      "documentStatus": "Approved",
      "serviceHistory": [
        { "date": "2024-01-22", "usageCount": 8, "rating": 4.9 },
        { "date": "2024-01-25", "usageCount": 3, "rating": 4.6 }
      ]
    },
    {
      "id": 29,
      "firstName": "Anna",
      "lastName": "Martin",
      "username": "annamartin29",
      "isActive": false,
      "email": "annamartin@example.com",
      "phone": "0812348766",
      "registrationDate": "2024-01-23",
      "role": "driver",
      "licensePlate": "DEF-2346",
      "vehicleType": "Pickup Truck",
      "documents": ["License", "Insurance"],
      "documentStatus": "Pending",
      "serviceHistory": [
        { "date": "2024-01-30", "usageCount": 5, "rating": 4.7 },
        { "date": "2024-02-05", "usageCount": 2, "rating": 4.5 }
      ]
    },
    {
      "id": 30,
      "firstName": "James",
      "lastName": "Davis",
      "username": "jamesdavis30",
      "isActive": true,
      "email": "jamesdavis@example.com",
      "phone": "0812345431",
      "registrationDate": "2024-02-01",
      "role": "user"
    },
    {
      "id": 31,
      "firstName": "Lily",
      "lastName": "Evans",
      "username": "lilyevans31",
      "isActive": true,
      "email": "lilyevans@example.com",
      "phone": "0812347655",
      "registrationDate": "2024-02-05",
      "role": "user"
    },
    {
      "id": 32,
      "firstName": "Benjamin",
      "lastName": "Thompson",
      "username": "benjaminthompson32",
      "isActive": true,
      "email": "benjaminthompson@example.com",
      "phone": "0812349874",
      "registrationDate": "2024-02-09",
      "role": "user"
    },
    {
      "id": 33,
      "firstName": "Sophia",
      "lastName": "Jackson",
      "username": "sophiajackson33",
      "isActive": true,
      "email": "sophiajackson@example.com",
      "phone": "0812346544",
      "registrationDate": "2024-02-15",
      "role": "driver",
      "licensePlate": "LMN-2468",
      "vehicleType": "Truck",
      "documents": ["License", "Insurance", "Vehicle Registration"],
      "documentStatus": "Approved",
      "serviceHistory": [
        { "date": "2024-02-17", "usageCount": 6, "rating": 4.8 },
        { "date": "2024-02-22", "usageCount": 3, "rating": 4.6 }
      ]
    },
    {
      "id": 34,
      "firstName": "Amelia",
      "lastName": "Smith",
      "username": "ameliasmith34",
      "isActive": true,
      "email": "ameliasmith@example.com",
      "phone": "0812349875",
      "registrationDate": "2024-02-20",
      "role": "driver",
      "licensePlate": "GHI-1032",
      "vehicleType": "Van",
      "documents": ["License", "Vehicle Registration"],
      "documentStatus": "Pending",
      "serviceHistory": [
        { "date": "2024-02-25", "usageCount": 4, "rating": 4.5 },
        { "date": "2024-03-01", "usageCount": 2, "rating": 4.3 }
      ]
    },
    {
      "id": 35,
      "firstName": "Levi",
      "lastName": "Wright",
      "username": "leviwhite35",
      "isActive": false,
      "email": "leviwhite@example.com",
      "phone": "0812344323",
      "registrationDate": "2024-03-05",
      "role": "driver",
      "licensePlate": "JKL-2013",
      "vehicleType": "Motorcycle",
      "documents": ["License", "Insurance"],
      "documentStatus": "Approved",
      "serviceHistory": [
        { "date": "2024-03-07", "usageCount": 5, "rating": 4.8 },
        { "date": "2024-03-12", "usageCount": 3, "rating": 4.6 }
      ]
    },
    {
      "id": 36,
      "firstName": "Grace",
      "lastName": "Green",
      "username": "gracegreen36",
      "isActive": true,
      "email": "gracegreen@example.com",
      "phone": "0812344324",
      "registrationDate": "2024-03-09",
      "role": "user"
    },
    {
      "id": 37,
      "firstName": "Megan",
      "lastName": "Hill",
      "username": "meganhill37",
      "isActive": true,
      "email": "meganhill@example.com",
      "phone": "0812348767",
      "registrationDate": "2024-03-14",
      "role": "driver",
      "licensePlate": "XYZ-1024",
      "vehicleType": "Van",
      "documents": ["License", "Vehicle Registration"],
      "documentStatus": "Approved",
      "serviceHistory": [
        { "date": "2024-03-18", "usageCount": 7, "rating": 4.9 },
        { "date": "2024-03-20", "usageCount": 3, "rating": 4.7 }
      ]
    },
    {
      "id": 38,
      "firstName": "Oliver",
      "lastName": "King",
      "username": "oliverking38",
      "isActive": true,
      "email": "oliverking@example.com",
      "phone": "0812347656",
      "registrationDate": "2024-03-22",
      "role": "driver",
      "licensePlate": "MNO-1590",
      "vehicleType": "Pickup Truck",
      "documents": ["License", "Insurance"],
      "documentStatus": "Pending",
      "serviceHistory": [
        { "date": "2024-03-25", "usageCount": 4, "rating": 4.8 },
        { "date": "2024-03-28", "usageCount": 2, "rating": 4.6 }
      ]
    },
    {
      "id": 39,
      "firstName": "Amos",
      "lastName": "Lewis",
      "username": "amoslewis39",
      "isActive": true,
      "email": "amoslewis@example.com",
      "phone": "0812348769",
      "registrationDate": "2024-03-30",
      "role": "driver",
      "licensePlate": "DEF-8901",
      "vehicleType": "SUV",
      "documents": ["License", "Vehicle Registration"],
      "documentStatus": "Approved",
      "serviceHistory": [
        { "date": "2024-04-05", "usageCount": 6, "rating": 4.9 },
        { "date": "2024-04-10", "usageCount": 4, "rating": 4.7 }
      ]
    },
    {
      "id": 40,
      "firstName": "Ava",
      "lastName": "Walker",
      "username": "avawalker40",
      "isActive": true,
      "email": "avawalker@example.com",
      "phone": "0812343211",
      "registrationDate": "2024-04-05",
      "role": "driver",
      "licensePlate": "GHI-3021",
      "vehicleType": "Motorcycle",
      "documents": ["License", "Insurance"],
      "documentStatus": "Pending",
      "serviceHistory": [
        { "date": "2024-04-12", "usageCount": 3, "rating": 4.6 },
        { "date": "2024-04-15", "usageCount": 2, "rating": 4.4 }
      ]
    }
    
    
  ];
  

  export function fetchUsers() {   
    return usersData
};
  
export function fetchUserById(id) {
  return usersData.find(user => user.id === parseInt(id, 10)); 
}

export function fetchDriverById(id) {
  return usersData.find(driver => driver.id === parseInt(id, 10)); 
}

