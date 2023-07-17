import { Injectable } from '@angular/core';
    
@Injectable(
  {
    providedIn : 'root',
  }
)
export class NodeService {
    getTreeNodesData() {


      let date = new Date();
      let years = [];
      for(let i=0;i<=3;i++)
      {
        years.push("year"+(date.getFullYear()-i)+"");
      }



      let fullFormedArray:any = [
        {
          key : years[0],
          label : years[0],
          children : [
            {
              key : years[0]+"-"+"Q1",
              label : "Q1",
              children : [
                {
                  key : years[0] + "-" + "Q1" +"-" + "month1",
                  label : "January",
                  children : [
                    {
                      key : years[0] + "-" + "Q1" +"-" + "month1"+"-"+"Week1",
                      label : "Week1"
                    },
                    {
                      key : years[0] + "-" + "Q1" +"-" + "month1"+"-"+"Week2",
                      label : "Week2"
                    },
                    {
                      key : years[0] + "-" + "Q1" +"-" + "month1"+"-"+"Week3",
                      label : "Week3"
                    },
                    {
                      key : years[0] + "-" + "Q1" +"-" + "month1"+"-"+"Week4",
                      label : "Week4"
                    }
                  ]
                },
                {
                  key : years[0] + "-" + "Q1" +"-" + "month2",
                  label : "February",
                  children : [
                    {
                      key : years[0] + "-" + "Q1" +"-" + "month2"+"-"+"Week1",
                      label : "Week1"
                    },
                    {
                      key : years[0] + "-" + "Q1" +"-" + "month2"+"-"+"Week2",
                      label : "Week2"
                    },
                    {
                      key : years[0] + "-" + "Q1" +"-" + "month2"+"-"+"Week3",
                      label : "Week3"
                    },
                    {
                      key : years[0] + "-" + "Q1" +"-" + "month2"+"-"+"Week4",
                      label : "Week4"
                    }
                  ]
                },
                {
                  key : years[0] + "-" + "Q1" +"-" + "month3",
                  label : "March",
                  children : [
                    {
                      key : years[0] + "-" + "Q1" +"-" + "month3"+"-"+"Week1",
                      label : "Week1"
                    },
                    {
                      key : years[0] + "-" + "Q1" +"-" + "month3"+"-"+"Week2",
                      label : "Week2"
                    },
                    {
                      key : years[0] + "-" + "Q1" +"-" + "month3"+"-"+"Week3",
                      label : "Week3"
                    },
                    {
                      key : years[0] + "-" + "Q1" +"-" + "month3"+"-"+"Week4",
                      label : "Week4"
                    }
                  ]
                }
              ]
            },
            {
              key : years[0]+"-"+"Q2",
              label : "Q2",
              children : [
                {
                  key : years[0] + "-" + "Q2" +"-" + "month4",
                  label : "April",
                  children : [
                    {
                      key : years[0] + "-" + "Q1" +"-" + "month4"+"-"+"Week1",
                      label : "Week1"
                    },
                    {
                      key : years[0] + "-" + "Q1" +"-" + "month4"+"-"+"Week2",
                      label : "Week2"
                    },
                    {
                      key : years[0] + "-" + "Q1" +"-" + "month4"+"-"+"Week3",
                      label : "Week3"
                    },
                    {
                      key : years[0] + "-" + "Q1" +"-" + "month4"+"-"+"Week4",
                      label : "Week4"
                    }
                  ]
                },
                {
                  key : years[0] + "-" + "Q2" +"-" + "month5",
                  label : "May",
                  children : [
                    {
                      key : years[0] + "-" + "Q1" +"-" + "month5"+"-"+"Week1",
                      label : "Week1"
                    },
                    {
                      key : years[0] + "-" + "Q1" +"-" + "month5"+"-"+"Week2",
                      label : "Week2"
                    },
                    {
                      key : years[0] + "-" + "Q1" +"-" + "month5"+"-"+"Week3",
                      label : "Week3"
                    },
                    {
                      key : years[0] + "-" + "Q1" +"-" + "month5"+"-"+"Week4",
                      label : "Week4"
                    }
                  ]
                },
                {
                  key : years[0] + "-" + "Q2" +"-" + "month6",
                  label : "June",
                  children : [
                    {
                      key : years[0] + "-" + "Q1" +"-" + "month6"+"-"+"Week1",
                      label : "Week1"
                    },
                    {
                      key : years[0] + "-" + "Q1" +"-" + "month6"+"-"+"Week2",
                      label : "Week2"
                    },
                    {
                      key : years[0] + "-" + "Q1" +"-" + "month6"+"-"+"Week3",
                      label : "Week3"
                    },
                    {
                      key : years[0] + "-" + "Q1" +"-" + "month6"+"-"+"Week4",
                      label : "Week4"
                    }
                  ]
                }
              ]
            },
            {
              key : years[0]+"-"+"Q3",
              label : "Q3",
              children : [
                {
                  key : years[0] + "-" + "Q3" +"-" + "month7",
                  label : "July",
                  children : [
                    {
                      key : years[0] + "-" + "Q1" +"-" + "month7"+"-"+"Week1",
                      label : "Week1"
                    },
                    {
                      key : years[0] + "-" + "Q1" +"-" + "month7"+"-"+"Week2",
                      label : "Week2"
                    },
                    {
                      key : years[0] + "-" + "Q1" +"-" + "month7"+"-"+"Week3",
                      label : "Week3"
                    },
                    {
                      key : years[0] + "-" + "Q1" +"-" + "month7"+"-"+"Week4",
                      label : "Week4"
                    }
                  ]
                },
                {
                  key : years[0] + "-" + "Q3" +"-" + "month8",
                  label : "August",
                  children : [
                    {
                      key : years[0] + "-" + "Q1" +"-" + "month8"+"-"+"Week1",
                      label : "Week1"
                    },
                    {
                      key : years[0] + "-" + "Q1" +"-" + "month8"+"-"+"Week2",
                      label : "Week2"
                    },
                    {
                      key : years[0] + "-" + "Q1" +"-" + "month8"+"-"+"Week3",
                      label : "Week3"
                    },
                    {
                      key : years[0] + "-" + "Q1" +"-" + "month8"+"-"+"Week4",
                      label : "Week4"
                    }
                  ]
                },
                {
                  key : years[0] + "-" + "Q3" +"-" + "month9",
                  label : "September",
                  children : [
                    {
                      key : years[0] + "-" + "Q1" +"-" + "month9"+"-"+"Week1",
                      label : "Week1"
                    },
                    {
                      key : years[0] + "-" + "Q1" +"-" + "month9"+"-"+"Week2",
                      label : "Week2"
                    },
                    {
                      key : years[0] + "-" + "Q1" +"-" + "month9"+"-"+"Week3",
                      label : "Week3"
                    },
                    {
                      key : years[0] + "-" + "Q1" +"-" + "month9"+"-"+"Week4",
                      label : "Week4"
                    }
                  ]
                }
              ]
            },
            {
              key : years[0]+"-"+"Q4",
              label : "Q4",
              children : [
                {
                  key : years[0] + "-" + "Q4" +"-" + "month10",
                  label : "October",
                  children : [
                    {
                      key : years[0] + "-" + "Q1" +"-" + "month10"+"-"+"Week1",
                      label : "Week1"
                    },
                    {
                      key : years[0] + "-" + "Q1" +"-" + "month10"+"-"+"Week2",
                      label : "Week2"
                    },
                    {
                      key : years[0] + "-" + "Q1" +"-" + "month10"+"-"+"Week3",
                      label : "Week3"
                    },
                    {
                      key : years[0] + "-" + "Q1" +"-" + "month10"+"-"+"Week4",
                      label : "Week4"
                    }
                  ]
                },
                {
                  key : years[0] + "-" + "Q4" +"-" + "month11",
                  label : "November",
                  children : [
                    {
                      key : years[0] + "-" + "Q1" +"-" + "month11"+"-"+"Week1",
                      label : "Week1"
                    },
                    {
                      key : years[0] + "-" + "Q1" +"-" + "month11"+"-"+"Week2",
                      label : "Week2"
                    },
                    {
                      key : years[0] + "-" + "Q1" +"-" + "month11"+"-"+"Week3",
                      label : "Week3"
                    },
                    {
                      key : years[0] + "-" + "Q1" +"-" + "month11"+"-"+"Week4",
                      label : "Week4"
                    }
                  ]
                },
                {
                  key : years[0] + "-" + "Q4" +"-" + "month12",
                  label : "December",
                  children : [
                    {
                      key : years[0] + "-" + "Q1" +"-" + "month12"+"-"+"Week1",
                      label : "Week1"
                    },
                    {
                      key : years[0] + "-" + "Q1" +"-" + "month12"+"-"+"Week2",
                      label : "Week2"
                    },
                    {
                      key : years[0] + "-" + "Q1" +"-" + "month12"+"-"+"Week3",
                      label : "Week3"
                    },
                    {
                      key : years[0] + "-" + "Q1" +"-" + "month12"+"-"+"Week4",
                      label : "Week4"
                    }
                  ]
                }
              ]
            }
          ]
        },

        //copy year 2 here

        {
          key : years[1],
          label : years[1],
          children : [
            {
              key : years[1]+"-"+"Q1",
              label : "Q1",
              children : [
                {
                  key : years[1] + "-" + "Q1" +"-" + "month1",
                  label : "January",
                  children : [
                    {
                      key : years[1] + "-" + "Q1" +"-" + "month1"+"-"+"Week1",
                      label : "Week1"
                    },
                    {
                      key : years[1] + "-" + "Q1" +"-" + "month1"+"-"+"Week2",
                      label : "Week2"
                    },
                    {
                      key : years[1] + "-" + "Q1" +"-" + "month1"+"-"+"Week3",
                      label : "Week3"
                    },
                    {
                      key : years[1] + "-" + "Q1" +"-" + "month1"+"-"+"Week4",
                      label : "Week4"
                    }
                  ]
                },
                {
                  key : years[1] + "-" + "Q1" +"-" + "month2",
                  label : "February",
                  children : [
                    {
                      key : years[1] + "-" + "Q1" +"-" + "month2"+"-"+"Week1",
                      label : "Week1"
                    },
                    {
                      key : years[1] + "-" + "Q1" +"-" + "month2"+"-"+"Week2",
                      label : "Week2"
                    },
                    {
                      key : years[1] + "-" + "Q1" +"-" + "month2"+"-"+"Week3",
                      label : "Week3"
                    },
                    {
                      key : years[1] + "-" + "Q1" +"-" + "month2"+"-"+"Week4",
                      label : "Week4"
                    }
                  ]
                },
                {
                  key : years[1] + "-" + "Q1" +"-" + "month3",
                  label : "March",
                  children : [
                    {
                      key : years[1] + "-" + "Q1" +"-" + "month3"+"-"+"Week1",
                      label : "Week1"
                    },
                    {
                      key : years[1] + "-" + "Q1" +"-" + "month3"+"-"+"Week2",
                      label : "Week2"
                    },
                    {
                      key : years[1] + "-" + "Q1" +"-" + "month3"+"-"+"Week3",
                      label : "Week3"
                    },
                    {
                      key : years[1] + "-" + "Q1" +"-" + "month3"+"-"+"Week4",
                      label : "Week4"
                    }
                  ]
                }
              ]
            },
            {
              key : years[1]+"-"+"Q2",
              label : "Q2",
              children : [
                {
                  key : years[1] + "-" + "Q2" +"-" + "month4",
                  label : "April",
                  children : [
                    {
                      key : years[1] + "-" + "Q1" +"-" + "month4"+"-"+"Week1",
                      label : "Week1"
                    },
                    {
                      key : years[1] + "-" + "Q1" +"-" + "month4"+"-"+"Week2",
                      label : "Week2"
                    },
                    {
                      key : years[1] + "-" + "Q1" +"-" + "month4"+"-"+"Week3",
                      label : "Week3"
                    },
                    {
                      key : years[1] + "-" + "Q1" +"-" + "month4"+"-"+"Week4",
                      label : "Week4"
                    }
                  ]
                },
                {
                  key : years[1] + "-" + "Q2" +"-" + "month5",
                  label : "May",
                  children : [
                    {
                      key : years[1] + "-" + "Q1" +"-" + "month5"+"-"+"Week1",
                      label : "Week1"
                    },
                    {
                      key : years[1] + "-" + "Q1" +"-" + "month5"+"-"+"Week2",
                      label : "Week2"
                    },
                    {
                      key : years[1] + "-" + "Q1" +"-" + "month5"+"-"+"Week3",
                      label : "Week3"
                    },
                    {
                      key : years[1] + "-" + "Q1" +"-" + "month5"+"-"+"Week4",
                      label : "Week4"
                    }
                  ]
                },
                {
                  key : years[1] + "-" + "Q2" +"-" + "month6",
                  label : "June",
                  children : [
                    {
                      key : years[1] + "-" + "Q1" +"-" + "month6"+"-"+"Week1",
                      label : "Week1"
                    },
                    {
                      key : years[1] + "-" + "Q1" +"-" + "month6"+"-"+"Week2",
                      label : "Week2"
                    },
                    {
                      key : years[1] + "-" + "Q1" +"-" + "month6"+"-"+"Week3",
                      label : "Week3"
                    },
                    {
                      key : years[1] + "-" + "Q1" +"-" + "month6"+"-"+"Week4",
                      label : "Week4"
                    }
                  ]
                }
              ]
            },
            {
              key : years[1]+"-"+"Q3",
              label : "Q3",
              children : [
                {
                  key : years[1] + "-" + "Q3" +"-" + "month7",
                  label : "July",
                  children : [
                    {
                      key : years[1] + "-" + "Q1" +"-" + "month7"+"-"+"Week1",
                      label : "Week1"
                    },
                    {
                      key : years[1] + "-" + "Q1" +"-" + "month7"+"-"+"Week2",
                      label : "Week2"
                    },
                    {
                      key : years[1] + "-" + "Q1" +"-" + "month7"+"-"+"Week3",
                      label : "Week3"
                    },
                    {
                      key : years[1] + "-" + "Q1" +"-" + "month7"+"-"+"Week4",
                      label : "Week4"
                    }
                  ]
                },
                {
                  key : years[1] + "-" + "Q3" +"-" + "month8",
                  label : "August",
                  children : [
                    {
                      key : years[1] + "-" + "Q1" +"-" + "month8"+"-"+"Week1",
                      label : "Week1"
                    },
                    {
                      key : years[1] + "-" + "Q1" +"-" + "month8"+"-"+"Week2",
                      label : "Week2"
                    },
                    {
                      key : years[1] + "-" + "Q1" +"-" + "month8"+"-"+"Week3",
                      label : "Week3"
                    },
                    {
                      key : years[1] + "-" + "Q1" +"-" + "month8"+"-"+"Week4",
                      label : "Week4"
                    }
                  ]
                },
                {
                  key : years[1] + "-" + "Q3" +"-" + "month9",
                  label : "September",
                  children : [
                    {
                      key : years[1] + "-" + "Q1" +"-" + "month9"+"-"+"Week1",
                      label : "Week1"
                    },
                    {
                      key : years[1] + "-" + "Q1" +"-" + "month9"+"-"+"Week2",
                      label : "Week2"
                    },
                    {
                      key : years[1] + "-" + "Q1" +"-" + "month9"+"-"+"Week3",
                      label : "Week3"
                    },
                    {
                      key : years[1] + "-" + "Q1" +"-" + "month9"+"-"+"Week4",
                      label : "Week4"
                    }
                  ]
                }
              ]
            },
            {
              key : years[1]+"-"+"Q4",
              label : "Q4",
              children : [
                {
                  key : years[1] + "-" + "Q4" +"-" + "month10",
                  label : "October",
                  children : [
                    {
                      key : years[1] + "-" + "Q1" +"-" + "month10"+"-"+"Week1",
                      label : "Week1"
                    },
                    {
                      key : years[1] + "-" + "Q1" +"-" + "month10"+"-"+"Week2",
                      label : "Week2"
                    },
                    {
                      key : years[1] + "-" + "Q1" +"-" + "month10"+"-"+"Week3",
                      label : "Week3"
                    },
                    {
                      key : years[1] + "-" + "Q1" +"-" + "month10"+"-"+"Week4",
                      label : "Week4"
                    }
                  ]
                },
                {
                  key : years[1] + "-" + "Q4" +"-" + "month11",
                  label : "November",
                  children : [
                    {
                      key : years[1] + "-" + "Q1" +"-" + "month11"+"-"+"Week1",
                      label : "Week1"
                    },
                    {
                      key : years[1] + "-" + "Q1" +"-" + "month11"+"-"+"Week2",
                      label : "Week2"
                    },
                    {
                      key : years[1] + "-" + "Q1" +"-" + "month11"+"-"+"Week3",
                      label : "Week3"
                    },
                    {
                      key : years[1] + "-" + "Q1" +"-" + "month11"+"-"+"Week4",
                      label : "Week4"
                    }
                  ]
                },
                {
                  key : years[1] + "-" + "Q4" +"-" + "month12",
                  label : "December",
                  children : [
                    {
                      key : years[1] + "-" + "Q1" +"-" + "month12"+"-"+"Week1",
                      label : "Week1"
                    },
                    {
                      key : years[1] + "-" + "Q1" +"-" + "month12"+"-"+"Week2",
                      label : "Week2"
                    },
                    {
                      key : years[1] + "-" + "Q1" +"-" + "month12"+"-"+"Week3",
                      label : "Week3"
                    },
                    {
                      key : years[1] + "-" + "Q1" +"-" + "month12"+"-"+"Week4",
                      label : "Week4"
                    }
                  ]
                }
              ]
            }
          ]
        },

        
        //copy years3 here

        {
          key : years[2],
          label : years[2],
          children : [
            {
              key : years[2]+"-"+"Q1",
              label : "Q1",
              children : [
                {
                  key : years[2] + "-" + "Q1" +"-" + "month1",
                  label : "January",
                  children : [
                    {
                      key : years[2] + "-" + "Q1" +"-" + "month1"+"-"+"Week1",
                      label : "Week1"
                    },
                    {
                      key : years[2] + "-" + "Q1" +"-" + "month1"+"-"+"Week2",
                      label : "Week2"
                    },
                    {
                      key : years[2] + "-" + "Q1" +"-" + "month1"+"-"+"Week3",
                      label : "Week3"
                    },
                    {
                      key : years[2] + "-" + "Q1" +"-" + "month1"+"-"+"Week4",
                      label : "Week4"
                    }
                  ]
                },
                {
                  key : years[2] + "-" + "Q1" +"-" + "month2",
                  label : "February",
                  children : [
                    {
                      key : years[2] + "-" + "Q1" +"-" + "month2"+"-"+"Week1",
                      label : "Week1"
                    },
                    {
                      key : years[2] + "-" + "Q1" +"-" + "month2"+"-"+"Week2",
                      label : "Week2"
                    },
                    {
                      key : years[2] + "-" + "Q1" +"-" + "month2"+"-"+"Week3",
                      label : "Week3"
                    },
                    {
                      key : years[2] + "-" + "Q1" +"-" + "month2"+"-"+"Week4",
                      label : "Week4"
                    }
                  ]
                },
                {
                  key : years[2] + "-" + "Q1" +"-" + "month3",
                  label : "March",
                  children : [
                    {
                      key : years[2] + "-" + "Q1" +"-" + "month3"+"-"+"Week1",
                      label : "Week1"
                    },
                    {
                      key : years[2] + "-" + "Q1" +"-" + "month3"+"-"+"Week2",
                      label : "Week2"
                    },
                    {
                      key : years[2] + "-" + "Q1" +"-" + "month3"+"-"+"Week3",
                      label : "Week3"
                    },
                    {
                      key : years[2] + "-" + "Q1" +"-" + "month3"+"-"+"Week4",
                      label : "Week4"
                    }
                  ]
                }
              ]
            },
            {
              key : years[2]+"-"+"Q2",
              label : "Q2",
              children : [
                {
                  key : years[2] + "-" + "Q2" +"-" + "month4",
                  label : "April",
                  children : [
                    {
                      key : years[2] + "-" + "Q1" +"-" + "month4"+"-"+"Week1",
                      label : "Week1"
                    },
                    {
                      key : years[2] + "-" + "Q1" +"-" + "month4"+"-"+"Week2",
                      label : "Week2"
                    },
                    {
                      key : years[2] + "-" + "Q1" +"-" + "month4"+"-"+"Week3",
                      label : "Week3"
                    },
                    {
                      key : years[2] + "-" + "Q1" +"-" + "month4"+"-"+"Week4",
                      label : "Week4"
                    }
                  ]
                },
                {
                  key : years[2] + "-" + "Q2" +"-" + "month5",
                  label : "May",
                  children : [
                    {
                      key : years[2] + "-" + "Q1" +"-" + "month5"+"-"+"Week1",
                      label : "Week1"
                    },
                    {
                      key : years[2] + "-" + "Q1" +"-" + "month5"+"-"+"Week2",
                      label : "Week2"
                    },
                    {
                      key : years[2] + "-" + "Q1" +"-" + "month5"+"-"+"Week3",
                      label : "Week3"
                    },
                    {
                      key : years[2] + "-" + "Q1" +"-" + "month5"+"-"+"Week4",
                      label : "Week4"
                    }
                  ]
                },
                {
                  key : years[2] + "-" + "Q2" +"-" + "month6",
                  label : "June",
                  children : [
                    {
                      key : years[2] + "-" + "Q1" +"-" + "month6"+"-"+"Week1",
                      label : "Week1"
                    },
                    {
                      key : years[2] + "-" + "Q1" +"-" + "month6"+"-"+"Week2",
                      label : "Week2"
                    },
                    {
                      key : years[2] + "-" + "Q1" +"-" + "month6"+"-"+"Week3",
                      label : "Week3"
                    },
                    {
                      key : years[2] + "-" + "Q1" +"-" + "month6"+"-"+"Week4",
                      label : "Week4"
                    }
                  ]
                }
              ]
            },
            {
              key : years[2]+"-"+"Q3",
              label : "Q3",
              children : [
                {
                  key : years[2] + "-" + "Q3" +"-" + "month7",
                  label : "July",
                  children : [
                    {
                      key : years[2] + "-" + "Q1" +"-" + "month7"+"-"+"Week1",
                      label : "Week1"
                    },
                    {
                      key : years[2] + "-" + "Q1" +"-" + "month7"+"-"+"Week2",
                      label : "Week2"
                    },
                    {
                      key : years[2] + "-" + "Q1" +"-" + "month7"+"-"+"Week3",
                      label : "Week3"
                    },
                    {
                      key : years[2] + "-" + "Q1" +"-" + "month7"+"-"+"Week4",
                      label : "Week4"
                    }
                  ]
                },
                {
                  key : years[2] + "-" + "Q3" +"-" + "month8",
                  label : "August",
                  children : [
                    {
                      key : years[2] + "-" + "Q1" +"-" + "month8"+"-"+"Week1",
                      label : "Week1"
                    },
                    {
                      key : years[2] + "-" + "Q1" +"-" + "month8"+"-"+"Week2",
                      label : "Week2"
                    },
                    {
                      key : years[2] + "-" + "Q1" +"-" + "month8"+"-"+"Week3",
                      label : "Week3"
                    },
                    {
                      key : years[2] + "-" + "Q1" +"-" + "month8"+"-"+"Week4",
                      label : "Week4"
                    }
                  ]
                },
                {
                  key : years[2] + "-" + "Q3" +"-" + "month9",
                  label : "September",
                  children : [
                    {
                      key : years[2] + "-" + "Q1" +"-" + "month9"+"-"+"Week1",
                      label : "Week1"
                    },
                    {
                      key : years[2] + "-" + "Q1" +"-" + "month9"+"-"+"Week2",
                      label : "Week2"
                    },
                    {
                      key : years[2] + "-" + "Q1" +"-" + "month9"+"-"+"Week3",
                      label : "Week3"
                    },
                    {
                      key : years[2] + "-" + "Q1" +"-" + "month9"+"-"+"Week4",
                      label : "Week4"
                    }
                  ]
                }
              ]
            },
            {
              key : years[2]+"-"+"Q4",
              label : "Q4",
              children : [
                {
                  key : years[2] + "-" + "Q4" +"-" + "month10",
                  label : "October",
                  children : [
                    {
                      key : years[2] + "-" + "Q1" +"-" + "month10"+"-"+"Week1",
                      label : "Week1"
                    },
                    {
                      key : years[2] + "-" + "Q1" +"-" + "month10"+"-"+"Week2",
                      label : "Week2"
                    },
                    {
                      key : years[2] + "-" + "Q1" +"-" + "month10"+"-"+"Week3",
                      label : "Week3"
                    },
                    {
                      key : years[2] + "-" + "Q1" +"-" + "month10"+"-"+"Week4",
                      label : "Week4"
                    }
                  ]
                },
                {
                  key : years[2] + "-" + "Q4" +"-" + "month11",
                  label : "November",
                  children : [
                    {
                      key : years[2] + "-" + "Q1" +"-" + "month11"+"-"+"Week1",
                      label : "Week1"
                    },
                    {
                      key : years[2] + "-" + "Q1" +"-" + "month11"+"-"+"Week2",
                      label : "Week2"
                    },
                    {
                      key : years[2] + "-" + "Q1" +"-" + "month11"+"-"+"Week3",
                      label : "Week3"
                    },
                    {
                      key : years[2] + "-" + "Q1" +"-" + "month11"+"-"+"Week4",
                      label : "Week4"
                    }
                  ]
                },
                {
                  key : years[2] + "-" + "Q4" +"-" + "month12",
                  label : "December",
                  children : [
                    {
                      key : years[2] + "-" + "Q1" +"-" + "month12"+"-"+"Week1",
                      label : "Week1"
                    },
                    {
                      key : years[2] + "-" + "Q1" +"-" + "month12"+"-"+"Week2",
                      label : "Week2"
                    },
                    {
                      key : years[2] + "-" + "Q1" +"-" + "month12"+"-"+"Week3",
                      label : "Week3"
                    },
                    {
                      key : years[2] + "-" + "Q1" +"-" + "month12"+"-"+"Week4",
                      label : "Week4"
                    }
                  ]
                }
              ]
            }
          ]
        },

        
        //year 4 here

        {
          key : years[3],
          label : years[3],
          children : [
            {
              key : years[3]+"-"+"Q1",
              label : "Q1",
              children : [
                {
                  key : years[3] + "-" + "Q1" +"-" + "month1",
                  label : "January",
                  children : [
                    {
                      key : years[3] + "-" + "Q1" +"-" + "month1"+"-"+"Week1",
                      label : "Week1"
                    },
                    {
                      key : years[3] + "-" + "Q1" +"-" + "month1"+"-"+"Week2",
                      label : "Week2"
                    },
                    {
                      key : years[3] + "-" + "Q1" +"-" + "month1"+"-"+"Week3",
                      label : "Week3"
                    },
                    {
                      key : years[3] + "-" + "Q1" +"-" + "month1"+"-"+"Week4",
                      label : "Week4"
                    }
                  ]
                },
                {
                  key : years[3] + "-" + "Q1" +"-" + "month2",
                  label : "February",
                  children : [
                    {
                      key : years[3] + "-" + "Q1" +"-" + "month2"+"-"+"Week1",
                      label : "Week1"
                    },
                    {
                      key : years[3] + "-" + "Q1" +"-" + "month2"+"-"+"Week2",
                      label : "Week2"
                    },
                    {
                      key : years[3] + "-" + "Q1" +"-" + "month2"+"-"+"Week3",
                      label : "Week3"
                    },
                    {
                      key : years[3] + "-" + "Q1" +"-" + "month2"+"-"+"Week4",
                      label : "Week4"
                    }
                  ]
                },
                {
                  key : years[3] + "-" + "Q1" +"-" + "month3",
                  label : "March",
                  children : [
                    {
                      key : years[3] + "-" + "Q1" +"-" + "month3"+"-"+"Week1",
                      label : "Week1"
                    },
                    {
                      key : years[3] + "-" + "Q1" +"-" + "month3"+"-"+"Week2",
                      label : "Week2"
                    },
                    {
                      key : years[3] + "-" + "Q1" +"-" + "month3"+"-"+"Week3",
                      label : "Week3"
                    },
                    {
                      key : years[3] + "-" + "Q1" +"-" + "month3"+"-"+"Week4",
                      label : "Week4"
                    }
                  ]
                }
              ]
            },
            {
              key : years[3]+"-"+"Q2",
              label : "Q2",
              children : [
                {
                  key : years[3] + "-" + "Q2" +"-" + "month4",
                  label : "April",
                  children : [
                    {
                      key : years[3] + "-" + "Q1" +"-" + "month4"+"-"+"Week1",
                      label : "Week1"
                    },
                    {
                      key : years[3] + "-" + "Q1" +"-" + "month4"+"-"+"Week2",
                      label : "Week2"
                    },
                    {
                      key : years[3] + "-" + "Q1" +"-" + "month4"+"-"+"Week3",
                      label : "Week3"
                    },
                    {
                      key : years[3] + "-" + "Q1" +"-" + "month4"+"-"+"Week4",
                      label : "Week4"
                    }
                  ]
                },
                {
                  key : years[3] + "-" + "Q2" +"-" + "month5",
                  label : "May",
                  children : [
                    {
                      key : years[3] + "-" + "Q1" +"-" + "month5"+"-"+"Week1",
                      label : "Week1"
                    },
                    {
                      key : years[3] + "-" + "Q1" +"-" + "month5"+"-"+"Week2",
                      label : "Week2"
                    },
                    {
                      key : years[3] + "-" + "Q1" +"-" + "month5"+"-"+"Week3",
                      label : "Week3"
                    },
                    {
                      key : years[3] + "-" + "Q1" +"-" + "month5"+"-"+"Week4",
                      label : "Week4"
                    }
                  ]
                },
                {
                  key : years[3] + "-" + "Q2" +"-" + "month6",
                  label : "June",
                  children : [
                    {
                      key : years[3] + "-" + "Q1" +"-" + "month6"+"-"+"Week1",
                      label : "Week1"
                    },
                    {
                      key : years[3] + "-" + "Q1" +"-" + "month6"+"-"+"Week2",
                      label : "Week2"
                    },
                    {
                      key : years[3] + "-" + "Q1" +"-" + "month6"+"-"+"Week3",
                      label : "Week3"
                    },
                    {
                      key : years[3] + "-" + "Q1" +"-" + "month6"+"-"+"Week4",
                      label : "Week4"
                    }
                  ]
                }
              ]
            },
            {
              key : years[3]+"-"+"Q3",
              label : "Q3",
              children : [
                {
                  key : years[3] + "-" + "Q3" +"-" + "month7",
                  label : "July",
                  children : [
                    {
                      key : years[3] + "-" + "Q1" +"-" + "month7"+"-"+"Week1",
                      label : "Week1"
                    },
                    {
                      key : years[3] + "-" + "Q1" +"-" + "month7"+"-"+"Week2",
                      label : "Week2"
                    },
                    {
                      key : years[3] + "-" + "Q1" +"-" + "month7"+"-"+"Week3",
                      label : "Week3"
                    },
                    {
                      key : years[3] + "-" + "Q1" +"-" + "month7"+"-"+"Week4",
                      label : "Week4"
                    }
                  ]
                },
                {
                  key : years[3] + "-" + "Q3" +"-" + "month8",
                  label : "August",
                  children : [
                    {
                      key : years[3] + "-" + "Q1" +"-" + "month8"+"-"+"Week1",
                      label : "Week1"
                    },
                    {
                      key : years[3] + "-" + "Q1" +"-" + "month8"+"-"+"Week2",
                      label : "Week2"
                    },
                    {
                      key : years[3] + "-" + "Q1" +"-" + "month8"+"-"+"Week3",
                      label : "Week3"
                    },
                    {
                      key : years[3] + "-" + "Q1" +"-" + "month8"+"-"+"Week4",
                      label : "Week4"
                    }
                  ]
                },
                {
                  key : years[3] + "-" + "Q3" +"-" + "month9",
                  label : "September",
                  children : [
                    {
                      key : years[3] + "-" + "Q1" +"-" + "month9"+"-"+"Week1",
                      label : "Week1"
                    },
                    {
                      key : years[3] + "-" + "Q1" +"-" + "month9"+"-"+"Week2",
                      label : "Week2"
                    },
                    {
                      key : years[3] + "-" + "Q1" +"-" + "month9"+"-"+"Week3",
                      label : "Week3"
                    },
                    {
                      key : years[3] + "-" + "Q1" +"-" + "month9"+"-"+"Week4",
                      label : "Week4"
                    }
                  ]
                }
              ]
            },
            {
              key : years[3]+"-"+"Q4",
              label : "Q4",
              children : [
                {
                  key : years[3] + "-" + "Q4" +"-" + "month10",
                  label : "October",
                  children : [
                    {
                      key : years[3] + "-" + "Q1" +"-" + "month10"+"-"+"Week1",
                      label : "Week1"
                    },
                    {
                      key : years[3] + "-" + "Q1" +"-" + "month10"+"-"+"Week2",
                      label : "Week2"
                    },
                    {
                      key : years[3] + "-" + "Q1" +"-" + "month10"+"-"+"Week3",
                      label : "Week3"
                    },
                    {
                      key : years[3] + "-" + "Q1" +"-" + "month10"+"-"+"Week4",
                      label : "Week4"
                    }
                  ]
                },
                {
                  key : years[3] + "-" + "Q4" +"-" + "month11",
                  label : "November",
                  children : [
                    {
                      key : years[3] + "-" + "Q1" +"-" + "month11"+"-"+"Week1",
                      label : "Week1"
                    },
                    {
                      key : years[3] + "-" + "Q1" +"-" + "month11"+"-"+"Week2",
                      label : "Week2"
                    },
                    {
                      key : years[3] + "-" + "Q1" +"-" + "month11"+"-"+"Week3",
                      label : "Week3"
                    },
                    {
                      key : years[3] + "-" + "Q1" +"-" + "month11"+"-"+"Week4",
                      label : "Week4"
                    }
                  ]
                },
                {
                  key : years[3] + "-" + "Q4" +"-" + "month12",
                  label : "December",
                  children : [
                    {
                      key : years[3] + "-" + "Q1" +"-" + "month12"+"-"+"Week1",
                      label : "Week1"
                    },
                    {
                      key : years[3] + "-" + "Q1" +"-" + "month12"+"-"+"Week2",
                      label : "Week2"
                    },
                    {
                      key : years[3] + "-" + "Q1" +"-" + "month12"+"-"+"Week3",
                      label : "Week3"
                    },
                    {
                      key : years[3] + "-" + "Q1" +"-" + "month12"+"-"+"Week4",
                      label : "Week4"
                    }
                  ]
                }
              ]
            }
          ]
        },
      

        
      ];
      
      return fullFormedArray;
    }

