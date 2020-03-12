<template>
  <!-- <v-content> -->
  <v-container fluid fill-height>
    <v-layout justify-center>
      <v-flex>
        <template v-for="item in proposal_names">
          <v-hover v-slot:default="{ hover }" open-delay="0" :key="item.id">
            <v-card :elevation="hover ? 16 : 1" light style="margin: 5px">
              <v-card-title flat style="padding: 2px">
                <div style="width: 20%; margin-right: 1%">
                  <v-layout id="proposals" row justify-start>
                    <v-btn depressed text
                    :id = "item.id"
                    @click="propSelected(item.id)"
                    >{{ item.name }}</v-btn>
                  </v-layout>
                </div>
                <div style="width: 35%; margin-right:1%">
                  <v-layout id="topics" row justify-start>
                    <template v-for="(topic, index) in item.topics">
                      <v-btn depressed outlined
                      style="border-color: lightgray; margin-right: 2px" 
                      :id = "item.id + '_' + index"
                      :key="index" @click="topicButtonSelected(item.id, index)">{{ topic }}</v-btn>
                    </template>
                  </v-layout>
                </div>
                <div style="width: 4%; margin-right: 3%">
                  <v-row align="center" justify="center">
                    <v-select height="20px" :items="item.topics" @change="topicDDSelected"></v-select>
                  </v-row>
                </div>
                <div style="width: 36%">
                  <v-layout id="heatmapbox" row justify-start>
                    <template v-for="(i, index) in item.discourse">
                      <v-tooltip bottom :key="index">
                        <template v-slot:activator="{on}">
                          <v-btn
                            v-on="on"
                            depressed
                            tile
                            style="margin-left:1%; margin-right:1px; height:50px; min-width: 50px; width:50px; padding: 0px;"
                            :color="i.color"
                            @click="discourseBoxSelected(index)"
                          ></v-btn>
                        </template>
                        <span>{{ i.value }}</span>
                      </v-tooltip>
                    </template>
                  </v-layout>
                </div>
              </v-card-title>
            </v-card>
          </v-hover>
        </template>
      </v-flex>
    </v-layout>
  </v-container>
  <!-- </v-content> -->
</template>

<script>
export default {
  name: "OverView",

  data: () => ({
    blueSpectrum: ["#f6feff", "#f7fbff", "deebf7", "c6dbef", "9ecae1", "6baed6", "4292c6", "2171b5", "08519c", "08306b"],
    proposal_names: [
      {
        id: "1",
        name: "Proposal_1",
        topics: ["Topic_1", "Topic_2", "Topic_3", "Topic_4", "Topic_5"],
        discourse: [
          {
            value: 12,
            color: "red"
          },
          {
            value: 7,
            color: "blue"
          },
          {
            value: 5,
            color: "green"
          },
          {
            value: 9,
            color: "yellow"
          },
          {
            value: 7,
            color: "black"
          },
          {
            value: 3,
            color: "purple"
          },
          {
            value: 2,
            color: "white"
          },
          {
            value: 90,
            color: "brown"
          },
          {
            value: 2,
            color: "white"
          },
          {
            value: 90,
            color: "brown"
          }
        ]
      },
      {
        id: "2",
        name: "Proposal_2",
        topics: ["Topic_1", "Topic_2"],
        discourse: [
          {
            value: 12,
            color: "red"
          },
          {
            value: 7,
            color: "blue"
          },
          {
            value: 5,
            color: "green"
          },
          {
            value: 9,
            color: "yellow"
          },
          {
            value: 7,
            color: "black"
          },
          {
            value: 3,
            color: "purple"
          },
          {
            value: 2,
            color: "white"
          },
          {
            value: 90,
            color: "brown"
          },
          {
            value: 2,
            color: "white"
          },
          {
            value: 90,
            color: "brown"
          }
        ]
      },
      {
        id: "3",
        name: "Proposal_3",
        topics: ["Topic_1", "Topic_2", "Topic_3"],
        discourse: [
          {
            value: 12,
            color: "red"
          },
          {
            value: 7,
            color: "blue"
          },
          {
            value: 5,
            color: "green"
          },
          {
            value: 9,
            color: "yellow"
          },
          {
            value: 7,
            color: "black"
          },
          {
            value: 3,
            color: "purple"
          },
          {
            value: 2,
            color: "white"
          },
          {
            value: 90,
            color: "brown"
          },
          {
            value: 2,
            color: "white"
          },
          {
            value: 90,
            color: "brown"
          }
        ]
      },
      {
        id: "4",
        name: "Proposal_4",
        topics: ["Topic_1"],
        discourse: [
          {
            value: 12,
            color: "red"
          },
          {
            value: 7,
            color: "blue"
          },
          {
            value: 5,
            color: "green"
          },
          {
            value: 9,
            color: "yellow"
          },
          {
            value: 7,
            color: "black"
          },
          {
            value: 3,
            color: "purple"
          },
          {
            value: 2,
            color: "white"
          },
          {
            value: 90,
            color: "brown"
          },
          {
            value: 2,
            color: "white"
          },
          {
            value: 90,
            color: "brown"
          }
        ]
      },
      {
        id: "5",
        name: "Proposal_5",
        topics: ["Topic_1", "Topic_2", "Topic_3"],
        discourse: [
          {
            value: 12,
            color: "red"
          },
          {
            value: 7,
            color: "blue"
          },
          {
            value: 5,
            color: "green"
          },
          {
            value: 9,
            color: "yellow"
          },
          {
            value: 7,
            color: "black"
          },
          {
            value: 3,
            color: "purple"
          },
          {
            value: 2,
            color: "white"
          },
          {
            value: 90,
            color: "brown"
          },
          {
            value: 2,
            color: "white"
          },
          {
            value: 90,
            color: "brown"
          }
        ]
      }
    ]
  }),

  methods: {
    propSelected(prop_id){
      console.log(prop_id);
    },
    topicButtonSelected(prop_id, top_id) {
      console.log(prop_id + "_" + top_id);
    },
    topicDDSelected(value) {
      console.log(value);
    },
    discourseBoxSelected(discourse){
      console.log(discourse)
    }
  }
};
</script>
