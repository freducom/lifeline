// Timeline rendering script
const DATA = {
  "work_experience": [
    {
      "company": "Vaadin",
      "roles": [
        {
          "title": "Chief Marketing Officer",
          "date_span": {
            "start": "2025-08",
            "end": null
          },
          "description": ""
        },
        {
            "title": "VP of Marketing",
            "date_span": {
                "start": "2013-08",
                "end": "2018-08"
            },
            "description": ""
        },
        {
            "title": "VP of Sales",
            "date_span": {
                "start": "2011-12",
                "end": "2013-08"
            },
            "description": ""
        },
        {
            "title": "Key Account Manager",
            "date_span": {
                "start": "2008-11",
                "end": "2011-12"
            },
            "description": ""
        }
      ]
    },
    {
      "company": "Volumental",
      "roles": [
        {
          "title": "Chairperson of the Board",
          "date_span": {
            "start": "2025-04",
            "end": null
          },
          "description": "Volumental is a 3D foot scanner (in-store or iPhone/Android LiDAR) powered by the world's largest dataset of 3D foot scans and fit feedback, delivering accurate, brand-specific size recommendations. Multibrand retailers boost conversion by up to 20% and cut returns by 18% with AI-driven footwear size recommendations. The widget sits on product pages and delivers consistent fit guidance across brands."
        }
      ]
    },
    {
      "company": "Kundo Sverige",
      "roles": [
        {
          "title": "Chairperson of the Board",
          "date_span": {
            "start": "2021-01",
            "end": null
          },
          "description": "Kundo provides modern tools for digital customer service with a Nordic presence and offices in Stockholm and Oslo."
        }
      ]
    },
    {
      "company": "Refined",
      "roles": [
        {
          "title": "Chairperson of the Board",
          "date_span": {
            "start": "2022-05",
            "end": null
          },
          "description": "Refined is a site-building tool integrated with Atlassian Jira and Confluence, used to open up Confluence and Jira to new audiences and simplify the UX for existing users. Founded in 2009, serving 4,000+ customers internationally."
        }
      ]
    },
    {
      "company": "MCF Corporate Finance",
      "roles": [
        {
          "title": "Industry Adviser",
          "date_span": {
            "start": "2023-04",
            "end": null
          },
          "description": "Industry adviser within the technology team, working with Finland, Sweden, Germany, and the US through D.A. Davidson to connect companies with capital. MCF is an independent international corporate finance advisory firm with offices in Hamburg, Helsinki, Stockholm, and London; 500+ M&A references."
        }
      ]
    },
    {
      "company": "Bonalive Biomaterials",
      "roles": [
        {
          "title": "Board Member",
          "date_span": {
            "start": "2019-06",
            "end": null
          },
          "description": "Helping the world fight antibiotic resistance with Smart Healing™ solutions. Bonalive S53P4 bioglass is a bone cavity filler that inhibits bacterial growth and stimulates bone formation."
        }
      ]
    },
    {
      "company": "Hedengren",
      "roles": [
        {
          "title": "Board Member",
          "date_span": {
            "start": "2022-04",
            "end": null
          },
          "description": "Family-owned trading house in Security Technology, Building Technology, and Direct Sales since 1918, operating in Finland, Estonia, Sweden, and Norway via multiple subsidiaries."
        }
      ]
    },
    {
      "company": "Four Ferries",
      "roles": [
        {
          "title": "Advisor",
          "date_span": {
            "start": "2019-09",
            "end": null
          },
          "description": "eMathStudio: a mathematics e-learning platform supporting books, notes, editing, assignments, and automatic checking."
        }
      ]
    },
    {
      "company": "Directors'​ Institute Finland",
      "roles": [
        {
          "title": "Member",
          "date_span": {
            "start": "2021-08",
            "end": null
          },
          "description": "Raises awareness and advances good governance through influence, education, and networking."
        }
      ]
    },
    {
      "company": "Flipsite.io",
      "roles": [
        {
          "title": "Co-Founder",
          "date_span": {
            "start": "2019-06",
            "end": null
          },
          "description": "Modern website creator optimized for accessibility, speed, technical SEO, and Lighthouse scores."
        }
      ]
    },
    {
      "company": "Ecobio Oy",
      "roles": [
        {
          "title": "Board Member",
          "date_span": {
            "start": "2022-04",
            "end": "2025-09"
          },
          "description": "Ecobio Manager is a sustainability management and compliance tool for operations, products, and suppliers, including EU Taxonomy reporting."
        }
      ]
    },
    {
      "company": "Leadoo Marketing Technologies",
      "roles": [
        {
          "title": "Chief Executive Officer",
          "date_span": {
            "start": "2022-10",
            "end": "2025-06"
          },
          "description": "Led one of Europe's fastest growing MarTech companies. Helps identify more leads from websites. Company exited to SALESmanago in Nov 2024."
        },
        {
          "title": "Chief Operating Officer",
          "date_span": {
            "start": "2020-03",
            "end": "2022-10"
          },
          "description": "Operational leadership to scale product-led lead generation solutions."
        },
        {
          "title": "Interim CFO",
          "date_span": {
            "start": "2020-03",
            "end": "2022-06"
          },
          "description": "Responsible for two financing rounds and key financial reporting."
        },
        {
          "title": "Chairperson of the Board",
          "date_span": {
            "start": "2019-01",
            "end": "2022-10"
          },
          "description": "Guided board through rapid growth in online lead conversion."
        }
      ]
    },
    {
      "company": "Miradore",
      "roles": [
        {
          "title": "Board Member",
          "date_span": {
            "start": "2019-08",
            "end": "2022-09"
          },
          "description": "IT and mobile device asset management solutions for SMEs across iOS, Android, Windows, and macOS. Acquired by GoTo."
        }
      ]
    },
    {
      "company": "Future Board ry",
      "roles": [
        {
          "title": "Board Member",
          "date_span": {
            "start": "2021-03",
            "end": "2022-03"
          },
          "description": "Board network activities focused on developing future board professionals."
        },
        {
          "title": "Member",
          "date_span": {
            "start": "2020-01",
            "end": "2022-01"
          },
          "description": "Network member supporting knowledge sharing and growth into board roles."
        }
      ]
    },
    {
      "company": "City Digital Group",
      "roles": [
        {
          "title": "Board Member",
          "date_span": {
            "start": "2017-05",
            "end": "2020-06"
          },
          "description": "Helped scale brands like Suomi24, TableOnline, and more; monetization via programmatic (Improve Media); supported internationalization."
        }
      ]
    },
    {
      "company": "Valohai",
      "roles": [
        {
          "title": "Chief Growth Officer",
          "date_span": {
            "start": "2018-08",
            "end": "2020-03"
          },
          "description": "MLOps platform for automation and record-keeping across data/code/hyperparameters. Led growth at the intersection of Sales, Marketing, and Product."
        }
      ]
    },
    {
      "company": "Jobilla",
      "roles": [
        {
          "title": "Advisor & Investor",
          "date_span": {
            "start": "2017-06",
            "end": "2019-06"
          },
          "description": "Advisor to next-gen recruitment platform."
        }
      ]
    },
    {
      "company": "DigitalBooker",
      "roles": [
        {
          "title": "CEO & Founder",
          "date_span": {
            "start": "2007-07",
            "end": "2015-12"
          },
          "description": "Finland's leading online booking system with 5M+ bookings. Acquired by Visma in Dec 2015."
        }
      ]
    },
    {
      "company": "Oy Wecke Ab",
      "roles": [
        {
          "title": "Owner and Advisor",
          "date_span": {
            "start": "2001-01",
            "end": "2015-01"
          },
          "description": "Turnkey solutions for the foodstuff industry and promotional items; leading European agent for Chinese manufacturers."
        }
      ]
    },
    {
      "company": "Capgemini Finland Oy",
      "roles": [
        {
          "title": "Senior Consultant - Architect",
          "date_span": {
            "start": "2007-01",
            "end": "2008-11"
          },
          "description": "Project Manager for a 3-year transformation project delivered on schedule and below budget; roles in IT architecture and JavaEE implementation."
        }
      ]
    },
    {
      "company": "fredu.com",
      "roles": [
        {
          "title": "Owner",
          "date_span": {
            "start": "2004-01",
            "end": "2008-01"
          },
          "description": "Private entrepreneurship: hobby web design and IT infrastructure maintenance for SMEs."
        }
      ]
    },
    {
      "company": "Wärtsilä Ship Power",
      "roles": [
        {
          "title": "General Business Support",
          "date_span": {
            "start": "2006-05",
            "end": "2006-10"
          },
          "description": "Master's thesis on feasibility analysis and design of a Life Cycle Cost tool for ship engines; interviews and IS design."
        }
      ]
    },
    {
      "company": "Åbo Akademi University",
      "roles": [
        {
          "title": "Research assistant",
          "date_span": {
            "start": "2004-04",
            "end": "2004-09"
          },
          "description": "Research for Master's thesis on optimization of distributed energy systems using genetic algorithms and a visual optimization tool."
        }
      ]
    },
    {
      "company": "Silja Line",
      "roles": [
        {
          "title": "Sales person",
          "date_span": {
            "start": "2002-04",
            "end": "2003-07"
          },
          "description": "Customer service onboard MS Silja Opera across Finland–Estonia–Sweden–Latvia; responsible for liquor area, supplier contact, and sales."
        }
      ]
    }
  ],
  "education": [
    {
      "institution": "Åbo Akademi University",
      "programs": [
        {
          "degree": "Master of Science (Economics and Business Administration)",
          "field": "Information Systems",
          "minors": [
            "International Marketing",
            "Organization & Management"
          ],
          "date_span": {
            "start": "2002",
            "end": "2006"
          },
          "activities": [
            "Studentkårens Gym Roddis"
          ],
          "description": "Master's thesis: Life Cycle Cost Analysis for Marine Engines (Wärtsilä Ship Power) designing an IT system to calculate TCO/LCC and define cost structures.",
          "grades": {
            "average": "4/5"
          },
          "honors": [
            "Award for combining a year abroad with excellent progress in record time"
          ]
        },
        {
          "degree": "Master of Science (Engineering)",
          "field": "Software Engineering",
          "minors": [
            "Industrial Computer Engineering",
            "Industrial Economics & Management"
          ],
          "date_span": {
            "start": "2001",
            "end": "2004"
          },
          "activities": [
            "Kemistklubben vid Åbo Akademi r.f.",
            "Datateknologerna vid Åbo Akademi r.f."
          ],
          "description": "Master's thesis: Genetic Algorithms & Distributed Energy Systems; built a Swing Java UI with a C backend using GA and MINLP to optimize locations for CHP, Wind and Boiler plants.",
          "grades": {
            "average": "3.86/5.0"
          },
          "honors": [
            "Graduated in 3 years (mean time ~7 years)"
          ]
        }
      ]
    },
    {
      "institution": "Osaka University of Economics",
      "programs": [
        {
          "degree": "Exchange Studies",
          "field": "Japanese language, culture, history, philosophy, sociology",
          "date_span": {
            "start": "2004",
            "end": "2005"
          },
          "activities": [
            "Osaka University Golf Club"
          ],
          "description": "Full-year exchange focusing on language and social sciences.",
          "grades": {
            "average": "A (Highest possible)"
          }
        }
      ]
    },
    {
      "institution": "Finnish Navy",
      "programs": [
        {
          "degree": "Non-Commissioned Officer Training",
          "field": "NCO (Sergeant), Group Leading",
          "date_span": {
            "start": "2000",
            "end": "2001"
          },
          "activities": [
            "Elected Chairman coordinating conscripts' leisure time and liaison to base commander",
            "Representative for Finland at Conscript Committee Days (Värnpliktskongressen 2001, Piteå; Landskonferanssen 2001, Evjemoen)"
          ],
          "description": "Conscription service with leadership responsibilities.",
          "grades": {
            "physical": "Excellent",
            "general": "Excellent"
          },
          "honors": [
            "Diploma for serving exceptionally well"
          ]
        }
      ]
    },
    {
      "institution": "Katedralskolan i Åbo",
      "programs": [
        {
          "degree": "Gymnasium",
          "field": "Gymnasium",
          "date_span": {
            "start": "1998",
            "end": "2000"
          }
        }
      ]
    },
    {
      "institution": "St Olofsskolan",
      "programs": [
        {
          "degree": "Highschool",
          "field": "Highschool",
          "date_span": {
            "start": "1995",
            "end": "1997"
          }
        }
      ]
    },
    {
      "institution": "Cygnaeus",
      "programs": [
        {
          "degree": "Elementary School",
          "field": "Elementary School",
          "date_span": {
            "start": "1988",
            "end": "1995"
          }
        }
      ]
    }
  ],
  "licenses_and_certifications": [
    {
      "name": "Certified Board Member (Hallituksen Hyväksytty Jäsen HHJ)",
      "issuer": "Keskuskauppakamari (Finland Chamber of Commerce)",
      "issue_date": "2019-11",
      "credential_id": null,
      "description": null
    },
    {
      "name": "Deep Learning Specialization",
      "issuer": "Coursera",
      "issue_date": "2018-06",
      "credential_id": "GHM2BB9XRSED",
      "description": null
    },
    {
      "name": "Sequence Models",
      "issuer": "Coursera",
      "issue_date": "2018-06",
      "credential_id": "WNSQ3U5V85FQ",
      "description": null
    },
    {
      "name": "Convolutional Neural Networks",
      "issuer": "Coursera",
      "issue_date": "2018-05",
      "credential_id": "F3AMZ5DSYSE2",
      "description": null
    },
    {
      "name": "Improving Deep Neural Networks: Hyperparameter tuning, Regularization and Optimization",
      "issuer": "Coursera",
      "issue_date": "2018-04",
      "credential_id": "DFQZU2CRPQXW",
      "description": null
    },
    {
      "name": "Structuring Machine Learning Projects",
      "issuer": "Coursera",
      "issue_date": "2018-04",
      "credential_id": "QR33VUZFJ5XT",
      "description": null
    },
    {
      "name": "Neural Networks and Deep Learning",
      "issuer": "Coursera",
      "issue_date": "2018-03",
      "credential_id": "NPU26KUM8SLT",
      "description": null
    },
    {
      "name": "Machine Learning",
      "issuer": "Coursera",
      "issue_date": "2018-02",
      "credential_id": null,
      "description": null
    },
    {
      "name": "Pragmatic Marketing Foundation, Market & Launch",
      "issuer": "Pragmatic Institute",
      "issue_date": "2018-01",
      "credential_id": null,
      "description": null
    },
    {
      "name": "Vaadin 7 Certified Developer",
      "issuer": "Vaadin",
      "issue_date": "2014-03",
      "credential_id": null,
      "description": null
    },
    {
      "name": "Training Programme for Finnish Executives \"Hong Kong – the gateway to the China market\"",
      "issuer": "The Chinese University of Hong Kong",
      "issue_date": "2002-04",
      "credential_id": null,
      "description": null
    }
  ],
  "residence_history": [
    {
      "location": "Turku, Finland",
      "date_span": {
        "start": "1981-03-30",
        "end": "1982"
      }
    },
    {
      "location": "Tampere, Finland",
      "date_span": {
        "start": "1982",
        "end": "1983"
      }
    },
    {
      "location": "Turku, Finland",
      "date_span": {
        "start": "1983",
        "end": "2004"
      }
    },
    {
      "location": "Japan",
      "date_span": {
        "start": "2004",
        "end": "2005"
      }
    },
    {
      "location": "Turku, Finland",
      "date_span": {
        "start": "2005",
        "end": "2016"
      }
    },
    {
      "location": "California, USA",
      "date_span": {
        "start": "2016",
        "end": "2018"
      }
    },
    {
      "location": "Turku, Finland",
      "date_span": {
        "start": "2018",
        "end": null
      }
    }
  ]
};

