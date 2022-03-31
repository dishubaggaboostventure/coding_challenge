import { StartupDTO, Startup } from "../../Types/Startup";

export const startupDTO: StartupDTO = {
  id: 1,
  dateCreated: "2020-12-22T13:00:00.000Z",
  name: "Biotechnix",
  country: "Pakistan",
  dateFounded: "2020-12-23T13:00:00.000Z",
  employees: "<100",
  legalEntity: "",
  mainContact: "",
  additionalContacts: "",
  website: "",
  address: "",
  referenceCustomers: "Russian Federation, China",
  shortDescription:
    "Prosthetics corporation allied with Dr. Octopus to control mutilated influential people",
  description:
    "Biotechnix technology enables precise capture and analysis of particles. We make possible end-to-end results: particle collection from gas volumes and from surfaces; micro-aerodynamic particle concentration: and delivery to particle analyzers to determine biological, physical and chemical properties.",
  technologyReadiness: "Early Market Stage",
  investors: "",
  currentInvestmentStage: "Series A",
  totalFunding: 102,
  usps: [
    {
      id: 1,
      description:
        "Very Unique Selling Proposition that is so good that all the dictatorship countries want to buy it",
      startupId: 1,
    },
    {
      id: 2,
      description:
        "Unique Selling Proposition that is so good that all the dictatorship countries want to buy it",
      startupId: 2,
    },
  ],
  files: [],
};

export const startupDTOList: StartupDTO[] = [
  {
    id: 1,
    dateCreated: "2020-12-22T13:00:00.000Z",
    name: "Biotechnix",
    country: "Pakistan",
    dateFounded: "2020-12-23T13:00:00.000Z",
    employees: "<100",
    legalEntity: "",
    mainContact: "",
    additionalContacts: "",
    website: "",
    address: "",
    referenceCustomers: "Russian Federation, China",
    shortDescription:
      "Prosthetics corporation allied with Dr. Octopus to control mutilated influential people",
    description:
      "Biotechnix technology enables precise capture and analysis of particles. We make possible end-to-end results: particle collection from gas volumes and from surfaces; micro-aerodynamic particle concentration: and delivery to particle analyzers to determine biological, physical and chemical properties.",
    technologyReadiness: "Early Market Stage",
    investors: "",
    currentInvestmentStage: "Series A",
    totalFunding: 102,
    usps: [
      {
        id: 1,
        description:
          "Very Unique Selling Proposition that is so good that all the dictatorship countries want to buy it",
        startupId: 1,
      },
      {
        id: 2,
        description:
          "Unique Selling Proposition that is so good that all the dictatorship countries want to buy it",
        startupId: 2,
      },
    ],
    files: [],
  },
  {
    id: 2,
    dateCreated: "2020-12-22T13:00:00.000Z",
    name: "Biotechnix",
    country: "Pakistan",
    dateFounded: "2020-12-23T13:00:00.000Z",
    employees: "<100",
    legalEntity: "",
    mainContact: "",
    additionalContacts: "",
    website: "",
    address: "",
    referenceCustomers: "Russian Federation, China",
    shortDescription:
      "Prosthetics corporation allied with Dr. Octopus to control mutilated influential people",
    description:
      "Biotechnix technology enables precise capture and analysis of particles. We make possible end-to-end results: particle collection from gas volumes and from surfaces; micro-aerodynamic particle concentration: and delivery to particle analyzers to determine biological, physical and chemical properties.",
    technologyReadiness: "Early Market Stage",
    investors: "",
    currentInvestmentStage: "Series A",
    totalFunding: 102,
    usps: [
      {
        id: 1,
        description:
          "Very Unique Selling Proposition that is so good that all the dictatorship countries want to buy it",
        startupId: 1,
      },
      {
        id: 2,
        description:
          "Unique Selling Proposition that is so good that all the dictatorship countries want to buy it",
        startupId: 2,
      },
    ],
    files: [],
  }
];


export const expectedStartup: Startup = {
  id: 1,
  dateCreated: new Date("2020-12-22T13:00:00.000Z"),
  name: "Biotechnix",
  country: "Pakistan",
  dateFounded: new Date("2020-12-23T13:00:00.000Z"),
  employees: "<100",
  legalEntity: "",
  mainContact: "",
  address: "Kapuzinnerstrasse 9",
  additionalContacts: "",
  website: "",
  referenceCustomers: "Russian Federation, China",
  shortDescription:
    "Prosthetics corporation allied with Dr. Octopus to control mutilated influential people",
  description:
    "Biotechnix technology enables precise capture and analysis of particles. We make possible end-to-end results: particle collection from gas volumes and from surfaces; micro-aerodynamic particle concentration: and delivery to particle analyzers to determine biological, physical and chemical properties.",
  technologyReadiness: "Early Market Stage",
  investors: "",
  currentInvestmentStage: "Series A",
  totalFunding: 102,
  usps: [
    {
      id: 1,
      description:
        "Very Unique Selling Proposition that is so good that all the dictatorship countries want to buy it",
      startupId: 1,
    },
  ],
  files: [],
};

export const expectedStartupList: Startup[] = [
  {
    id: 1,
    dateCreated: new Date("2020-12-22T13:00:00.000Z"),
    name: "Biotechnix",
    country: "Pakistan",
    dateFounded: new Date("2020-12-23T13:00:00.000Z"),
    employees: "<100",
    legalEntity: "",
    mainContact: "",
    address: "Kapuzinnerstrasse 9",
    additionalContacts: "",
    website: "",
    referenceCustomers: "Russian Federation, China",
    shortDescription:
      "Prosthetics corporation allied with Dr. Octopus to control mutilated influential people",
    description:
      "Biotechnix technology enables precise capture and analysis of particles. We make possible end-to-end results: particle collection from gas volumes and from surfaces; micro-aerodynamic particle concentration: and delivery to particle analyzers to determine biological, physical and chemical properties.",
    technologyReadiness: "Early Market Stage",
    investors: "",
    currentInvestmentStage: "Series A",
    totalFunding: 102,
    usps: [
      {
        id: 1,
        description:
          "Very Unique Selling Proposition that is so good that all the dictatorship countries want to buy it",
        startupId: 1,
      },
    ],
    files: [],
  },
  {
    id: 2,
    dateCreated: new Date("2020-12-22T13:00:00.000Z"),
    name: "Biotechnix",
    country: "Pakistan",
    dateFounded: new Date("2020-12-23T13:00:00.000Z"),
    employees: "<100",
    legalEntity: "",
    mainContact: "",
    address: "Kapuzinnerstrasse 9",
    additionalContacts: "",
    website: "",
    referenceCustomers: "Russian Federation, China",
    shortDescription:
      "Prosthetics corporation allied with Dr. Octopus to control mutilated influential people",
    description:
      "Biotechnix technology enables precise capture and analysis of particles. We make possible end-to-end results: particle collection from gas volumes and from surfaces; micro-aerodynamic particle concentration: and delivery to particle analyzers to determine biological, physical and chemical properties.",
    technologyReadiness: "Early Market Stage",
    investors: "",
    currentInvestmentStage: "Series A",
    totalFunding: 102,
    usps: [
      {
        id: 1,
        description:
          "Very Unique Selling Proposition that is so good that all the dictatorship countries want to buy it",
        startupId: 1,
      },
    ],
    files: [],
  }
]
