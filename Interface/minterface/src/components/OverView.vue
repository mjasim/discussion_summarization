<template>
  <v-container fluid fill-height>
    <v-layout justify-center>
      <v-flex>
        <v-layout>
          <div style="width: 15%; padding-left: 1.5%">
            <b>Proposals</b>
          </div>
          <div style="width: 45%; padding-left:6%">
            <b>Topics</b>
          </div>
          <div style="width: 3%; padding-left: 13%">
            <!-- <b>#</b> -->
          </div>
          <div style="width: 36%; padding-left: 18%">
            <b>Discourse</b>
          </div>
        </v-layout>
        <v-layout>
          <div style="width: 18%; padding-left: 1.5%"></div>
          <div style="width: 45%; padding-left: 1.5%"></div>
          <div style="width: 3%; margin-right: 1%"></div>
          <div style="width: 36%; padding-left: 6%">
            <v-layout id="heatmapHeader" row justify-start>
              <template v-for="(i, index) in discourses">
                <span
                  :key="index"
                  style="width: 40px; height: 30px; margin-top:10%; margin-right: 1.25%; -webkit-transform: rotate(-55deg); -moz-transform: rotate(-55deg); font-size: 12px"
                >{{i}}</span>
              </template>
            </v-layout>
          </div>
        </v-layout>
        <template v-for="item in overview_data">
          <v-hover v-slot:default="{ hover }" open-delay="0" :key="item.discussion_id">
            <v-card :elevation="hover ? 16 : 1" light style="margin: 5px">
              <v-card-title flat style="padding: 2px">
                <div style="width: 18%; margin-right: 1%">
                  <v-layout id="proposals" justify-start>
                    <v-btn
                      depressed
                      text
                      :id="item.discussion_id"
                      @click="propSelected(item.discussion_name)"
                      text-truncate
                    >
                      <span
                        style="max-width: 200px; white-space:nowrap; overflow:hidden; text-overflow: ellipsis"
                      >{{ item.discussion_name }}</span>
                    </v-btn>
                  </v-layout>
                </div>
                <div style="width: 45%; margin-right:1%">
                  <v-layout id="topics" row justify-start>
                    <template v-for="(topic, index) in item.topics">
                      <v-btn
                        depressed
                        outlined
                        small
                        style="border-color: lightgray; margin: 1px"
                        :id="item.discussion_id + '_' + index"
                        :key="index"
                        @click="topicButtonSelected(item.discussion_id, index)"
                      >{{ topic.topic_phrase }}</v-btn>
                    </template>
                  </v-layout>
                </div>
                <div style="width: 3%; margin-right: 2%">
                  <template>
                    <div class="text-center">
                      <v-menu offset-y>
                        <template v-slot:activator="{ on }">
                          <v-btn v-on="on" fab depressed x-small>
                            <v-icon>arrow_drop_down</v-icon>
                          </v-btn>
                          <!-- <v-btn v-on="on" fab x-small depressed>{{item.number_of_comments}}</v-btn> -->
                        </template>
                        <v-list>
                          <v-list-item
                            v-for="(ddTopics, index) in item.topics"
                            :key="index"
                            @click="topicDDSelected(item.discussion_id, index)"
                          >
                            <v-list-item-title>{{ ddTopics.topic_phrase }}</v-list-item-title>
                          </v-list-item>
                        </v-list>
                      </v-menu>
                    </div>
                  </template>
                </div>
                <div style="width: 30%">
                  <v-layout id="heatmapbox" row justify-start>
                    <template v-for="(i, index) in item.discourses">
                      <v-tooltip bottom :key="index">
                        <template v-slot:activator="{on}">
                          <v-btn
                            v-on="on"
                            depressed
                            tile
                            style="margin-left:1%; margin-right:1px; height:40px; min-width: 40px; width:40px; padding: 0px;"
                            :color="i.color"
                            @click="discourseBoxSelected(index)"
                          ></v-btn>
                        </template>
                        <span>{{ i.count }}</span>
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
</template>

<script>
import axios from "axios";

export default {
  name: "OverView",

  data: () => ({
    discourses: [
      "Question",
      "Answer",
      "Announcement",
      "Elaboration",
      "Appreciation",
      "Agreement",
      "Disagreement",
      "Negative_reaction",
      "Humor",
      "Other"
    ],
    blueSpectrum: [
      "#f6feff",
      "#f7fbff",
      "#deebf7",
      "#c6dbef",
      "#9ecae1",
      "#6baed6",
      "#4292c6",
      "#2171b5",
      "#08519c",
      "#08306b"
    ],
    overview_data: [],
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
    fetchData() {
      axios.get("/" + "mat_data_cc.json").then(response => {
        console.log(response);
        this.overview_data = response.data;
      });
    },
    propSelected(prop_name) {
      console.log(prop_name);
      localStorage.setItem("proposal", prop_name)
      this.$router.push("/details").catch(error => {
        if (error.name != "NavigationDuplicated") {
          throw error;
        }
      });
    },
    topicButtonSelected(prop_id, top_id) {
      console.log(prop_id + "_" + top_id);
    },
    topicDDSelected(prop_id, top_id) {
      console.log(prop_id + "_" + top_id);
    },
    discourseBoxSelected(discourse) {
      console.log(discourse);
    }
  },
  created() {
    this.fetchData();
  }
};
</script>

<style scoped>
</style>