const TYPE_COLORS = {
  work_experience: ["#1877f2", "#42b883", "#36cfc9", "#722ed1", "#eb2f96", "#f5222d", "#fa541c", "#fa8c16", "#faad14", "#a0d911", "#52c41a", "#13c2c2", "#1890ff", "#2f54eb"], // Facebook blue and modern accent colors
  residence_history: ["#1c1e21", "#e4e6ea"], // dark gray and light gray - alternating
  education: ["#faad14", "#ffc53d", "#ffd666", "#ffe58f", "#fff1b8"], // modern warm yellows
  licenses_and_certifications: ["#f5222d"], // modern red
};

function parseDate(str, fallbackYear) {
  if (!str) return null;
  // Accept YYYY-MM-DD, YYYY-MM, YYYY
  const parts = str.split('-');
  let year = parseInt(parts[0], 10);
  let month = parts[1] ? parseInt(parts[1], 10) : 1;
  let day = parts[2] ? parseInt(parts[2], 10) : 1;
  if (isNaN(year)) year = fallbackYear;
  return new Date(year, month - 1, day);
}

function getWeekNumber(date) {
  // ISO week number
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
  return Math.ceil((((d - yearStart) / 86400000) + 1)/7);
}

function getFirstYear(data) {
  let years = [];
  function addYear(str) {
    if (!str) return;
    const y = parseInt(str.split('-')[0], 10);
    if (!isNaN(y)) years.push(y);
  }
  // Work experience
  data.work_experience.forEach(w => w.roles.forEach(r => addYear(r.date_span.start)));
  // Residence history
  data.residence_history.forEach(r => addYear(r.date_span.start));
  // Education
  data.education.forEach(e => e.programs.forEach(p => addYear(p.date_span.start)));
  // Licenses
  data.licenses_and_certifications.forEach(l => addYear(l.issue_date));
  return Math.min(...years);
}

