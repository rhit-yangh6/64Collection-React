import React, {useEffect, useState} from 'react';
import ReactECharts from 'echarts-for-react';
import {API_URL} from "../../config";
import {Empty} from "antd";
import Images from "../../images/CategoryIcons"

const axios = require('axios').default

const Statistics = () => {

  const [brandOptions, setBrandOptions] = useState(null);
  const [categoryOptions, setCategoryOptions] = useState(null);

  const fetchStats = async () => {
    try {
      const rsp = await axios.get(API_URL + `/general/stats`)
      // setBrandType(rsp.data.data)
      const brandCount = rsp.data.data.brandCount
      const categoryCount = rsp.data.data.categoryCount
      setBrandOptions({
        backgroundColor: "rgb(43, 51, 59)",
        graphic: [
          {
            type: "group",
            rotation: Math.PI / 4,
            bounding: "raw",
            right: 200,
            bottom: 100,
            z: 100,
            children: []
          },
          {
            type: "group",
            left: "0",
            top: "bottom",
            children: []
          }
        ],
        tooltip: {
          trigger: "item",
          formatter: "{a}<br/><strong>{b}</strong>: {c} types"
        },
        title: {
          text: "Car Brands",
          left: "center",
          top: 10,
          textStyle: {
            color: "#ccc"
          }
        },
        legend: {
          orient: 'vertical',
          left: 10,
          top: 5,
          data: Object.keys(brandCount),
          textStyle: {
            color: "#fff",
          }
        },
        series: [
          {
            name: 'Brand',
            type: 'pie',
            radius: ['0%', '60%'],
            top: 10,
            avoidLabelOverlap: false,
            label: {
              // show: true,
              // position: 'outside'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '30',
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: true
            },
            data: Object.keys(brandCount).map((b) => {
              return {value: brandCount[b], name: b}
            })
          }
        ]
      })
      setCategoryOptions({
        backgroundColor: "rgb(43, 51, 59)",
        graphic: [
          {
            type: "group",
            rotation: Math.PI / 4,
            bounding: "raw",
            right: 200,
            bottom: 100,
            z: 100,
            children: []
          },
          {
            type: "group",
            left: "0",
            top: "bottom",
            children: []
          }
        ],
        tooltip: {
          trigger: "item",
          formatter: "{a}<br/><strong>{b}</strong>: {c} types"
        },
        title: {
          text: "Car categories",
          left: "center",
          top: 10,
          textStyle: {
            color: "#ccc"
          }
        },
        legend: {
          orient: 'vertical',
          left: 10,
          top: 5,
          data: Object.keys(categoryCount),
          textStyle: {
            color: "#fff",
          }
        },
        series: [
          {
            name: 'Category',
            type: 'pie',
            radius: ['50%', '80%'],
            top: 10,
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'center',
              formatter: [
                '{{b}|}',
              ].join('\n'),

              rich: {
                "Cabriolet": {
                  backgroundColor: {
                    image: Images["Cabriolet"]
                  },
                  height: 80,
                  width: 80
                },
                "Concept": {
                  backgroundColor: {
                    image: Images["Concept"]
                  },
                  height: 80,
                  width: 80
                },
                "Exotic": {
                  backgroundColor: {
                    image: Images["Exotic"]
                  },
                  height: 80,
                  width: 80
                },
                "Hatchback": {
                  backgroundColor: {
                    image: Images["Hatchback"]
                  },
                  height: 80,
                  width: 80
                },
                "Limousine": {
                  backgroundColor: {
                    image: Images["Limousine"]
                  },
                  height: 80,
                  width: 80
                },
                "Luxury": {
                  backgroundColor: {
                    image: Images["Luxury"]
                  },
                  height: 80,
                  width: 80
                },
                "Microcar": {
                  backgroundColor: {
                    image: Images["Microcar"]
                  },
                  height: 80,
                  width: 80
                },
                "MiniTruck": {
                  backgroundColor: {
                    image: Images["MiniTruck"]
                  },
                  height: 80,
                  width: 80
                },
                "MPV": {
                  backgroundColor: {
                    image: Images["MPV"]
                  },
                  height: 80,
                  width: 80
                },
                "Pickup": {
                  backgroundColor: {
                    image: Images["Pickup"]
                  },
                  height: 80,
                  width: 80
                },
                "Racing": {
                  backgroundColor: {
                    image: Images["Racing"]
                  },
                  height: 80,
                  width: 80
                },
                "Sedan": {
                  backgroundColor: {
                    image: Images["Sedan"]
                  },
                  height: 80,
                  width: 80
                },
                "Sports": {
                  backgroundColor: {
                    image: Images["Sports"]
                  },
                  height: 80,
                  width: 80
                },
                "SUV": {
                  backgroundColor: {
                    image: Images["SUV"]
                  },
                  height: 80,
                  width: 80
                },
                "Truck": {
                  backgroundColor: {
                    image: Images["Truck"]
                  },
                  height: 80,
                  width: 80
                },
                "Unclassified": {
                  backgroundColor: {
                    image: Images["Unclassified"]
                  },
                  height: 80,
                  width: 80
                },
                "Van": {
                  backgroundColor: {
                    image: Images["Van"]
                  },
                  height: 80,
                  width: 80
                },
                "Wagon": {
                  backgroundColor: {
                    image: Images["Wagon"]
                  },
                  height: 80,
                  width: 80
                },
                "Coupe": {
                  backgroundColor: {
                    image: Images["Coupe"]
                  },
                  height: 80,
                  width: 80
                },
                "Roadster": {
                  backgroundColor: {
                    image: Images["Roadster"]
                  },
                  height: 80,
                  width: 80
                },
                "Muscle": {
                  backgroundColor: {
                    image: Images["Muscle"]
                  },
                  height: 80,
                  width: 80
                },
              },
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '30',
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: Object.keys(categoryCount).map((c) => {
              return {value: categoryCount[c], name: c}
            })
          }
        ]
      })
    } catch (err) {
      console.error(err)
      // setBrandType({})
    }
  }

  useEffect(() => {
    fetchStats().then();
  }, []);

  return (
    <div>
      {
        brandOptions ?
          <ReactECharts
            option={brandOptions}
            notMerge={true}
            lazyUpdate={true}
            theme={"theme_name"}
            // onChartReady={this.onChartReadyCallback}
            // onEvents={EventsDict}
            // opts={}
          /> : <Empty />
      }
      {
        categoryOptions ?
          <ReactECharts
            style={{marginTop: 40}}
            option={categoryOptions}
            notMerge={true}
            lazyUpdate={true}
            theme={"theme_name"}
            // onChartReady={this.onChartReadyCallback}
            // onEvents={EventsDict}
            // opts={}
          />
          : <Empty />
      }
    </div>
  );
}

export default Statistics;
