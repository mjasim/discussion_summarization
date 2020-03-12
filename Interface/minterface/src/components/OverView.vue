<template>
  <!-- <v-content> -->
    <v-container fluid fill-height>
      <v-layout justify-center>
        <v-flex>
          <template v-for="item in proposal_names">
            <v-hover v-slot:default="{ hover }" open-delay="0" :key="item.id">
              <v-card :elevation="hover ? 16 : 1" light style="margin: 5px">
                <v-card-title flat style="padding: 2px">
                  <div style="width: 20%">
                    <v-layout id="proposals" row justify-start style="width: 15vw">
                      <v-btn depressed text>{{ item.name }}</v-btn>
                    </v-layout>
                  </div>
                  <div style="width: 40%">
                    <v-layout id="topics" row justify-start>
                      <template v-for="(topic, index) in item.topics">
                        <v-btn depressed text :key="index">{{ topic }}</v-btn>
                      </template>
                    </v-layout>
                  </div>
                  <!-- <div style="width: 10%">
                    <v-layout id="topic-dd" row justify-centert>
                        <v-btn depressed fab small=""></v-btn>
                    </v-layout>
                  </div> -->
                  <div style="width: 30%">
                    <v-layout id="heatmapbox" row justify-start>
                      <template v-for="(i, index) in item.discourse">
                        <v-tooltip bottom :key="index">
                          <template v-slot:activator="{on}">
                            <v-btn
                              v-on="on"
                              depressed
                              tile
                              style="margin-left:1px; margin-right:1px; height:50px; min-width: 50px; width:50px; padding: 0px;"
                              :color="i.color"
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
    proposal_names: [
      {
        id: "1",
        name: "Proposal_1",
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
          }
        ]
      }
    ]
  })
};
</script>