    getTreeTableNodesData() {
        return [
            {
                key: '0',
                data: {
                    name: 'Applications',
                    size: '100kb',
                    type: 'Folder'
                },
                children: [
                    {
                        key: '0-0',
                        data: {
                            name: 'React',
                            size: '25kb',
                            type: 'Folder'
                        },
                        children: [
                            {
                                key: '0-0-0',
                                data: {
                                    name: 'react.app',
                                    size: '10kb',
                                    type: 'Application'
                                }
                            },
                            {
                                key: '0-0-1',
                                data: {
                                    name: 'native.app',
                                    size: '10kb',
                                    type: 'Application'
                                }
                            },
                            {
                                key: '0-0-2',
                                data: {
                                    name: 'mobile.app',
                                    size: '5kb',
                                    type: 'Application'
                                }
                            }
                        ]
                    },
                    {
                        key: '0-1',
                        data: {
                            name: 'editor.app',
                            size: '25kb',
                            type: 'Application'
                        }
                    },
                    {
                        key: '0-2',
                        data: {
                            name: 'settings.app',
                            size: '50kb',
                            type: 'Application'
                        }
                    }
                ]
            },
            {
                key: '1',
                data: {
                    name: 'Cloud',
                    size: '20kb',
                    type: 'Folder'
                },
                children: [
                    {
                        key: '1-0',
                        data: {
                            name: 'backup-1.zip',
                            size: '10kb',
                            type: 'Zip'
                        }
                    },
                    {
                        key: '1-1',
                        data: {
                            name: 'backup-2.zip',
                            size: '10kb',
                            type: 'Zip'
                        }
                    }
                ]
            },
            {
                key: '2',
                data: {
                    name: 'Desktop',
                    size: '150kb',
                    type: 'Folder'
                },
                children: [
                    {
                        key: '2-0',
                        data: {
                            name: 'note-meeting.txt',
                            size: '50kb',
                            type: 'Text'
                        }
                    },
                    {
                        key: '2-1',
                        data: {
                            name: 'note-todo.txt',
                            size: '100kb',
                            type: 'Text'
                        }
                    }
                ]
            },
            {
                key: '3',
                data: {
                    name: 'Documents',
                    size: '75kb',
                    type: 'Folder'
                },
                children: [
                    {
                        key: '3-0',
                        data: {
                            name: 'Work',
                            size: '55kb',
                            type: 'Folder'
                        },
                        children: [
                            {
                                key: '3-0-0',
                                data: {
                                    name: 'Expenses.doc',
                                    size: '30kb',
                                    type: 'Document'
                                }
                            },
                            {
                                key: '3-0-1',
                                data: {
                                    name: 'Resume.doc',
                                    size: '25kb',
                                    type: 'Resume'
                                }
                            }
                        ]
                    },
                    {
                        key: '3-1',
                        data: {
                            name: 'Home',
                            size: '20kb',
                            type: 'Folder'
                        },
                        children: [
                            {
                                key: '3-1-0',
                                data: {
                                    name: 'Invoices',
                                    size: '20kb',
                                    type: 'Text'
                                }
                            }
                        ]
                    }
                ]
            },
            {
                key: '4',
                data: {
                    name: 'Downloads',
                    size: '25kb',
                    type: 'Folder'
                },
                children: [
                    {
                        key: '4-0',
                        data: {
                            name: 'Spanish',
                            size: '10kb',
                            type: 'Folder'
                        },
                        children: [
                            {
                                key: '4-0-0',
                                data: {
                                    name: 'tutorial-a1.txt',
                                    size: '5kb',
                                    type: 'Text'
                                }
                            },
                            {
                                key: '4-0-1',
                                data: {
                                    name: 'tutorial-a2.txt',
                                    size: '5kb',
                                    type: 'Text'
                                }
                            }
                        ]
                    },
                    {
                        key: '4-1',
                        data: {
                            name: 'Travel',
                            size: '15kb',
                            type: 'Text'
                        },
                        children: [
                            {
                                key: '4-1-0',
                                data: {
                                    name: 'Hotel.pdf',
                                    size: '10kb',
                                    type: 'PDF'
                                }
                            },
                            {
                                key: '4-1-1',
                                data: {
                                    name: 'Flight.pdf',
                                    size: '5kb',
                                    type: 'PDF'
                                }
                            }
                        ]
                    }
                ]
            },
            {
                key: '5',
                data: {
                    name: 'Main',
                    size: '50kb',
                    type: 'Folder'
                },
                children: [
                    {
                        key: '5-0',
                        data: {
                            name: 'bin',
                            size: '50kb',
                            type: 'Link'
                        }
                    },
                    {
                        key: '5-1',
                        data: {
                            name: 'etc',
                            size: '100kb',
                            type: 'Link'
                        }
                    },
                    {
                        key: '5-2',
                        data: {
                            name: 'var',
                            size: '100kb',
                            type: 'Link'
                        }
                    }
                ]
            },
            {
                key: '6',
                data: {
                    name: 'Other',
                    size: '5kb',
                    type: 'Folder'
                },
                children: [
                    {
                        key: '6-0',
                        data: {
                            name: 'todo.txt',
                            size: '3kb',
                            type: 'Text'
                        }
                    },
                    {
                        key: '6-1',
                        data: {
                            name: 'logo.png',
                            size: '2kb',
                            type: 'Picture'
                        }
                    }
                ]
            },
            {
                key: '7',
                data: {
                    name: 'Pictures',
                    size: '150kb',
                    type: 'Folder'
                },
                children: [
                    {
                        key: '7-0',
                        data: {
                            name: 'barcelona.jpg',
                            size: '90kb',
                            type: 'Picture'
                        }
                    },
                    {
                        key: '7-1',
                        data: {
                            name: 'primeng.png',
                            size: '30kb',
                            type: 'Picture'
                        }
                    },
                    {
                        key: '7-2',
                        data: {
                            name: 'prime.jpg',
                            size: '30kb',
                            type: 'Picture'
                        }
                    }
                ]
            },
            {
                key: '8',
                data: {
                    name: 'Videos',
                    size: '1500kb',
                    type: 'Folder'
                },
                children: [
                    {
                        key: '8-0',
                        data: {
                            name: 'primefaces.mkv',
                            size: '1000kb',
                            type: 'Video'
                        }
                    },
                    {
                        key: '8-1',
                        data: {
                            name: 'intro.avi',
                            size: '500kb',
                            type: 'Video'
                        }
                    }
                ]
            }
        ];
    }