function getEventsByWeek(data, firstYear, lastYear) {
  // Map: year -> week -> array of events
  const events = {};
  for (let y = firstYear; y <= lastYear; y++) {
    events[y] = Array.from({length: 52}, () => []);
  }
  
  // Track residence changes for alternating colors
  let residenceColorIndex = 0;
  let lastResidenceLocation = null;
  
  // Helper to add event
  function addEvent(type, obj, startStr, endStr, extra) {
    const start = parseDate(startStr, firstYear);
    const end = endStr ? parseDate(endStr, firstYear) : new Date();
    let y = start.getFullYear(), w = getWeekNumber(start);
    let yEnd = end.getFullYear(), wEnd = getWeekNumber(end);
    // Clamp to timeline
    if (y < firstYear) { y = firstYear; w = 1; }
    if (yEnd > lastYear) { yEnd = lastYear; wEnd = 52; }
    // Fill weeks
    for (let year = y; year <= yEnd; year++) {
      let weekStart = (year === y) ? w : 1;
      let weekEnd = (year === yEnd) ? wEnd : 52;
      for (let week = weekStart; week <= weekEnd; week++) {
        if (events[year] && events[year][week-1]) {
          events[year][week-1].push({type, ...obj, ...extra});
        }
      }
    }
  }
  
  // Work experience
  data.work_experience.forEach((w, i) => {
    w.roles.forEach((r, j) => {
      addEvent('work_experience', {company: w.company, ...r}, r.date_span.start, r.date_span.end, {colorIdx: i%TYPE_COLORS.work_experience.length});
    });
  });
  
  // Residence history - with alternating colors based on location changes
  data.residence_history.forEach((r, i) => {
    if (lastResidenceLocation !== r.location) {
      residenceColorIndex = (residenceColorIndex + 1) % 2; // alternate between 0 and 1
      lastResidenceLocation = r.location;
    }
    addEvent('residence_history', {location: r.location}, r.date_span.start, r.date_span.end, {colorIdx: residenceColorIndex});
  });
  
  // Education
  data.education.forEach((e, i) => {
    e.programs.forEach((p, j) => {
      addEvent('education', {institution: e.institution, ...p}, p.date_span.start, p.date_span.end, {colorIdx: j%TYPE_COLORS.education.length});
    });
  });
  
  // Licenses
  data.licenses_and_certifications.forEach((l, i) => {
    addEvent('licenses_and_certifications', l, l.issue_date, l.issue_date, {colorIdx: i%TYPE_COLORS.licenses_and_certifications.length});
  });
  
  return events;
}

