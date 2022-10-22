export const courses = [
  //C plus plus
  {
    _id: 1,
    course: "CPP",
    icon: require("../assets/course/cpp.png"),
    duration: "1 Month",
    comingSoon: true,
    weeks: [
      {
        week: "1",
        totalLectures: "30",
        project: {
          name: "XYZ website",
          link: "xyz.com",
        },
        lectures: [
          {
            day: 1,
            topic: "Introduction to C++",
            link: "xyz.com",
          },
        ],
      },
    ],
  },

  // HTML start
  {
    _id: 2,
    course: "HTML",
    icon: require("../assets/course/html.png"),
    duration: "1 Weeks",
    weeks: [
      {
        week: "1",
        totalLectures: "7",
        project: {
          name: "Student Registration Form",
          link: "https://youtu.be/8py6IxTsWLU",
        },
        lectures: [
          {
            day: 1,
            topic: "Introduction to HTML",
            link: "https://youtu.be/nPIN7r0v9i0",
          },
          {
            day: 2,
            topic: "Tags & Attributes in HTML",
            link: "https://youtu.be/C-ILds80gP4",
          },
          {
            day: 3,
            topic: "Commonly Used HTML tags",
            link: "https://youtu.be/PLuT7uj3l74",
          },
          {
            day: 4,
            topic: "Creating Tables in HTML",
            link: "https://youtu.be/cZSTrSBTnL8",
          },
          {
            day: 5,
            topic: "Creating forms in HTML",
            link: "https://youtu.be/9plJMvbPYIA",
          },
          {
            day: 6,
            topic: "Multimedia Tags in HTML",
            link: "https://youtu.be/ZQx7BL-mPsc",
          },
        ],
      },
    ],
  },

  //Cascading styles sheet
  {
    _id: 3,
    course: "CSS",
    icon: require("../assets/course/css.png"),
    duration: "1 Month",
    comingSoon: true,
    weeks: [
      {
        week: "1",
        totalLectures: "30",
        project: {
          name: "XYZ website",
          link: "xyz.com",
        },
        lectures: [
          {
            day: 1,
            topic: "Introduction to CSS",
            link: "xyz.com",
          },
        ],
      },
    ],
  },

  //Javascript
  {
    _id: 4,
    course: "Javascript",
    icon: require("../assets/course/js-format.png"),
    duration: "23 days",
    weeks: [
      {
        week: "1",
        totalLectures: "30",
        project: {
          name: "Lets build a Calculator",
          link: "https://youtu.be/QS6Y0ezhyCs",
        },
        lectures: [
          {
            day: 1,
            topic: "Introduction to Javascript",
            link: "https://youtu.be/ER9SspLe4Hg",
          },
          {
            day: 2,
            topic: "Datatypes in Javascript",
            link: "https://youtu.be/p7mBGmKl6xY",
          },
          {
            day: 3,
            topic: "Boolean in Javascript",
            link: "https://youtu.be/gOnjDkAoU7U",
          },
          {
            day: 4,
            topic: "Conditional Statements in Javascript",
            link: "https://youtu.be/vF4b1KFfA3A",
          },
          {
            day: 5,
            topic: "Arrays in Javascript",
            link: "https://youtu.be/Lr-uGVNM8Ko",
          },
          {
            day: 6,
            topic: "Loops in Javascript",
            link: "https://youtu.be/NlagmmCwOU4",
          },
          {
            day: 7,
            topic: "Functions in Javascript",
            link: "https://youtu.be/TwDHINjr1AQ",
          },
        ],
      },
      {
        week: "2",
        totalLectures: "30",
        project: {
          name: "Lets build a Analog Clock",
          link: "https://youtu.be/lsoCv8Agg6E",
        },
        lectures: [
          {
            day: 1,
            topic: "Objects in Javascript",
            link: "https://youtu.be/mXZz0SHl7dI",
          },
          {
            day: 2,
            topic: "Higher Order Function in Javascript",
            link: "https://youtu.be/E1_VLQ9qxWQ",
          },
          {
            day: 3,
            topic: "Sets & Map in Javascript",
            link: "https://youtu.be/hLgUTM3FOII",
          },
          {
            day: 4,
            topic: "Destructuring in Javascript",
            link: "https://youtu.be/QANG6A1-zkQ",
          },
          {
            day: 5,
            topic: "Regular Expression (REGEX) in Javascript",
            link: "https://www.youtube.com/watch?v=B5iF6XBpcsI",
          },
          {
            day: 6,
            topic: "Console Object Method in Javascript",
            link: "https://youtu.be/1WNtGvrLisg",
          },
          {
            day: 7,
            topic: "Error Handling in Javascript",
            link: "https://youtu.be/TwDHINjr1AQ",
          },
        ],
      },
      {
        week: "3",
        totalLectures: "30",
        project: {
          name: "Portfolio Website using VanillaJS",
          link: "https://youtu.be/zSRUtRsSNv0",
        },
        lectures: [
          {
            day: 1,
            topic: "Classes in Javascript",
            link: "https://youtu.be/XPw7nQSmMqU",
          },
          {
            day: 2,
            topic: "JSON in Javascript",
            link: "https://youtu.be/ju5j7rfXXTE",
          },
          {
            day: 3,
            topic: "Web Storages in Javascript",
            link: "https://youtu.be/xSv-9Yod83Q",
          },
          {
            day: 4,
            topic: "Promises in Javascript",
            link: "https://youtu.be/2IPw-mWe10U",
          },
          {
            day: 5,
            topic: "Closure in Javascript",
            link: "https://youtu.be/qikxEIxsXco",
          },
          {
            day: 6,
            topic: "Clean Coding in Javascript",
            link: "https://youtu.be/vPXzVNmCPg4",
          },
          {
            day: 7,
            topic: "Document Object Model (DOM) in Javascript",
            link: "https://youtu.be/vzuOQnfOk2I",
          },
        ],
      },
      {
        week: "4",
        totalLectures: "30",
        project: {
          name: "Image Slider using VanillaJS",
          link: "https://youtu.be/sxq-8qv2i1Q",
        },
        lectures: [
          {
            day: 1,
            topic: "DOM manipulation in Javascript",
            link: "https://youtu.be/5fb2aPlgoys",
          },
          {
            day: 2,
            topic: "Event listener Javascript",
            link: "https://youtu.be/XF1_MlZ5l6M",
          },
        ],
      },
    ],
  },

  //ReactJS
  {
    _id: 5,
    course: "ReactJs",
    icon: require("../assets/course/react.png"),
    duration: "21 days",
    weeks: [
      {
        week: "1",
        totalLectures: "30",
        project: {
          name: "Calculator in ReactJS",
          link: "https://youtu.be/hpfDRnijdPE",
        },
        lectures: [
          {
            day: 1,
            topic: "Introduction to ReactJs",
            link: "https://youtu.be/N3AkSS5hXMA",
          },
          {
            day: 2,
            topic: "Setting up ReactJs",
            link: "https://youtu.be/tg73NsiQOUE",
          },
          {
            day: 3,
            topic: "Components in ReactJs",
            link: "https://youtu.be/YcXVT2udeu8",
          },
          {
            day: 4,
            topic: "Props in ReactJs",
            link: "https://youtu.be/xvm3X1oyTL8",
          },
          {
            day: 5,
            topic: "Map,List & Keys in ReactJs",
            link: "https://youtu.be/0sasRxl35_8",
          },
          {
            day: 6,
            topic: "States in ReactJs",
            link: "https://youtu.be/leBpCqU8wdg",
          },
          {
            day: 7,
            topic: "Conditional Rendering in ReactJs",
            link: "https://youtu.be/7o5FPaVA9m0",
          },
        ],
      },
      {
        week: "2",
        totalLectures: "30",
        project: {
          name: "To-DO in ReactJS",
          link: "https://youtu.be/dD0MdMRVHoo",
        },
        lectures: [
          {
            day: 1,
            topic: "Folder Structure",
            link: "https://youtu.be/uqKoqcO08ho",
          },
          {
            day: 2,
            topic: "Forms in ReactJs",
            link: "https://youtu.be/7Vo_VCcWupQ",
          },
          {
            day: 3,
            topic: "Controlled vs Uncontrolled Forms",
            link: "https://youtu.be/c0fcKnSwbfo",
          },
          {
            day: 4,
            topic: "Third party packages",
            link: "https://youtu.be/1ZoerwarTh8",
          },
          {
            day: 5,
            topic: "Higher order component",
            link: "https://youtu.be/VtSzJn41LgM",
          },
          {
            day: 6,
            topic: "React-Router",
            link: "https://youtu.be/Ul3y1LXxzdU",
          },
          {
            day: 7,
            topic: "Fetch & Axios",
            link: "https://youtu.be/rpg1jOvGCtQ",
          },
        ],
      },
      {
        week: "",
        totalLectures: "30",
        project: {
          name: "Weather App in ReactJS",
          link: "https://youtu.be/_UXycMmVYj0",
        },
        lectures: [
          {
            day: 1,
            topic: "Introduction to Hooks",
            link: "https://youtu.be/LlvBzyy-558",
          },
          {
            day: 2,
            topic: "Forms using Hooks",
            link: "https://youtu.be/iAar7vpPMCo",
          },
          {
            day: 3,
            topic: "Fetching data using hooks",
            link: "https://youtu.be/bYFYF2GnMy8",
          },
          {
            day: 4,
            topic: "Custom hooks",
            link: "https://youtu.be/6ThXsUwLWvc",
          },
          {
            day: 5,
            topic: "UseState/UseEffect in react",
            link: "https://youtu.be/iEVcCdbF1WQ",
          },
          {
            day: 6,
            topic: "Use Context in react",
            link: "https://youtu.be/5LrDIWkK_Bc",
          },
          {
            day: 7,
            topic: "useRef in React",
            link: "https://youtu.be/t2ypzz6gJm0",
          },
        ],
      },
    ],
  },

  //python
  {
    _id: 6,
    course: "Python",
    icon: require("../assets/course/python.png"),
    duration: "1 Month",
    // comingSoon: true,
    weeks: [
      {
        week: "1",
        totalLectures: "30",
        project: {
          name: "Convert List of Tuple into Dictionary",
          link: "https://youtu.be/v535xoe7uPc",
        },
        lectures: [
          {
            day: 1,
            topic: "Introduction to Python",
            link: "https://youtu.be/DWgzHbglNIo",
          },
          {
            day: 2,
            topic: "Variables built in functions",
            link: "https://youtu.be/TqPzwenhMj0",
          },
          {
            day: 3,
            topic: "Operators",
            link: "https://youtu.be/v5MR5JnKcZI",
          },
          {
            day: 4,
            topic: "Strings",
            link: "https://youtu.be/lPZn7zcGXQo",
          },
          {
            day: 5,
            topic: "Lists",
            link: "https://youtu.be/Eaz5e6M8tL4",
          },
          {
            day: 6, 
            topic: "Tuples & Sets",
            link: "https://youtu.be/Mf7eFtbVxFM",
          },
          {
            day: 7,
            topic: "Dictionaries",
            link: "https://youtu.be/2IsF7DEtVjg",
          },
        ],
      },
      {
        week: "2",
        totalLectures: "30",
        project: {
          name: "Printing Pattern",
          link: "https://youtu.be/k8SXsT5TLxQ",
        },
        lectures: [
          {
            day: 1,
            topic: "Conditionals",
            link: "https://youtu.be/PqFKRqpHrjw",
          },
          {
            day: 2,
            topic: "Loops",
            link: "https://youtu.be/94UHCEmprCY",
          },
          {
            day: 3,
            topic: "Functions",
            link: "https://youtu.be/BVfCWuca9nw",
          },
          {
            day: 4,
            topic: "Modules",
            link: "https://youtu.be/1RuMJ53CKds",
          },
          {
            day: 5,
            topic: "List comprehension",
            link: "https://youtu.be/AhSvKGTh28Q",
          },
          {
            day: 6, 
            topic: "Higher order functions",
            link: "https://youtu.be/IEjDRzookFU",
          },
          {
            day: 7,
            topic: "Python type errors",
            link: "https://youtu.be/6SPDvPK38tw",
          },
        ],
      },
      {
        week: "3",
        totalLectures: "30",
        project: {
          name: "Project in python using File Handling",
          link: "https://youtu.be/A1IKrFY5Xiw",
        },
        lectures: [
          {
            day: 1,
            topic: "Python date time",
            link: "https://youtu.be/mHezNgNBnuA",
          },
          {
            day: 2,
            topic: "Exception handling",
            link: "https://youtu.be/6SPDvPK38tw",
          },
          {
            day: 3,
            topic: "Regular expressions",
            link: "https://youtu.be/g8u0wLvvPSs",
          },
          {
            day: 4,
            topic: "File handling",
            link: "https://youtu.be/aequTxAvQq4",
          },
          {
            day: 5,
            topic: "Python package manager",
            link: "https://youtu.be/TIt2EOuC-Bo",
          },
          {
            day: 6, 
            topic: "Classes and objects",
            link: "https://youtu.be/8O5kX73OkIY",
          },
          {
            day: 7,
            topic: "Web scraping",
            link: "https://youtu.be/O6nnVHPjcJU",
          },
        ],
      },
      {
        week: "4",
        totalLectures: "30",
        project: {
          name: "AI Desktop Voice Assistant",
          link: "https://youtu.be/Lp9Ftuq2sVI",
        },
        lectures: [
          {
            day: 1,
            topic: "Virtual environment",
            link: "https://youtu.be/Lah7WGW6exg",
          },
          {
            day: 2,
            topic: "Statistics",
            link: "https://youtu.be/mQ-3KwrBIN0",
          },
          {
            day: 3,
            topic: "Pandas",
            link: "https://youtu.be/UB3DE5Bgfx4",
          },
          {
            day: 4,
            topic: "Python web",
            link: "https://youtu.be/zuxzE7--RYM",
          },
          {
            day: 5,
            topic: "Python with mongodb",
            link: "https://youtu.be/rvXhj-FyzcE",
          },
          {
            day: 6, 
            topic: "API",
            link: "https://youtu.be/0sOvCWFmrtA",
          },
          {
            day: 7,
            topic: "Building API",
            link: "https://youtu.be/Jzv3G5iDLvw",
          },
        ],
      }
    ],
  },

  //mongoDB
  {
    _id: 7,
    course: "MongoDB",
    icon: require("../assets/course/database.png"),
    duration: "1 Month",
    comingSoon: true,
    weeks: [
      {
        week: "1",
        totalLectures: "30",
        project: {
          name: "XYZ website",
          link: "xyz.com",
        },
        lectures: [
          {
            day: 1,
            topic: "Introduction to MongoDB",
            link: "xyz.com",
          },
        ],
      },
    ],
  },
];
