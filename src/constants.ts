interface NavLink {
  title: string;
  url: string;
}

interface VendorList {
  name: string;
  location: string;
  image: string;
}

interface TaskList {
  name: string;
  status: boolean;
  vendors: VendorList[];
  cost: string;
}

// creating an array of objects for the Navlinks (which is an array of interface NavLink) containing the title and url of the links in the navigation bar.
const Navlinks: NavLink[] = [
  {
    title: "Dashboard",
    url: "/",
  },
  {
    title: "Events",
    url: "/events",
  },
  {
    title: "Vendors",
    url: "/vendors",
  },
];

// creating an array of objects for the VendorLists (which is an array of interface VendorList) containing the name, location, and image of the vendors.
const VendorLists: VendorList[] = [
  {
    name: "Catering",
    location: "Lagos",
    image:
      "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Photography",
    location: "Lagos",
    image:
      "https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "DJ",
    location: "Lagos",
    image:
      "https://images.unsplash.com/photo-1493676304819-0d7a8d026dcf?q=80&w=2500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Decorators",
    location: "Lagos",
    image:
      "https://images.unsplash.com/photo-1513623935135-c896b59073c1?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "MC",
    location: "Lagos",
    image:
      "https://images.unsplash.com/photo-1607805074620-5802aee47bdb?q=80&w=2525&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Makeup Artist",
    location: "Lagos",
    image:
      "https://images.unsplash.com/photo-1621691553102-66d4ecdb1be2?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Baker",
    location: "Lagos",
    image:
      "https://images.unsplash.com/photo-1532635224-cf024e66d122?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Videography",
    location: "Lagos",
    image:
      "https://images.unsplash.com/photo-1596483941348-cb6d15e0fd60?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Security",
    location: "Lagos",
    image:
      "https://images.unsplash.com/photo-1618371690240-e0d46eead4b8?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Stylist",
    location: "Lagos",
    image:
      "https://images.unsplash.com/photo-1559599101-f09722fb4948?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Band",
    location: "Lagos",
    image:
      "https://images.unsplash.com/photo-1606403444347-fdd6b74492d1?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Print Media",
    location: "Lagos",
    image:
      "https://images.unsplash.com/photo-1503694978374-8a2fa686963a?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

// creating an array of objects for the EventTasks (which is an array of interface TaskList) containing the name, status, vendors and cost
const EventTasks: TaskList[] = [
  {
    name: "Wedding",
    status: false,
    vendors: [
      {
        name: "Catering",
        location: "Lagos",
        image:
          "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Photography",
        location: "Lagos",
        image:
          "https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "DJ",
        location: "Lagos",
        image:
          "https://images.unsplash.com/photo-1493676304819-0d7a8d026dcf?q=80&w=2500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Decorators",
        location: "Lagos",
        image:
          "https://images.unsplash.com/photo-1513623935135-c896b59073c1?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
    cost: "25,000",
  },

  {
    name: "Trip",
    status: false,
    vendors: [
      {
        name: "Catering",
        location: "Lagos",
        image:
          "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Photography",
        location: "Lagos",
        image:
          "https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "DJ",
        location: "Lagos",
        image:
          "https://images.unsplash.com/photo-1493676304819-0d7a8d026dcf?q=80&w=2500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Decorators",
        location: "Lagos",
        image:
          "https://images.unsplash.com/photo-1513623935135-c896b59073c1?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
    cost: "1,200",
  },

  {
    name: "Convocation",
    status: true,
    vendors: [
      {
        name: "Catering",
        location: "Lagos",
        image:
          "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Photography",
        location: "Lagos",
        image:
          "https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "DJ",
        location: "Lagos",
        image:
          "https://images.unsplash.com/photo-1493676304819-0d7a8d026dcf?q=80&w=2500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Decorators",
        location: "Lagos",
        image:
          "https://images.unsplash.com/photo-1513623935135-c896b59073c1?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
    cost: "0",
  },

  {
    name: "Matriculation",
    status: false,
    vendors: [
      {
        name: "Catering",
        location: "Lagos",
        image:
          "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Photography",
        location: "Lagos",
        image:
          "https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "DJ",
        location: "Lagos",
        image:
          "https://images.unsplash.com/photo-1493676304819-0d7a8d026dcf?q=80&w=2500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Decorators",
        location: "Lagos",
        image:
          "https://images.unsplash.com/photo-1513623935135-c896b59073c1?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
    cost: "2,000",
  },

  {
    name: "beach",
    status: true,
    vendors: [
      {
        name: "Catering",
        location: "Lagos",
        image:
          "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Photography",
        location: "Lagos",
        image:
          "https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "DJ",
        location: "Lagos",
        image:
          "https://images.unsplash.com/photo-1493676304819-0d7a8d026dcf?q=80&w=2500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Decorators",
        location: "Lagos",
        image:
          "https://images.unsplash.com/photo-1513623935135-c896b59073c1?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
    cost: "0",
  },

  {
    name: "burial",
    status: false,
    vendors: [
      {
        name: "Catering",
        location: "Lagos",
        image:
          "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Photography",
        location: "Lagos",
        image:
          "https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "DJ",
        location: "Lagos",
        image:
          "https://images.unsplash.com/photo-1493676304819-0d7a8d026dcf?q=80&w=2500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Decorators",
        location: "Lagos",
        image:
          "https://images.unsplash.com/photo-1513623935135-c896b59073c1?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
    cost: "0",
  },

  {
    name: "birthday",
    status: true,
    vendors: [
      {
        name: "Catering",
        location: "Lagos",
        image:
          "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Photography",
        location: "Lagos",
        image:
          "https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "DJ",
        location: "Lagos",
        image:
          "https://images.unsplash.com/photo-1493676304819-0d7a8d026dcf?q=80&w=2500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Decorators",
        location: "Lagos",
        image:
          "https://images.unsplash.com/photo-1513623935135-c896b59073c1?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
    cost: "0",
  },
];

export default { Navlinks, VendorLists, EventTasks };