function createTile(events, typeColors, year, weekNumber) {
  // Group events by type
  const workEvents = events.filter(e => e.type === 'work_experience');
  const educationEvents = events.filter(e => e.type === 'education');
  const licenseEvents = events.filter(e => e.type === 'licenses_and_certifications');
  const residenceEvents = events.filter(e => e.type === 'residence_history');
  
  let tileContent = '';
  
  // Work experience lines (top 70%)
  if (workEvents.length > 0) {
    workEvents.forEach((event, index) => {
      const color = typeColors.work_experience[event.colorIdx % typeColors.work_experience.length];
      const topPosition = (index * 3) + 1; // 3px spacing between lines, starting 1px from top
      tileContent += `<div style="position: absolute; top: ${topPosition}px; left: 0; right: 0; height: 2px; background: ${color};"></div>`;
    });
  }
  
  // Education stripe (middle 10%, around 70-80% from top)
  if (educationEvents.length > 0) {
    const event = educationEvents[0]; // Take first education event for color
    const color = typeColors.education[event.colorIdx % typeColors.education.length];
    tileContent += `<div style="position: absolute; top: 70%; left: 0; right: 0; height: 10%; background: ${color};"></div>`;
  }
  
    // Residence background (bottom 20%)\n  let borderColor = '#d0d0d0'; // default border color\n  let residenceBackgroundColor = '#f7f8fa'; // default background color\n  if (residenceEvents.length > 0) {\n    const event = residenceEvents[0]; // Take first residence event for color\n    residenceBackgroundColor = typeColors.residence_history[event.colorIdx % typeColors.residence_history.length];\n  }
  
  // License dots (bottom left corner)
  if (licenseEvents.length > 0) {
    licenseEvents.forEach((event, index) => {
      const leftPosition = index * 4; // 4px spacing between dots
      tileContent += `<div style="position: absolute; bottom: 1px; left: ${leftPosition + 1}px; width: 3px; height: 3px; background: #d32f2f; border-radius: 50%;"></div>`;
    });
  }
  
  // Calculate week dates
  const startOfYear = new Date(year, 0, 1);
  const startOfWeek = new Date(startOfYear);
  startOfWeek.setDate(startOfYear.getDate() + (weekNumber - 1) * 7);
  const endOfWeek = new Date(startOfWeek);
  endOfWeek.setDate(startOfWeek.getDate() + 6);
  
  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };
  
  // Create comprehensive tooltip with date header
  let tooltip = `<div style="background: #f5f5f5; padding: 8px; margin: -12px -16px 8px -16px; border-radius: 6px 6px 0 0; border-bottom: 1px solid #ddd;">
    <strong style="color: #333; font-size: 1.1em;">${year} - Week ${weekNumber}</strong><br>
    <span style="color: #666; font-size: 0.9em;">${formatDate(startOfWeek)} - ${formatDate(endOfWeek)}</span>
  </div>`;
  
  let tooltipSections = [];
  
  if (workEvents.length > 0) {
    let workSection = '<div style="margin-bottom: 8px;"><strong style="color: #1976d2;">🏢 Work Experience:</strong><br>';
    workSection += workEvents.map(e => 
      `• ${e.company} - ${e.title}`
    ).join('<br>');
    workSection += '</div>';
    tooltipSections.push(workSection);
  }
  
  if (educationEvents.length > 0) {
    let eduSection = '<div style="margin-bottom: 8px;"><strong style="color: #f57c00;">🎓 Education:</strong><br>';
    eduSection += educationEvents.map(e => 
      `• ${e.institution} - ${e.degree}<br>&nbsp;&nbsp;${e.field}`
    ).join('<br>');
    eduSection += '</div>';
    tooltipSections.push(eduSection);
  }
  
  if (licenseEvents.length > 0) {
    let licenseSection = '<div style="margin-bottom: 8px;"><strong style="color: #d32f2f;">📜 Licenses & Certifications:</strong><br>';
    licenseSection += licenseEvents.map(e => 
      `• ${e.name}<br>&nbsp;&nbsp;${e.issuer}`
    ).join('<br>');
    licenseSection += '</div>';
    tooltipSections.push(licenseSection);
  }
  
  if (residenceEvents.length > 0) {
    let residenceSection = '<div style="margin-bottom: 8px;"><strong style="color: #f44336;">🏠 Residence:</strong><br>';
    residenceSection += residenceEvents.map(e => 
      `• ${e.location}`
    ).join('<br>');
    residenceSection += '</div>';
    tooltipSections.push(residenceSection);
  }
  
  tooltip += tooltipSections.join('');
  
  return `<div class="tile">
    ${tileContent}
    <div class="tile-tooltip">${tooltip}</div>
  </div>`;
}