    getLazyNodesData() {
        return [
            {
                "label": "Lazy Node 0",
                "data": "Node 0",
                "expandedIcon": "pi pi-folder-open",
                "collapsedIcon": "pi pi-folder",
                "leaf": false
            },
            {
                "label": "Lazy Node 1",
                "data": "Node 1",
                "expandedIcon": "pi pi-folder-open",
                "collapsedIcon": "pi pi-folder",
                "leaf": false
            },
            {
                "label": "Lazy Node 1",
                "data": "Node 2",
                "expandedIcon": "pi pi-folder-open",
                "collapsedIcon": "pi pi-folder",
                "leaf": false
            }
        ]
    }

    getFileSystemNodesData() {
        return [  
            {  
                "data":{  
                    "name":"Applications",
                    "size":"200mb",
                    "type":"Folder"
                },
                "children":[  
                    {  
                        "data":{  
                            "name":"Angular",
                            "size":"25mb",
                            "type":"Folder"
                        },
                        "children":[  
                            {  
                                "data":{  
                                    "name":"angular.app",
                                    "size":"10mb",
                                    "type":"Application"
                                }
                            },
                            {  
                                "data":{  
                                    "name":"cli.app",
                                    "size":"10mb",
                                    "type":"Application"
                                }
                            },
                            {  
                                "data":{  
                                    "name":"mobile.app",
                                    "size":"5mb",
                                    "type":"Application"
                                }
                            }
                        ]
                    },
                    {  
                        "data":{  
                            "name":"editor.app",
                            "size":"25mb",
                            "type":"Application"
                        }
                    },
                    {  
                        "data":{  
                            "name":"settings.app",
                            "size":"50mb",
                            "type":"Application"
                        }
                    }
                ]
            },
            {  
                "data":{  
                    "name":"Cloud",
                    "size":"20mb",
                    "type":"Folder"
                },
                "children":[  
                    {  
                        "data":{  
                            "name":"backup-1.zip",
                            "size":"10mb",
                            "type":"Zip"
                        }
                    },
                    {  
                        "data":{  
                            "name":"backup-2.zip",
                            "size":"10mb",
                            "type":"Zip"
                        }
                    }
                ]
            },
            {  
                "data": {  
                    "name":"Desktop",
                    "size":"150kb",
                    "type":"Folder"
                },
                "children":[  
                    {  
                        "data":{  
                            "name":"note-meeting.txt",
                            "size":"50kb",
                            "type":"Text"
                        }
                    },
                    {  
                        "data":{  
                            "name":"note-todo.txt",
                            "size":"100kb",
                            "type":"Text"
                        }
                    }
                ]
            },
            {  
                "data":{  
                    "name":"Documents",
                    "size":"75kb",
                    "type":"Folder"
                },
                "children":[
                    {  
                        "data":{  
                            "name":"Work",
                            "size":"55kb",
                            "type":"Folder"
                        },
                        "children":[  
                            {  
                                "data":{  
                                    "name":"Expenses.doc",
                                    "size":"30kb",
                                    "type":"Document"
                                }
                            },
                            {  
                                "data":{  
                                    "name":"Resume.doc",
                                    "size":"25kb",
                                    "type":"Resume"
                                }
                            }
                        ]
                    },
                    {  
                        "data":{  
                            "name":"Home",
                            "size":"20kb",
                            "type":"Folder"
                        },
                        "children":[  
                            {  
                                "data":{  
                                    "name":"Invoices",
                                    "size":"20kb",
                                    "type":"Text"
                                }
                            }
                        ]
                    }
                ]
            },
            {  
                "data": {  
                    "name":"Downloads",
                    "size":"25mb",
                    "type":"Folder"
                },
                "children":[  
                    {  
                        "data": {  
                            "name":"Spanish",
                            "size":"10mb",
                            "type":"Folder"
                        },
                        "children":[  
                            {  
                                "data":{  
                                    "name":"tutorial-a1.txt",
                                    "size":"5mb",
                                    "type":"Text"
                                }
                            },
                            {  
                                "data":{  
                                    "name":"tutorial-a2.txt",
                                    "size":"5mb",
                                    "type":"Text"
                                }
                            }
                        ]
                    },
                    {  
                        "data":{  
                            "name":"Travel",
                            "size":"15mb",
                            "type":"Text"
                        },
                        "children":[  
                            {  
                                "data":{  
                                    "name":"Hotel.pdf",
                                    "size":"10mb",
                                    "type":"PDF"
                                }
                            },
                            {  
                                "data":{  
                                    "name":"Flight.pdf",
                                    "size":"5mb",
                                    "type":"PDF"
                                }
                            }
                        ]
                    }
                ]
            },
            {  
                "data": {  
                    "name":"Main",
                    "size":"50mb",
                    "type":"Folder"
                },
                "children":[  
                    {  
                        "data":{  
                            "name":"bin",
                            "size":"50kb",
                            "type":"Link"
                        }
                    },
                    {  
                        "data":{  
                            "name":"etc",
                            "size":"100kb",
                            "type":"Link"
                        }
                    },
                    {  
                        "data":{  
                            "name":"var",
                            "size":"100kb",
                            "type":"Link"
                        }
                    }
                ]
            },
            {  
                "data":{  
                    "name":"Other",
                    "size":"5mb",
                    "type":"Folder"
                },
                "children":[  
                    {  
                        "data":{  
                            "name":"todo.txt",
                            "size":"3mb",
                            "type":"Text"
                        }
                    },
                    {  
                        "data":{  
                            "name":"logo.png",
                            "size":"2mb",
                            "type":"Picture"
                        }
                    }
                ]
            },
            {  
                "data":{  
                    "name":"Pictures",
                    "size":"150kb",
                    "type":"Folder"
                },
                "children":[  
                    {  
                        "data":{  
                            "name":"barcelona.jpg",
                            "size":"90kb",
                            "type":"Picture"
                        }
                    },
                    {  
                        "data":{  
                            "name":"primeng.png",
                            "size":"30kb",
                            "type":"Picture"
                        }
                    },
                    {  
                        "data":{  
                            "name":"prime.jpg",
                            "size":"30kb",
                            "type":"Picture"
                        }
                    }
                ]
            },
            {  
                "data":{  
                    "name":"Videos",
                    "size":"1500mb",
                    "type":"Folder"
                },
                "children":[  
                    {  
                        "data":{  
                            "name":"primefaces.mkv",
                            "size":"1000mb",
                            "type":"Video"
                        }
                    },
                    {  
                        "data":{  
                            "name":"intro.avi",
                            "size":"500mb",
                            "type":"Video"
                        }
                    }
                ]
            }
        ]
    }
    
    getTreeTableNodes() {
        return Promise.resolve(this.getTreeTableNodesData());
    }

    getTreeNodes() {
        return Promise.resolve(this.getTreeNodesData());
    }

    getFiles() {
        return Promise.resolve(this.getTreeNodesData());
    }

    getLazyFiles() {
        return Promise.resolve(this.getLazyNodesData());
    }

    getFilesystem() {
        return Promise.resolve(this.getFileSystemNodesData());
    }
    
};