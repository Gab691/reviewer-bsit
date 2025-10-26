'use client';

import { BookOpen, Cpu, Network, History, Wrench, Calculator, Computer, MonitorCog, Cable } from 'lucide-react';

const introToComputing = [
    {
      id: 'history',
      title: 'History & Generations of Computers',
      icon: History,
      content: [
            {
            subtitle: 'Notable Innovators',
            items: [
                'Abacus (2400 B.C.) - First calculating device invented in Babylonia; used in China (500 B.C.)',
                'John Napier - Invented logarithms and Napier\'s Bones for multiplication/division',
                'William Oughtred - Invented slide rule using Napier\'s concept; used until mid-1970s',
                'Blaise Pascal (Age 19) - Created Pascaline with gears (0-9); Pascal language named after him',
                'Gottfried Leibniz - Invented Leibniz\'s Wheel/Step Reckoner (add, subtract, multiply, divide)',
                'Joseph Marie Jacquard - Created programmable loom with punched cards',
                'Charles Babbage - "Father of Modern Computer"; designed Difference Engine & Analytical Engine',
                'Augusta Ada Lovelace (1843) - First computer programmer; annotated Analytical Engine paper',
                'Herman Hollerith (1887) - Created Punched Card Tabulating Machine for census',
                'Dr. John Atanasoff & Clifford Berry - Built ABC; first electronic computer with binary math',
                'Dr. Howard Aiken (1944) - Built Mark I with 3000+ relays; first electro-mechanical computer',
                'Rear Admiral Grace Hopper - Programmed Mark I; found first "bug" (dead moth)',
                'Eckert & Mauchly - Created ENIAC (1946) & UNIVAC (first mass-produced computer)',
                'Bardeen, Brattain, Shockley (1948) - Invented transistor at Bell Labs',
                'Alan Turing - Designed Colossus for code breaking (WWII)',
                'Modern Era: Bill Gates, Steve Jobs, Mark Zuckerberg'
            ]
            },
            {
            subtitle: 'Five Generations of Computers',
            items: [
                '1st Generation (1946-1956): Vacuum Tubes - ENIAC, UNIVAC; 2,000-16,000 operations/sec',
                '2nd Generation (1959-1965): Transistors - Smaller, faster; 6,000-300,000 ops/sec',
                '3rd Generation (1965-1972): Integrated Circuits - Multiple transistors on silicon; 100,000-400M ops/sec',
                '4th Generation (1972-present): Microprocessors - LSI/VLSI chips; 500,000-1B+ ops/sec',
                '5th Generation: Artificial Intelligence - ULSI technology, natural language processing'
            ]
            },
            {
            subtitle: 'Historical Milestones',
            items: [
                '1937 - Atanasoff-Berry Computer (ABC) designed',
                '1943 - Colossus built by Alan Turing (code breaking)',
                '1945 - Von Neumann architecture',
                '1946 - ENIAC completed (30 tons, 18,000 vacuum tubes)',
                '1947 - Transistor invented',
                '1951 - UNIVAC I (first commercial computer)',
                '1957 - FORTRAN programming language; IBM 305 RAMAC (magnetic disk)',
                '1958 - Integrated circuit invented by Jack Kilby',
                '1960 - COBOL developed by Grace Hopper\'s committee',
                '1964 - Douglas Engelbart shows mouse & GUI prototype',
                '1965 - BASIC programming language',
                '1968 - Structured programming; 8-inch floppy disk',
                '1969 - ARPANET established (later became Internet)',
                '1970 - LSI chips (15,000 circuits)',
                '1971 - Intel 4004 microprocessor',
                '1975 - Ethernet LAN developed at Xerox PARC',
                '1976 - Apple computer by Jobs & Wozniak',
                '1980 - MS-DOS by Bill Gates',
                '1981 - First computer virus (Elk Cloner)',
                '1984 - Apple Macintosh with GUI',
                '1989 - Nintendo Game Boy',
                '1991 - World Wide Web standards released',
                '1994 - Yahoo! founded',
                '1995 - Java programming language',
                '1998 - Google incorporated',
                '2001 - Wikipedia introduced',
                '2004 - Facebook founded; Firefox browser; USB flash drives popular',
                '2005 - YouTube founded',
                '2008 - Google Chrome released',
                '2009 - Intel Core i5 & i7 processors'
            ]
            }
        ]
    },
    {
      id: 'system-unit',
      title: 'Components of System Unit',
      icon: Cpu,
      content: [
            {
            subtitle: 'Motherboard Components',
            items: [
                'Motherboard - Main circuit board connecting all components',
                'Processor Socket - Holds CPU (e.g., Socket 775, LGA)',
                'RAM Slots - For memory modules',
                'BIOS - Basic Input/Output System (ROM chip)',
                'CMOS - Stores configuration settings, powered by battery',
                'Chipset - NorthBridge (memory controller) and SouthBridge (I/O controller)',
                'Expansion Slots - PCI, AGP for adapter cards',
                'Drive Bays - 3.5" and 5.25" for storage devices'
            ]
            },
            {
            subtitle: 'Processor (CPU)',
            items: [
                'Brain of computer - interprets and executes instructions',
                'Control Unit - directs and coordinates operations',
                'Arithmetic Logic Unit (ALU) - performs calculations',
                'Machine Cycle: Fetch → Decode → Execute → Store',
                'Clock Speed - measured in GHz (gigahertz)',
                'Multi-core: Dual-core, Quad-core processors',
                'Leading manufacturers: Intel and AMD',
                'Cooling: Heat sinks, liquid cooling technology'
            ]
            },
            {
            subtitle: 'Memory Hierarchy & Details',
            items: [
                'Primary Memory (Main Memory):',
                '  • Semiconductor memories; volatile (except ROM)',
                '  • Working memory; faster than secondary',
                '  • Computer cannot run without it',
                '  • Data lost when power off (RAM)',
                'RAM (Random Access Memory) - Volatile:',
                '  • DRAM (Dynamic RAM)',
                '  • SRAM (Static RAM)',
                '  • MRAM (Magnetoresistive RAM)',
                '  • Installed on memory modules in slots',
                '  • Can be changed, upgraded, expanded easily',
                'ROM (Read-Only Memory) - Non-volatile:',
                '  • Permanent storage, cannot be changed by users',
                '  • Contains BIOS, boot-up instructions',
                '  • PROM (Programmable ROM) - written once',
                '  • EEPROM - Can be erased electronically',
                'Cache Memory:',
                '  • Very high-speed buffer between CPU and RAM',
                '  • Stores frequently used data/instructions',
                'Flash Memory:',
                '  • Electronically erasable and rewritable',
                '  • Solid-state storage (no moving parts)',
                '  • Used in USB drives, memory cards',
                'Secondary Memory (Storage):',
                '  • Magnetic and optical memories',
                '  • Non-volatile; permanent storage',
                '  • Slower than primary memory',
                '  • Computer can run without it'
            ]
            },
            {
            subtitle: 'Data Representation',
            items: [
                'Binary System - Uses 0 and 1',
                'Bit - Smallest unit of data',
                'Byte - 8 bits (represents one character)',
                'ASCII - American Standard Code for Information Interchange',
                'Memory sizes: KB → MB → GB → TB'
            ]
            },
            {
            subtitle: 'Ports & Connectors',
            items: [
                'USB Port - Connects up to 127 devices',
                'FireWire Port - High-speed data transfer',
                'Bluetooth Port - Wireless connection',
                'SCSI Port - For multiple hard drives',
                'eSATA Port - External SATA',
                'HDMI/VGA - Video connections',
                'Audio Jacks - Input/output for sound'
            ]
            },
            {
            subtitle: 'Power Supply Details',
            items: [
                'Power Supply Unit (PSU) - Converts AC (110-115V or 220-230V) to DC',
                'ATX Standard - Industry specification for modern PCs',
                'Wattage Considerations:',
                '  • AGP card: 20-30W',
                '  • PCI card: 5W',
                '  • SCSI PCI card: 20-25W',
                '  • Network card: 4W',
                '  • CD-ROM drive: 10-25W',
                '  • RAM: 10W per 128MB',
                '  • IDE HDD (5200 RPM): 5-11W',
                '  • IDE HDD (7200 RPM): 5-15W',
                '  • Motherboard (no CPU/RAM): 20-30W',
                '  • Pentium III (550 MHz): 30W',
                '  • Celeron (300 MHz): 18W',
                '  • Athlon (600 MHz): 45W',
                'Note: Don\'t load PSU to 100% capacity'
            ]
            },
            {
            subtitle: 'Removable Flash Memory Devices',
            items: [
                'Memory Cards - Small (≤1.5" height/width); used in cameras, phones, game consoles',
                'USB Flash Drives - Plugs into USB port; portable storage',
                'PC Card - Credit card-sized; for wireless Internet access on notebooks',
                'ExpressCard - Half the size of PC Card; adds memory, communications, multimedia capabilities',
                'ExpressCard vs PC Card:',
                '  • ExpressCard is successor to PC Card',
                '  • Originally for laptop storage expansion',
                '  • Used in early DSLR cameras',
                '  • Contains network adapters, SSDs, HDDs, sound cards, modems'
            ]
            },
            {
            subtitle: 'Other Adapter Cards & Components',
            items: [
                'Sound Card - Audio input/output signals',
                'Video Card - Enhances display quality; can be built-in or separate',
                'Network Card - Enables network connectivity',
                'Adapter Cards - Circuit boards that enhance functions and provide peripheral connections'
            ]
            }
        ]
    },
    {
      id: 'software',
      title: 'Computer Software',
      icon: BookOpen,
      content: [
        {
          subtitle: 'Application Software Categories',
          items: [
            '1. Business Software',
            '  • Word Processing (MS Word, Google Docs)',
            '  • Spreadsheet (Excel, Google Sheets)',
            '  • Database (MS Access)',
            '  • Presentation (PowerPoint, Google Slides)',
            '  • Project Management (Asana, Trello)',
            '  • Accounting (QuickBooks)',
            '2. Graphics & Multimedia',
            '  • CAD Software',
            '  • Photo/Video Editing',
            '  • Desktop Publishing',
            '3. Home/Personal/Educational',
            '  • Personal Finance',
            '  • Educational Software',
            '  • Entertainment',
            '4. Communications',
            '  • Web Browsers, Email, Instant Messaging'
          ]
        },
        {
          subtitle: 'Software Distribution Forms',
          items: [
            'Packaged Software - Collection of programs (MS Office)',
            'Custom Software - Made for specific needs',
            'Web Application - Runs in browser',
            'Open Source Software (OSS) - Source code freely available (Linux, Firefox)',
            'Freeware - 100% free, closed source (Adobe PDF)',
            'Shareware - Trial/demo version (WinZip)',
            'Public Domain - No copyright restrictions'
          ]
        },
        {
          subtitle: 'Word Processing Features',
          items: [
            'AutoCorrect & AutoFormat',
            'Spell Check & Grammar Checker',
            'Track Changes & Collaboration',
            'Mail Merge',
            'Templates & Styles',
            'Tables & Columns',
            'Search & Replace'
          ]
        },
        {
          subtitle: 'Spreadsheet Functions',
          items: [
            'Common Functions: SUM, AVERAGE, COUNT, MAX, MIN',
            'Financial: PMT, PV, FV, RATE',
            'Math: ABS, ROUND, SQRT',
            'Logical: IF',
            'Date/Time: DATE, NOW, TIME',
            'Charting - Visual data representation'
          ]
        }
      ]
    },
    {
      id: 'networks',
      title: 'Communications & Networks',
      icon: Network,
      content: [
        {
          subtitle: 'Network Types',
          items: [
            'LAN (Local Area Network) - Limited geographical area',
            'WLAN (Wireless LAN) - No physical wires',
            'MAN (Metropolitan Area Network) - Connects LANs in metro area',
            'WAN (Wide Area Network) - Large geographic area',
            'PAN (Personal Area Network) - Individual workspace'
          ]
        },
        {
          subtitle: 'Network Architecture',
          items: [
            'Client/Server - Central server manages resources',
            'Peer-to-Peer - All computers have equal status'
          ]
        },
        {
          subtitle: 'Network Standards & Protocols',
          items: [
            'Ethernet - No central controller',
            'Token Ring - Pass special signal',
            'TCP/IP - Routes messages across network',
            'Wi-Fi (802.11) - Wireless standard',
            'Bluetooth - Short-range wireless',
            'LTE - High-speed cellular',
            'NFC - Near field communication',
            'RFID - Radio frequency identification',
            'IrDA - Infrared transmission'
          ]
        },
        {
          subtitle: 'Communications Devices',
          items: [
            'Modem - Sends/receives data (Cable, DSL, Wireless)',
            'Router - Connects multiple devices, transmits data',
            'Wireless Access Point (WAP) - Central wireless hub',
            'Network Card - Enables network access',
            'Hub/Switch - Central connection point'
          ]
        },
        {
          subtitle: 'Transmission Media',
          items: [
            'Physical Media:',
            '  • Twisted-pair cable',
            '  • Coaxial cable',
            '  • Fiber-optic cable',
            'Wireless Media:',
            '  • Broadcast radio',
            '  • Cellular radio',
            '  • Microwaves',
            '  • Communications satellite',
            '  • GPS',
            'Bandwidth - Amount of data that can travel',
            'Latency - Signal travel time'
          ]
        }
      ]
    },
    {
      id: 'number-systems',
      title: 'Number Systems',
      icon: Calculator,
      content: [
        {
          subtitle: 'Number System Types',
          items: [
            'Binary (Base-2) - Uses 0, 1',
            'Octal (Base-8) - Uses 0-7',
            'Decimal (Base-10) - Uses 0-9',
            'Hexadecimal (Base-16) - Uses 0-9, A-F'
          ]
        },
        {
          subtitle: 'Conversion Methods',
          items: [
            'Decimal to Binary - Divide by 2, record remainders',
            'Binary to Decimal - Multiply by powers of 2',
            'Decimal to Hex - Divide by 16',
            'Binary to Hex - Group by 4 bits',
            'Applications: IP addresses, color codes, memory addresses'
          ]
        }
      ]
    },
    {
      id: 'safety',
      title: 'Safety & Tools',
      icon: Wrench,
      content: [
        {
          subtitle: 'Safety Precautions',
          items: [
            'Turn off and unplug before working',
            'Use anti-static wrist strap',
            'Avoid static electricity',
            'Keep work area clean and organized',
            'Handle components carefully',
            'Never force connections',
            'Proper ventilation required',
            'Keep liquids away from equipment'
          ]
        },
        {
          subtitle: 'PC Technician Tools',
          items: [
            'Screwdrivers (Phillips, Flathead)',
            'Pliers (Needle-nose)',
            'Anti-static wrist strap',
            'Compressed air',
            'Cable ties',
            'Multimeter',
            'Flashlight',
            'Toolkit organizer'
          ]
        },
        {
          subtitle: 'Cleaning Guidelines',
          items: [
            'Clean computer 1-2 times per year',
            'Use compressed air for dust',
            'Anti-static wipe for exterior',
            'Soft cloth and cleaning solution for screen',
            'Never use liquid directly on components'
          ]
        }
      ]
    },
    {
      id: 'applicationSoftware',
      title: 'Application Software',
      icon: Computer,
      content: [
          {
          subtitle: 'Objectives Overview',
          items: [
            "Identify the four categories of application software: Business, graphics/multimedia, home/personal/educational, communications.",
            "Differentiate among the seven forms through which software is available: Packaged, custom, web application, open source, shareware, freeware, public-domain.",
            "Explain how the operating system and utility programs work with application software: System software interfaces between user, applications, and hardware; utilities support application functions.",
            "Describe characteristics of a user interface: User-friendly design for interaction (e.g., menus, icons).",
            "Identify key features of widely used business programs: Word processing, spreadsheets, databases, presentations, note-taking, PIMs, project management, accounting, etc.",
            "Identify key features of widely used graphics and multimedia programs: CAD, desktop publishing, paint/image editing, photo editing, video/audio editing, multimedia authoring, web page authoring.",
            "Identify key features of widely used home, personal, and educational programs: Personal finance, legal, tax preparation, DTP, photo editing, clip art galleries, home design, travel/mapping, reference, educational, entertainment.",
            "Discuss advantages of and ways to access web applications: Accessible via internet; advantages include collaboration, updates, no installation needed.",
            "Identify types of application software used in communications: Web browsers, email, instant messaging, chat rooms, messaging, RSS, blogging, newsgroups, FTP, VoIP, video conferencing.",
            "Describe learning aids for application software: Online help, web-based help, web-based training (CBT), distance learning."
            ]
          },
          {
          subtitle: 'Key Summary',
          items: [
            "Application Software Definition: Programs designed to make users productive or assist with personal tasks. Categories: Efficient business activities, graphics/multimedia projects, home/personal/educational tasks, communications.",
            "Forms of Software: Packaged (commercial), custom (tailored), web apps (online), open source (free code), shareware (trial), freeware (free), public-domain (no copyright).",
            "System Integration: Application software interacts with OS and utilities (e.g., antivirus) via the system software interface.",
            "Business Software: Includes word processing (e.g., AutoCorrect, mail merge), spreadsheets (formulas like SUM, charts), databases (data organization), presentations (visual aids), note-taking, PIMs (calendar, address book), mobile versions, project/accounting/document management, enterprise solutions (HR, marketing).",
            "Graphics/Multimedia Software: CAD for design, desktop publishing, image editing, professional photo/video/audio tools, multimedia authoring, web page authoring.",
            "Home/Personal/Educational Software: Finance/legal/tax tools, DTP/image editing, clip art, video/audio editing, home design, travel/reference/educational/entertainment apps.",
            "Web Applications: Internet-based software for interaction (e.g., Google Docs).",
            "Communications Software: Tools for web browsing, email, messaging, etc.",
            "Learning Tools: Online help (manuals/search), web-based help (updates), web-based training (CBT/DL).",
            "Developing Documents: Create (enter text/images), edit (changes/cut-paste), format (font/size).",
            "Other Key Features: Clip art collections, functions in spreadsheets (e.g., FV, SUM), database management."
            ]
          },
          {
          subtitle: 'Important Terms',
          items: [
            "Clip Art: Electronic images/drawings.",
            "Function: Predefined formula (e.g., AVERAGE, MAX).",
            "Software Suite: Bundled programs (e.g., Microsoft Office).",
            "PIM: Personal Information Manager (calendar, notepad).",
            "Web Application: Online software accessible via devices.",
            "Online Help: Electronic user manual."
            ]
          },
          {
          subtitle: 'Review Questions',
          items: [
            "What are the four main categories of application software? (Short Answer)",
            "Differentiate between shareware and freeware. (Compare)",
            "How does spreadsheet software use functions and charting? (Explain with examples)",
            "List three types of graphics/multimedia software and their purposes. (List)",
            "What advantages do web applications offer over traditional software? (Discuss)"
            ]
          }
      ]
    },
    {
      id: 'systemUnit',
      title: 'The Components of the System Unit',
      icon: MonitorCog,
      content: [
            {
            subtitle: 'Objectives Overview',
            items: [
              "Differentiate among various styles of system units on desktop computers, notebook computers, and mobile devices: Tower, all-in-one, laptop, tablet/handheld variations.",
              "Identify chips, adapter cards, and other components of a motherboard: Processor, memory, expansion slots, buses.",
              "Describe the control unit and arithmetic logic unit components of a processor, and explain the four steps in a machine cycle: Fetch, decode, execute, store.",
              "Identify characteristics of various personal computer processors on the market today, and describe the ways processors are cooled: Multi-core, clock speed; cooling via fans/heatsinks/liquid.",
              "Define a bit and describe how a series of bits represents data: Binary digit (0/1); bytes represent characters/data.",
              "Explain how program instructions transfer in and out of memory: Via buses and registers.",
              "Differentiate among the various types of memory: RAM, ROM, cache, flash.",
              "Describe the purpose and types of expansion slots and adapter cards, and differentiate among slots for various removable flash memory devices: PCI, USB; for graphics/sound/storage.",
              "Differentiate between a port and a connector, and explain the differences among various ports (USB, FireWire, Bluetooth, SCSI, eSATA, IrDA, serial, MIDI): Ports connect devices; vary in speed/data transfer.",
              "Describe the types of buses in a computer: System bus, expansion bus.",
              "Explain the purpose of a power supply and describe how it keeps cool: Converts AC to DC; fans for cooling.",
              "Understand how to clean a system unit on a computer or mobile device: Use compressed air, avoid liquids."
              ]
            },
            {
            subtitle: 'Key Summary',
            items: [
              "System Unit Definition: Case containing electronic components for processing data (e.g., in desktops, laptops, mobiles).",
              "Motherboard Components: Chips (processor/CPU), adapter cards (expansion), other (memory slots).",
              "Processor: Control Unit (directs operations), ALU (math/logic). Machine Cycle: Fetch (get instruction), Decode (interpret), Execute (perform), Store (save result). Supports pipelining for efficiency. Registers hold temporary data; system clock times operations in GHz.",
              "Processors Today: Intel/AMD, multi-core (dual/quad); cooled by heatsinks/fans/liquid. Parallel processing uses multiple processors.",
              "Data Representation: Bit (binary), byte (8 bits = character). ASCII coding scheme. Analog vs. digital signals.",
              "Memory: Stores instructions, data, results. Volatile (RAM - loses on power off), nonvolatile (ROM, flash, CMOS - retains). RAM types: DRAM (dynamic), SRAM (static), MRAM. Modules insert into slots. Cache speeds access (L1, L2, L3). Access time in nanoseconds. Sizes: KB, MB, GB, TB.",
              "Expansion: Slots/cards for adding capabilities (sound, video); flash memory (cards, USB drives, PC Cards). Plug and Play auto-configures.",
              "Ports/Connectors: USB (up to 127 devices, hubs), FireWire, Bluetooth (wireless), eSATA, IrDA (infrared), serial, MIDI. Port replicators/docking stations for mobiles.",
              "Buses: Pathways for data (data/address bus); expansion types (PCI, PCIe, AGP, USB/FireWire, PC Card). Word size affects processing.",
              "Bays: Openings for drives.",
              "Power Supply: Converts AC to DC; AC adapters for peripherals.",
              "Putting It Together: Recommendations for home, office, mobile, power, enterprise users.",
              "Cleaning: Clean 1-2 times/year with compressed air, antistatic wipes."
              ]
            },
            {
              subtitle: 'Important Terms',
              items: [
                "System Unit: Hardware case for processing.",
                "Motherboard: Main circuit board.",
                "ALU: Arithmetic Logic Unit.",
                "Machine Cycle: Fetch-Decode-Execute-Store.",
                "Bit/Byte: Basic data units.",
                "RAM/ROM: Volatile/nonvolatile memory.",
                "Cache: Fast memory for frequent data.",
                "Expansion Slot/Card: For adding hardware.",
                "Port: Connection interface (e.g., USB).",
                "Bus: Data pathway.",
                "Power Supply: AC to DC converter."
              ]
            },
            {
              subtitle: 'Review Questions',
              items: [
                "What are the four steps in a machine cycle? (List and explain)",
                "How do processors stay cool? (Describe methods)",
                "Differentiate between RAM and ROM. (Compare)",
                "Name three types of ports and their uses. (List)",
                "Why is the system unit important? (Short Answer)"
              ]
          }
        ]
      },
      {
        id: 'communicationsNetworks',
        title: 'Communicating Digital Content',
        icon: Cable,
        content: [
            {
              subtitle: 'Objectives Overview',
              items: [
                "Discuss the purpose of the components required for successful communications and identify various sending and receiving devices: Sending/receiving devices, transmission media.",
                "Differentiate among LANs, MANs, WANs, and PANs: Local (small area), Metro (city), Wide (large area), Personal (individual).",
                "Differentiate between client/server and peer-to-peer networks: Client/server (central server), P2P (equal nodes).",
                "Explain the purpose of communications software: Manages data transfer.",
                "Describe the various network communications standards and protocols: Ethernet, Wi-Fi, TCP/IP, etc.",
                "Describe various types of communications lines: Twisted-pair, coaxial, fiber-optic.",
                "Describe commonly used communications devices: Modems, routers, hubs.",
                "Discuss different ways to set up and configure a home network: Wired/wireless setups, routers.",
                "Differentiate among physical transmission media: Cable-based (e.g., Ethernet).",
                "Differentiate among wireless transmission media: Radio waves, infrared, satellite."
                ]
            },
            {
              subtitle: 'Key Summary',
              items: [
                "Communications Definition: Process where devices transfer data/instructions/info via sending device, transmission media, receiving device.",
                "Networks: Collection of connected devices for sharing resources. Advantages: Communications, hardware/data/software sharing, funds transfer. Types: LAN (local, e.g., building; WLAN wireless), MAN (metropolitan), WAN (wide area), PAN (personal). Architectures: Client/server (servers manage), P2P (peers equal).",
                "Communications Software: Helps establish connections, manage transmission, provide interface.",
                "Standards/Protocols: Ethernet (no central control), Token ring (pass token), TCP/IP (routing), Wi-Fi (802.11 wireless), LTE (cellular high-speed), Bluetooth (short-range radio), UWB (high-speed short-range), IrDA (infrared), RFID (radio tags), NFC (close-range RFID).",
                "Lines: Dedicated (always on), DSL (digital subscriber, ADSL asymmetric), ISDN, FTTP (fiber to premises), T-Carrier (business), ATM (asynchronous transfer mode).",
                "Devices: Broadband modems (cable/DSL), wireless modems, wireless access points (WAP), routers (direct traffic, types: wireless/broadband/mobile), network cards (enable networking), hubs/switches (central cable points).",
                "Home Networks: Connect multiple devices; use routers for sharing internet.",
                "Transmission Media: Physical (twisted-pair, coaxial, fiber-optic - high bandwidth/low error). Wireless (broadcast radio, cellular radio (mobile), microwaves (line-of-sight), communications satellites, GPS (global positioning). Bandwidth (data capacity), latency (delay)."
                ]
              },
              {
                subtitle: 'Important Terms',
                items: [
                  "Digital Communications: Device-to-device data transfer.",
                  "Transmission Media: Wired/wireless channels.",
                  "LAN/WAN: Network scales.",
                  "Protocol: Communication rules (e.g., TCP/IP).",
                  "Router: Directs network traffic.",
                  "Modem: Modulates signals for transmission.",
                  "Bandwidth: Data transfer rate.",
                  "Latency: Signal travel time.",
                  "GPS: Satellite-based navigation."
                ]
              },
              {
                subtitle: 'Review Questions',
                items: [
                  "What are the components of digital communications? (List)",
                  "Differentiate LAN from WAN. (Compare)",
                  "What is the purpose of communications software? (Explain)",
                  "Name two physical and two wireless transmission media. (List)",
                  "How do you set up a home network? (Steps)"
                ]
              }
        ]
      }
  ];

export default introToComputing;