function renderTimeline(data) {
  const firstYear = getFirstYear(data);
  const today = new Date();
  const lastYear = today.getFullYear();
  const eventsByWeek = getEventsByWeek(data, firstYear, lastYear);
  const container = document.getElementById('timeline-container');
  container.innerHTML = '';
  
  for (let year = firstYear; year <= lastYear; year++) {
    const row = document.createElement('div');
    row.className = 'year-row';
    
    const label = document.createElement('div');
    label.className = 'year-label';
    label.textContent = year;
    row.appendChild(label);
    
    const weeks = document.createElement('div');
    weeks.className = 'week-tiles';
    
    // Get the residence color for this year (check first week)
    const firstWeekEvents = eventsByWeek[year][0];
    const residenceEvent = firstWeekEvents.find(e => e.type === 'residence_history');
    const yearResidenceColor = residenceEvent ? 
      TYPE_COLORS.residence_history[residenceEvent.colorIdx % TYPE_COLORS.residence_history.length] : 
      '#f7f8fa';
    
    weeks.style.backgroundColor = yearResidenceColor;
    
    for (let w = 0; w < 52; w++) {
      const weekEvents = eventsByWeek[year][w];
      if (weekEvents.length > 0) {
        weeks.innerHTML += createTile(weekEvents, TYPE_COLORS, year, w + 1);
      } else {
        weeks.innerHTML += createTile([], TYPE_COLORS, year, w + 1);
      }
    }
    row.appendChild(weeks);
    container.appendChild(row);
  }
}

// Render the timeline with embedded data
renderTimeline(DATA);

// Popup functionality for all devices
function showPopup(events, year, weekNumber) {
  const popup = document.getElementById('popup');
  const title = document.getElementById('popup-title');
  const body = document.getElementById('popup-body');
  
  // Calculate week dates
  const startOfYear = new Date(year, 0, 1);
  const startOfWeek = new Date(startOfYear);
  startOfWeek.setDate(startOfYear.getDate() + (weekNumber - 1) * 7);
  const endOfWeek = new Date(startOfWeek);
  endOfWeek.setDate(startOfWeek.getDate() + 6);
  
  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', { 
      month: 'long', 
      day: 'numeric',
      year: 'numeric'
    });
  };
  
  title.textContent = `Week ${weekNumber}, ${year}`;
  
  let popupContent = `
    <div style="text-align: center; margin-bottom: 20px; padding: 16px; background: #f8f9fa; border-radius: 8px; border: 1px solid #dadde1;">
      <div style="font-size: 1.1em; font-weight: 600; color: #1c1e21; margin-bottom: 4px;">
        ${formatDate(startOfWeek)} - ${formatDate(endOfWeek)}
      </div>
      <div style="font-size: 0.9em; color: #65676b;">
        Week ${weekNumber} of ${year}
      </div>
    </div>
  `;
  
  if (events.length === 0) {
    popupContent += `
      <div style="text-align: center; color: #65676b; font-style: italic; padding: 40px 20px;">
        No events recorded for this week
      </div>
    `;
  } else {
    // Group events by type
    const eventsByType = {
      work_experience: events.filter(e => e.type === 'work_experience'),
      education: events.filter(e => e.type === 'education'),
      licenses_and_certifications: events.filter(e => e.type === 'licenses_and_certifications'),
      residence_history: events.filter(e => e.type === 'residence_history')
    };
    
    // Work Experience
    if (eventsByType.work_experience.length > 0) {
      eventsByType.work_experience.forEach(event => {
        popupContent += `
          <div class="popup-event">
            <div class="popup-event-type" style="background: #1877f2;">Work Experience</div>
            <div class="popup-event-title">${event.title}</div>
            <div class="popup-event-company">${event.company}</div>
            ${event.description ? `<div class="popup-event-description">${event.description}</div>` : ''}
          </div>
        `;
      });
    }
    
    // Education
    if (eventsByType.education.length > 0) {
      eventsByType.education.forEach(event => {
        popupContent += `
          <div class="popup-event">
            <div class="popup-event-type" style="background: #faad14;">Education</div>
            <div class="popup-event-title">${event.degree}</div>
            <div class="popup-event-company">${event.institution}</div>
            ${event.field ? `<div class="popup-event-description">Field: ${event.field}</div>` : ''}
          </div>
        `;
      });
    }
    
    // Licenses & Certifications
    if (eventsByType.licenses_and_certifications.length > 0) {
      eventsByType.licenses_and_certifications.forEach(event => {
        popupContent += `
          <div class="popup-event">
            <div class="popup-event-type" style="background: #f5222d;">Certificate</div>
            <div class="popup-event-title">${event.name}</div>
            <div class="popup-event-company">${event.issuer}</div>
            ${event.description ? `<div class="popup-event-description">${event.description}</div>` : ''}
          </div>
        `;
      });
    }
    
    // Residence
    if (eventsByType.residence_history.length > 0) {
      eventsByType.residence_history.forEach(event => {
        popupContent += `
          <div class="popup-event">
            <div class="popup-event-type" style="background: #42b883;">Residence</div>
            <div class="popup-event-title">${event.location}</div>
            ${event.description ? `<div class="popup-event-description">${event.description}</div>` : ''}
          </div>
        `;
      });
    }
  }
  
  body.innerHTML = popupContent;
  popup.classList.add('show');
  
  // Prevent body scroll when popup is open
  document.body.style.overflow = 'hidden';
}

function hidePopup() {
  const popup = document.getElementById('popup');
  popup.classList.remove('show');
  document.body.style.overflow = '';
}

// Add event listeners for all devices
function addEventListeners() {
  // Close popup button
  document.getElementById('popup-close').addEventListener('click', hidePopup);
  
  // Close popup when clicking outside
  document.getElementById('popup').addEventListener('click', function(e) {
    if (e.target === this) {
      hidePopup();
    }
  });
  
  // Close popup with Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      hidePopup();
    }
  });
  
  // Add click listeners to all tiles
  document.querySelectorAll('.tile').forEach((tile, index) => {
    tile.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      // Parse tile data from tooltip content
      const tooltip = tile.querySelector('.tile-tooltip');
      if (tooltip) {
        // Extract year and week from the tile's position
        const yearRow = tile.closest('.year-row');
        const yearLabel = yearRow.querySelector('.year-label');
        const year = parseInt(yearLabel.textContent);
        
        const weekTiles = yearRow.querySelectorAll('.tile');
        const weekIndex = Array.from(weekTiles).indexOf(tile);
        const weekNumber = weekIndex + 1;
        
        // Get events for this tile
        const firstYear = getFirstYear(DATA);
        const lastYear = new Date().getFullYear();
        const eventsByWeek = getEventsByWeek(DATA, firstYear, lastYear);
        const events = eventsByWeek[year] ? eventsByWeek[year][weekIndex] || [] : [];
        
        showPopup(events, year, weekNumber);
      }
    });
  });
  
  // Hide all tooltips since we're using popups now
  const style = document.createElement('style');
  style.textContent = `
    .tile-tooltip {
      display: none !important;
    }
    .tile:hover .tile-tooltip {
      display: none !important;
    }
    .tile {
      cursor: pointer;
    }
    .tile:hover {
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
      transform: translateY(-1px);
      border-color: #1877f2;
      z-index: 2;
    }
  `;
  document.head.appendChild(style);
}

// Initialize functionality for all devices
addEventListeners();
